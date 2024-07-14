
import Image from "next/image";

import { PageTitle } from "@/components/layout/PageTitle";
import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

import flowchart from '/public/flowchart/flowchart.jpg'

export default function FlowchartPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Flowchart</PageTitle>


      <Image src={flowchart} alt="Flowchart" priority />

    </main>
  );
}
