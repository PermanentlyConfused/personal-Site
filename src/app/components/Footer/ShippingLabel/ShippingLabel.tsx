"use client";
import { motion } from "framer-motion";
import "@/app/CustomCSS/FooterStyle.css";
import "@/app/CustomCSS/PinNTape.css";

const ShippingLabel: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[40%] lg:flex-col lg:justify-between lg:py-15"
    >
      <div className="img-tape img-tape--3">
        <div className="border-3 border-dashed border-black bg-[#e5cbba] p-[0.3em] lg:rotate-3">
          <div className="shippingCardBG h-[100%] w-[100%] p-[1.5em]">
            <span className="text-2xl text-black"> SEND ME SHIT :D</span>
            <br></br>
            <span className="text-md text-black">
              {" "}
              10 Clarkson Ave-Box 3340, Potsdam, NY, 13699
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default ShippingLabel;
