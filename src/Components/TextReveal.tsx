import { motion } from "framer-motion";
import { TextRevealCard } from "../Components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center"
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

      <div className="flex justify-between gap-5 flex-col md:flex-row flex-wrap rounded-2xl w-full">
        {/* Qualcomm */}
        <div className="flex flex-col flex-1 justify-end">
          <TextRevealCard
            text="Qualcomm"
            revealText="Around 60–70% of its profits come from patent licensing and royalty fees."
          />
          {/* <div className="w-full flex justify-end mr-2">
            <a
              href="https://www.latterly.org/qualcomm-business-model"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./link.png"
                alt="link"
                className="hover:scale-140 transform duration-300 cursor-pointer w-3 h-3 mt-2"
              />
            </a>
          </div> */}
        </div>



        {/* Dolby Laboratories */}
        <div className="flex flex-col flex-1 justify-end">
          <TextRevealCard
            text="Dolby Laboratories"
            revealText="Earns about 90% of its revenue from licensing its patented audio and visual technologies."
          />
          {/* <div className="w-full flex justify-end mr-2">
            <a
              href="https://www.sec.gov/Archives/edgar/data/1308547/000162828025003175/dlb-20241227.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./link.png"
                alt="link"
                className="hover:scale-140 transform duration-300 cursor-pointer w-3 h-3 mt-2"
              />
            </a>
          </div> */}
        </div>

                {/* ARM Holdings */}
        <div className="flex flex-1 flex-col justify-end">
          <TextRevealCard
            text="ARM Holdings"
            revealText="Generates over 90% of its revenue from licensing its patented chip architectures."
          />
          {/* <div className="w-full flex justify-end mr-2">
            <a
              href="https://www.sec.gov/Archives/edgar/data/1973239/000197323924000012/arm-20240331.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./link.png"
                alt="link"
                className="hover:scale-140 transform duration-300 cursor-pointer w-3 h-3 mt-2"
              />
            </a>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
