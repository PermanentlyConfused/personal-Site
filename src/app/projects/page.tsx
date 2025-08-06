import ProjectIpad from "@/app/components/Projects/Ipad/ProjectIpad";
import ProjectNotePad from "@/app/components/Projects/ProjectNotePad.tsx/ProjectNotePad";

export default function AboutMainPage() {
  return (
    <div className="homeBG h-full lg:mx-20">
      <div
        id="midCenter"
        className="flex flex-col items-center justify-center py-20 text-black"
      >
        <div className="w-50 bg-linear-to-r from-[#eee7d7]/70 to-[#e5cbba]/80 py-3 text-center text-3xl font-semibold text-black drop-shadow-lg lg:hidden">
          <p>Projects</p>
        </div>
        <ProjectIpad />
        <ProjectNotePad />
      </div>
    </div>
  );
}
