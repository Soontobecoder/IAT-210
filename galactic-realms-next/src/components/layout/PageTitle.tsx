import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

type PageTitleProps = {
  children: string;
};
export function PageTitle({ children }: PageTitleProps) {
  return (
<<<<<<< HEAD
    <div className="w-full flex flex-row items-center justify-center p-6">
      <h3
        className={cn(
          "text-4xl font-bold border-b-2 p-2 w-[30rem] flex flex-row items-center justify-center",
          orbitron.className
        )}
      >
        {children}
      </h3>
=======
    <div className='w-full flex flex-row items-center justify-center p-6'>
      <h3 className={cn(
        'text-7xl font-bold border-b-4 p-6 w-[50rem] flex flex-row items-center justify-center',
        orbitron.className
        )}>
          {children}
        </h3>
>>>>>>> 8f26b7c65f2deee54923c5dcbbe66488ace94cd0
    </div>
  );
}
