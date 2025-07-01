import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const data = [
  {
    name: "Our Impact",
    image: "/impact-icon.svg",
    description:
      "Under the Patent Gym™ initiative, we provide specialized IP services that uncover hidden patent opportunities, enhance corporate valuation, and support long-term growth. We also partner with clients to co-develop AI and advanced tech products that align with their innovation goals.",
  },
  {
    name: "Our Ecosystem",
    image: "/ecosystem-icon.svg",
    description:
      "Internally, we build proprietary, cutting-edge technologies that—once mature—are spun off as new businesses (SPVs), contributing to a self-sustaining innovation ecosystem. We further invest in nurturing emerging talent, empowering students and early-stage founders to build ventures that will shape the future of technology and humanity.",
  },
  {
    name: "Mission",
    image: "/mission-icon.svg",
    description:
      "Our mission is to create a world where innovation is accessible, purposeful, and human-centered. Through a unified ecosystem, we bring together patents, products, people, and purpose.",
  },
];

 export const InnovationCard = ({
  item,
  index,
}: {
  item: (typeof data)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  // Raw motion values
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Spring animations
  const rotateX = useSpring(rawRotateX, {
    damping: 10,
    stiffness: 300,
    mass: 0.5,
  });
  const rotateY = useSpring(rawRotateY, {
    damping: 10,
    stiffness: 300,
    mass: 0.5,
  });
  const scale = useSpring(1, {
    damping: 15,
    stiffness: 250,
    mass: 0.5,
  });

  // Derived shadow based on tilt
  const boxShadow = useTransform(rotateX, (rx: number) => {
    return `0px ${rx * 1.2}px 30px rgba(0, 0, 0, 0.25)`;
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1], // smooth ease
          delay: index * 0.2,
        },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls, index]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotateAmt = 15;
    rawRotateX.set(-(offsetY / (rect.height / 2)) * rotateAmt);
    rawRotateY.set((offsetX / (rect.width / 2)) * rotateAmt);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        boxShadow,
      }}
      className="w-full md:w-full lg:w-[31%] flex flex-col bg-gradient-to-b from-[#0E0A0F] to-[#211824] p-6 rounded-lg will-change-transform transition-transform duration-200"
    >
      <div className="flex items-center mb-4">
        <div className="w-[32px] h-[32px] sm:w-[65px] sm:h-[65px] bg-[#221924] rounded flex items-center justify-center">
          <img
            src={item.image}
            className="w-[20px] h-[20px] sm:w-10 sm:h-10"
            alt={`${item.name} icon`}
          />
        </div>
        <p className="text-[20px] sm:text-[28px] ml-4 text-white font-normal">
          {item.name}
        </p>
      </div>
      <div>
        <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-justify text-[#F8E9FE] font-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};



const Innovation = () => {
  return (
    <div
      id="pillars"
      className="bg-[url('./grig-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center"
    >
            <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="p-2 w-fit mx-auto flex justify-center hover:scale-105 transform duration-300 rounded-lg border border-[#9b2f9f] text-white text-[10px] sm:text-[14px] lg:text-[16px] bg-[#9b2f9f]/20 transition-all duration-300 hover:bg-[#9b2f9f]/20 hover:shadow-[0_0_10px_#9b2f9f]">
         Our Vision
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          Empowering Humanity through Innovation and Technology (M-HIT)
        </p>
      </motion.div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto max-w-4xl">
          ImagineX is a True Human Enterprise driven by the mission of
          Empowering Humanity through Innovation and Technology (M-HIT). We
          transform ideas into patents, patents into products, and innovation
          into solutions that serve humanity.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex justify-between w-full flex-wrap gap-6 mt-6">
        {data.map((item, index) => (
          <InnovationCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Innovation;
