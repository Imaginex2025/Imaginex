import {useState } from "react";
import { motion, AnimatePresence,} from "framer-motion";

const dummyData = [
  {
    title: "Employment Readiness Programs",
    content: "For students and early-career professionals."
  },
  {
    title: "AI Product Development Training",
    content: "Hands-on, innovation-focused."
  },
  {
    title: "Patent & IP Literacy Programs",
    content: "For institutions, corporates, and individuals."
  },
];

const Venture = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-5 justify-center items-center text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="training"
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
  <p className="p-2 w-fit mx-auto flex justify-center hover:scale-105 transform duration-300 rounded-lg border border-[#9b2f9f] text-white text-[10px] sm:text-[14px] lg:text-[16px] bg-[#9b2f9f]/20 transition-all duration-300 hover:bg-[#9b2f9f]/20 hover:shadow-[0_0_10px_#9b2f9f]">
    Technology Training & Enablement
  </p>
  </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-medium text-[24px] sm:text-[24px] lg:text-[36px] bg-gradient-to-br from-white via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          Empowering the Innovators of <br /> Tomorrow
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] lg:text-[16px] text-[#F8E9FE] mx-auto max-w-3xl">
          We convert patented ideas and emerging concepts into real-world solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col w-full gap-3">
        {dummyData.map((item, index) => (
          <motion.div
            key={index}
            className={`w-full p-4 sm:p-6 border rounded-[12px] cursor-pointer ${
              openIndex === index
                ? "border-[#d38bdb] bg-gradient-to-br from-black to-[#9b2f9f]/40"
                : "border-[#4B0056] bg-transparent"
            }`}
            onClick={() => toggleCard(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white text-left">
                {item.title}
              </p>
              <img
                src={openIndex === index ? "/Minus.svg" : "/Plus.svg"}
                alt="Toggle"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 text-[13px] sm:text-[14px] text-[#e9c7f3] text-left">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Venture;
