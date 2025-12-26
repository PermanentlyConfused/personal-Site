import ScavHeader from "../components/ScavHeader/ScavHeader";
import ScavFooter from "../components/ScavFooter/ScavFooter";
import ScavGameBox from "../components/ScavGameBox/ScavGameBox";
import { Question } from "../components/ScavGameBox/types/question";
const questions: Question[] = [
  {
    question: "Who is SASE Clarkson's President",
    options: ["Victoria", "Nate", "Min", "Keona"],
    correctIndex: 3,
    currentLetter: "",
    letter: "s",
  },
];
export default function PageOne() {
  return (
    <div className="flex h-full w-full flex-col bg-[#cbe3f5]">
      <ScavHeader />
      <ScavGameBox questions={questions} />
      <ScavFooter />
    </div>
  );
}
