"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const boxes = [1, 2, 3, 4, 5];
const MyProjects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  console.log("asd");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
      setHasAnimated(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="-left-200 h-auto w-50 bg-linear-to-r from-lime-300/10 to-lime-300/80 p-5 py-3 text-center text-3xl font-semibold text-black drop-shadow-xl">
        <p>Projects</p>
      </div>
      <div className="group duration:500 relative mt-6 h-[720px] w-[1080px] rotate-1 rounded-3xl border-2 border-slate-500 bg-slate-300 py-3 pr-16 pl-9 drop-shadow-xl transition hover:rotate-0 lg:flex lg:flex-col lg:items-center lg:justify-between">
        {/* make these borders glow white when active */}

        <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#6b7280",
            boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0)",
          }}
          whileInView={{
            borderColor: "#ffffff",
            backgroundColor: "#ffffff", // gray-400
            boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="absolute top-50 left-5 h-70 w-1 rounded-full"
        />
        <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#6b7280",
            borderWidth: "3px",
            boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0)",
          }}
          whileInView={{
            borderColor: "#ffffff",
            backgroundColor: "#e2e8f0",
            borderWidth: "3px",
            boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="absolute top-[50%] right-2 h-12 w-12 rounded-full"
        ></motion.div>

        <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#000000",
            borderWidth: "3px",
            boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0)",
          }}
          whileInView={{
            borderColor: "#ffffff",
            backgroundColor: "#474747",
            borderWidth: "3px",
            boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 3.5, delay: 0, ease: "easeInOut" }}
          className="flex h-full w-full rounded-xl"
        >
          {/* Expanded Box */}
          <AnimatePresence>
            {expanded !== null && (
              <motion.div
                key="expanded-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-opacity-90 fixed inset-0 my-3 mr-16 ml-9 flex items-center justify-center rounded-lg bg-black"
                onClick={() => setExpanded(null)}
              >
                <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 text-3xl text-black shadow-lg">
                  Box {expanded + 1} Content
                  <p className="mt-4 text-base">Click anywhere to close</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button Grid */}
          <AnimatePresence>
            {expanded === null && showBoxes && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: hasAnimated ? 0 : 0.2,
                }}
                className="flex flex-row flex-wrap items-center justify-center gap-5 rounded-lg py-10"
              >
                {boxes.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setExpanded(idx)}
                    className="flex h-70 w-70 cursor-pointer flex-row items-center justify-center bg-white transition hover:bg-[#5fa3fa]/30"
                  >
                    <span className="text-black">Box {idx + 1}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProjects;
