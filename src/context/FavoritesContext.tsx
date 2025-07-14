import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: string;
  cookTime: string;
  time?: string; // Optional for backward compatibility
}

interface FavoritesContextType {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  toggleFavorite: (recipe: Recipe) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  // Load favorites from localStorage on app start
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe: Recipe) => {
    // Ensure consistent data structure
    const normalizedRecipe = {
      id: recipe.id,
      name: recipe.name,
      category: recipe.category,
      description: recipe.description,
      difficulty: recipe.difficulty,
      cookTime: recipe.cookTime || recipe.time || '30 min'
    };
    
    setFavorites(prev => {
      if (!prev.find(fav => fav.id === normalizedRecipe.id)) {
        return [...prev, normalizedRecipe];
      }
      return prev;
    });
  };

  const removeFavorite = (recipeId: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== recipeId));
  };

  const isFavorite = (recipeId: string): boolean => {
    return favorites.some(fav => fav.id === recipeId);
  };

  const toggleFavorite = (recipe: Recipe) => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 