import { Suspense } from 'react'

import { Banner } from './Banner';
import { Spinner } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      
      <Suspense fallback={<Spinner/>}>
        <Banner />
      </Suspense>
      
    </main>
  );
}
