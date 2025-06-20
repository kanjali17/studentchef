import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ShoppingListItem {
  id: string;
  name: string;
  recipe: string;
  addedAt: Date;
  checked: boolean;
}

interface ShoppingListContextType {
  items: ShoppingListItem[];
  addItems: (ingredients: string[], recipeName: string) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  clearList: () => void;
  clearChecked: () => void;
}

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (context === undefined) {
    throw new Error('useShoppingList must be used within a ShoppingListProvider');
  }
  return context;
};

interface ShoppingListProviderProps {
  children: ReactNode;
}

export const ShoppingListProvider: React.FC<ShoppingListProviderProps> = ({ children }) => {
  const [items, setItems] = useState<ShoppingListItem[]>([]);

  // Load items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('shoppingList');
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        // Convert string dates back to Date objects
        const itemsWithDates = parsedItems.map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        }));
        setItems(itemsWithDates);
      } catch (error) {
        console.error('Error loading shopping list from localStorage:', error);
      }
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItems = (ingredients: string[], recipeName: string) => {
    const newItems: ShoppingListItem[] = ingredients.map((ingredient, index) => ({
      id: `${recipeName}-${ingredient}-${Date.now()}-${index}`,
      name: ingredient,
      recipe: recipeName,
      addedAt: new Date(),
      checked: false
    }));

    setItems(prevItems => [...prevItems, ...newItems]);
  };

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const toggleItem = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const clearList = () => {
    setItems([]);
  };

  const clearChecked = () => {
    setItems(prevItems => prevItems.filter(item => !item.checked));
  };

  const value: ShoppingListContextType = {
    items,
    addItems,
    removeItem,
    toggleItem,
    clearList,
    clearChecked
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
}; 