import "@/app/CustomCSS/PinNTape.css";
import BoidsProj from "../ProjectsFolder/Boids";
const ProjectNotePad: React.FC = () => {
  return (
    <div className="block lg:hidden">
      <div className="blokken mt-10 flex h-full w-95 flex-col rounded-l-xl text-left">
        <div className="img-tape img-tape--1 -top-15 left-12"></div>
        <BoidsProj />
      </div>
    </div>
  );
};

export default ProjectNotePad;
