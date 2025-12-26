"use client";

import { useState } from "react";
import { Question } from "./types/question";

type Props = {
  questions: Question[];
};

export default function ScavGameBox({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showLetter, setShowLetter] = useState(false);

  const q = questions[current];

  function handleSelect(index: number) {
    if (selected !== null) return;

    setSelected(index);

    if (index === q.correctIndex) {
      setTimeout(() => {
        setShowLetter(true);
      }, 500);
    }
  }

  return (
    <div>
      {!showLetter && (
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-8">
          <div className="mx-auto my-[50%] max-w-xl rounded-2xl bg-white p-4 font-[family-name:var(--font-montserrat)] shadow-lg lg:mt-50">
            <h2 className="mb-4 text-lg font-semibold text-black">
              {q.question}
            </h2>

            <div className="grid gap-2">
              {q.options.map((option, index) => {
                const isCorrect = index === q.correctIndex;
                const isSelected = index === selected;

                let styles =
                  "p-4 rounded-xl border border-slate-500 text-black text-left transition font-medium ";

                if (selected !== null) {
                  if (isCorrect) styles += "bg-green-500";
                  else if (isSelected) styles += "bg-red-500";
                  else styles += "bg-gray-100 opacity-60";
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
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {showLetter && (
        <div className="flex h-screen items-center justify-center">
          <div className="text-8xl font-bold text-blue-700">{q.letter}</div>
        </div>
      )}
    </div>
  );
}
