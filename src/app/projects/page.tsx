import ProjectMain from "@/app/components/Projects/Main/ProjectMain";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export default function AboutMainPage() {
  return (
    <div className="homeBG lg:mx-20">
      <Header />
      <div className="flex h-auto flex-col items-center justify-center py-10 text-black">
        <ProjectMain />
      </div>
      <Footer />
    </div>
  );
}
