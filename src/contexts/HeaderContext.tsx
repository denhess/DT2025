// headerContext.tsx
"use client";
import { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  isDark: false,
  setIsDark: () => {},
});

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <HeaderContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </HeaderContext.Provider>
  );
}

export const useHeader = () => useContext(HeaderContext);