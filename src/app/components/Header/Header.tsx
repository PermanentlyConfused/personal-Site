"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import "@/app/CustomCSS/Backgrounds.css";
import "@/app/CustomCSS/PinNTape.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="relative flex w-full flex-row flex-wrap justify-center gap-3 overflow-hidden border-b-1 border-black bg-[#d9bda5] py-5 font-[family-name:var(--font-montserrat)] font-semibold text-black lg:flex-nowrap lg:gap-x-10 lg:px-40">
      {/* Home */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/home flex text-black lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[15%] lg:flex-col lg:py-5"
        href="/"
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pin top-[10px] hidden lg:block"
        />
        <div
          className={
            "border-3 border-dashed border-black bg-[#154D71] p-[0.3em] group-hover/home:bg-white lg:rotate-1"
          }
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] bg-[#e8e1db] p-[1.5em] text-center group-hover/home:font-bold`}
          >
            Home
          </div>
        </div>
      </motion.a>

      {/* About */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/about flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[15%] lg:flex-col lg:py-5"
        href="/about"
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pin top-[10px] hidden lg:block"
        />
        <div
          className={`border-3 border-dashed border-black p-[0.3em] group-hover/about:bg-white lg:rotate-2 ${isActive("/about") ? "bg-[#FFF9AF]" : "bg-[#1C6EA4]"}`}
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/about:font-bold ${isActive("/about") ? "bg-white font-bold underline" : "bg-[#e8e1db] font-semibold"}`}
          >
            About
          </div>
        </div>
      </motion.a>

      {/* BookMarks */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/bookmarks flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[15%] lg:flex-col lg:py-5"
        href="/bookmarks"
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pin top-[10px] hidden lg:block"
        />
        <div
          className={`border-3 border-dashed border-black p-[0.3em] group-hover/bookmarks:bg-white lg:rotate-3 ${isActive("/bookmarks") ? "bg-[#FFF9AF]" : "bg-[#33A1E0]"}`}
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/bookmarks:font-bold ${isActive("/bookmarks") ? "bg-white font-bold underline" : "bg-[#e8e1db] font-semibold"}`}
          >
            Bookmarks
          </div>
        </div>
      </motion.a>

      {/* Projects */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/projects flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[15%] lg:flex-col lg:py-5"
        href="/projects"
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pin top-[10px] hidden lg:block"
        />
        <div
          className={`border-3 border-dashed border-black p-[0.3em] group-hover/projects:bg-white lg:rotate-4 ${isActive("/projects") ? "bg-[#FFF9AF]" : "bg-[#6dbfee]"}`}
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/projects:font-bold ${isActive("/projects") ? "bg-white font-bold underline" : "bg-[#e8e1db] font-semibold"}`}
          >
            Projects
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default Header;
