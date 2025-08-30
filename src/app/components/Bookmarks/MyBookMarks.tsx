import "@/app/CustomCSS/PinNTape.css";

const MyBookMarks: React.FC = () => {
  return (
    <div className="flex flex-col py-20 lg:mx-auto">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-20 lg:flex-row lg:gap-x-20">
        <div className="blokken flex h-[770px] w-[620px] flex-col rounded-r-xl pl-3 text-left text-black">
          <div className="img-tape img-tape--2-alt -top-15"></div>
          <h1 className="text-3xl font-semibold">Front-end Stuff</h1>
          <p className="text-2xl">
            https://github.com/brillout/awesome-react-components
          </p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <p className="text-2xl"> .</p>
          <div className="img-tape img-tape--2-altV2 absolute -top-15"></div>
        </div>
        <div className="blokken flex h-[770px] w-[620px] flex-col rounded-r-xl pl-3 text-left text-black">
          <div className="img-tape img-tape--2-alt -top-15"></div>
          <h1 className="text-3xl font-semibold">Random Cool Things 😎</h1>
          <p className="text-2xl">
            See like I'm supposed to make a firefox extension that lets me
            bookmark cool websites and it will update this page but I've gotten
            too busy and haven't gotten to that yet. So imagine like really
            coool websites here. Like this one{" "}
            <a href="https://jrmy.dev/" className="text-blue-500 underline">
              jrmy.dev{" "}
            </a>
          </p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>
          <p className="text-2xl">.</p>

          <div className="img-tape img-tape--2-altV2 -top-15 justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MyBookMarks;
