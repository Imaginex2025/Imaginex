import { motion } from "framer-motion";
import Card from "../Components/ui/carousel-card-1";

const CARD_DATA = [
  {
    id: 1,
    imgUrl: 'qualcomm .jpg',
    content:
      'Generates 60–70% of its profits from patent licensing and royalty fees.',
  },
  {
    id: 2,
    imgUrl: '/Dolby.png',
    content:
      'Earns ~90% of revenue from licensing audio and visual technologies.',
  },
  {
    id: 3,
    imgUrl: 'Arm.jpeg',
    content:
      'Over 90% of revenue comes from licensing its patented chip architectures.',
  }
];

const DemoOne = () => {
  return (


            <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center  py-[30px]  sm:py-[100px]  lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center"
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

    <div className="flex flex-col w-full ">
      <Card data={CARD_DATA}/>
    </div>
    </motion.div>
  );
};

export { DemoOne };
