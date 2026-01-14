"use client";

import ScavHeader from "../components/ScavHeader/ScavHeader";
import ScavFooter from "../components/ScavFooter/ScavFooter";
import ScavGameBox from "../components/ScavGameBox/ScavGameBox";
import { Question } from "../components/ScavGameBox/types/question";
import Highlights from "../components/PosterCard/Highlights";

import Image from "next/image";
import Keona from "@/assets/ScavengerHunt/eboardPics/Keona.gif";
import Matt from "@/assets/ScavengerHunt/eboardPics/Mat.gif";
import Angela from "@/assets/ScavengerHunt/eboardPics/Angela.gif";
import Brad from "@/assets/ScavengerHunt/eboardPics/Brad.gif";
import Edina from "@/assets/ScavengerHunt/eboardPics/Edina.gif";
import Min from "@/assets/ScavengerHunt/eboardPics/Min.gif";
import Nate from "@/assets/ScavengerHunt/eboardPics/Nate.gif";
import Saf from "@/assets/ScavengerHunt/eboardPics/Saf.gif";
import Vic from "@/assets/ScavengerHunt/eboardPics/Vic.gif";
import Pkin from "@/assets/ScavengerHunt/eboardPics/Pkin.gif";
import Nikul from "@/assets/ScavengerHunt/eboardPics/Nikul.gif";

const questions: Question[] = [
    {
        question: "Which e-board member has the most unread emails?",
        options: [
            "Victoria Hegarty(VP)",
            "Art Nguyen(Secretary)",
            "Matthew Uon(Treasurer)",
            "Edina Jan(Professional Chair)",
        ],
        correctIndex: 1,
        currentLetter: "",
        letter: "c",
        number: 4,
    },
];
export default function PageFive() {
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
