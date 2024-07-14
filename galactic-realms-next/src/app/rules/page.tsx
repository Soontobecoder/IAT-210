import { PageTitle } from "@/components/layout/PageTitle";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

export default function RulesPage() {
  return (
    <main
      style={{
        marginLeft: "150px",
        marginRight: "150px",
      }}
      className="flex min-h-screen flex-col justify-start py-24 items-center"
    >
      <PageTitle>Rules</PageTitle>

      <div 
        className='w-[50rem] flex flex-col items-start justify-start'
      >
        

        {/* Components */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Components
            </h2>
          </div>
          <div className="mb-5">
            <p>
              &emsp;The game box should include:
            </p>
          </div>

          {/* list of components */}
          <div>
            <ul className="pl-10 list-disc">
              <li>Brown Bag containing 80 Space Tiles</li>
              <li>Blue Bag containing 40 Cosmic Tokens</li>
              <li>6 Starships of each colour</li>
            </ul>
          </div>
        </div>

        {/* Setup */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Setup
            </h2>
          </div>
          <div>
            <p className='indent-16'>
              Each player chooses a colour, and takes the 6 Starships of that colour.
              From the 80 Space Tiles, there is one with a blue circle in the middle acting as a junction.
              Put it in the middle of the table as the starting tile. Place the remaining tiles back into the brown bag and
              shake the bag to shuffle the tiles. Draw 4 tiles from the brown bag and place them in a row on the table where
              everyone can see and reach them. This is the Tile-Selection Pool.
            </p>
          </div>
        </div>

        {/* Overview and goal */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Overview and Goal
            </h2>
          </div>
          <div>
          <p className='indent-16'>
              Before diving into the explanation of this game, you should know what the goal is in Galactic Realms.
              One after the other, players will place tiles from the Tile Pool. This is how, one tile at a time,
              a map of Star Systems and Space Lanes will be created. You may place your Starships on these tiles,
              where they will allow you to score as many points as possible. Points are not only earned during the game,
              but also at the very end. After all tiles are placed, endgame scoring is calculated and the player with the
              highest score is proclaimed the winner.
            </p>
          </div>
        </div>

        {/* Gameplay */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Gameplay
            </h2>
          </div>
          <div className="mb-5">
            <p className='indent-16'>
              A game of Galactic Realms is played in clockwise order.
              Starting with the first player, the current player does the following
              actions in the order listed below, after which it is the next player’s turn,
              and so on and so forth.
            </p>
          </div>

          {/* game steps  */}
          <div>
            <h3
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-2xl pl-5 mb-2", orbitron.className)}
            >
              Actions :
            </h3>
            <ul className="pl-10 list-decimal">
              <li className="py-5"><b>Placing a Space Tile</b>: The player must select exactly 1 Space Tile from the Tile-Selection Pool and place it face up,
                connected to a tile which is already on the board. The tile must be placed such that the features which touch that side match.
                Eg. A Space Lane side cannot be connected to a Star System side or an empty space side. It may only be connected to a Space Lane side,
                such that the Space Lane is contiguous across the tiles. Empty space sides can be placed such that they connect to empty space sides. </li>
              <li className="py-5"><b>Placing a Starship:</b> The player may place a Starship from their supply onto a valid feature of the Space Tile that they have just placed.
                Starships may be placed on Star Systems, Space Lanes, and Military Stations, but not on empty space.Test</li>
              <li className="py-5"><b>Scoring a feature:</b> All players must score all features completed by the placement of the Space Tile. (See scoring)</li>
              <li className="py-5"><b>Use Cosmic Token:</b> During a player’s turn, they may use a Cosmic token to do one of the following:</li>
              <ul className="pl-10 list-disc">
                <li>Return a Starship from the board to their supply.</li>
                <li>Set aside any number of Space tiles, reveal new tiles for the Tile-Selection pool, then reshuffle the set-aside tiles back into the bag.</li>
                <li>Power up a Starship you control on the board by placing the Cosmic Token beneath it. A powered up Starship counts as 2 Starships for
                  the purpose of contesting control of features.</li>
              </ul>
              <li className="py-5"><b>Draw Tile:</b> Draw a Space Tile from the brown bag and place it in the empty spot in the Tile-Selection Pool. If there
                are no Space Tiles left in the brown bag, do nothing and proceed to the next player’s turn.</li>


            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-flow-row mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Features
            </h2>
          </div>

          {/* space lane */}
          <div>
            <h3
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-2xl pl-5 mb-2", orbitron.className)}
            >
              Space Lane
            </h3>
            <ul className="pl-10 list-disc">
              <li>When you place a tile with a Space lane, you must have it connected to a tile such that the lanes are visually connected.</li>
              <li>After placing the tile, you may place a Starship on one of that tile’s Space Lane segments, but only if the entire road is unoccupied by another Starship.</li>
              <li>When both ends of a Space Lane are closed, that Space Lane is completed and scored. The end of a Space Lane is closed when it meets a Star System, a Military Station,
                junction or it loops onto itself by meeting the other end. When scoring a road, each tile of that road grants you 1 point.
                After each scoring, return to your supply the Starship that was just scored.</li>
            </ul>
          </div>

          {/* star system */}
          <div>
            <h3
              style={{ color: "#5F7D8C" }}
              className={cn(
                "relative text-2xl pl-5 mt-2 mb-2",
                orbitron.className
              )}
            >
              Star System
            </h3>
            <ul className="pl-10 list-disc">
              <li>When you place a tile with a Star System on it, you must have it connected to a tile such that at least one is visually connected similarly to the Space Lanes.</li>
              <li>After placing the tile, you may place a Starship on that tile’s space system, but only if the entire station is unoccupied by another Starship.</li>
              <li>A Star System is completed when it is completely enclosed and there are no gaps inside the Star System. If you have a Starship in the Star System, you are the player to score it.
                Each tile in a completed Star System is worth 2 points and each Supernova in a Star System scores 2 points. As usual, the Starship that was in the scored feature returns to your supply.</li>
            </ul>
          </div>

          {/* military station */}
          <div>
            <h3
              style={{ color: "#5F7D8C" }}
              className={cn(
                "relative text-2xl pl-5 mt-2 mb-2",
                orbitron.className
              )}
            >
              Military Station
            </h3>
            <ul className="pl-10 list-disc">
              <li>A tile with a Military Station can be placed anywhere as long as any other features on the tile&apos;s edges, such as Space Lanes,
                are connected with other tiles, following the rules for those features.</li>
              <li>After placing the tile, you may place a Starship on that tile’s Military Station.</li>
              <li>After all 6 tiles directly adjacent to a Military Station tile are placed, you score 7 points, 1 for each tile adjacent to the Military Station, and 1 for the Military Station itself.
                Then return your Starship to your supply.</li>
            </ul>
          </div>
        </div>

        {/* Contesting control */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Contesting Control
            </h2>
          </div>
          <div>
            
            <p className='indent-16'>
              Space Lanes and Star Systems can only have multiple Starships on them if those Starships started out on separate features, and the placement of a
              tile then connected those previously disconnected features.
            </p>
            
            <p className='indent-16'>
              During scoring, in the case where more than one player has Starships on a feature, the player with the most Starships on that feature is awarded all of
              the points for it, and all other players are awarded nothing. If two or more players are tied for the most Starships on the feature, those players are all awarded full points,
              while all other players are awarded nothing.
            </p>
            
            <p className='indent-16'>
              For the sake of determining how many Starships a player has on the feature, powered up Starships (those with a Cosmic Token beneath them) are worth 2 Starships.
              For example, if the Blue player has 1 Starship on a feature that is being scored, while the Red player has one powered up Starship on the feature. Since the Red player’s
              Starship is worth 2, the Red player wins all of the points for the feature and the Blue player wins none. If the Blue player has 2 Starships on the feature, and the Red
              player has one powered up Starship, then the Red and Blue player would be tied, so they would both be awarded the full points for the feature.
            </p>
          </div>
        </div>

        {/* placing star ships */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Placing Starships
            </h2>
          </div>
          <div>
            <p className='indent-16'>
              You may only place a Starship on your turn, after placing a Space Tile, and only onto a valid feature on that Space Tile. You may not place it on a feature if that
              feature already has a Starship on it. All contiguous features are considered the same feature for determining whether a feature already has a Starship on it or not.
            </p>
          </div>
        </div>

        {/* Getting cosmic tokens */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Getting Cosmic Tokens
            </h2>
          </div>
          <div>
            <p className='indent-16'>
              If you complete a feature (Space Lane, Star System, Military Station), you gain a Cosmic Token regardless of whether you scored any points for that feature.
              If there are no more Cosmic Tokens to give out, use another item as a substitute.
            </p>
          </div>
        </div>

        {/* Running out of starships */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Running Out of Starships
            </h2>
          </div>
          <div>
          <p className='indent-16'>
              You may only place Starships if you have any remaining. If you run out of Starships you must wait for features with your Starships to
              be scored to have them return to your supply, or spend a Cosmic Token to return one.
            </p>
          </div>
        </div>

        {/* Game end and scoring */}
        <div className="grid grid-flow-row row-span-2 mb-12">
          <div>
            <h2
              style={{ color: "#5F7D8C" }}
              className={cn("relative text-4xl mb-5", orbitron.className)}
            >
              Game End and Final Scoring
            </h2>
          </div>
          <div>
          <p className='indent-16'>
              The game ends immediately after the turn of the player who placed the last tile. Then,
              players proceed to perform the final scoring, after which the winner will be known to all!
            </p>
            <p className='indent-16'>
              Once the game is over, all incomplete features which have a Starship on them are scored following slightly modified scoring rules:
            </p>
            <ul className="pl-10 list-disc">
              <li>Each incomplete Space Lane is worth 1 point per tile, just like during the game.</li>
              <li>Each incomplete Star System is worth 1 point per tile and each Supernova in it is worth 1 point. Thus, incomplete Star Systems are worth half points.</li>
              <li>Each unfinished Military Station scores 1 point for each tile directly adjacent to it, plus 1 point for the tile itself. For example, if the Military Station was 1 tile away from being complete (5 adjacent tiles),
                then it would be scored for 6 points, 1 point for the centre tile, and 1 point for each adjacent tile.</li>
              <li>Each Cosmic Token remaining in a player’s supply scores for 1 point.
                Once the final score is known, the winner is the player with the most points.
              </li>
            </ul>
          </div>
        </div>


        <h2
          style={{ color: "#5F7D8C" }}
          className={cn("relative text-4xl mb-5", orbitron.className)}
        >
          Thank You For Playing Galactic Realms!
        </h2>


        <div
          className='w-full flex flex-col items-center justify-start pt-24'>
          <iframe
            className="w-[800px] h-[864px] border-2 border-black"
            src="rules/rulebook.pdf"
            width="800" height="500">
          </iframe>
        </div>


      </div>

    </main>
  );
}
