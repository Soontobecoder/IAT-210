'use client'

import { Theme } from '@radix-ui/themes';
import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode,
};
export function ThemeProvider({children}: ProviderProps) {
  return (
    <>
      <Theme>
        {children}
      </Theme>
    </>
  )
}
