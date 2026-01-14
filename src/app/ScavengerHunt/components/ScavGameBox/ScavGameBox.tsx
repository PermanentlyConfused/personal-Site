"use client";

import { useState } from "react";
import { Question } from "./types/question";
import "../css/glass_background.css";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";
import Highlights from "../../components/PosterCard/Highlights";

type Props = {
    questions: Question[];
};

export default function ScavGameBox({ questions }: Props) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [retryCountdown, setRetryCountdown] = useState<number | null>(null);
    const [showLetter, setShowLetter] = useState(false);

    const q = questions[current];

    function handleSelect(index: number) {
        if (selected !== null) return;

        setSelected(index);

        if (index === q.correctIndex) {
            setTimeout(() => {
                setShowLetter(true);
            }, 500);
        } else {
            setRetryCountdown(5);

            const interval = setInterval(() => {
                setRetryCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setSelected(null);
                        return null;
                    }
                    return prev! - 1;
                });
            }, 1000);
        }
    }
    const { width, height } = useWindowSize();
    return (
        <div>
            {!showLetter && (
                <div className="mx-5 flex translate-y-50 items-center justify-center">
                    <div className="rounded-2xl bg-white p-4 font-[family-name:var(--font-montserrat)] shadow-lg lg:mt-50">
                        <h2 className="text-md mb-4 text-center font-semibold text-black">
                            {q.question}
                        </h2>
                        <div className="grid gap-2">
                            {q.options.map((option, index) => {
                                const isCorrect = index === q.correctIndex;
                                const isSelected = index === selected;

                                let styles =
                                    "p-2 pointer-events-auto rounded-xl  border border-slate-500 text-black text-left transition font-medium ";

                                if (selected !== null) {
                                    if (isCorrect && isSelected)
                                        styles += "bg-green-500";
                                    else if (isSelected) styles += "bg-red-500";
                                    else styles += "bg-gray-100 opacity-60 ";
                                } else {
                                    styles += "hover:bg-blue-100";
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(index)}
                                        className={styles}
                                    >
                                        {option}
                                        {retryCountdown !== null &&
                                            isSelected &&
                                            !isCorrect && (
                                                <div className="mt-2 text-sm font-semibold text-white">
                                                    Wrong answer — try again in{" "}
                                                    {retryCountdown}s
                                                </div>
                                            )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {showLetter && (
                <motion.div className="pointer-events-none flex min-h-screen flex-col gap-30">
                    <Confetti width={width} height={height} className="-z-2" />

                    <div className="max-w-[60vw] translate-y-25 self-center rounded-xl border-2 border-black bg-white p-2">
                        <p className="text-black">
                            You have Found Letter <b>{q.number}</b>/5
                        </p>
                        <div className="pb-4 text-center text-6xl font-bold text-blue-700">
                            {q.letter}
                        </div>
                    </div>
                    <div className="pointer-events-auto min-h-screen">
                        <Highlights />
                    </div>
                </motion.div>
            )}
        </div>
    );
}
