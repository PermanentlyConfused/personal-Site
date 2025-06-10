import Footer from "../Footer/Footer";

const AboutMe: React.FC = () => {
  return (
    <div className="homeBG flex flex-col items-center gap-10">
      {/* <div className="absolute h-40 w-full   -rotate-2 bg-black"></div> */}
      <div className="flex flex-col items-center justify-center gap-5 lg:mx-60 lg:flex-row">
        <div className="h-100 bg-white text-black lg:w-[25%]">
          INSERT POLAROID HERE
        </div>
        <div className="my-auto flex flex-col bg-stone-200 p-5 font-[family-name:var(--font-montserrat)] text-black opacity-80 lg:w-[75%] lg:p-10">
          <h1 className="block text-2xl font-bold">About Me</h1>
          <p className="text-lg">
            I’m a computer engineer
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
