import { Suspense } from "react";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

import { PageTitle } from "@/components/layout/PageTitle";


const indentStyle = 'indent-10'

export default function InspirationPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Inspiration</PageTitle>
      <div className="flex flex-col items-center justify-start mb-10 w-[60rem]">
        <div className="w-full my-10">
          <p className={cn(
            'text-justify',
            indentStyle
          )}>
            Galactic Realms is a tile-placement board game that takes heavy
            inspiration from Carcassonne, Stellaris, and Cascadia. The 
            tile-placement and feature completion mechanics are adapted from 
            Carcassonne. We modified these mechanics by making the tiles 
            hexagonal instead of square, and by borrowing ideas from Cascadia, 
            such as using a tile-selection pool, to provide players with more 
            opportunity to strategize. Our Cosmic Tokens were based on the 
            Nature Tokens from Cascadia, but we added additional mechanics to 
            them, such as being used to power up Starships, or being used to 
            return a Starship to a player&apos;s supply. Lastly, the theme and 
            visual style of Galactic Realms is heavily influenced by the 
            aesthetics of Stellaris.
          </p>
        </div>

      {/* Carcassonne */}
      <div className="grid grid-cols-4 grid-flow-col gap-2 mt-10 mb-10 h-fit">
        <div
          className="col-start-1 col-span-2 row-span-3 mr-5"
          style={{ borderRight: "solid", paddingRight: "20px" }}
        >
          <img src="https://i.ebayimg.com/images/g/CDUAAOSwxohexUCw/s-l1600.jpg" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start gap-4">
          <h2
            className={cn("relative text-4xl border-b-[3px] w-full border-black", orbitron.className)}
          >
            Carcassonne
          </h2>
          <p className={cn(
            'text-justify',
          )}>
            Carcassonne is a clever tile-laying game. The southern French
            city of Carcassonne is famous for its unique roman and medieval
            fortifications. The players develop the area around Carcassonne and
            deploy their followers on the roads, in the cities, in the
            cloisters, and in the fields. The skill of the players to develop
            the area will determine who is victorious. The game is for ages 8
            and up and 2 to 5 players.
          </p>
        </div>
      </div>

      {/* Stellaris */}
      <div className="grid grid-cols-4 grid-flow-col gap-2 mb-10 mt-12">
        <div className="col-span-2 col-start-1 flex flex-col items-start justify-start gap-4">
          <h2
            className={cn("relative text-4xl w-full border-b-[3px] border-black", orbitron.className)}
          >
            Stellaris
          </h2>
        </div>
        <div className="row-span-2 col-start-1 col-span-2">
          <p className={cn(
            'text-justify',
          )}>
            Explore a galaxy full of wonders in this sci-fi grand strategy game
            from Paradox Development Studios. Interact with diverse alien races,
            discover strange new worlds with unexpected events and expand the
            reach of your empire. Each new adventure holds almost limitless
            possibilities.
          </p>
        </div>
        <div
          className="col-span-2 row-span-3 ml-5"
          style={{
            borderLeft: "solid",
            paddingLeft: "20px",
          }}
        >
          <img
            style={{ width: "400px", marginLeft: "auto" }}
            src="https://cf.geekdo-images.com/nvnrUR5YroWa72kqZyt4Tw__opengraph/img/MXJrFXA8pAJVDotnA_DZi42R_SY=/0x360:1900x1357/fit-in/1200x630/filters:strip_icc()/pic5978543.jpg"
          />
        </div>
      </div>

      {/* Cascadia */}
      <div className="grid grid-cols-4 grid-flow-col gap-2 mt-10 mb-10">
        <div
          className="col-start-1 col-span-2 row-span-3 mr-5"
          style={{ borderRight: "solid", paddingRight: "20px" }}
        >
          <img src="https://i.etsystatic.com/35571717/r/il/7dcc24/5593920077/il_570xN.5593920077_367j.jpg" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start gap-4">
          <h2
            className={cn("relative text-4xl border-b-[3px] w-full border-black", orbitron.className)}
          >
            Cascadia
          </h2>

          <p className={cn(
            'text-justify',
          )}>
            Take a journey to the Pacific Northwest as you compete to create the
            most harmonious ecosystem in Cascadia! Turns are simple - select a
            tile/token set and place each into your expanding ecosystem. Earn
            points by fulfilling wildlife goals and creating the largest habitat
            corridors. With variable scoring goals, each game of Cascadia brings
            a new spatial puzzle to your table!
          </p>
          
        </div>
      </div>
      </div>

    </main>
  );
}
