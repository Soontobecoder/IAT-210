import { Suspense } from "react";

import Image from "next/image";

import bannerImg from "/public/game-board-banner.png";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

export function Banner() {
  return (
      <div className="w-full relative m-0 p-0">
        <Image src={bannerImg} alt="Game Board Banner" priority />
      </div>
  );
}
