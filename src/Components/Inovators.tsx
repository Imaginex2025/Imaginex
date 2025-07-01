import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Component } from "./ui/Comp";

const data = [
  {
    title: <p>Extended Patent Seeding <br></br>Development</p>,
    img: "/impact-icon.svg",
    p: <p>From 'Art of the Possible' POCs to <br></br> full-scale implementation.</p>,
  },
  {
    title: "AI & IT Services",
    img: "/ecosystem-icon.svg",
    p: <p>Covering Gen AI, full-stack development,<br></br> cloud, big data, and emerging technologies.</p>,
  },
];

const Innovators = () => {
  // Heading animation
  const headingControls = useAnimation();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { amount: 0.3 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: -20 });
    }
  }, [headingInView, headingControls]);

  // Cards animation
  const cardsControls = useAnimation();
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { amount: 0.3 });

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start({ opacity: 1, y: 0 });
    } else {
      cardsControls.start({ opacity: 0, y: 40 });
    }
  }, [cardsInView, cardsControls]);

  return (
    <div  id="inovators" className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center">
      
      {/* Heading Animation */}
            <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="p-2 w-fit mx-auto flex justify-center hover:scale-105 transform duration-300 rounded-lg border border-[#9b2f9f] text-white text-[10px] sm:text-[14px] lg:text-[16px] bg-[#9b2f9f]/20 transition-all duration-300 hover:bg-[#9b2f9f]/20 hover:shadow-[0_0_10px_#9b2f9f]">
         Innovation & Product Development
        </p>
      </motion.div>


      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headingControls}
        transition={{ duration: 0.6 }}
      >
<p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px]  bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
   From Vision to Victory
</p>


        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto">
          We convert patented ideas and emerging concepts into real-world solutions.
        </p>
      
      </motion.div>

      

      {/* Good Div Animation */}
      <motion.div
        ref={cardsRef}
        className="good flex w-full gap-10  mt-10 sm:mt-2 flex-col md:flex-row md:gap-5"
        initial={{ opacity: 0, y: 40 }}
        animate={cardsControls}
        transition={{ duration: 0.6 }}
      >
        {data.map((item, index) => (
          <Component key={index} p={item.p} title={item.title} imgUrl={item.img} />
        ))}
      </motion.div>
    </div>
  );
};

export default Innovators;
