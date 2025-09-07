import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Image from "next/image";

import me from "@/assets/Me.png";
import "../../CustomCSS/PinNTape.css";
const AboutMe: React.FC = () => {
  return (
    <div className="homeBG flex flex-col items-center gap-10">
      <Header />
      {/* <div className="absolute h-40 w-full   -rotate-2 bg-black"></div> */}
      <div className="mx-2 flex flex-col items-center justify-center gap-5 lg:mx-30 lg:flex-row">
        <div className="img-tape img-tape--2--alt -top-70 left-25 -rotate-10" />
        <div className="box-1 hidden rounded-xl border-1 border-black p-3 lg:block lg:w-[15%]">
          <Image
            src={me.src}
            width={300}
            height={300}
            alt="Picofme"
            className="border-2 border-dashed border-black"
          />
        </div>

        <div className="my-auto flex flex-col bg-stone-200 p-5 font-[family-name:var(--font-montserrat)] text-black opacity-80 lg:w-[75%] lg:p-10">
          <h1 className="block text-2xl font-bold">About Me🌟</h1>
          <p className="text-lg">
            I'm a computer engineer
            <b className="text-lg">(glorified software engineer😅) </b>
            with a strong passion for improving everyday user experiences
            through technology. Originally born in Russia but proudly raised
            with Vietnamese roots, my journey in engineering has been shaped by
            a unique blend of cultural influences and an unwavering drive to
            solve real-world problems.
          </p>
          <br />
          <p className="text-lg">
            My approach to development is centered on prioritizing stability and
            simplicity while remaining open to continuous learning and
            improvement. I am always seeking new ways to enhance my skills and,
            in turn, elevate the user experience.
          </p>
          <br />
          <p className="text-lg">
            When I'm not immersed in code, I love winding down on my guitar and
            playing video games. I also love relaxing by a campfire outdoors.
            Though I'm always up for trying out new experiences at any time.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
