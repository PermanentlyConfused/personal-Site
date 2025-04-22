"use client";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="group items-left relative flex h-[full] max-h-fit w-full max-w-5xl flex-col border-r-2 border-stone-800 bg-transparent pr-2 shadow-lg transition-all duration-500 hover:border-[#036ffc] lg:h-full lg:pr-5"
    >
      <div className="flex h-full w-full flex-col gap-2 font-[family-name:var(--font-montserrat)] text-gray-400 lg:gap-5">
        <h1 className="block text-xs font-bold lg:hidden lg:text-xl">
          About Me
        </h1>
        <p className="text-xs lg:text-lg">
          I’m a computer engineer{" "}
          <b className="text-xs">(glorified software engineer😅) </b>
          with a strong passion for improving everyday user experiences through
          technology. Originally born in Russia but proudly raised with
          Vietnamese roots, my journey in engineering has been shaped by a
          unique blend of cultural influences and an unwavering drive to solve
          real-world problems.
          <br />
          <br />
          When I'm not immersed in code, I love winding down on my guitar and
          freeing Isaac from his mother. I also love relaxing by a campfire
          outdoors. Though I'm always up for trying out new experiences too~
          <br />
          <br />
          My approach to development is centered on prioritizing stability and
          simplicity while remaining open to continuous learning and
          improvement. I am always seeking new ways to enhance my skills and, in
          turn, elevate the user experience.
        </p>
      </div>
      <div className="text-md absolute bottom-[10%] z-[-1] hidden h-[30px] w-[130px] rotate-90 items-center justify-center overflow-hidden rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#036ffc] text-white opacity-0 duration-600 ease-in-out select-none xl:left-[92.5%] xl:block xl:transition-all xl:group-hover:bottom-[81%] xl:group-hover:opacity-100">
        <p className="m-auto text-center font-semibold">About Me</p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
