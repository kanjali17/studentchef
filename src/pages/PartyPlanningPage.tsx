import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Badge,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  IconButton,
  Divider,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { partyMenus } from '../data/partyMenus';
import { useShoppingList } from '../context/ShoppingListContext';

const MotionCard = motion(Card);

interface PartyMenu {
  id: string;
  name: string;
  description: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cost: string;
  rating: number;
  image: string;
  mealType: string;
  courses: string[];
  recipes: {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    servings: number;
    courseType?: string;
  }[];
  baseServings: number;
  additionalDishes: string[];
  dietaryTags: string[];
}

const PartyPlanningPage: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMenu, setSelectedMenu] = useState<PartyMenu | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(4);
  const [mealType, setMealType] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [adultCount, setAdultCount] = useState(3);
  const [childCount, setChildCount] = useState(1);
  const [appetiteLevel, setAppetiteLevel] = useState('normal');
  const [dietaryGuests, setDietaryGuests] = useState<{[key: string]: number}>({});
  const { addItems } = useShoppingList();
  const toast = useToast();

  const mealTypes = [
    { value: 'dinner', label: 'Dinner Party', icon: '🍽️' },
    { value: 'brunch', label: 'Brunch', icon: '🥞' },
    { value: 'snack', label: 'Snack Party', icon: '🍿' },
    { value: 'dessert', label: 'Dessert Party', icon: '🍰' },
    { value: 'cocktail', label: 'Cocktail Party', icon: '🍹' },
    { value: 'pregame', label: 'Pregame', icon: '🍾' }
  ];

  const appetiteLevels = [
    { value: 'light', label: 'Light Eaters', icon: '🥗' },
    { value: 'normal', label: 'Normal Appetite', icon: '🍽️' },
    { value: 'hearty', label: 'Hearty Eaters', icon: '🍖' }
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Low-Carb',
    'Keto',
    'Paleo',
    'No Alcohol'
  ];

  // Update total guest count when adult/child counts change
  React.useEffect(() => {
    setGuestCount(adultCount + childCount);
  }, [adultCount, childCount]);

  // Advanced portion calculation based on demographics and dietary needs
  const calculateAdvancedPortions = (baseAmount: number, recipeTitle: string, courseType: string) => {
    let totalPortions = 0;
    
    // Calculate portions for adults
    const adultPortions = adultCount * getAdultPortionMultiplier(courseType, appetiteLevel);
    
    // Calculate portions for children
    const childPortions = childCount * getChildPortionMultiplier(courseType, appetiteLevel);
    
    // Calculate portions for dietary restrictions
    const dietaryPortions = calculateDietaryPortions(recipeTitle, courseType);
    
    totalPortions = adultPortions + childPortions + dietaryPortions;
    
    // Special dessert safety factor - desserts always disappear first!
    if (courseType === 'Dessert') {
      totalPortions = Math.ceil(totalPortions * 1.2); // Add 20% extra for desserts
    }
    
    // Ensure minimum portions and round up
    return Math.max(Math.ceil(totalPortions), Math.ceil(baseAmount * 0.5));
  };

  // Get portion multiplier for adults based on course type and appetite
  const getAdultPortionMultiplier = (courseType: string, appetite: string) => {
    let baseMultiplier = 1;
    
    // Adjust based on appetite level
    switch (appetite) {
      case 'light': baseMultiplier = 0.7; break;
      case 'normal': baseMultiplier = 1.0; break;
      case 'hearty': baseMultiplier = 1.4; break;
    }
    
    // Adjust based on course type
    switch (courseType) {
      case 'Appetizer':
        return baseMultiplier * 0.8; // People eat less appetizers
      case 'Main Course':
        return baseMultiplier * 1.2; // People eat more main courses
      case 'Side Dish':
        return baseMultiplier * 0.6; // People eat less sides
      case 'Dessert':
        return baseMultiplier * 1.4; // People LOVE desserts - always make extra!
      case 'Drinks':
        return baseMultiplier * 1.5; // People drink more
      case 'Snacks':
        return baseMultiplier * 0.7; // People snack moderately
      default:
        return baseMultiplier;
    }
  };

  // Get portion multiplier for children based on course type and appetite
  const getChildPortionMultiplier = (courseType: string, appetite: string) => {
    let baseMultiplier = 0.6; // Children generally eat less than adults
    
    // Adjust based on appetite level
    switch (appetite) {
      case 'light': baseMultiplier = 0.4; break;
      case 'normal': baseMultiplier = 0.6; break;
      case 'hearty': baseMultiplier = 0.8; break;
    }
    
    // Children have different preferences by course type
    switch (courseType) {
      case 'Appetizer':
        return baseMultiplier * 0.5; // Kids eat very few appetizers
      case 'Main Course':
        return baseMultiplier * 0.7; // Kids eat less main courses
      case 'Side Dish':
        return baseMultiplier * 0.8; // Kids might eat sides
      case 'Dessert':
        return baseMultiplier * 1.8; // Kids are DESSERT MONSTERS! 🍰
      case 'Drinks':
        return baseMultiplier * 1.2; // Kids drink a lot
      case 'Snacks':
        return baseMultiplier * 1.0; // Kids love snacks
      default:
        return baseMultiplier;
    }
  };

  // Calculate additional portions needed for dietary restrictions
  const calculateDietaryPortions = (recipeTitle: string, courseType: string) => {
    let additionalPortions = 0;
    
    Object.entries(dietaryGuests).forEach(([restriction, count]) => {
      if (count > 0) {
        // Dietary guests might need more of certain dishes or alternatives
        if (restriction === 'Vegetarian' || restriction === 'Vegan') {
          if (recipeTitle.toLowerCase().includes('vegetable') || 
              recipeTitle.toLowerCase().includes('bean') ||
              recipeTitle.toLowerCase().includes('tofu') ||
              recipeTitle.toLowerCase().includes('quinoa')) {
            additionalPortions += count * 0.3; // They'll eat more of veg-friendly dishes
          }
        }
        if (restriction === 'Gluten-Free') {
          if (recipeTitle.toLowerCase().includes('rice') || 
              recipeTitle.toLowerCase().includes('quinoa') ||
              recipeTitle.toLowerCase().includes('corn')) {
            additionalPortions += count * 0.2; // They'll eat more of GF-friendly dishes
          }
        }
        if (restriction === 'Dairy-Free') {
          if (recipeTitle.toLowerCase().includes('coconut') || 
              recipeTitle.toLowerCase().includes('almond') ||
              recipeTitle.toLowerCase().includes('oat')) {
            additionalPortions += count * 0.2; // They'll eat more of dairy-free dishes
          }
        }
      }
    });
    
    return additionalPortions;
  };

  // Filter menus based on selections
  const filteredMenus = React.useMemo(() => {
    let menus = partyMenus;
    
    if (mealType) {
      menus = menus.filter(menu => menu.mealType === mealType);
    }
    
    if (dietaryRestrictions.length > 0) {
      menus = menus.filter(menu => 
        dietaryRestrictions.every(restriction => 
          menu.dietaryTags.includes(restriction)
        )
      );
    }
    
    return menus;
  }, [mealType, dietaryRestrictions]);

  const handleMenuClick = (menu: PartyMenu) => {
    setSelectedMenu(menu);
    onOpen();
  };

  const handleRecipeClick = (recipe: any, courseType: string = 'Main Course') => {
    setSelectedRecipe({ ...recipe, courseType });
    setRecipeModalOpen(true);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddToShoppingList = () => {
    if (selectedMenu) {
      const allIngredients: string[] = [];
      selectedMenu.recipes.forEach(recipe => {
        const scaledIngredients = recipe.ingredients.map(ingredient => {
          const baseAmount = recipe.servings;
          const scaledAmount = calculateAdvancedPortions(baseAmount, recipe.title, 'Main Course');
          return `${scaledAmount}x ${ingredient}`;
        });
        allIngredients.push(...scaledIngredients);
      });
      
      addItems(allIngredients, selectedMenu.name);
      toast({
        title: 'Added to Shopping List!',
        description: `All ingredients for ${selectedMenu.name} (${guestCount} guests) added`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddRecipeToShoppingList = () => {
    if (selectedRecipe && selectedRecipe.ingredients) {
      const scaledIngredients = selectedRecipe.ingredients.map((ingredient: string) => {
        const baseAmount = selectedRecipe.servings;
        const scaledAmount = calculateAdvancedPortions(baseAmount, selectedRecipe.title, 'Main Course');
        return `${scaledAmount}x ${ingredient}`;
      });
      
      addItems(scaledIngredients, selectedRecipe.title);
      toast({
        title: 'Added to Shopping List!',
        description: `All ingredients for ${selectedRecipe.title} (${guestCount} guests) added`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddIndividualIngredient = (ingredient: string) => {
    if (selectedRecipe) {
      const baseAmount = selectedRecipe.servings;
      const scaledAmount = calculateAdvancedPortions(baseAmount, selectedRecipe.title, selectedRecipe.courseType || 'Main Course');
      const scaledIngredient = `${scaledAmount}x ${ingredient}`;
      
      addItems([scaledIngredient], `${selectedRecipe.title} - ${ingredient}`);
      toast({
        title: 'Added to Shopping List!',
        description: `${scaledIngredient} added to your list`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
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
      bgGradient="linear(to-br, purple.50, pink.50, purple.100)"
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
              _hover={{ bg: 'purple.100' }}
            />
            <VStack align="start" spacing={1}>
              <Heading size="lg" color="purple.800">
                Party Planning 🎉
              </Heading>
              <Text color="purple.600" fontSize="sm">
                Plan the perfect party with portion calculations
              </Text>
            </VStack>
          </HStack>
          <IconButton
            aria-label="Shopping cart"
            icon={<Text fontSize="lg">🛒</Text>}
            variant="ghost"
            size="lg"
            _hover={{ bg: 'purple.100' }}
            onClick={() => navigate('/shopping-list')}
          />
        </Flex>

        {/* Party Configuration */}
        <VStack spacing={6} mb={8}>
          <Heading size="md" color="purple.800" textAlign="center">
            Configure Your Party
          </Heading>
          
          {/* Guest Demographics */}
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} w="full">
            <GridItem>
              <VStack align="start" spacing={4}>
                <Text fontWeight="semibold" color="purple.700" fontSize="lg">
                  Guest Demographics
                </Text>
                
                <HStack spacing={4} w="full">
                  <VStack align="start" spacing={2} flex={1}>
                    <Text fontWeight="medium" color="purple.600">
                      Adults
                    </Text>
                    <NumberInput
                      value={adultCount}
                      onChange={(_, value) => setAdultCount(value)}
                      min={0}
                      max={50}
                      bg="white"
                      borderRadius="md"
                    >
                      <NumberInputField borderColor="purple.200" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </VStack>
                  
                  <VStack align="start" spacing={2} flex={1}>
                    <Text fontWeight="medium" color="purple.600">
                      Children
                    </Text>
                    <NumberInput
                      value={childCount}
                      onChange={(_, value) => setChildCount(value)}
                      min={0}
                      max={50}
                      bg="white"
                      borderRadius="md"
                    >
                      <NumberInputField borderColor="purple.200" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </VStack>
                </HStack>
                
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600">
                    Total Guests: {guestCount}
                  </Text>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="start" spacing={4}>
                <Text fontWeight="semibold" color="purple.700" fontSize="lg">
                  Appetite Level
                </Text>
                <Select
                  value={appetiteLevel}
                  onChange={(e) => setAppetiteLevel(e.target.value)}
                  bg="white"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                >
                  {appetiteLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.icon} {level.label}
                    </option>
                  ))}
                </Select>
              </VStack>
            </GridItem>
          </Grid>

          {/* Meal Type and Dietary Restrictions */}
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} w="full">
            <GridItem>
              <VStack align="start" spacing={2}>
                <Text fontWeight="semibold" color="purple.700">
                  Meal Type
                </Text>
                <Select
                  placeholder="Select meal type"
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  bg="white"
                  borderColor="purple.200"
                  _hover={{ borderColor: 'purple.300' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                >
                  {mealTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </Select>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="start" spacing={2}>
                <Text fontWeight="semibold" color="purple.700">
                  Dietary Restrictions
                </Text>
                <Box
                  bg="white"
                  p={3}
                  borderRadius="md"
                  borderColor="purple.200"
                  borderWidth="1px"
                  maxH="120px"
                  overflowY="auto"
                >
                  <CheckboxGroup
                    value={dietaryRestrictions}
                    onChange={(values) => setDietaryRestrictions(values as string[])}
                  >
                    <VStack align="start" spacing={2}>
                      {dietaryOptions.map((option) => (
                        <Checkbox key={option} value={option} size="sm">
                          <Text fontSize="sm">{option}</Text>
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                </Box>
              </VStack>
            </GridItem>
          </Grid>

          {/* Dietary Guest Counts */}
          {dietaryRestrictions.length > 0 && (
            <VStack align="start" spacing={4} w="full">
              <Text fontWeight="semibold" color="purple.700">
                How many guests have each dietary restriction?
              </Text>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={4} w="full">
                {dietaryRestrictions.map((restriction) => (
                  <GridItem key={restriction}>
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="medium" color="purple.600" fontSize="sm">
                        {restriction}
                      </Text>
                      <NumberInput
                        value={dietaryGuests[restriction] || 0}
                        onChange={(_, value) => setDietaryGuests(prev => ({
                          ...prev,
                          [restriction]: value
                        }))}
                        min={0}
                        max={guestCount}
                        bg="white"
                        borderRadius="md"
                        size="sm"
                      >
                        <NumberInputField borderColor="purple.200" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </VStack>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          )}
        </VStack>

        {/* Portion Calculation Summary */}
        {guestCount > 0 && (
          <VStack spacing={4} mb={8} p={4} bg="purple.50" borderRadius="lg" border="1px solid" borderColor="purple.200">
            <Heading size="sm" color="purple.800">
              📊 Portion Calculation Summary
            </Heading>
            <Text fontSize="sm" color="purple.700" textAlign="center">
              Based on {adultCount} adults and {childCount} children with {appetiteLevel} appetites
              {Object.keys(dietaryGuests).length > 0 && `, plus ${Object.entries(dietaryGuests).map(([k, v]) => `${v} ${k}`).join(', ')}`}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              <VStack align="start" spacing={1}>
                <Text fontSize="xs" fontWeight="semibold" color="purple.600">Adults ({adultCount}):</Text>
                <Text fontSize="xs" color="purple.600">• Main courses: {getAdultPortionMultiplier('Main Course', appetiteLevel).toFixed(1)}x base</Text>
                <Text fontSize="xs" color="purple.600" fontWeight="semibold">• Desserts: {getAdultPortionMultiplier('Dessert', appetiteLevel).toFixed(1)}x base 🍰</Text>
                <Text fontSize="xs" color="purple.600">• Drinks: {getAdultPortionMultiplier('Drinks', appetiteLevel).toFixed(1)}x base</Text>
              </VStack>
              <VStack align="start" spacing={1}>
                <Text fontSize="xs" fontWeight="semibold" color="purple.600">Children ({childCount}):</Text>
                <Text fontSize="xs" color="purple.600">• Main courses: {getChildPortionMultiplier('Main Course', appetiteLevel).toFixed(1)}x base</Text>
                <Text fontSize="xs" color="purple.600" fontWeight="semibold">• Desserts: {getChildPortionMultiplier('Dessert', appetiteLevel).toFixed(1)}x base 🍰</Text>
                <Text fontSize="xs" color="purple.600">• Drinks: {getChildPortionMultiplier('Drinks', appetiteLevel).toFixed(1)}x base</Text>
              </VStack>
            </SimpleGrid>
            <Text fontSize="xs" color="purple.600" fontStyle="italic" textAlign="center">
              🍰 Desserts get an extra 20% safety factor - they always disappear first!
            </Text>
          </VStack>
        )}

        {/* Menu Selection */}
        <VStack spacing={6}>
          <Heading size="md" color="purple.800" textAlign="center">
            Choose Your Menu
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {filteredMenus.map((menu, index) => (
              <MotionCard
                key={menu.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                cursor="pointer"
                onClick={() => handleMenuClick(menu)}
                bg="white"
                borderColor="purple.200"
                _hover={{ borderColor: 'purple.400' }}
              >
                <CardBody>
                  <VStack align="start" spacing={3}>
                    <HStack justify="space-between" w="full">
                      <Text fontSize="2xl">{menu.image}</Text>
                      <Badge colorScheme="purple" variant="subtle">
                        {menu.mealType}
                      </Badge>
                    </HStack>
                    
                    <VStack align="start" spacing={1}>
                      <Heading size="md" color="purple.800">
                        {menu.name}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" noOfLines={2}>
                        {menu.description}
                      </Text>
                    </VStack>

                    <HStack spacing={2} wrap="wrap">
                      <Badge colorScheme="green" variant="subtle" fontSize="xs">
                        {menu.time}
                      </Badge>
                      <Badge colorScheme="blue" variant="subtle" fontSize="xs">
                        {menu.difficulty}
                      </Badge>
                      <Badge colorScheme="orange" variant="subtle" fontSize="xs">
                        {menu.cost}
                      </Badge>
                    </HStack>

                    <VStack align="start" spacing={1}>
                      <Text fontSize="sm" fontWeight="semibold" color="purple.700">
                        Courses:
                      </Text>
                      <Flex wrap="wrap" gap={1}>
                        {menu.courses.slice(0, 3).map((course, idx) => (
                          <Badge key={idx} colorScheme="purple" variant="subtle" fontSize="xs">
                            {course}
                          </Badge>
                        ))}
                        {menu.courses.length > 3 && (
                          <Badge colorScheme="gray" variant="subtle" fontSize="xs">
                            +{menu.courses.length - 3} more
                          </Badge>
                        )}
                      </Flex>
                    </VStack>

                    <HStack spacing={2}>
                      <Text fontSize="sm" color="gray.500">
                        ⭐ {menu.rating}/5
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        👥 {menu.baseServings} servings
                      </Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </MotionCard>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Menu Detail Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="purple.800">
              {selectedMenu?.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {selectedMenu && (
                <VStack spacing={6} align="stretch">
                  {/* Menu Info */}
                  <VStack align="start" spacing={3}>
                    <Text fontSize="lg" color="purple.700">
                      {selectedMenu.description}
                    </Text>
                    
                    <HStack spacing={4}>
                      <Badge colorScheme="green">{selectedMenu.time}</Badge>
                      <Badge colorScheme="blue">{selectedMenu.difficulty}</Badge>
                      <Badge colorScheme="orange">{selectedMenu.cost}</Badge>
                      <Badge colorScheme="purple">⭐ {selectedMenu.rating}/5</Badge>
                    </HStack>

                    <Text fontSize="sm" color="gray.600">
                      Base servings: {selectedMenu.baseServings} | 
                      Scaled for {guestCount} guests: {calculateAdvancedPortions(selectedMenu.baseServings, selectedMenu.name, 'Main Course')} servings
                    </Text>
                    <Text fontSize="xs" color="purple.600">
                      {adultCount} adults, {childCount} children | {appetiteLevel} appetite
                      {Object.keys(dietaryGuests).length > 0 && ` | ${Object.entries(dietaryGuests).map(([k, v]) => `${v} ${k}`).join(', ')}`}
                    </Text>
                  </VStack>

                  <Divider />

                  {/* Courses and Recipes */}
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color="purple.800">
                      Menu Courses
                    </Heading>
                    
                    {selectedMenu.courses.map((course, courseIndex) => (
                      <Box key={courseIndex} w="full">
                        <Text fontWeight="semibold" color="purple.700" mb={2}>
                          {course}
                        </Text>
                        {selectedMenu.recipes[courseIndex] && (
                          <Box
                            bg="purple.50"
                            p={4}
                            borderRadius="md"
                            borderLeft="4px solid"
                            borderColor="purple.400"
                            cursor="pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRecipeClick(selectedMenu.recipes[courseIndex], course);
                            }}
                            _hover={{ bg: 'purple.100', transform: 'translateX(4px)' }}
                            transition="all 0.2s"
                          >
                            <VStack align="start" spacing={2}>
                              <Text fontWeight="medium" color="purple.800" fontSize="lg">
                                {selectedMenu.recipes[courseIndex].title}
                              </Text>
                              <Text fontSize="sm" color="gray.600">
                                {selectedMenu.recipes[courseIndex].description}
                              </Text>
                              <HStack spacing={2}>
                                <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                                  {selectedMenu.recipes[courseIndex].servings} servings
                                </Badge>
                                <Badge colorScheme="blue" variant="subtle" fontSize="xs">
                                  {calculateAdvancedPortions(selectedMenu.recipes[courseIndex].servings, selectedMenu.recipes[courseIndex].title, course)} for {guestCount} guests
                                </Badge>
                                <Text fontSize="xs" color="purple.600">
                                  Click for full recipe →
                                </Text>
                              </HStack>
                            </VStack>
                          </Box>
                        )}
                      </Box>
                    ))}
                  </VStack>

                  <Divider />

                  {/* Additional Dishes */}
                  {selectedMenu.additionalDishes.length > 0 && (
                    <VStack align="start" spacing={3}>
                      <Heading size="md" color="purple.800">
                        Additional Dish Options
                      </Heading>
                      <SimpleGrid columns={2} spacing={2} w="full">
                        {selectedMenu.additionalDishes.map((dish, idx) => (
                          <Badge key={idx} colorScheme="purple" variant="outline" p={2}>
                            {dish}
                          </Badge>
                        ))}
                      </SimpleGrid>
                    </VStack>
                  )}

                  {/* Action Buttons */}
                  <HStack spacing={4} justify="center">
                    <Button
                      colorScheme="purple"
                      onClick={handleAddToShoppingList}
                      leftIcon={<Text>🛒</Text>}
                    >
                      Add All Ingredients to List
                    </Button>
                    <Button variant="outline" colorScheme="purple" onClick={onClose}>
                      Close
                    </Button>
                  </HStack>
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Recipe Detail Modal */}
        <Modal isOpen={recipeModalOpen} onClose={() => setRecipeModalOpen(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="purple.800">
              {selectedRecipe?.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {selectedRecipe && (
                <VStack spacing={6} align="stretch">
                  {/* Recipe Description */}
                  <Box>
                    <Text fontSize="lg" color="purple.700" mb={2}>
                      {selectedRecipe.description}
                    </Text>
                    <HStack spacing={4} fontSize="sm" color="gray.500">
                      <Text>👥 {selectedRecipe.servings} base servings</Text>
                      <Text>👥 {calculateAdvancedPortions(selectedRecipe.servings, selectedRecipe.title, selectedRecipe.courseType || 'Main Course')} for {guestCount} guests</Text>
                    </HStack>
                    <Text fontSize="xs" color="purple.600" mt={1}>
                      {adultCount} adults, {childCount} children | {appetiteLevel} appetite
                      {Object.keys(dietaryGuests).length > 0 && ` | ${Object.entries(dietaryGuests).map(([k, v]) => `${v} ${k}`).join(', ')}`}
                    </Text>
                  </Box>

                  <Divider />

                  {/* Ingredients */}
                  <Box>
                    <Heading size="sm" color="purple.800" mb={3}>
                      📝 Ingredients (scaled for {guestCount} guests)
                    </Heading>
                    <VStack align="start" spacing={2}>
                      {selectedRecipe.ingredients.map((ingredient: string, idx: number) => {
                        const baseAmount = selectedRecipe.servings;
                        const scaledAmount = calculateAdvancedPortions(baseAmount, selectedRecipe.title, selectedRecipe.courseType || 'Main Course');
                        return (
                          <Flex key={idx} justify="space-between" align="center" p={3} bg="purple.50" borderRadius="md" w="full">
                            <Text fontSize="sm">• {scaledAmount}x {ingredient}</Text>
                            <Button
                              size="xs"
                              colorScheme="purple"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddIndividualIngredient(ingredient);
                              }}
                            >
                              Add to List
                            </Button>
                          </Flex>
                        );
                      })}
                    </VStack>
                  </Box>

                  <Divider />

                  {/* Instructions */}
                  <Box>
                    <Heading size="sm" color="purple.800" mb={3}>
                      👨‍🍳 Instructions
                    </Heading>
                    <VStack align="start" spacing={3}>
                      {selectedRecipe.instructions.map((instruction: string, idx: number) => (
                        <HStack key={idx} align="start" spacing={3}>
                          <Badge colorScheme="purple" variant="solid" minW="20px" textAlign="center">
                            {idx + 1}
                          </Badge>
                          <Text fontSize="sm">{instruction}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <Divider />

                  {/* Action Buttons */}
                  <HStack spacing={4} justify="center">
                    <Button
                      colorScheme="purple"
                      onClick={handleAddRecipeToShoppingList}
                      leftIcon={<Text>🛒</Text>}
                    >
                      Add Ingredients to Shopping List
                    </Button>
                    <Button variant="outline" colorScheme="purple" onClick={() => setRecipeModalOpen(false)}>
                      Close
                    </Button>
                  </HStack>
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default PartyPlanningPage; 