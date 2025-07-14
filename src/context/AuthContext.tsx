import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginRequest, RegisterRequest, AuthContextType, StoredUser } from '../types/user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser({
        id: userData.id,
        username: userData.username,
        createdAt: new Date(userData.createdAt),
      });
    }
    setIsLoading(false);
  }, []);

  const register = async (credentials: RegisterRequest): Promise<boolean> => {
    try {
      // Validate passwords match
      if (credentials.password !== credentials.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Validate password length
      if (credentials.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Check if username already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.find((u: StoredUser) => u.username === credentials.username);
      
      if (userExists) {
        throw new Error('Username already exists');
      }

      // Create new user
      const newUser: StoredUser = {
        id: Date.now().toString(),
        username: credentials.username,
        password: credentials.password, // In a real app, this would be hashed
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // Set current user
      const userData: User = {
        id: newUser.id,
        username: newUser.username,
        createdAt: new Date(newUser.createdAt),
      };
      
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));

      return true;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const login = async (credentials: LoginRequest): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: StoredUser) => 
        u.username === credentials.username && u.password === credentials.password
      );

      if (!user) {
        throw new Error('Invalid username or password');
      }

      const userData: User = {
        id: user.id,
        username: user.username,
        createdAt: new Date(user.createdAt),
      };

      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));

      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 