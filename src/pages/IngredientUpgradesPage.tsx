import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
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
  Flex,
  IconButton,
  Grid,
  GridItem,
  Button,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { recipeDatabase, ingredientCategories, searchRecipes } from '../data/recipeDatabase';
import { useShoppingList } from '../context/ShoppingListContext';

const MotionCard = motion(Card);

const IngredientUpgradesPage: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const { addItems } = useShoppingList();
  const toast = useToast();

  // Filter recipes based on selected category and search query
  const filteredRecipes = React.useMemo(() => {
    let recipes: any[] = [];
    
    if (selectedCategory) {
      // Search through all recipes in the database for recipes that use the selected ingredient
      const ingredientMapping: { [key: string]: string[] } = {
        'ramen': ['ramen', 'noodles', 'instant noodles'],
        'mac-cheese': ['mac', 'cheese', 'macaroni'],
        'canned-soup': ['soup', 'canned soup', 'broth'],
        'rice': ['rice', 'white rice', 'brown rice', 'basmati'],
        'pasta': ['pasta', 'spaghetti', 'penne', 'fettuccine'],
        'bread': ['bread', 'toast', 'sandwich bread', 'whole grain bread'],
        'eggs': ['eggs', 'egg'],
        'chicken': ['chicken', 'chicken breast', 'rotisserie chicken'],
        'beans': ['beans', 'black beans', 'kidney beans', 'chickpeas'],
        'vegetables': ['vegetables', 'broccoli', 'carrots', 'bell pepper', 'spinach', 'tomatoes']
      };
      
      const searchTerms = ingredientMapping[selectedCategory] || [];
      
      // Search through all recipes for those containing the ingredient
      recipes = recipeDatabase.filter(recipe => {
        const recipeText = `${recipe.name} ${recipe.description} ${recipe.ingredients.join(' ')} ${recipe.subcategory || ''}`.toLowerCase();
        return searchTerms.some(term => recipeText.includes(term.toLowerCase()));
      });
    } else {
      // If no category selected, show all Ingredient Upgrades recipes
      recipes = recipeDatabase.filter(recipe => recipe.category === 'Ingredient Upgrades');
    }
    
    if (searchQuery) {
      const searchResults = searchRecipes(searchQuery);
      recipes = recipes.filter(recipe => 
        searchResults.some(searchResult => searchResult.id === recipe.id)
      );
    }
    
    return recipes;
  }, [selectedCategory, searchQuery]);

  const handleRecipeClick = (recipe: any) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  const handleBackClick = () => {
    navigate('/');
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, green.50, teal.50, cyan.50)"
      py={8}
    >
      <Container maxW="container.xl">
        {/* Navigation Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <HStack spacing={4}>
            <IconButton
              aria-label="Go back"
              icon={<Text fontSize="lg">←</Text>}
              onClick={handleBackClick}
              variant="ghost"
              size="lg"
              _hover={{ bg: 'green.100' }}
            />
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="green.800">
                Ingredient Upgrades 🥕
              </Heading>
              <Text color="green.600" fontSize="sm">
                Transform basic ingredients into gourmet meals
              </Text>
            </VStack>
          </HStack>
          <IconButton
            aria-label="Shopping cart"
            icon={<Text fontSize="lg">🛒</Text>}
            variant="ghost"
            size="lg"
            _hover={{ bg: 'green.100' }}
            onClick={() => navigate('/shopping-list')}
          />
        </Flex>

        {/* Search and Filter Section */}
        <VStack spacing={6} mb={8}>
          <Heading size="md" color="green.800" textAlign="center">
            Upgrade Your Basic Ingredients
          </Heading>
          
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} w="full">
            <GridItem>
              <Select
                placeholder="Select an ingredient category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                bg="white"
                borderColor="green.200"
                _hover={{ borderColor: 'green.300' }}
                _focus={{ borderColor: 'green.500', boxShadow: 'outline' }}
              >
                {ingredientCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.icon} {category.label}
                  </option>
                ))}
              </Select>
            </GridItem>
            
            <GridItem>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Text color="green.400">🔍</Text>
                </InputLeftElement>
                <Input
                  placeholder="Search upgrades..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="white"
                  borderColor="green.200"
                  _hover={{ borderColor: 'green.300' }}
                  _focus={{ borderColor: 'green.500', boxShadow: 'outline' }}
                />
              </InputGroup>
            </GridItem>
          </Grid>
        </VStack>

        {/* Recipe Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredRecipes.map((recipe, index) => (
            <MotionCard
              key={recipe.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              cursor="pointer"
              onClick={() => handleRecipeClick(recipe)}
              bg="white"
              shadow="md"
              _hover={{ shadow: 'lg' }}
              border="1px"
              borderColor="green.100"
            >
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Flex justify="space-between" align="start">
                    <Text fontSize="3xl">{recipe.image}</Text>
                    <Badge colorScheme="green" variant="subtle">
                      {recipe.cost}
                    </Badge>
                  </Flex>
                  
                  <VStack align="start" spacing={2}>
                    <Heading size="md" color="green.800">
                      {recipe.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" noOfLines={2}>
                      {recipe.description}
                    </Text>
                  </VStack>
                  
                  <HStack justify="space-between" fontSize="sm" color="gray.500">
                    <Text>⏱️ {recipe.time}</Text>
                    <Text>⭐ {recipe.rating}/5</Text>
                    <Text>💰 {recipe.cost}</Text>
                  </HStack>
                  
                  {/* Upgrade Badges */}
                  {recipe.upgrades && (
                    <VStack align="start" spacing={2}>
                      <Text fontSize="xs" fontWeight="bold" color="green.600">
                        Upgrades:
                      </Text>
                      <Flex wrap="wrap" gap={1}>
                        {recipe.upgrades.slice(0, 2).map((upgrade, idx) => (
                          <Badge key={idx} colorScheme="green" variant="subtle" fontSize="xs">
                            {upgrade}
                          </Badge>
                        ))}
                        {recipe.upgrades.length > 2 && (
                          <Badge colorScheme="green" variant="subtle" fontSize="xs">
                            +{recipe.upgrades.length - 2} more
                          </Badge>
                        )}
                      </Flex>
                    </VStack>
                  )}
                </VStack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* No Results Message */}
        {filteredRecipes.length === 0 && (
          <Box textAlign="center" py={12}>
            <Text fontSize="lg" color="green.600">
              No upgrades found. Try adjusting your search or category filter.
            </Text>
          </Box>
        )}
      </Container>

      {/* Recipe Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green.800">
            <HStack spacing={3}>
              <Text fontSize="2xl">{selectedRecipe?.image}</Text>
              <VStack align="start" spacing={1}>
                <Text>{selectedRecipe?.name}</Text>
                <Text fontSize="sm" color="gray.500" fontWeight="normal">
                  {selectedRecipe?.subcategory}
                </Text>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedRecipe && (
              <VStack spacing={6} align="stretch">
                {/* Description and Stats */}
                <Box>
                  <Text color="gray.600" mb={4}>
                    {selectedRecipe.description}
                  </Text>
                  <HStack spacing={4} fontSize="sm" color="gray.500">
                    <Text>⏱️ {selectedRecipe.time}</Text>
                    <Text>⭐ {selectedRecipe.rating}/5</Text>
                    <Text>💰 {selectedRecipe.cost}</Text>
                    <Text>📊 {selectedRecipe.difficulty}</Text>
                  </HStack>
                </Box>

                {/* Upgrades */}
                {selectedRecipe.upgrades && (
                  <Box>
                    <Heading size="sm" color="green.700" mb={3}>
                      🚀 Upgrades
                    </Heading>
                    <Flex wrap="wrap" gap={2}>
                      {selectedRecipe.upgrades.map((upgrade: string, idx: number) => (
                        <Badge key={idx} colorScheme="green" variant="subtle">
                          {upgrade}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                )}

                <Divider />

                {/* Ingredients */}
                <Box>
                  <Heading size="sm" color="green.800" mb={3}>
                    📝 Ingredients
                  </Heading>
                  <VStack align="start" spacing={2}>
                    {selectedRecipe.ingredients.map((ingredient: string, idx: number) => (
                      <Flex key={idx} justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                        <Text fontSize="sm">• {ingredient}</Text>
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

                <Divider />

                {/* Instructions */}
                <Box>
                  <Heading size="sm" color="green.800" mb={3}>
                    👨‍🍳 Instructions
                  </Heading>
                  <VStack align="start" spacing={3}>
                    {selectedRecipe.instructions.map((instruction: string, idx: number) => (
                      <HStack key={idx} align="start" spacing={3}>
                        <Badge colorScheme="green" variant="solid" minW="20px" textAlign="center">
                          {idx + 1}
                        </Badge>
                        <Text fontSize="sm">{instruction}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                {/* Tips */}
                {selectedRecipe.tips && (
                  <>
                    <Divider />
                    <Box>
                      <Heading size="sm" color="green.800" mb={3}>
                        💡 Pro Tips
                      </Heading>
                      <VStack align="start" spacing={2}>
                        {selectedRecipe.tips.map((tip: string, idx: number) => (
                          <Text key={idx} fontSize="sm" color="gray.600">
                            • {tip}
                          </Text>
                        ))}
                      </VStack>
                    </Box>
                  </>
                )}

                <Divider />

                {/* Nutrition */}
                <Box>
                  <Heading size="sm" color="green.800" mb={3}>
                    📊 Nutrition (per serving)
                  </Heading>
                  <SimpleGrid columns={2} spacing={4}>
                    <Box textAlign="center" p={3} bg="green.50" borderRadius="md">
                      <Text fontSize="lg" fontWeight="bold" color="green.800">
                        {selectedRecipe.nutrition.calories}
                      </Text>
                      <Text fontSize="xs" color="gray.600">Calories</Text>
                    </Box>
                    <Box textAlign="center" p={3} bg="blue.50" borderRadius="md">
                      <Text fontSize="lg" fontWeight="bold" color="blue.800">
                        {selectedRecipe.nutrition.protein}g
                      </Text>
                      <Text fontSize="xs" color="gray.600">Protein</Text>
                    </Box>
                    <Box textAlign="center" p={3} bg="yellow.50" borderRadius="md">
                      <Text fontSize="lg" fontWeight="bold" color="yellow.800">
                        {selectedRecipe.nutrition.carbs}g
                      </Text>
                      <Text fontSize="xs" color="gray.600">Carbs</Text>
                    </Box>
                    <Box textAlign="center" p={3} bg="orange.50" borderRadius="md">
                      <Text fontSize="lg" fontWeight="bold" color="orange.800">
                        {selectedRecipe.nutrition.fat}g
                      </Text>
                      <Text fontSize="xs" color="gray.600">Fat</Text>
                    </Box>
                  </SimpleGrid>
                  <Box textAlign="center" p={3} bg="purple.50" borderRadius="md" mt={4}>
                    <Text fontSize="lg" fontWeight="bold" color="purple.800">
                      {selectedRecipe.nutrition.fiber}g
                    </Text>
                    <Text fontSize="xs" color="gray.600">Fiber</Text>
                  </Box>
                </Box>

                <Divider />

                {/* Add All Ingredients to Shopping List Button */}
                <Button
                  size="lg"
                  colorScheme="green"
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

export default IngredientUpgradesPage; 