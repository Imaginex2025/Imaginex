import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

export const textVariants = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

export const barVariants = {
  hidden: { scaleY: 0, transition: { duration: 0.3, ease: "easeOut" } },
  visible: { scaleY: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const TechStacksScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const progressMotion = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(progressMotion, "change", (v) => {
    setProgress(Math.min(v, 300)); // Clamp to 400
  });

  useEffect(() => {
    progressMotion.on("change", (value) => {
      console.log("Scroll Progress:", value);
    });
  }, [progressMotion]);

  const currentImage = useMemo(() => {
    if (progress <= 100) return "/Qualcom.jpg";
    if (progress > 100 && progress <= 200) return "/Dolby.png";
    return "/Arm.jpeg";
  }, [progress]);

  return (
    <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="training"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto max-w-3xl">
          How industry leaders harness IP for long-term success - including but not limited to the below
        </p>
      </motion.div>

      {/* Scrollable Space with 100px buffer at bottom */}
      <div >
        <div ref={scrollRef} className="scroll-space h-[3000px] relative">
          <div className="outer-container-for-scroller w-full mx-auto max-w-[1290px] px-4 md:px-6 lg:px-8 sticky top-18 md:top-32 z-50">
            <div className="floating-container flex flex-col md:flex-row gap-8 w-full">
              {/* Left Side */}
              <div className="left-side flex flex-col mt-10 flex-5 gap-4 md:gap-8 w-full">
                <TechStack
                  loadingPercentage={progress}
                  isCondensed={progress <= 100}
                  title="Qualcomm"
                  subtitle="Around 60–70% of its profits come from patent licensing and royalty fees."
                  barColor="751169"
                  barBgColor="CF9FFF"
                />
                <TechStack
                  loadingPercentage={progress % 100}
                  isCondensed={progress > 100 && progress <= 200}
                  title="Dolby Laboratories"
                  subtitle="Earns about 90% of its revenue from licensing its patented audio and visual technologies."
                  barColor="751169"
                  barBgColor="CF9FFF"
                />
                <TechStack
                  loadingPercentage={progress % 200}
                  isCondensed={progress > 200 && progress <= 300}
                  title="ARM Holdings"
                  subtitle="Generates over 90% of its revenue from licensing its patented chip architectures."
                  barColor="751169"
                  barBgColor="CF9FFF"
                />
              </div>

              {/* Right Side (Image Viewer) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="right-side-image-viewer w-full flex-4 flex"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt="Tech Stack Preview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-[calc(100vh/3)] md:h-[calc(100vh/1.5)] self-center rounded-3xl object-cover object-center px-1.5"
                  />
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStacksScroller;

// --------------------- TechStack Component -------------------------

interface TechStackProps {
  title: string;
  subtitle: string;
  barColor: string;
  barBgColor: string;
  isCondensed: boolean;
  loadingPercentage: number;
}

const TechStack: React.FC<TechStackProps> = ({
  title,
  subtitle,
  barColor,
  barBgColor,
  isCondensed,
  loadingPercentage,
}) => {
  const titleComp = useMemo(
    () => (
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white text-[clamp(18px,2vw,24px)] text-start w-full font-bold"
      >
        {title}
      </motion.h3>
    ),
    [title]
  );

  const subtitleComp = useMemo(
    () => (
      <motion.h4
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white text-[clamp(16px,3vw,24px)] text-start font-regular"
      >
        {subtitle}
      </motion.h4>
    ),
    [subtitle]
  );

  if (!isCondensed) {
    return (
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white/50 text-[clamp(12px,2vw,24px)] text-start w-full font-regular"
      >
        {title}
      </motion.h3>
    );
  }

  return (
    <motion.div className="tech-stack-container flex flex-row gap-3 md:gap-6 w-full">
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="loading-bar-container w-1 md:w-2 min-h-full rounded-2xl overflow-clip"
        style={{ backgroundColor: `#${barBgColor}` }}
      >
        <div
          className="loading-bar w-2"
          style={{
            backgroundColor: `#${barColor}`,
            height: `${loadingPercentage}%`,
            transition: "height 0.5s ease",
          }}
        >
          <h1 className="hidden">dummy-text-which-is-not-visible</h1>
        </div>
      </motion.div>

      <div className="details-container flex flex-col gap-3 items-center justify-start">
        {titleComp}
        {subtitleComp}
      </div>
    </motion.div>
  );
};
