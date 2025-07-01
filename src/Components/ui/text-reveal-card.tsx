"use client";
import React, { useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => setIsRevealed((prev) => !prev);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className={cn(
        "bg-gradient-to-b from-[#0E0A0F] to-[#211824] border text-white border-white/[0.08] rounded-lg p-8 py-0 relative overflow-hidden cursor-pointer",
        className
      )}
    >
      {children}

      <div className="h-40 relative flex items-center overflow-hidden">
        {/* Reveal Text */}
        <motion.div
          style={{ width: "100%" }}
          animate={{
            opacity: isHovered || isRevealed ? 1 : 0,
            clipPath: isHovered || isRevealed
              ? "inset(0 0% 0 0)"
              : "inset(0 100% 0 0)",
          }}
          transition={{ duration: 0.4 }}
          className="absolute z-20 bg-gradient-to-b from-[#0E0A0F] to-[#211824] flex items-center justify-center"
        >
          <p className="text-base sm:text-sm text-white">{revealText}</p>
        </motion.div>

        {/* Base Text */}
        <div className="overflow-hidden flex justify-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] w-full">
          <p className="text-base sm:text-lg py-10 font-bold text-white">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={twMerge("text-white text-lg mb-2", className)}>{children}</h2>
);

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
);

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
