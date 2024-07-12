import { orbitron } from '@/fonts';
import { cn } from '@/utils/cn';



export function Header() {
  return (
    <header className={cn('w-full absolute px-4 h-20 border-b-2 flex flex-row justify-start items-center', orbitron.className)}>
      <h1 className={cn('flex flex-row p-2 h-fit w-fit border-2 text-2xl font-bold')}>
        Galactic Realms
      </h1>
    </header>
  );
}
