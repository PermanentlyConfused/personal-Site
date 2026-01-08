import "@/app/CustomCSS/PinNTape.css";

const MyBookMarks: React.FC = () => {
    return (
        <div className="flex flex-col py-20 xl:mx-auto">
            <div className="flex flex-col items-center gap-y-20 px-2 xl:flex-row xl:justify-center xl:gap-x-25 xl:px-0">
                <div className="blokken flex w-full flex-col rounded-r-xl p-3 text-sm text-black md:w-2xl xl:h-[48rem] xl:w-[32rem]">
                    <div className="img-tape img-tape--2-alt -top-15 hidden xl:block"></div>

                    <h1 className="text-xl font-bold">Front-end Stuff</h1>
                    <div className="text-md xl:text-lg">
                        <p>
                            https://github.com/brillout/awesome-react-components
                        </p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                        <p> .</p>
                    </div>
                    <div className="img-tape img-tape--2-altV2 absolute -top-15 hidden xl:block"></div>
                </div>
                <div className="blokken flex w-full flex-col rounded-r-xl p-3 text-sm text-black md:w-2xl xl:h-[48rem] xl:w-[32rem]">
                    <div className="img-tape img-tape--2-alt -top-15 hidden xl:block"></div>

                    <h1 className="text-xl font-bold">Random Cool Things 😎</h1>
                    <div className="text-md xl:text-lg">
                        <p>
                            See like I'm supposed to make a firefox extension
                            that lets me bookmark cool websites and it will
                            update this page but I've gotten too busy and
                            haven't gotten to that yet. So imagine like really
                            coool websites here. Like this one{" "}
                            <a
                                href="https://jrmy.dev/"
                                className="text-blue-500 underline"
                            >
                                jrmy.dev{" "}
                            </a>
                        </p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                    </div>
                    <div className="img-tape img-tape--2-altV2 -top-15 hidden justify-end xl:block"></div>
                </div>
            </div>
        </div>
    );
};

export default MyBookMarks;
