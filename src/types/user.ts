export interface User {
  id: string;
  username: string;
  createdAt: Date;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginRequest) => Promise<boolean>;
  register: (credentials: RegisterRequest) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface StoredUser {
  id: string;
  username: string;
  password: string; // In a real app, this would be hashed
  createdAt: string;
} 