"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const directionFrames = [
  "right",
  "023",
  "down-right",
  "068",
  "down",
  "113",
  "down-left",
  "158",
  "left",
  "203",
  "up-left",
  "248",
  "up",
  "293",
  "up-right",
  "338",
] as const;

type Frame = "center" | (typeof directionFrames)[number];

const canvasSize = 192;
const segmentSize = (Math.PI * 2) / directionFrames.length;

const loadFrame = async (frame: Frame, theme: "light" | "dark") => {
  const image = new window.Image();
  const themeDirectory = theme === "dark" ? "dark/" : "";
  image.src = `/portraits/${themeDirectory}prince-${frame}.webp`;
  await image.decode();
  return [frame, image] as const;
};

export const CursorPortrait = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const precisePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !context || !resolvedTheme) {
      return;
    }

    canvas.style.opacity = "0";
    canvas.style.transform = "none";

    if (!precisePointer.matches || reducedMotion.matches) return;

    const portraitTheme = resolvedTheme === "dark" ? "dark" : "light";
    let isActive = true;
    let animationFrame = 0;
    let hasPointerPosition = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let bounds = canvas.getBoundingClientRect();
    let frameImages = new Map<Frame, HTMLImageElement>();
    let currentFrame: Frame | null = null;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const drawFrame = (frame: Frame) => {
      const image = frameImages.get(frame);
      if (!image || frame === currentFrame) return;

      context.clearRect(0, 0, canvasSize, canvasSize);
      context.drawImage(image, 0, 0, canvasSize, canvasSize);
      canvas.dataset.frame = frame;
      currentFrame = frame;
    };

    const drawAt = (pointerX: number, pointerY: number) => {
      const deltaX = pointerX - (bounds.left + bounds.width / 2);
      const deltaY = pointerY - (bounds.top + bounds.height / 2);
      const shiftX = Math.max(-1, Math.min(1, deltaX / bounds.width)) * 1.25;
      const shiftY = Math.max(-1, Math.min(1, deltaY / bounds.height)) * 1.25;

      canvas.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0) scale(1.025)`;

      if (Math.hypot(deltaX, deltaY) < bounds.width * 0.35) {
        drawFrame("center");
        return;
      }

      const normalizedAngle =
        (Math.atan2(deltaY, deltaX) + Math.PI * 2) % (Math.PI * 2);
      const frameIndex =
        Math.round(normalizedAngle / segmentSize) % directionFrames.length;
      drawFrame(directionFrames[frameIndex]);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.55;
      currentY += (targetY - currentY) * 0.55;
      drawAt(currentX, currentY);

      if (Math.hypot(targetX - currentX, targetY - currentY) > 0.75) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        currentX = targetX;
        currentY = targetY;
        drawAt(currentX, currentY);
        animationFrame = 0;
      }
    };

    const startAnimation = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!hasPointerPosition) {
        currentX = bounds.left + bounds.width / 2;
        currentY = bounds.top + bounds.height / 2;
        hasPointerPosition = true;
      }

      targetX = event.clientX;
      targetY = event.clientY;
      startAnimation();
    };

    const handlePointerLeave = () => {
      targetX = bounds.left + bounds.width / 2;
      targetY = bounds.top + bounds.height / 2;
      startAnimation();
    };

    const updateBounds = () => {
      bounds = canvas.getBoundingClientRect();
    };

    const resizeObserver = new ResizeObserver(updateBounds);

    const initialize = async () => {
      const frames: Frame[] = ["center", ...directionFrames];
      const loadedFrames = await Promise.all(
        frames.map((frame) => loadFrame(frame, portraitTheme)),
      );

      if (!isActive) return;

      frameImages = new Map(loadedFrames);
      drawFrame("center");
      canvas.style.opacity = "1";

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("resize", updateBounds, { passive: true });
      window.addEventListener("scroll", updateBounds, { passive: true });
      resizeObserver.observe(canvas);
      document.documentElement.addEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };

    void initialize();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [resolvedTheme]);

  return (
    <div
      role="img"
      aria-label="Prince Carlo Juguilon looking toward your cursor"
      className="relative size-24 overflow-hidden rounded-full bg-neutral-700 ring-1 ring-white/10"
    >
      <Image
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="96px"
        src="/portraits/prince-center.webp"
        className="object-cover dark:hidden"
      />
      <Image
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="96px"
        src="/portraits/dark/prince-center.webp"
        className="hidden object-cover dark:block"
      />
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="absolute inset-0 size-full opacity-0 will-change-transform motion-reduce:hidden"
      />
    </div>
  );
};
