"use client";
import { motion } from "framer-motion";
const Connect: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-[20vh] w-full max-w-5xl rounded-lg bg-stone-900 shadow-lg hover:border-2 hover:border-solid hover:border-[#036ffc] lg:col-span-2 lg:row-start-3 lg:h-[30vh]"
    >
      {/* Content for Connect */}
    </motion.div>
  );
};

export default Connect;
