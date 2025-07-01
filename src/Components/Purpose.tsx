import { motion, useAnimation, easeOut, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "Patent Tech Consulting",
    description:
      "End-to-end, AI-driven IP discovery, drafting, valuation, monetization, and capability building.",
    link:"patent"
  },
  {
    name: "Innovation & Product Development",
    description:
      "Translating patented ideas and emerging concepts into production-ready, scalable solutions.",
       link:"inovators"
  },
  {
    name: "Technology Training & Enablement",
    description:
      "Future-proof training in AI, product engineering, and IP literacy for students, professionals, and CXOs.",
      link:"training"
  },
];

const Purpose = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
    function scrollToElementByIdWithOffset(id: any, offset = 100) {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center">
      {/* Heading Animation */}
            <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
  <p className="p-2 w-fit mx-auto flex justify-center hover:scale-105 transform duration-300 rounded-lg border border-[#9b2f9f] text-white text-[10px] sm:text-[14px] lg:text-[16px] bg-[#9b2f9f]/20 transition-all duration-300 hover:bg-[#9b2f9f]/20 hover:shadow-[0_0_10px_#9b2f9f]">
    Our Core Pillars
  </p>
  </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          Driving Innovation with Purpose
        </p>
      </motion.div>

      {/* Subheading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto max-w-3xl">
          Discover the four pillars that define THE ImagineX’s mission to empower humanity through innovation and technology.
        </p>
      </motion.div>

      {/* Cards with Spotlight Effect */}
      <motion.div
        ref={containerRef}
        className="flex flex-wrap flex-row gap-6 justify-center items-stretch w-full"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {data.map((item, index) => {
          const [position, setPosition] = useState({ x: 0, y: 0 });
          const [opacity, setOpacity] = useState(0);
          const cardRef = useRef<HTMLDivElement | null>(null);

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setPosition({ x, y });
          };

          const handleMouseEnter = () => setOpacity(0.4);
          const handleMouseLeave = () => setOpacity(0);

          return (
            <motion.div
              key={index}
              ref={cardRef}
              onClick={() => scrollToElementByIdWithOffset(item.link)}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative flex flex-col gap-2 px-5 py-6 md:px-10 md:py-12 bg-gradient-to-b from-[#0E0A0F] to-[#211824] rounded-lg overflow-hidden w-full md:w-[48%] ${
                index === 2 ? "md:mx-auto" : ""
              }`}
              variants={cardVariants}
            >
              {/* Spotlight Layer */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
                style={{
                  opacity,
                  background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 80%)`,
                }}
              />

              {/* Card Content */}
              <p className="text-[14px] md:text-[28px] text-start text-white">{item.name}</p>
              <p className="text-[10px] md:text-[16px] text-start text-white/80">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Purpose;
