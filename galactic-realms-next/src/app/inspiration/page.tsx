import { Suspense } from "react";
import { cn } from "@/utils/cn";
import { orbitron } from "@/fonts";

import { Banner } from "./Banner";
import Card from "./Card";
import { Spinner } from "@radix-ui/themes";

export default function InspirationPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <div className="mt-12">
        <h2
          className={cn("relative text-7xl font-bold", orbitron.className)}
          style={{ borderBottom: "solid", paddingBottom: "40px" }}
        >
          Inspiration
        </h2>
      </div>
      <div className="grid grid-flow-col grid-cols-6">
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
    </main>
  );
}
