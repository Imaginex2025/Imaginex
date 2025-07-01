
import { motion } from 'framer-motion';

const Whatwedo = () => {
  return (
    <motion.div
      className="bg-[url('/grid-bg.svg')] bg-cover bg-center px-5 py-[30px] sm:px-[110px] sm:py-[100px] lg:px-[80px] lg:py-[60px] flex flex-col gap-2 md:gap-5 justify-center items-center text-center"
      initial={{ opacity: 0 }}
      id='about'
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
        <p className="font-medium text-[24px] sm:text-[32px] lg:text-[48px]  bg-gradient-to-br from-white  via-white/80 to-[#9b2f9f] bg-clip-text text-transparent leading-tight">
          What We Do?
        </p>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-medium text-[10px] sm:text-[14px] mb-2 md:mb-0 lg:text-[16px] text-[#F8E9FE] mx-auto">
          Build. Patent. Launch. Lead – With THE ImagineX.
        </p>
      </motion.div>

      {/* Vision Banner */}
      <motion.div
        className="flex justify-start w-full h-[200px] bg-cover md:h-[400px] lg:h-[600px] flex-wrap gap-6 items-end bg-[url('/Group.png')]"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="flex flex-col gap-2 px-3 py-3 align-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[16px] text-start font-light md:text-[24px] lg:text-[32px]">
            Building a Future of Smart Enterprise Transformation and Sustainable Growth
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        className="w-full"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="flex flex-col w-full gap-2 px-5 py-6 md:px-10 md:py-12 bg-gradient-to-b from-[#0E0A0F] to-[#211824] rounded-lg justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.p
            className="text-[11px] md:text-[16px] text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            THE ImagineX is a future-focused innovation company driven by the mission to Empowering Humanity through Innovation and Technology (M-HIT). We help transform ideas into patents, and patents into real-world solutions.

Our four core pillars—Patent Tech Consulting, Innovation & Product Development, and Technology Training—enable startups, enterprises, and individuals to unlock IP value, build impactful products, and stay competitive in the age of AI.

We deliver trusted, AI-powered patent and innovation solutions backed by expert teams, proven frameworks like xBrain™ AI and Patent Gym™, and a strong track record of IP success and product impact..
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Whatwedo;
