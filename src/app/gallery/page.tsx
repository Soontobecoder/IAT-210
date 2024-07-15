import { PageTitle } from "@/components/layout/PageTitle";
import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import gameImg1 from "/public/game-board-1.png";
import gameImg2 from "/public/game-board-2.png";
import gameImg3 from "/public/game-board-3.png";
import cosmicImg from "/public/cosmic-tile-space-ship.png";

export default function GalleryPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start py-24 w-full"
    >
      <PageTitle>Visual Gallery</PageTitle>
      <div className='w-[60rem] flex flex-col items-center justify-start'>
        
        <div className="items-center flex flex-col gap-5 justify-start my-10">

            <Image src={gameImg1} alt="Game Image One" className="w-full h-auto" />
            <Image src={gameImg2} alt="Game Image Two" className="w-full h-auto" />
         
            <Image src={gameImg3} alt="Game Image Three" className="w-full h-auto" />
            <Image src={cosmicImg} alt="Cosmic Image" className="w-full h-auto" />

        </div>

        <div
          className='w-full flex flex-col items-center justify-start aspect-[1/1.3]'>
          <iframe
            className="w-full h-full border-2 border-black"
            src="gallery/tile-gallery.pdf#view=fit"
            />
        </div>

      </div>

    </main>
  );
}
