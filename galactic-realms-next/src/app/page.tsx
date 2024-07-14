import { Suspense } from "react";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

import { Banner } from "./Banner";
import Card from "./Card";
import { Spinner } from "@radix-ui/themes";

export default function Home() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start pb-24 pt-20"
    >
      <Suspense fallback={<Spinner />}>
        <Banner />
        
        {/* Core statement  */}
        <div
          className="flex flex-col gap-10 my-20 text-center items-center justify-start w-[50rem]"
        >
          <div>
            <h2 className={cn("text-7xl font-bold", orbitron.className)}>
              Core Statement
            </h2>
          </div>
          <div>
            <p className={cn("text-3xl")}>
              Lead your faction to victory by expanding your influence across the stars and claiming ancient alien relics.
            </p>
          </div>
        </div>

        {/* Trailer video */}
        {/* <video className="w-full h-auto max-w-full mb-10 mt-10" controls>
          <source
            src="/@/assets/video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        {/* iFrame tag just for fun */}
        <iframe
          width="1920"
          height="1080"
          className="w-full max-w-full mb-10 mt-10"
          src="https://www.youtube.com/embed/eYBSoGnsZQs"
        ></iframe>

        {/* Game pillars */}
        <div className="mt-10">
          <div style={{ textAlign: "center" }}>
            <h2
              className={cn("relative text-7xl font-bold", orbitron.className)}
            >
              Game Pillars
            </h2>
          </div>
          <div className="grid grid-flow-col grid-cols-3 gap-24 mt-12 mb-12">
            <div style={{ textAlign: "center" }}>
              <h2
                style={{ color: "#5F7D8C" }}
                className={cn("relative text-4xl", orbitron.className)}
              >
                What
              </h2>
              <p className="mt-5 text-2xl">
                Explore a new galaxy full of remnants of an ancient civilization
                and establish your foothold.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2
                style={{ color: "#5F7D8C" }}
                className={cn("relative text-4xl", orbitron.className)}
              >
                How
              </h2>
              <p className="mt-5 text-2xl">
                Uncover Space Tiles and place your Starships to expand your influence.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2
                style={{ color: "#5F7D8C" }}
                className={cn("relative text-4xl", orbitron.className)}
              >
                Why
              </h2>
              <p className="mt-5 text-2xl">
                The more you control, the more ancient technology and
                infrastructure you can utilize to make your faction the
                powerhouse of a new era of human civilization.
              </p>
            </div>
          </div>
        </div>

        {/* Backstory */}
        <div style={{ textAlign: "center" }}>
          <h2 className={cn("relative text-7xl font-bold", orbitron.className)}>
            Backstory
          </h2>
          <p className="text-2xl mt-10 text-left indent-24">
            In the year 2237, humanity stands on the brink of becoming a Type
            1.5 civilization on the Kardashev Scale. Earth&apos;s technological
            advancements have reached unprecedented levels, with energy
            harnessing from the planet and near-space almost perfected. Yet, as
            resources dwindle and the population grows, the need for expansion
            becomes a priority.
          </p>
          <p className="text-2xl mt-5 text-left indent-24">
            Amidst this backdrop, the United Galactic Federation (UGF)
            has discovered a new galaxy, Andromis Major, just 30,000 light years
            away. A dwarf galaxy, Andromis Major is teeming with untapped 
            potential. There have also been reports of powerful relics from an 
            ancient alien civilization, that could grant untold power to those who claim
            them. You and 3 other factions have been sent by the UGF to colonize 
            this galaxy, and find these powerful relics. But with this new
            opportunity comes inevitable conflict. Each faction has its own 
            plans in mind for how to shape the future of Andromis Major, sparking
            fierce competition over who will come to dominate these 
            new <strong>Galactic Realms</strong>.
          </p>
        </div>
      </Suspense>
    </main>
  );
}
