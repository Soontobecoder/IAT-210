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
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Visual Gallery</PageTitle>

        <div className="items-center flex flex-wrap gap-5 justify-start p-24">

            <Image src={gameImg1} alt="Game Image One" className="w-[600px] h-auto" />
            <Image src={gameImg2} alt="Game Image Two" className="w-[600px] h-auto" />
         
            <Image src={gameImg3} alt="Game Image Three" className="w-[600px] h-auto" />
            <Image src={cosmicImg} alt="Cosmic Image" className="w-[600px] h-auto" />

        </div>


      <div
        className='w-full flex flex-col items-center justify-start'>
        <iframe
          className="w-[800px] h-[864px] border-2 border-black"
          src="gallery/tile-gallery.pdf"
          width="800" height="500">
        </iframe>
      </div>



    </main>
  );
}
