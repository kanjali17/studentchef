import React from 'react';
import { IconButton, useToast } from '@chakra-ui/react';
import { Star } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: string;
  cookTime: string;
}

interface FavoriteButtonProps {
  recipe: Recipe;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'solid' | 'outline';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  recipe, 
  size = 'sm', 
  variant = 'ghost' 
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const toast = useToast();
  const favorited = isFavorite(recipe.id);

  const handleToggle = () => {
    // Check if user is logged in
    if (!user) {
      toast({
        title: 'Please log in to favorite recipes',
        description: 'You need to be logged in to save recipes to your favorites',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    toggleFavorite(recipe);
    
    if (favorited) {
      toast({
        title: 'Removed from favorites',
        description: `${recipe.name} has been removed from your favorites`,
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Added to favorites! ⭐',
        description: `${recipe.name} has been added to your favorites`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <IconButton
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
      icon={<Star size={16} fill={favorited ? 'currentColor' : 'none'} />}
      size={size}
      variant={variant}
      colorScheme={favorited ? 'yellow' : 'gray'}
      onClick={handleToggle}
      _hover={{
        transform: 'scale(1.1)',
        color: favorited ? 'yellow.400' : 'yellow.500',
      }}
      transition="all 0.2s"
    />
  );
};

export default FavoriteButton; 