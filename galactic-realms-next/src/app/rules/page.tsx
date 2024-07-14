import { PageTitle } from "@/components/layout/PageTitle";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

export default function RulesPage() {
  return (
    <main
      style={{
        marginLeft: "150px",
        marginRight: "150px",
        textAlign: "justify",
      }}
      className="flex min-h-screen flex-col justify-start py-24"
    >
      <PageTitle>Rules</PageTitle>
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
          </p>
        </div>

        {/* list of components */}
        <div>
          <ul className="pl-10">
            <li>1. Test</li>
            <li>2. Test</li>
            <li>3. Test</li>
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
          <p>
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
            Overview and goal
          </h2>
        </div>
        <div>
          <p>
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
          <p>
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
          <ul className="pl-10">
            <li>1. Test</li>
            <li>2. Test</li>
            <li>3. Test</li>
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

        {/* simple overview of features */}
        <div className="mb-4">
          <p className="pl-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>

        {/* space lane */}
        <div>
          <h3
            style={{ color: "#5F7D8C" }}
            className={cn("relative text-2xl pl-5 mb-2", orbitron.className)}
          >
            Space lane
          </h3>
          <ul className="pl-10">
            <li>- Test</li>
            <li>- Test</li>
            <li>- Test</li>
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
            Star system
          </h3>
          <ul className="pl-10">
            <li>- Test</li>
            <li>- Test</li>
            <li>- Test</li>
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
            Military station
          </h3>
          <ul className="pl-10">
            <li>- Test</li>
            <li>- Test</li>
            <li>- Test</li>
          </ul>
        </div>
      </div>

      {/* Game end and scoring */}
      <div className="grid grid-flow-row row-span-2 mb-12">
        <div>
          <h2
            style={{ color: "#5F7D8C" }}
            className={cn("relative text-4xl mb-5", orbitron.className)}
          >
            Game end and scoring
          </h2>
        </div>
        <div>
          <p>
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
          </p>
        </div>
      </div>

      <div 
        className='w-full flex flex-col items-center justify-start pt-24'>
        <iframe 
          className="w-[800px] h-[864px] border-2 border-black" 
          src="rules/rulebook.pdf"
          width="800" height="500">
        </iframe>
      </div>

    </main>
  );
}
