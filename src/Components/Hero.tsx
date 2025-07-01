import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Particles from "../blocks/Backgrounds/Particles/Particles";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  console.log(position)
  const scrollToElementByIdWithOffset = (id: string, offset = 100) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="home"
      className="relative overflow-hidden w-full h-[90vh]  flex items-center justify-center"
    >
      {/* ✅ Background: Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={300}
          particleColors={["#ffffff", "#AF2ECB", "#9b2f9f"]}
          moveParticlesOnHover
          particleHoverFactor={1.2}
          alphaParticles
          particleBaseSize={100}
          sizeRandomness={0.8}
          cameraDistance={25}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      

      {/* ✅ Foreground content with reduced padding */}
      <div className="relative z-20 px-6 sm:px-[110px] lg:px-[220px] py-[40px] sm:py-[60px] lg:py-[80px] text-center flex flex-col gap-5 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-semibold text-[32px] sm:text-[48px] lg:text-[72px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
            Welcome to<br /> THE ImagineX
          </p>
          <p className="font-medium text-[8px] sm:text-[12px] lg:text-[16px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
            <span className="underline decoration-white underline-offset-[4px]">T</span>RUE{" "}
            <span className="underline decoration-white underline-offset-[4px]">H</span>UMAN{" "}
            <span className="underline decoration-white underline-offset-[4px]">E</span>NTERPRISE
            <span> - A Patent Intelligence & Innovation company</span>
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p className="font-medium text-[12px] sm:text-[16px] lg:text-[20px] text-[#F8E9FE] max-w-[800px] mx-auto">
            Empowering innovation through AI-driven patent analytics, strategic IP insights, and future-ready technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToElementByIdWithOffset("pillars")}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-[6px] font-medium text-[12px] hover:scale-105 transform cursor-pointer duration-400 sm:text-[14px] lg:text-[16px] alex px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 bg-[#AF2ECB] shadow-[inset_0_0_20px_-1px_#F1D2FC] hover:brightness-110 transition"
          >
            <p>Learn More</p>
            <img src="/top-icon.png" alt="top" className="h-2 sm:h-3 lg:h-3" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
