import { Suspense } from "react";

import Image from "next/image";

import bannerImg from "/public/game-board-banner.png";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

export function Banner() {
  return (
    <div className="w-screen relative">
      <div className="w-screen relative">
        <Image src={bannerImg} alt="Game Board Banner" priority />
      </div>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          // 'border-2 border-red-500',
        )}
      >
        <h2
          className={cn(
            "relative text-white text-7xl font-bold scale-150",
            orbitron.className
          )}
        >
          Galactic Realms
        </h2>
      </div>
    </div>
  );
}
