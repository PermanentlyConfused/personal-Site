"use client";
import { motion } from "framer-motion";
const Current: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-[20vh] w-full max-w-5xl rounded-lg bg-stone-900 shadow-lg hover:border-2 hover:border-solid hover:border-[#036ffc] lg:col-span-4 lg:row-start-5 lg:h-[auto]"
    >
      <a className="">asda</a>
    </motion.div>
  );
};

export default Current;
