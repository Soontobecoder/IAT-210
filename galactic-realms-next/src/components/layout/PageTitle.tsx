import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

type PageTitleProps = {
  children: string;
};
export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="w-full flex flex-row items-center justify-center p-6">
      <h3
        className={cn(
          "text-4xl font-bold border-b-2 p-2 w-[30rem] flex flex-row items-center justify-center",
          orbitron.className
        )}
      >
        {children}
      </h3>
    </div>
  );
}
