import { Suspense } from "react";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

import { PageTitle } from "@/components/layout/PageTitle";

export default function InspirationPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Inspiration</PageTitle>
      <div className="grid grid-flow-col grid-cols-6 mb-10">
        <div className="col-start-2 col-span-4 mt-10">
          <p style={{ textAlign: "justify", fontSize: "16px" }}>
            Galactic Realms is a tile placing board game that took heavy
            inspiration from Carcassonne, Stellaris and Cascadia. The tile
            placement system, as well as the space lanes and star systems are
            adaptations of Carcassonne mechanics. We mixed those mechanics with
            the hexagonal tiles of Cascadia and the space aesthetics of
            Stellaris. We then built on top of the combination of concepts by
            adding our own new mechanics in the form of cosmic tokens which
            augment the mechanics we adapted from the other games
          </p>
        </div>
      </div>

      {/* Carcassone */}
      <div className="grid grid-cols-6 grid-flow-col gap-2 mt-10 mb-10">
        <div
          className="col-start-2 col-span-2 row-span-3 mr-5"
          style={{ borderRight: "solid", paddingRight: "20px" }}
        >
          <img src="https://i.ebayimg.com/images/g/CDUAAOSwxohexUCw/s-l1600.jpg" />
        </div>
        <div className="col-span-2 ...">
          <h2
            className={cn("relative text-4xl", orbitron.className)}
            style={{ borderBottom: "solid" }}
          >
            Carcassonne
          </h2>
        </div>
        <div className="row-span-2 col-span-2 ...">
          <p style={{ textAlign: "justify", fontSize: "18px" }}>
            The Carcassonne is a clever tile-laying game. The southern French
            city of Carcassonne is famous for its unique roman and medieval
            fortifications. The players develop the area around Carcassonne and
            deploy their followers on the roads, in the cities, in the
            cloisters, and in the fields. The skill of the players to develop
            the area will determine who is victorious. The game is for ages 8
            and up and 2 to 5 players.
          </p>
          {/* <p className="mt-5" style={{ textAlign: "justify" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p> */}
        </div>
      </div>

      {/* Stellaris */}
      <div className="grid grid-cols-6 grid-flow-col gap-2 mb-10 mt-12">
        <div className="col-span-2 col-start-2">
          <h2
            className={cn("relative text-4xl", orbitron.className)}
            style={{ borderBottom: "solid" }}
          >
            Stellaris (Aesthetics)
          </h2>
        </div>
        <div className="row-span-2 col-start-2 col-span-2 ...">
          <p style={{ textAlign: "justify", fontSize: "18px" }}>
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
      <div className="grid grid-cols-6 grid-flow-col gap-2 mt-10 mb-10">
        <div
          className="col-start-2 col-span-2 row-span-3 mr-5"
          style={{ borderRight: "solid", paddingRight: "20px" }}
        >
          <img src="https://i.etsystatic.com/35571717/r/il/7dcc24/5593920077/il_570xN.5593920077_367j.jpg" />
        </div>
        <div className="col-span-2 ...">
          <h2
            className={cn("relative text-4xl", orbitron.className)}
            style={{ borderBottom: "solid" }}
          >
            Cascadia
          </h2>
        </div>
        <div className="row-span-2 col-span-2 ...">
          <p style={{ textAlign: "justify", fontSize: "18px" }}>
            Take a journey to the Pacific Northwest as you compete to create the
            most harmonious ecosystem in Cascadia! Turns are simple - select a
            tile/token set and place each into your expanding ecosystem. Earn
            points by fulfilling wildlife goals and creating the largest habitat
            corridors. With variable scoring goals, each game of Cascadia brings
            a new spatial puzzle to your table!
          </p>
          {/* <p className="mt-5" style={{ textAlign: "justify" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p> */}
        </div>
      </div>
    </main>
  );
}
