"use client";
import { m, useMotionTemplate, useMotionValue } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import type { MouseEvent } from "react";

type BlogItemProps<T extends string> = {
  description: string;
  date: string;
  href: Route<T>;
  title: string;
};

export const BlogItem = <T extends string>({
  href,
  title,
  description,
  date,
}: BlogItemProps<T>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <Link href={href} aria-label={title}>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: okay */}
      <div
        className="group relative h-full rounded-xl border-2 border-border bg-background p-4 transition-opacity active:opacity-60 md:p-10"
        onMouseMove={handleMouseMove}
      >
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(115, 115, 115, 0.15),
              transparent 80%
            )
          `,
          }}
        />

        <div>
          <span className="text-neutral-400 text-xs">{date}</span>
          <p className="my-2 line-clamp-2 font-bold text-xl md:text-2xl">
            {title}
          </p>
          <p className="line-clamp-2 text-neutral-300 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};
