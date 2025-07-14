import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Container,
  Card,
  CardBody,
  useColorModeValue,
  Badge,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
  List,
  ListItem,
  ListIcon,
  Button,
  useToast,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useShoppingList } from '../context/ShoppingListContext';
import { recipeDatabase } from '../data/recipeDatabase';
import FavoriteButton from '../components/FavoriteButton';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const FavoritesPage: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const { favorites, removeFavorite } = useFavorites();
  const { addItems } = useShoppingList();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const toast = useToast();

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id);
  };

  const handleRecipeClick = (favoriteRecipe: any) => {
    // Find the complete recipe data from the database
    const completeRecipe = recipeDatabase.find(recipe => recipe.id === favoriteRecipe.id);
    if (completeRecipe) {
      setSelectedRecipe(completeRecipe);
      onOpen();
    } else {
      // Fallback to favorite data if not found in database
      setSelectedRecipe(favoriteRecipe);
      onOpen();
    }
  };

  const handleAddToShoppingList = () => {
    if (selectedRecipe && selectedRecipe.ingredients) {
      addItems(selectedRecipe.ingredients, selectedRecipe.name);
      toast({
        title: 'Added to Shopping List!',
        description: `${selectedRecipe.ingredients.length} ingredients added from ${selectedRecipe.name}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddSingleIngredient = (ingredient: string) => {
    addItems([ingredient], selectedRecipe?.name || 'Unknown Recipe');
    toast({
      title: 'Added to Shopping List!',
      description: `${ingredient} added from ${selectedRecipe?.name}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" bg="brand.50" py={8}>
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="lg" color="purple.600">
              My Favorites
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Your saved recipes and favorite dishes
            </Text>
          </VStack>

          {/* Favorites Grid */}
          {favorites.length > 0 ? (
            <VStack spacing={6} align="stretch">
              {favorites.map((favorite, index) => (
                <MotionCard
                  key={favorite.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  bg={cardBg}
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="xl"
                  boxShadow="lg"
                  whileHover={{ y: -2, boxShadow: "xl" }}
                  cursor="pointer"
                  onClick={() => handleRecipeClick(favorite)}
                >
                  <CardBody p={6}>
                    <HStack justify="space-between" align="start">
                      <VStack align="start" spacing={3} flex={1}>
                        <VStack align="start" spacing={2}>
                          <Heading size="md" color="brand.600">
                            {favorite.name}
                          </Heading>
                          <HStack spacing={2}>
                            <Badge colorScheme="purple" variant="subtle">
                              {favorite.category}
                            </Badge>
                            <Badge colorScheme="green" variant="subtle">
                              {favorite.difficulty}
                            </Badge>
                            <Badge colorScheme="blue" variant="subtle">
                              {favorite.cookTime}
                            </Badge>
                          </HStack>
                        </VStack>
                        <Text color="gray.600" fontSize="sm">
                          {favorite.description}
                        </Text>
                      </VStack>
                      <IconButton
                        aria-label="Remove from favorites"
                        icon={<Trash2 size={16} />}
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFavorite(favorite.id);
                        }}
                        _hover={{ transform: 'scale(1.1)' }}
                        transition="transform 0.2s"
                      />
                    </HStack>
                  </CardBody>
                </MotionCard>
              ))}
            </VStack>
          ) : (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              textAlign="center"
              py={12}
            >
              <VStack spacing={4}>
                <Box fontSize="4xl">💔</Box>
                <Heading size="md" color="gray.500">
                  No favorites yet
                </Heading>
                <Text color="gray.500">
                  Start exploring recipes and save your favorites here!
                </Text>
              </VStack>
            </MotionBox>
          )}
        </MotionBox>
      </Container>

      {/* Recipe Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl" maxH="90vh" overflow="hidden">
          <ModalHeader bg="orange.50" borderBottom="1px" borderColor="orange.200">
            <Flex align="center" gap={3}>
              <Text fontSize="3xl">{selectedRecipe?.image}</Text>
              <VStack align="start" spacing={1} flex={1}>
                <Heading size="lg">{selectedRecipe?.name}</Heading>
                <Text color="gray.600" fontSize="sm">
                  {selectedRecipe?.restaurant && `Copycat of ${selectedRecipe.restaurant}`}
                </Text>
              </VStack>
              {selectedRecipe && (
                <FavoriteButton 
                  recipe={{
                    id: selectedRecipe.id,
                    name: selectedRecipe.name,
                    category: selectedRecipe.category,
                    description: selectedRecipe.description,
                    difficulty: selectedRecipe.difficulty,
                    cookTime: selectedRecipe.time || selectedRecipe.cookTime || '30 min'
                  }}
                  size="md"
                />
              )}
            </Flex>
          </ModalHeader>
          
          <ModalCloseButton />
          
          <ModalBody p={6} overflowY="auto">
            {selectedRecipe && (
              <VStack spacing={6} align="stretch">
                {/* Quick Info */}
                <HStack spacing={4} justify="center">
                  <Badge colorScheme="green" variant="solid" px={4} py={2}>
                    ⏱️ {selectedRecipe.time}
                  </Badge>
                  <Badge colorScheme="blue" variant="solid" px={4} py={2}>
                    📊 {selectedRecipe.difficulty}
                  </Badge>
                  <Badge colorScheme="purple" variant="solid" px={4} py={2}>
                    💰 {selectedRecipe.cost}
                  </Badge>
                  <Badge colorScheme="red" variant="solid" px={4} py={2}>
                    ⭐ {selectedRecipe.rating}/5
                  </Badge>
                </HStack>

                {/* Description */}
                <Box>
                  <Heading size="md" mb={3}>Description</Heading>
                  <Text color="gray.700">{selectedRecipe.description}</Text>
                </Box>

                {/* Ingredients */}
                <Box>
                  <Heading size="md" mb={3}>Ingredients</Heading>
                  <VStack align="stretch" spacing={2}>
                    {selectedRecipe.ingredients && selectedRecipe.ingredients.map((ingredient: string, index: number) => (
                      <Flex key={index} justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                        <Text>• {ingredient}</Text>
                        <Button
                          size="sm"
                          colorScheme="orange"
                          variant="ghost"
                          onClick={() => handleAddSingleIngredient(ingredient)}
                        >
                          Add to List
                        </Button>
                      </Flex>
                    ))}
                  </VStack>
                </Box>

                {/* Instructions */}
                <Box>
                  <Heading size="md" mb={3}>Instructions</Heading>
                  <VStack align="stretch" spacing={3}>
                    {selectedRecipe.instructions && selectedRecipe.instructions.map((instruction: string, index: number) => (
                      <Flex key={index} gap={3}>
                        <Badge colorScheme="orange" variant="solid" borderRadius="full" px={3} py={1}>
                          {index + 1}
                        </Badge>
                        <Text flex={1}>{instruction}</Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>

                {/* Pro Tips */}
                {selectedRecipe.tips && selectedRecipe.tips.length > 0 && (
                  <Box>
                    <Heading size="md" mb={3}>💡 Pro Tips</Heading>
                    <VStack align="stretch" spacing={2}>
                      {selectedRecipe.tips.map((tip: string, index: number) => (
                        <Flex key={index} gap={2} p={3} bg="orange.50" borderRadius="md">
                          <Text color="red.500">❤️</Text>
                          <Text>{tip}</Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                )}

                {/* Nutrition Facts */}
                {selectedRecipe.nutrition && (
                  <Box>
                    <Heading size="md" mb={3}>Nutrition Facts</Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                      <Box p={4} bg="gray.50" borderRadius="md" textAlign="center">
                        <Text fontWeight="bold" color="gray.600">Calories</Text>
                        <Text fontSize="xl" fontWeight="bold">{selectedRecipe.nutrition.calories}</Text>
                      </Box>
                      <Box p={4} bg="gray.50" borderRadius="md" textAlign="center">
                        <Text fontWeight="bold" color="gray.600">Protein</Text>
                        <Text fontSize="xl" fontWeight="bold">{selectedRecipe.nutrition.protein}g</Text>
                      </Box>
                      <Box p={4} bg="gray.50" borderRadius="md" textAlign="center">
                        <Text fontWeight="bold" color="gray.600">Fat</Text>
                        <Text fontSize="xl" fontWeight="bold">{selectedRecipe.nutrition.fat}g</Text>
                      </Box>
                      <Box p={4} bg="gray.50" borderRadius="md" textAlign="center">
                        <Text fontWeight="bold" color="gray.600">Carbs</Text>
                        <Text fontSize="xl" fontWeight="bold">{selectedRecipe.nutrition.carbs}g</Text>
                      </Box>
                    </Grid>
                  </Box>
                )}

                <Divider />

                {/* Add to Shopping List Button */}
                {selectedRecipe.ingredients && (
                  <Button
                    size="lg"
                    colorScheme="orange"
                    onClick={handleAddToShoppingList}
                    leftIcon={<Text>🛒</Text>}
                  >
                    Add All Ingredients to Shopping List
                  </Button>
                )}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FavoritesPage; 