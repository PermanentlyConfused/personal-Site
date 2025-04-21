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
      className="group items-left flex h-[full] max-h-full w-full max-w-5xl flex-col rounded-lg border-2 border-stone-800 bg-black/30 p-2 shadow-lg transition-all duration-500 hover:border-[#036ffc] lg:col-span-2 lg:row-span-3 lg:h-full lg:p-10"
    >
      <div className="flex h-full w-full flex-col gap-2 font-[family-name:var(--font-montserrat)] lg:gap-5">
        <h1 className="block text-xs font-bold lg:hidden lg:text-xl">
          About Me
        </h1>
        <p className="text-xs lg:text-lg">
          Hi, I’m a computer engineer{" "}
          <b className="text-xs">(glorified software engineer😅) </b>
          with a strong passion for improving everyday user experiences through
          technology. Originally born in Russia but proudly raised with
          Vietnamese roots, my journey in engineering has been shaped by a
          unique blend of cultural influences and an unwavering drive to solve
          real-world problems.
          <br />
          <br />
          When I'm not immersed in code, I love winding down with games and my
          guitar. I also love relaxing by a campfire outdoors. Though I'm always
          up for trying out new experiences too~
          <br />
          <br />
          My approach to development is centered on prioritizing stability and
          simplicity while remaining open to continuous learning and
          improvement. I am always seeking new ways to enhance my skills and, in
          turn, elevate the user experience.
        </p>
      </div>
      <div className="text-md relative bottom-[10%] left-[99%] z-[-1] flex hidden h-[30px] w-[120px] rotate-90 items-center justify-center rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#036ffc] bg-[#036ffc] bg-black/30 px-5 text-white opacity-0 duration-600 ease-in-out select-none lg:block lg:transition-all lg:group-hover:bottom-[90%] lg:group-hover:opacity-100">
        <p className="m-auto font-semibold">About Me</p>
      </div>
    </motion.div>
  );
};

export default SideBar;
