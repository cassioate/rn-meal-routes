import { createContext, ReactNode, useState } from "react";

interface FavoritesContextProviderProps {
  children: ReactNode;
}

interface Props {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<Props>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const [ids, setIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setIds((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: string) => {
    setIds((prevIds) => prevIds.filter((i) => i !== id));
  };

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
