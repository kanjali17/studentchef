import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Grid,
  Card,
  CardBody,
  CardHeader,
  Button,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Divider,
  Container,
  SimpleGrid,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { recipeDatabase, getRecipesByRestaurant, searchRecipes, restaurants } from '../data/recipeDatabase';
import { useShoppingList } from '../context/ShoppingListContext';
import FavoriteButton from '../components/FavoriteButton';

const MotionCard = motion(Card);

const RestaurantDupesPage = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const { items, addItems } = useShoppingList();
  const toast = useToast();

  // Background gradient
  const bgGradient = 'linear(to-br, orange.50, red.50, yellow.50)';

  // Filter recipes based on restaurant and search
  const filteredRecipes = selectedRestaurant
    ? getRecipesByRestaurant(selectedRestaurant)
    : recipeDatabase.filter(recipe => recipe.category === 'Restaurant Dupes');

  const searchResults = searchQuery
    ? searchRecipes(searchQuery).filter(recipe => recipe.category === 'Restaurant Dupes')
    : filteredRecipes;

  const handleRecipeClick = (recipe: any) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  const handleAddToShoppingList = () => {
    if (selectedRecipe) {
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

  const getRestaurantMessage = () => {
    const messages = [
      "Time to recreate some magic! ✨",
      "Your kitchen is about to become a restaurant! 🍽️",
      "Let's make it better than the original! 🔥",
      "Cooking goals: unlocked! 🎯",
      "Your taste buds are in for a treat! 😋"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <Box minH="100vh" bgGradient={bgGradient}>
      {/* Navigation */}
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        p={4}
        justify="space-between"
        align="center"
        bg="white"
        boxShadow="sm"
      >
        <Button
          onClick={() => navigate('/main')}
          colorScheme="orange"
          variant="ghost"
          leftIcon={<Text>←</Text>}
        >
          Back
        </Button>
        
        <HStack spacing={4}>
          <Badge colorScheme="orange" variant="solid">
            🍽️ Restaurant Dupes
          </Badge>
          <Button
            onClick={() => navigate('/shopping-list')}
            colorScheme="orange"
            variant="ghost"
            position="relative"
            rightIcon={<Text>🛒</Text>}
          >
            {items.length > 0 && (
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                colorScheme="red"
                borderRadius="full"
                fontSize="xs"
              >
                {items.length}
              </Badge>
            )}
          </Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" pt={20} pb={8}>
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={8}>
          <Badge colorScheme="orange" variant="solid" px={4} py={2} borderRadius="full">
            🍔 Restaurant Copycat Recipes
          </Badge>
          
          <Heading
            bgGradient="linear(to-r, orange.400, red.400, yellow.400)"
            bgClip="text"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
          >
            Recreate Your Favorites
          </Heading>
          
          <Text fontSize="lg" color="gray.600" maxW="2xl">
            Transform your kitchen into your favorite restaurants with these amazing copycat recipes!
          </Text>
        </VStack>

        {/* Restaurant Selection */}
        <VStack spacing={4} mb={8}>
          <Select
            placeholder="Choose your restaurant obsession..."
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            size="lg"
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            maxW="md"
          >
            {restaurants.map(restaurant => (
              <option key={restaurant.value} value={restaurant.value}>
                {restaurant.icon} {restaurant.label}
              </option>
            ))}
          </Select>
          
          {selectedRestaurant && (
            <Text color="orange.600" fontWeight="medium">
              {getRestaurantMessage()}
            </Text>
          )}
        </VStack>

        {/* Search Bar */}
        <VStack spacing={6} mb={8}>
          <InputGroup maxW="md">
            <InputLeftElement pointerEvents="none">
              <Text color="gray.400">🔍</Text>
            </InputLeftElement>
            <Input
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
            />
          </InputGroup>
        </VStack>

        {/* Recipe Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {searchResults.map((recipe, index) => (
            <MotionCard
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: 'xl' }}
              cursor="pointer"
              onClick={() => handleRecipeClick(recipe)}
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
            >
              <CardHeader p={6}>
                <Flex align="center" justify="space-between">
                  <Text fontSize="4xl">{recipe.image}</Text>
                  <HStack spacing={2}>
                    <FavoriteButton 
                      recipe={{
                        id: recipe.id,
                        name: recipe.name,
                        category: recipe.category,
                        description: recipe.description,
                        difficulty: recipe.difficulty,
                        cookTime: recipe.time
                      }}
                    />
                    <Badge colorScheme="orange" variant="solid">
                      ⭐ {recipe.rating}/5
                    </Badge>
                  </HStack>
                </Flex>
              </CardHeader>
              
              <CardBody pt={0}>
                <VStack align="start" spacing={3}>
                  <Heading size="md" color="gray.800">
                    {recipe.name}
                  </Heading>
                  
                  <Text color="gray.600" fontSize="sm" noOfLines={2}>
                    {recipe.description}
                  </Text>
                  
                  <HStack spacing={2} flexWrap="wrap">
                    <Badge colorScheme="green" variant="subtle">
                      ⏱️ {recipe.time}
                    </Badge>
                    <Badge colorScheme="blue" variant="subtle">
                      📊 {recipe.difficulty}
                    </Badge>
                    <Badge colorScheme="purple" variant="subtle">
                      💰 {recipe.cost}
                    </Badge>
                  </HStack>
                </VStack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
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
                    cookTime: selectedRecipe.time
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
                    {selectedRecipe.ingredients.map((ingredient: string, index: number) => (
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
                    {selectedRecipe.instructions.map((instruction: string, index: number) => (
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

                {/* Nutrition Facts */}
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

                <Divider />

                {/* Add to Shopping List Button */}
                <Button
                  size="lg"
                  colorScheme="orange"
                  onClick={handleAddToShoppingList}
                  leftIcon={<Text>🛒</Text>}
                >
                  Add All Ingredients to Shopping List
                </Button>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RestaurantDupesPage; 