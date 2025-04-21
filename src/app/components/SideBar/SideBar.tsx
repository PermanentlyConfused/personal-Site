"use client";
import { motion } from "framer-motion";
const SideBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="group items-left flex h-[20vh] w-full max-w-5xl flex-col rounded-lg border-2 border-transparent bg-stone-900 p-10 shadow-lg transition-all duration-500 hover:border-[#036ffc] lg:col-span-2 lg:col-start-3 lg:row-span-3 lg:h-[100%]"
    >
      {" "}
      <div className="flex h-full w-full flex-col font-[family-name:var(--font-montserrat)]">
        <h1 className="font-900 text-lg">Hello~</h1>
        <h1 className="font-900 text-lg">Hello~</h1>
      </div>
      {/* Sidebar Content */}
      <div className="text-md relative bottom-[91%] left-[50%] z-[-1] flex h-[30px] w-[120px] rotate-90 items-center justify-center rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#036ffc] bg-[#036ffc] bg-stone-900 text-white transition-all duration-600 ease-in-out group-hover:left-[99%]">
        <p className="font-bold">About Me</p>
      </div>
    </motion.div>
  );
};

export default SideBar;
