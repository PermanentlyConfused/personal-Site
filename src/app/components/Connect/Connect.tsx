"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiCursorClickLight } from "react-icons/pi";

const Connect: React.FC = () => {
  const [linkText, setLinkText] = useState("emailmadebyarthr@gmail.com");
  const [linkTextPhone, setLinkTextPhone] = useState("(315) 603-3502");

  const handleCopyEmail = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const textToCopy = "emailmadebyarthr@gmail.com";

    try {
      await navigator.clipboard.writeText(textToCopy);
      setLinkText("Copied to clipboard!");
      setTimeout(() => setLinkText("emailmadebyarthr@gmail.com"), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text.");
    }
  };

  const handleCopyPhone = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const textToCopy = "(315) 603-3502";

    try {
      await navigator.clipboard.writeText(textToCopy);
      setLinkTextPhone("Copied to clipboard!");
      setTimeout(() => setLinkTextPhone("(315) 603-3502"), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text.");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="group items-left flex h-[full] max-h-full w-full max-w-5xl flex-col rounded-lg border-2 border-stone-800 bg-black/70 p-2 shadow-lg transition-all duration-500 hover:border-[#036ffc] lg:col-span-2 lg:row-span-1 lg:row-start-3 lg:h-[300] lg:p-10"
    >
      {" "}
      <div className="flex h-full w-full flex-col gap-1 font-[family-name:var(--font-montserrat)]">
        <h1 className="block text-xs font-bold italic lg:hidden">
          Contact Me 💖
        </h1>
        <h1 className="text:md font-semibold text-gray-400 italic select-none lg:text-lg">
          Contact Details📞
        </h1>
        <a
          onClick={handleCopyEmail}
          className="text-md flex cursor-pointer flex-row transition-all duration-200 ease-in-out hover:font-bold hover:text-[#036ffc]"
        >
          {linkText}
        </a>
        <a
          onClick={handleCopyPhone}
          className="text-md flex cursor-pointer flex-row transition-all duration-200 ease-in-out hover:font-bold hover:text-[#036ffc]"
        >
          {linkTextPhone}
        </a>
        <br></br>
        <h1 className="text:md font-semibold text-gray-400 italic select-none lg:text-lg">
          Resume📃
        </h1>
        <a
          href="/docs/ResumeV2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md flex cursor-pointer flex-row transition-all duration-200 ease-in-out hover:font-bold hover:text-[#036ffc]"
        >
          Click here for resume {<PiCursorClickLight size={20} />}
        </a>
      </div>
      {/* Content for Connect */}
      <div className="text-md relative right-[25.5%] bottom-[10%] z-[-1] flex hidden h-[30px] w-[140px] rotate-270 items-center justify-center rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#036ffc] bg-[#036ffc] bg-black/70 px-5 text-white opacity-0 duration-600 ease-in-out select-none lg:block lg:transition-all lg:group-hover:bottom-[60%] lg:group-hover:opacity-100">
        <p className="m-auto self-center font-semibold">Contact Me</p>
      </div>
    </motion.div>
  );
};

export default Connect;
