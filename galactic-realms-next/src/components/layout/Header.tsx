import { orbitron } from '@/fonts';
import { cn } from '@/utils/cn';
import { Navbar } from './Navbar';
import Link from 'next/link';



export function Header() {
  return (
    <header className={cn(
      'w-full absolute px-8 h-20 border-b-2 flex flex-row justify-start items-center', 
      'gap-4',
      orbitron.className,
      )}>

      <div className={cn(
        'w-full h-full flex flex-row items-center justify-start',
        // 'border-2 border-red-500',
      )}>
        <h1 className={cn(
          'flex flex-row p-2 h-fit w-fit border-2 text-2xl font-bold mx-4',
          'hover:text-indigo-600 transition-all'
          )}>
            <Link href={'/'}>
              Galactic Realms
            </Link>
        </h1>
      </div>

      <div className={cn(
        'w-full h-full flex flex-row items-center justify-center',
        // 'border-2 border-red-500',
      )}>
        <Navbar />
      </div>
    </header>
  );
}
