"use client";
import type { Route } from "next";
import type { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface BlogItemProps<T extends string> {
  description: string;
  date: string;
  href: Route<T>;
  title: string;
}

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
    <Link href={href}>
      <div
        className="group relative rounded-xl border border-white/10 bg-gray-900 p-4 md:p-10 shadow-2xl active:opacity-60 transition-all"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        />

        <div>
          <span className="text-xs text-gray-500">{date}</span>
          <h4 className="my-2 text-xl md:text-2xl font-bold line-clamp-2">
            {title}
          </h4>
          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};
