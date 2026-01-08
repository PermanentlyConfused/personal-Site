"use client";
import Image from "next/image";
import worldGeneration from "@/assets/Projects/Boids/GenerationSped.gif";
import perlinNoise from "@/assets/Projects/Boids/PerlinNoise1D.png";
import boidsSped from "@/assets/Projects/Boids/BoidsSped.gif";
const BoidsProj: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 py-10 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:text-3xl">
            {/* First row*/}
            <div className="flex flex-col lg:flex-row lg:justify-center">
                <div className="flex flex-col lg:w-[60%] lg:px-4">
                    <h1 className="font-bold">
                        Boids Simulation on Procedurally Generated World
                    </h1>
                    <h1 className="text-2xl">Introduction:</h1>
                    <p className="text-semibold text-base">
                        This project started off as "Can I build Minecraft from
                        scratch?". I found out very quickly that the short
                        answer was "No" as there were too many different
                        elements that has to come together to create the
                        Minecraft we know today. Instead of giving up, I started
                        several small projects that will(hopefully) teach me
                        enough to eventually allow me to build minecraft from
                        scratch one day. The goal of this project was for me to
                        learn how to use perlin noise to create a world and
                        visualize it on a 2D plane. However, having a world
                        without any occupants feels desolate and sad so I also
                        added artificial birds through the use of Boid's
                        algorithm to interact with the world.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:w-[40%]">
                    <Image
                        src={worldGeneration.src}
                        alt="GenerationSped gif"
                        height={300}
                        width={300}
                        unoptimized
                        className="rounded-xl"
                    />
                    <p className="mt-2 text-center text-base">
                        {" "}
                        Picture 1: World Generation of 600x600 world{" "}
                    </p>
                </div>
            </div>
            <hr className="my-1 lg:mr-0" />
            {/* Row2 */}
            <div className="flex flex-col lg:flex-row lg:justify-center">
                <div className="flex flex-col items-center justify-center lg:w-[50%] lg:pl-4">
                    <Image
                        src={perlinNoise.src}
                        alt="perlin noise 1D plot"
                        height={250}
                        width={400}
                        className="rounded-xl"
                    />
                    <p className="text-center text-base">
                        {" "}
                        Picture 2: Summized 6 Perlin Noise Layers on 1D
                    </p>
                </div>
                <div className="flex flex-col lg:w-[50%] lg:pl-4">
                    <h1 className="font-bold">Technical Stuff</h1>
                    <h1 className="text-2xl">Perlin Noise & Generation:</h1>
                    <p className="text-base">
                        For this world's generation, I have a total of 6 layers
                        of perlin noise octaves 3,6,12,25,50,80. By summing up
                        all of these signals while halving their weights for
                        each octave, I was able to have a 1D signal that looks
                        "random" with decent fine details. In order to convert
                        this to 2D plane, I created a 2D matrix(based on window
                        width and height) and computed the weighted sum of noise
                        values for each grid cell. Lastly, I created a range
                        based on min/max values in the 2D matrix to normalize
                        and create a integer-based mapping for the terrain.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center lg:flex-row">
                <div className="flex flex-col lg:w-[60%] lg:px-4">
                    <h2 className="text-2xl">
                        Boids Algorithm(Flocks of Birds Simulation)
                    </h2>
                    <p className="text-base">
                        Boid's algorithm is simple and can be broken up into
                        three main concepts: Separation, Alignment, and
                        Cohesion. Each of the "bird" in the flock is an object
                        that has its own position, velocity, and acceleration
                        vectors that can interact with other object's variables.
                        Separation induces a small acceleration vector opposite
                        to the other boid objects if their positions are too
                        close to each other. Alignment will adjust the
                        acceleration vector of the individual boid based on the
                        other boids' velocity that are in close proximity.
                        Cohesion acts as a reverse separation force to keep the
                        boids in a group together by directing the acceleration
                        vector towards the center of the local boid group. I
                        wanted the birds to avoid very high terrains so I ran a
                        BFS algorithm on the map to get "clumps" of the snow
                        terrains in close proximity and create an acceleration
                        vector directing the boids AWAY from the center of these
                        "clumps".
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center lg:w-[40%]">
                    <Image
                        src={boidsSped.src}
                        alt="BoidsSped gif"
                        height={300}
                        width={300}
                        unoptimized
                        className="rounded-xl"
                    />
                    <p className="text-center text-base">
                        {" "}
                        Picture 3: Flock of birds(Boids) flying towards cursor
                        and avoiding high terrain{" "}
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default BoidsProj;
