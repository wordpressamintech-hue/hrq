import { createContext, useContext, useState, ReactNode } from 'react';

type PageId = 'home' | 'about' | 'services' | 'industries' | 'case-studies' | 'insights' | 'careers' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'admin';

interface RouterContextType {
  currentPage: PageId;
  navigate: (page: PageId) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function Router({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    // Update URL without page refresh for better UX
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
}