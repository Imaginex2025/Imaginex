"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARD_DATA = [
  {
    id: 1,
    imgUrl: "BgQ2.png",
    title: "Qualcomm",
    content: "Generates 60–70% of its profits from patent licensing and royalty fees.",
  },
  {
    id: 2,
    imgUrl: "/Dolby.png",
    title: "Dolby Laboratories",
    content: "Earns ~90% of revenue from licensing audio and visual technologies.",
  },
  {
    id: 3,
    imgUrl: "Arm.jpeg",
    title: "ARM Holdings",
    content: "Over 90% of revenue comes from licensing its patented chip architectures.",
  },
];

const AutoChangingBackground: React.FC = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoChange = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % CARD_DATA.length);
    }, 3000);
  };

  const stopAutoChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoChange();
    return stopAutoChange;
  }, []);

  const { imgUrl, title, content } = CARD_DATA[index];

  return (
    <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-10 md:px-80 py-[30px] sm:py-[100px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center"
      initial={{ opacity: 0 }}
      id="about"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          The Power of Patents
        </p>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] mb-2 md:mb-0 lg:text-[16px] text-[#F8E9FE] mx-auto">
          How industry leaders harness IP for long-term success - including but not limited to the below *
        </p>
      </motion.div>

      {/* Card */}
      <div
        className="relative w-full h-[300px] cursor-pointer rounded-lg overflow-hidden text-white"
        onMouseEnter={stopAutoChange}
        onMouseLeave={startAutoChange}
      >
          <div className="absolute top-2 right-3 sm:block hidden z-20  text-zinc-300 text-xs px-2 py-1 rounded-md">
    Hover to read
  </div>
        {/* Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={imgUrl}
            className="absolute inset-0  bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-8 py-6 sm:py-10 text-center">
          {/* Title at top */}
          <motion.h1
            key={title}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            {title}
          </motion.h1>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Description at bottom */}
          <motion.p
            key={content}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto pb-4"
          >
            {content}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AutoChangingBackground;
