import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth on mount
    const storedToken = localStorage.getItem('admin_token');
    const storedUser = localStorage.getItem('admin_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Validate admin emails
      const adminEmails = ['info@hr-q.com', 'shahidamin.tcb@gmail.com'];
      if (!adminEmails.includes(email)) {
        return { success: false, error: 'Invalid admin credentials' };
      }

      // Simple authentication for admin access
      if (password === 'HRQ@Admin2025!' && adminEmails.includes(email)) {
        const authUser = {
          id: 'admin-' + Date.now(),
          email: email,
          role: 'admin'
        };
        
        const authToken = 'token-' + btoa(email + ':' + Date.now());
        
        setToken(authToken);
        setUser(authUser);
        
        // Store in localStorage
        localStorage.setItem('admin_token', authToken);
        localStorage.setItem('admin_user', JSON.stringify(authUser));
        
        return { success: true };
      }

      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}