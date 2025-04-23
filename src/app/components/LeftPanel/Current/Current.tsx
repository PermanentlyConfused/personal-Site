"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Current: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 200, rotate: -180 }}
      whileInView={{ y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: 0,
        ease: [0, 0.2, 0.2, 1.01],
      }}
      className="relative mt-6 hidden h-48 w-96 -rotate-7 rounded-3xl bg-gray-800 p-4 lg:flex lg:flex-col lg:items-center lg:justify-between"
    >
      <div className="h-full w-full rounded-xl bg-black">
        <div className="flex h-full w-full flex-col rounded-lg bg-black p-5">
          <h1 className="text-gray-400">What I'm up to</h1>
          <p className="text-sm text-gray-300">
            Currently on co-op @Cspeed. Hopefully finish college soon🤞
          </p>
          <p className="text-sm text-gray-300">
            Looking for projects to contribute to
          </p>
          <DotLottieReact
            src="/assets/GreenLight.lottie"
            loop
            autoplay
            className="absolute top-4 right-4 h-12 w-12"
          />
        </div>
      </div>

      <div className="absolute top-4 h-1 w-20 rounded-full bg-gray-500"></div>
    </motion.div>
  );
};

export default Current;
