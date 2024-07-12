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
          <p style={{ textAlign: "justify" }}>
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

      {/* Carcassone */}
      <div className="grid grid-cols-6 grid-flow-col gap-2 mt-10 mb-10">
        <div
          className="col-start-2 col-span-2 row-span-3 mr-5"
          style={{ borderRight: "solid", paddingRight: "20px" }}
        >
          <img
            style={{ width: "400px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Carcassonne-game.jpg/220px-Carcassonne-game.jpg"
          />
        </div>
        <div className="col-span-2 ...">
          <h2 className={cn("relative text-4xl", orbitron.className)}>
            Carcassonne
          </h2>
        </div>
        <div className="row-span-2 col-span-2 ...">
          <p style={{ textAlign: "justify" }}>
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
          <p className="mt-5" style={{ textAlign: "justify" }}>
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

      {/* Second inspiration */}
      <div className="grid grid-cols-6 grid-flow-col gap-2 mt-12">
        <div className="col-span-2 col-start-2">
          <h2 className={cn("relative text-4xl", orbitron.className)}>
            Carcassonne
          </h2>
        </div>
        <div className="row-span-2 col-start-2 col-span-2 ...">
          <p style={{ textAlign: "justify" }}>
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
          <p className="mt-5" style={{ textAlign: "justify" }}>
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
        <div
          className="col-span-2 row-span-3 ml-5"
          style={{
            borderLeft: "solid",
            paddingLeft: "20px",
          }}
        >
          <img
            style={{ width: "400px", marginLeft: "auto" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Carcassonne-game.jpg/220px-Carcassonne-game.jpg"
          />
        </div>
      </div>
    </main>
  );
}
