import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email?: string;
  user_metadata?: {
    role?: string;
    name?: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, password: string, adminKey: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        const storedUser = localStorage.getItem('auth_user');
        const storedToken = localStorage.getItem('auth_token');
        
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // Simple admin authentication
      const adminEmails = ['info@hr-q.com', 'shahidamin.tcb@gmail.com'];
      if (adminEmails.includes(email) && password === 'HRQ@Admin2025!') {
        const authUser = {
          id: 'user-' + Date.now(),
          email,
          user_metadata: { role: 'admin', name: email.split('@')[0] }
        };
        
        setUser(authUser);
        localStorage.setItem('auth_user', JSON.stringify(authUser));
        localStorage.setItem('auth_token', 'token-' + Date.now());
        
        return { success: true };
      }

      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: 'Network error during sign in' };
    }
  };

  const signUp = async (email: string, password: string, adminKey: string) => {
    try {
      // Simplified signup for admin users
      if (adminKey === 'HRQ@AdminKey2025!') {
        return { success: true };
      }
      
      return { success: false, error: 'Invalid admin key' };
    } catch (error) {
      return { success: false, error: 'Network error during admin signup' };
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('auth_user');
      localStorage.removeItem('auth_token');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getAccessToken = async () => {
    try {
      return localStorage.getItem('auth_token');
    } catch (error) {
      console.error('Error getting access token:', error);
      return null;
    }
  };

  const isAdmin = user?.user_metadata?.role === 'admin';

  const value = {
    user,
    loading,
    isAdmin,
    signIn,
    signUp,
    signOut,
    getAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};