"use client";
import { motion } from "framer-motion";
import "@/app/CustomCSS/FooterStyle.css";
import "@/app/CustomCSS/PinNTape.css";
import { ReactNode } from "react";

interface ShippingLabelProps {
  colorVariation: number;
  title: ReactNode;
  content: ReactNode;
}
const ShippingLabel: React.FC<ShippingLabelProps> = ({
  colorVariation,
  title,
  content,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mx-auto flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[40%] lg:flex-col lg:py-5"
    >
      <div
        className={
          colorVariation
            ? "border-3 border-dashed border-black bg-[#e5cbba] p-[0.2em] lg:-rotate-1"
            : "border-3 border-dashed border-black bg-[#8ec5ff] p-[0.2em] lg:-rotate-1"
        }
      >
        <div className="shippingCardBG h-[100%] w-[100%] p-[1em]">
          {title}
          <br></br>
          {content}
        </div>
      </div>
    </motion.header>
  );
};

export default ShippingLabel;
