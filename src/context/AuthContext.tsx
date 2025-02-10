'use client';

import { createContext, useContext, useState } from 'react';

//사용자 정보 타입 정의
interface User {
  useId: string;
  name: string;
  email: string;
  location: string[];
  temperature: string;
}

//AuthContextType 정의
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (useInfo: User) => void;
  logout: () => void;
}

//context 생성
const authContext = createContext<AuthContextType | undefined>(undefined);

//Provider 컴포넌트
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({ useId: '', name: '', email: '', location: [''], temperature: '' });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (userInfo: User) => {
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
      <authContext.Provider value={{ user, isLoggedIn, login, logout }}>{children}</authContext.Provider>
    </>
  );
}

// AuthContext를 사용하기 위한 Custom hook
export function useAuth() {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
