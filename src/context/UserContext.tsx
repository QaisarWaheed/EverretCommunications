import { createContext, useContext, useState } from "react";

interface User {
  email: string;
  password: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (data: User) => setUser(data);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User should be inside context provider");
  }
  return context;
};
