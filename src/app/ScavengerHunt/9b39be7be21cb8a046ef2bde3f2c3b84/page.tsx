"use client";

import ScavHeader from "../components/ScavHeader/ScavHeader";
import ScavFooter from "../components/ScavFooter/ScavFooter";
import ScavGameBox from "../components/ScavGameBox/ScavGameBox";
import { Question } from "../components/ScavGameBox/types/question";

const questions: Question[] = [
    {
        question: "How many people are on SASE Clarkson Eboard this semester? ",
        options: ["12", "10", "8", "9"],
        correctIndex: 0,
        currentLetter: "",
        letter: "o",
        number: 3,
    },
];
export default function PageOne() {
    return (
        <div className="flex min-h-screen min-w-screen flex-col bg-[#cbe3f5]">
            <ScavHeader />
            <div className="pointer-events-none relative flex justify-center">
                <ScavGameBox questions={questions} />
            </div>

            <ScavFooter />
        </div>
    );
}
