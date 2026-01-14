"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { stickers } from "./CardData";

const Highlights: React.FC = () => {
    return (
        <div className="relative mb-20 grid min-h-[100vh] overflow-hidden pb-40 text-center select-none">
            <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
            >
                <h2 className="relative text-center text-[10vw] font-black text-neutral-800 md:text-[11vw] lg:text-[11vw]">
                    Meet your Eboard!
                </h2>
                <p className="font-black text-black">(Drag them around!)</p>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                transition={{ duration: 4 }}
                layout
            >
                <PosterCards />
            </motion.div>
        </div>
    );
};
const PosterCards = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full">
            <div className="grid grid-cols-3 gap-4 p-4">
                {stickers.map((card, index) => (
                    <div
                        key={index}
                        className="flex aspect-square items-center justify-center"
                    >
                        <PosterCard containerRef={containerRef} {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

interface CardProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    src: StaticImageData;
    alt: string;
}
const PosterCard = ({ containerRef, src, alt }: CardProps) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");
        let maxZIndex = -Infinity;
        els.forEach((el, index) => {
            const z = index + 1;
            if (!isNaN(z) && z > maxZIndex) maxZIndex = z;
        });
        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{ zIndex }}
            className="drag-elements h-full p-1 pb-4 select-none"
            src={src.src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            dragElastic={0.05}
        />
    );
};

export default Highlights;
