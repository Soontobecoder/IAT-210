
import Image from "next/image";

import { PageTitle } from "@/components/layout/PageTitle";
import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

import flowchart from '/public/flowchart/flowchart.jpg'

export default function FlowchartPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start py-24 w-full"
    >
      <PageTitle>Flowchart</PageTitle>

      <div className='w-[60rem] flex flex-col items-center justify-start'>
        <Image src={flowchart} alt="Flowchart" priority 
          className='w-full'
        />
      </div>

    </main>
  );
}
