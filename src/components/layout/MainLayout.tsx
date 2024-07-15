import { ReactNode } from 'react'
import { Header } from './Header'


type LayoutProps = {
  children: ReactNode,
}
export function MainLayout({children}: LayoutProps) {
  return (
    <>
      <Header/>
      <>
        {children}
      </>
    </>
  );
}
