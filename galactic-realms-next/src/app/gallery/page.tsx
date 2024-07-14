import { PageTitle } from "@/components/layout/PageTitle";
import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

export default function GalleryPage() {
  return (
    <main
      style={{ marginLeft: "80px", marginRight: "80px" }}
      className="flex min-h-screen flex-col items-center justify-start p-24"
    >
      <PageTitle>Visual Gallery</PageTitle>
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
