import { PageTitle } from "@/components/layout/PageTitle";
import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

const pdfs = [
  {
    src: "analysis/quantitative-analysis.pdf"
  },
  {
    src: "analysis/dilemmas-and-trade-offs.pdf"
  },
  // {
  //   src: ""
  // },
  // {
  //   src: ""
  // },
];

export default function AnalysisPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start py-24"
    >
      <PageTitle>Analysis</PageTitle>

      <div 
        className='w-[60rem] flex flex-col items-center justify-start gap-4'>

        {pdfs.map(({src}) => (
          <div
          key={src}
          className='w-full flex flex-col items-center justify-start aspect-[1/1.3]'>
          <iframe 
            className="w-full h-full border-2 border-black" 
            src={`${src}#view=fit`}
            width="800" height="500"
            />
          </div>
         ))}

      </div>


    </main>
  );
}
