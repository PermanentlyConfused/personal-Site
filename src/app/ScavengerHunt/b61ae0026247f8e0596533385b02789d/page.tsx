"use client";

import ScavHeader from "../components/ScavHeader/ScavHeader";
import ScavFooter from "../components/ScavFooter/ScavFooter";
import ScavGameBox from "../components/ScavGameBox/ScavGameBox";
import { Question } from "../components/ScavGameBox/types/question";

import Image from "next/image";
import Keona from "@/assets/ScavengerHunt/eboardPics/Keona.gif";
import Matt from "@/assets/ScavengerHunt/eboardPics/Mat.gif";
import Angela from "@/assets/ScavengerHunt/eboardPics/Angela.gif";
import Brad from "@/assets/ScavengerHunt/eboardPics/Brad.gif";
import Edina from "@/assets/ScavengerHunt/eboardPics/Edina.gif";
import Min from "@/assets/ScavengerHunt/eboardPics/Min.gif";
import Nate from "@/assets/ScavengerHunt/eboardPics/Nate.gif";
import Saf from "@/assets/ScavengerHunt/eboardPics/Saf.gif";

const questions: Question[] = [
    {
        question: "What will be the first fundraiser for this semester?",
        options: ["Pocky", "Chopsticks", "Sushi", "Manti"],
        correctIndex: 3,
        currentLetter: "",
        letter: "a",
        number: 5,
    },
];
export default function PageFour() {
    return (
        <div className="flex h-full w-full flex-col bg-[#cbe3f5]">
            <ScavHeader />
            <div className="-z-0 flex h-400 flex-col">
                <Image
                    src={Keona.src}
                    alt="Keona"
                    height={175}
                    width={175}
                    className="translate-y-[30%] self-end"
                ></Image>
                <Image
                    src={Matt.src}
                    alt="Matt"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-start"
                ></Image>
                <Image
                    src={Angela.src}
                    alt="Angela"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-end"
                ></Image>
                <Image
                    src={Brad.src}
                    alt="Brad"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-start"
                ></Image>
                <Image
                    src={Edina.src}
                    alt="Edina"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-end"
                ></Image>
                <Image
                    src={Min.src}
                    alt="Min"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-start"
                ></Image>
                <Image
                    src={Nate.src}
                    alt="Nate"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-end"
                ></Image>
                <Image
                    src={Saf.src}
                    alt="Saf"
                    height={150}
                    width={150}
                    className="translate-y-[30%] self-start"
                ></Image>
            </div>
            <div className="fixed -top-7 left-0 flex h-screen w-screen justify-center">
                <ScavGameBox questions={questions} />
            </div>

            <ScavFooter />
        </div>
    );
}
