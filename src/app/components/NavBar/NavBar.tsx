import "@/app/CustomCSS/NavStyle.css";
const NavBar: React.FC = () => {
  return (
    <div className="mt-10 grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-15 lg:mt-0">
      <a
        href="#"
        className="flex aspect-square rotate-2 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          About Me
        </div>
      </a>

      <a
        href="#"
        className="flex aspect-square -rotate-2 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Bookmarks
        </div>
      </a>

      <a
        href="#"
        className="flex aspect-square -rotate-3 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        {/* <div className="flex aspect-square h-[60%] items-center justify-center bg-blue-800"> */}
        <div className="text-lg text-black md:text-2xl lg:text-xl">Resumé</div>
        {/* </div> */}
      </a>

      <a
        href="#"
        className="flex aspect-square rotate-1 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Projects
        </div>
      </a>

      <a
        href="#"
        className="flex aspect-square -rotate-6 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Shower Thoughts
        </div>
      </a>

      <a
        href="#"
        className="flex aspect-square -rotate-4 items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Guest Book~
        </div>
      </a>
    </div>
  );
};

export default NavBar;
