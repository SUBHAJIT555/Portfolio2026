"use client";

import type { Transition } from "motion/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { type ComponentPropsWithoutRef, useId } from "react";

import { metalClickSound } from "@/lib/metal-click";
import { playSound } from "@/lib/sound-engine";
import { cn } from "@/lib/utils";

const transition: Transition = {
  type: "spring",
  mass: 0.45,
  damping: 18,
  stiffness: 220,
};

const MARK_PATH =
  "M 187.5 218.75 L 31.25 218.75 L 31.25 187.5 L 0 187.5 L 0 156.25 L 62.5 156.25 L 62.5 187.5 L 156.25 187.5 L 156.25 125 L 31.25 125 L 31.25 93.75 L 0 93.75 L 0 31.25 L 31.25 31.25 L 31.25 0 L 187.5 0 L 187.5 31.25 L 218.75 31.25 L 218.75 62.5 L 156.25 62.5 L 156.25 31.25 L 62.5 31.25 L 62.5 93.75 L 187.5 93.75 L 187.5 125 L 218.75 125 L 218.75 187.5 L 187.5 187.5 L 187.5 218.75 Z M 406.25 218.75 L 250 218.75 L 250 0 L 406.25 0 L 406.25 31.25 L 437.5 31.25 L 437.5 62.5 L 468.75 62.5 L 468.75 156.25 L 437.5 156.25 L 437.5 187.5 L 406.25 187.5 L 406.25 218.75 Z M 312.5 31.25 L 312.5 187.5 L 375 187.5 L 375 156.25 L 406.25 156.25 L 406.25 62.5 L 375 62.5 L 375 31.25 L 312.5 31.25 Z";

type SpotlightLogoProps = ComponentPropsWithoutRef<typeof motion.svg>;

export function SpotlightLogo({ className, ...props }: SpotlightLogoProps) {
  const shouldReduceMotion = useReducedMotion();
  const id = useId();
  const gradientId = `spotlight-logo-radial-gradient-${id}`;

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.45);

  const cx = useSpring(useTransform(pointerX, [0, 1], [0, 512]), {
    stiffness: 260,
    damping: 28,
    mass: 0.12,
  });
  const cy = useSpring(useTransform(pointerY, [0, 1], [0, 256]), {
    stiffness: 260,
    damping: 28,
    mass: 0.12,
  });

  return (
    <motion.svg
      className={cn("h-auto w-full touch-manipulation", className)}
      viewBox="0 0 512 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="rest"
      whileTap={shouldReduceMotion ? undefined : "pressed"}
      onTap={() => {
        void playSound(metalClickSound.dataUri);
      }}
      onPointerMove={(event) => {
        if (shouldReduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.45);
      }}
      {...props}
    >
      <defs>
        <motion.radialGradient
          id={gradientId}
          cx={cx}
          cy={cy}
          r="170"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="white" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      <motion.g
        variants={{
          rest: { scale: 1, y: 0 },
          pressed: { scale: 0.97, y: 10 },
        }}
        transition={transition}
        style={{ transformOrigin: "50% 50%" }}
      >
        <path d={MARK_PATH} fill="currentColor" />
        <path d={MARK_PATH} fill={`url(#${gradientId})`} />
        <path
          d={MARK_PATH}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="3"
        />
      </motion.g>
    </motion.svg>
  );
}
