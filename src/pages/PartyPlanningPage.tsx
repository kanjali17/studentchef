import React, { useState, useEffect } from 'react';
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
import FavoriteButton from '../components/FavoriteButton';

const MotionCard = motion(Card);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5, scale: 1.02 }
};

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

// Enhanced demographic segmentation
interface GuestDemographics {
  adults: {
    male: number;
    female: number;
    ageGroups: {
      '18-25': number;
      '26-35': number;
      '36-50': number;
      '51-65': number;
      '65+': number;
    };
  };
  children: {
    '0-2': number;
    '3-5': number;
    '6-12': number;
    '13-17': number;
  };
  seniors: number;
}

// Enhanced event context
interface EventContext {
  duration: 'short' | 'medium' | 'long'; // <2hr, 2-4hr, >4hr
  timeOfDay: 'breakfast' | 'lunch' | 'dinner' | 'late-night';
  timeOfDayMulti: string[]; // For long events with multiple meal times
  formality: 'casual' | 'semi-formal' | 'formal';
  socialContext: 'family' | 'friends' | 'work' | 'celebration';
  weather: 'indoor' | 'outdoor' | 'seasonal';
}

// Enhanced dietary restrictions - SAFETY FIRST APPROACH
interface DietaryRestriction {
  type: string;
  isAllergy: boolean; // Distinguish between allergy and preference
  requiresCrossContaminationProtection: boolean;
  alternatives: string[];
  notes?: string; // For any special instructions
}

// Enhanced ingredient scaling
interface IngredientScaling {
  ingredient: string;
  baseAmount: number;
  scalingFactor: number;
  cookingMethod: string;
  perishability: 'low' | 'medium' | 'high';
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
  
  // Enhanced state variables
  const [guestDemographics, setGuestDemographics] = useState<GuestDemographics>({
    adults: {
      male: 2,
      female: 1,
      ageGroups: {
        '18-25': 1,
        '26-35': 1,
        '36-50': 1,
        '51-65': 0,
        '65+': 0
      }
    },
    children: {
      '0-2': 0,
      '3-5': 0,
      '6-12': 1,
      '13-17': 0
    },
    seniors: 0
  });
  
  const [eventContext, setEventContext] = useState<EventContext>({
    duration: 'medium',
    timeOfDay: 'dinner',
    timeOfDayMulti: ['dinner'],
    formality: 'casual',
    socialContext: 'friends',
    weather: 'indoor'
  });
  
  const [enhancedDietaryRestrictions, setEnhancedDietaryRestrictions] = useState<DietaryRestriction[]>([]);
  const [userFeedback, setUserFeedback] = useState<{[key: string]: number}>({});
  
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

  // Enhanced portion calculation with demographic segmentation and event context
  const calculateAdvancedPortions = (baseAmount: number, recipeTitle: string, courseType: string) => {
    let totalPortions = 0;
    
    // Calculate portions for detailed demographics
    const demographicPortions = calculateDemographicPortions(courseType, appetiteLevel);
    
    // Calculate portions for dietary restrictions with severity
    const dietaryPortions = calculateEnhancedDietaryPortions(recipeTitle, courseType);
    
    // Apply event context adjustments
    const eventAdjustment = calculateEventContextAdjustment(courseType);
    
    // Apply social context adjustments
    const socialAdjustment = calculateSocialContextAdjustment();
    
    // Apply weather and seasonal adjustments
    const weatherAdjustment = calculateWeatherAdjustment(recipeTitle, courseType);
    
    totalPortions = demographicPortions + dietaryPortions;
    totalPortions *= eventAdjustment * socialAdjustment * weatherAdjustment;
    
    // Apply course-specific safety factors
    totalPortions = applyCourseSpecificFactors(totalPortions, courseType);
    
    // Apply user feedback learning
    totalPortions = applyUserFeedbackLearning(totalPortions, recipeTitle, courseType);
    
    // Ensure minimum portions and round up
    return Math.max(Math.ceil(totalPortions), Math.ceil(baseAmount * 0.5));
  };

  // Calculate portions based on demographics (simple or detailed)
  const calculateDemographicPortions = (courseType: string, appetite: string) => {
    let totalPortions = 0;
    
    // Check if detailed demographics are being used
    const totalDetailedAdults = Object.values(guestDemographics.adults.ageGroups).reduce((sum, count) => sum + count, 0);
    const totalDetailedChildren = Object.values(guestDemographics.children).reduce((sum, count) => sum + count, 0);
    
    // Use detailed demographics if they're provided, otherwise use simple counts
    if (totalDetailedAdults > 0 || totalDetailedChildren > 0) {
      // Adult portions by age group
      (Object.entries(guestDemographics.adults.ageGroups) as [string, number][]).forEach(([ageGroup, count]) => {
        if (count > 0) {
          const ageMultiplier = getAgeGroupMultiplier(ageGroup, courseType, appetite);
          totalPortions += count * ageMultiplier;
        }
      });
      
      // Children portions by age group
      (Object.entries(guestDemographics.children) as [string, number][]).forEach(([ageGroup, count]) => {
        if (count > 0) {
          const childMultiplier = getChildAgeGroupMultiplier(ageGroup, courseType, appetite);
          totalPortions += count * childMultiplier;
        }
      });
    } else {
      // Use simple adult/child counts
      totalPortions += adultCount * getAdultPortionMultiplier(courseType, appetite);
      totalPortions += childCount * getChildPortionMultiplier(courseType, appetite);
    }
    
    // Senior portions (always use detailed count)
    if (guestDemographics.seniors > 0) {
      const seniorMultiplier = getSeniorMultiplier(courseType, appetite);
      totalPortions += guestDemographics.seniors * seniorMultiplier;
    }
    
    return totalPortions;
  };

  // Get age group specific multipliers
  const getAgeGroupMultiplier = (ageGroup: string, courseType: string, appetite: string) => {
    let baseMultiplier = 1;
    
    // Age-specific adjustments
    switch (ageGroup) {
      case '18-25': baseMultiplier = 1.2; break; // Young adults eat more
      case '26-35': baseMultiplier = 1.1; break; // Peak metabolism
      case '36-50': baseMultiplier = 1.0; break; // Standard
      case '51-65': baseMultiplier = 0.9; break; // Slightly less
      case '65+': baseMultiplier = 0.8; break; // Seniors eat less
    }
    
    // Apply appetite and course type adjustments
    return baseMultiplier * getAdultPortionMultiplier(courseType, appetite);
  };

  // Get child age group multipliers
  const getChildAgeGroupMultiplier = (ageGroup: string, courseType: string, appetite: string) => {
    let baseMultiplier = 0.6;
    
    switch (ageGroup) {
      case '0-2': baseMultiplier = 0.2; break; // Babies eat very little
      case '3-5': baseMultiplier = 0.4; break; // Toddlers
      case '6-12': baseMultiplier = 0.7; break; // School age
      case '13-17': baseMultiplier = 1.0; break; // Teenagers eat like adults!
    }
    
    return baseMultiplier * getChildPortionMultiplier(courseType, appetite);
  };

  // Get senior multiplier
  const getSeniorMultiplier = (courseType: string, appetite: string) => {
    let baseMultiplier = 0.7; // Seniors generally eat less
    
    // Seniors have different preferences
    switch (courseType) {
      case 'Appetizer': return baseMultiplier * 0.6;
      case 'Main Course': return baseMultiplier * 0.8;
      case 'Side Dish': return baseMultiplier * 0.9; // Seniors like sides
      case 'Dessert': return baseMultiplier * 1.2; // Seniors love desserts
      case 'Drinks': return baseMultiplier * 1.1; // Seniors drink moderately
      default: return baseMultiplier;
    }
  };

  // Gender adjustment (subtle, based on cultural preferences)
  const getGenderAdjustment = (courseType: string) => {
    // This could be expanded based on cultural research
    // For now, keeping it neutral
    return 1.0;
  };

  // Enhanced dietary restrictions calculation - SAFETY FIRST APPROACH
  const calculateEnhancedDietaryPortions = (recipeTitle: string, courseType: string) => {
    let additionalPortions = 0;
    
    enhancedDietaryRestrictions.forEach((restriction: DietaryRestriction) => {
      if (isRecipeSuitableForDiet(recipeTitle, restriction)) {
        // Treat ALL dietary restrictions equally for safety
        const baseAddition = 0.4; // Increased base addition for safety
        additionalPortions += baseAddition;
        
        // Always add extra for cross-contamination risk (safety first)
        additionalPortions += 0.2;
        
        // Add extra portions for dietary guests to ensure they have enough safe options
        additionalPortions += 0.3;
      }
    });
    
    return additionalPortions;
  };

  // Check if recipe is suitable for dietary restriction
  const isRecipeSuitableForDiet = (recipeTitle: string, restriction: DietaryRestriction) => {
    const title = recipeTitle.toLowerCase();
    
    switch (restriction.type) {
      case 'Vegetarian':
        return title.includes('vegetable') || title.includes('bean') || 
               title.includes('tofu') || title.includes('quinoa') ||
               title.includes('lentil') || title.includes('chickpea');
      case 'Vegan':
        return title.includes('vegetable') || title.includes('bean') || 
               title.includes('tofu') || title.includes('quinoa') ||
               title.includes('coconut') || title.includes('almond');
      case 'Gluten-Free':
        return title.includes('rice') || title.includes('quinoa') || 
               title.includes('corn') || title.includes('potato') ||
               title.includes('sweet potato');
      case 'Dairy-Free':
        return title.includes('coconut') || title.includes('almond') || 
               title.includes('oat') || title.includes('cashew');
      default:
        return false;
    }
  };

  // Get severity multiplier
  const getSeverityMultiplier = (severity: string) => {
    switch (severity) {
      case 'mild': return 0.5;
      case 'moderate': return 1.0;
      case 'strict': return 1.5;
      default: return 1.0;
    }
  };

  // Event context adjustments
  const calculateEventContextAdjustment = (courseType: string) => {
    let adjustment = 1.0;
    
    // Duration adjustments
    switch (eventContext.duration) {
      case 'short': adjustment *= 0.8; break; // Less time to eat
      case 'medium': adjustment *= 1.0; break; // Standard
      case 'long': adjustment *= 1.2; break; // More time to eat
    }
    
    // Time of day adjustments - handle multiple periods for long events
    if (eventContext.duration === 'long' && eventContext.timeOfDayMulti.length > 0) {
      // For long events, calculate average adjustment across all selected time periods
      let totalAdjustment = 0;
      eventContext.timeOfDayMulti.forEach(timePeriod => {
        switch (timePeriod) {
          case 'breakfast': totalAdjustment += 0.9; break; // People eat less at breakfast
          case 'lunch': totalAdjustment += 1.0; break; // Standard
          case 'dinner': totalAdjustment += 1.1; break; // People eat more at dinner
          case 'late-night': totalAdjustment += 0.7; break; // Light late-night eating
        }
      });
      adjustment *= totalAdjustment / eventContext.timeOfDayMulti.length;
    } else {
      // For short/medium events, use single time period
      switch (eventContext.timeOfDay) {
        case 'breakfast': adjustment *= 0.9; break; // People eat less at breakfast
        case 'lunch': adjustment *= 1.0; break; // Standard
        case 'dinner': adjustment *= 1.1; break; // People eat more at dinner
        case 'late-night': adjustment *= 0.7; break; // Light late-night eating
      }
    }
    
    return adjustment;
  };

  // Social context adjustments
  const calculateSocialContextAdjustment = () => {
    switch (eventContext.socialContext) {
      case 'family': return 1.1; // Families eat more together
      case 'friends': return 1.0; // Standard
      case 'work': return 0.9; // People eat less at work events
      case 'celebration': return 1.3; // Celebrations mean more food!
      default: return 1.0;
    }
  };

  // Weather and seasonal adjustments
  const calculateWeatherAdjustment = (recipeTitle: string, courseType: string) => {
    let adjustment = 1.0;
    
    switch (eventContext.weather) {
      case 'outdoor':
        // People eat more outdoors, especially hearty foods
        if (courseType === 'Main Course' || courseType === 'Side Dish') {
          adjustment *= 1.2;
        }
        break;
      case 'seasonal':
        // Adjust based on seasonal preferences
        const currentMonth = new Date().getMonth();
        if (currentMonth >= 11 || currentMonth <= 2) { // Winter
          if (recipeTitle.toLowerCase().includes('soup') || 
              recipeTitle.toLowerCase().includes('stew') ||
              recipeTitle.toLowerCase().includes('hot')) {
            adjustment *= 1.3;
          }
        } else if (currentMonth >= 6 && currentMonth <= 8) { // Summer
          if (recipeTitle.toLowerCase().includes('salad') || 
              recipeTitle.toLowerCase().includes('cold') ||
              recipeTitle.toLowerCase().includes('fresh')) {
            adjustment *= 1.2;
          }
        }
        break;
      default:
        break;
    }
    
    return adjustment;
  };

  // Apply course-specific safety factors
  const applyCourseSpecificFactors = (portions: number, courseType: string) => {
    switch (courseType) {
      case 'Dessert':
        return Math.ceil(portions * 1.2); // Desserts always disappear first!
      case 'Appetizer':
        return Math.ceil(portions * 1.1); // People try multiple appetizers
      case 'Drinks':
        return Math.ceil(portions * 1.3); // People drink more than they think
      case 'Snacks':
        return Math.ceil(portions * 1.15); // Snacks get eaten quickly
      default:
        return Math.ceil(portions);
    }
  };

  // Apply user feedback learning
  const applyUserFeedbackLearning = (portions: number, recipeTitle: string, courseType: string) => {
    const feedbackKey = `${recipeTitle}-${courseType}`;
    const userAdjustment = userFeedback[feedbackKey];
    
    if (userAdjustment) {
      // Apply user's previous feedback (positive = more food needed, negative = less)
      return portions * (1 + (userAdjustment * 0.1)); // 10% adjustment per feedback point
    }
    
    return portions;
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
    
    (Object.entries(dietaryGuests) as [string, number][]).forEach(([restriction, count]) => {
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

  // Utility functions for enhanced portion calculator
  const getTotalGuestsFromDemographics = () => {
    const adultTotal = (Object.values(guestDemographics.adults.ageGroups) as number[]).reduce((sum, count) => sum + count, 0);
    const childTotal = (Object.values(guestDemographics.children) as number[]).reduce((sum, count) => sum + count, 0);
    return adultTotal + childTotal + guestDemographics.seniors;
  };

  // Add user feedback for portion accuracy
  const addUserFeedback = (recipeTitle: string, courseType: string, feedback: number) => {
    const feedbackKey = `${recipeTitle}-${courseType}`;
    setUserFeedback(prev => ({
      ...prev,
      [feedbackKey]: feedback
    }));
    
    toast({
      title: 'Feedback Recorded!',
      description: 'Your feedback will help improve future portion calculations.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Smart ingredient scaling based on cooking methods
  const calculateIngredientScaling = (ingredient: string, baseAmount: number, recipeTitle: string, courseType: string) => {
    const totalPortions = calculateAdvancedPortions(baseAmount, recipeTitle, courseType);
    const scalingFactor = totalPortions / baseAmount;
    
    // Adjust scaling based on ingredient type and cooking method
    let adjustedScaling = scalingFactor;
    
    // Perishable ingredients need more careful scaling
    if (isPerishableIngredient(ingredient)) {
      adjustedScaling *= 0.9; // Slightly less to avoid waste
    }
    
    // Bulk ingredients can be scaled more generously
    if (isBulkIngredient(ingredient)) {
      adjustedScaling *= 1.1; // Slightly more for bulk items
    }
    
    // Expensive ingredients need careful scaling
    if (isExpensiveIngredient(ingredient)) {
      adjustedScaling *= 0.8; // Less to avoid waste
    }
    
    return Math.ceil(adjustedScaling);
  };

  // Helper functions for ingredient classification
  const isPerishableIngredient = (ingredient: string) => {
    const perishable = ['milk', 'cream', 'yogurt', 'cheese', 'eggs', 'fish', 'meat', 'fresh herbs', 'lettuce', 'tomatoes'];
    return perishable.some(item => ingredient.toLowerCase().includes(item));
  };

  const isBulkIngredient = (ingredient: string) => {
    const bulk = ['rice', 'pasta', 'beans', 'potatoes', 'onions', 'carrots', 'flour', 'sugar'];
    return bulk.some(item => ingredient.toLowerCase().includes(item));
  };

  const isExpensiveIngredient = (ingredient: string) => {
    const expensive = ['saffron', 'truffle', 'caviar', 'lobster', 'filet mignon', 'aged cheese'];
    return expensive.some(item => ingredient.toLowerCase().includes(item));
  };

  // Enhanced shopping list with smart scaling
  const handleAddSmartShoppingList = () => {
    if (selectedMenu) {
      const allIngredients: string[] = [];
      selectedMenu.recipes.forEach(recipe => {
        const scaledIngredients = recipe.ingredients.map(ingredient => {
          const baseAmount = recipe.servings;
          const scaledAmount = calculateIngredientScaling(ingredient, baseAmount, recipe.title, recipe.courseType || 'Main Course');
          return `${scaledAmount}x ${ingredient}`;
        });
        allIngredients.push(...scaledIngredients);
      });
      
      addItems(allIngredients, selectedMenu.name);
      toast({
        title: 'Smart Shopping List Created!',
        description: `Ingredients scaled intelligently for ${adultCount + childCount + guestDemographics.seniors} guests`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
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
          
          {/* Clean Guest Demographics */}
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} w="full">
            <GridItem>
              <VStack align="start" spacing={4}>
                <Text fontWeight="semibold" color="purple.700" fontSize="lg">
                  👥 Guest Demographics
                </Text>
                
                {/* Simple Adult/Child Inputs */}
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

                {/* Seniors */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600">
                    Seniors (65+)
                  </Text>
                  <NumberInput
                    value={guestDemographics.seniors}
                    onChange={(_, value) => {
                      setGuestDemographics(prev => ({
                        ...prev,
                        seniors: value
                      }));
                    }}
                    min={0}
                    max={20}
                    bg="white"
                    borderRadius="md"
                    w="120px"
                  >
                    <NumberInputField borderColor="purple.200" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>

                {/* Total Summary */}
                <VStack align="start" spacing={1} w="full" p={3} bg="purple.50" borderRadius="md">
                  <Text fontWeight="semibold" color="purple.700" fontSize="sm">
                    📈 Total Guests: {adultCount + childCount + guestDemographics.seniors}
                  </Text>
                </VStack>

                {/* Detailed Age Groups - Only show if adults or children > 0 */}
                {(adultCount > 0 || childCount > 0) && (
                  <VStack align="start" spacing={4} w="full" p={4} bg="purple.25" borderRadius="md" border="1px solid" borderColor="purple.200">
                    <Text fontWeight="semibold" color="purple.700" fontSize="md">
                      📊 Detailed Age Breakdown (Optional)
                    </Text>
                    <Text fontSize="xs" color="purple.600" fontStyle="italic">
                      For more accurate portion calculations, specify age groups
                    </Text>
                    
                    {/* Adult Age Groups - Only if adults > 0 */}
                    {adultCount > 0 && (
                      <VStack align="start" spacing={3} w="full">
                        <Text fontWeight="medium" color="purple.600" fontSize="sm">
                          👥 Adults by Age Group
                        </Text>
                        <SimpleGrid columns={2} spacing={3} w="full">
                          {Object.entries(guestDemographics.adults.ageGroups).map(([ageGroup, count]) => (
                            <VStack key={ageGroup} align="start" spacing={1}>
                              <Text fontSize="xs" color="purple.500" fontWeight="medium">
                                {ageGroup}
                              </Text>
                              <NumberInput
                                value={count}
                                onChange={(_, value) => {
                                  setGuestDemographics(prev => ({
                                    ...prev,
                                    adults: {
                                      ...prev.adults,
                                      ageGroups: {
                                        ...prev.adults.ageGroups,
                                        [ageGroup]: value
                                      }
                                    }
                                  }));
                                }}
                                min={0}
                                max={20}
                                size="sm"
                                bg="white"
                                borderRadius="md"
                              >
                                <NumberInputField borderColor="purple.200" fontSize="xs" />
                                <NumberInputStepper>
                                  <NumberIncrementStepper />
                                  <NumberDecrementStepper />
                                </NumberInputStepper>
                              </NumberInput>
                            </VStack>
                          ))}
                        </SimpleGrid>
                      </VStack>
                    )}

                    {/* Children Age Groups - Only if children > 0 */}
                    {childCount > 0 && (
                      <VStack align="start" spacing={3} w="full">
                        <Text fontWeight="medium" color="purple.600" fontSize="sm">
                          👶 Children by Age Group
                        </Text>
                        <SimpleGrid columns={2} spacing={3} w="full">
                          {Object.entries(guestDemographics.children).map(([ageGroup, count]) => (
                            <VStack key={ageGroup} align="start" spacing={1}>
                              <Text fontSize="xs" color="purple.500" fontWeight="medium">
                                {ageGroup}
                              </Text>
                              <NumberInput
                                value={count}
                                onChange={(_, value) => {
                                  setGuestDemographics(prev => ({
                                    ...prev,
                                    children: {
                                      ...prev.children,
                                      [ageGroup]: value
                                    }
                                  }));
                                }}
                                min={0}
                                max={15}
                                size="sm"
                                bg="white"
                                borderRadius="md"
                              >
                                <NumberInputField borderColor="purple.200" fontSize="xs" />
                                <NumberInputStepper>
                                  <NumberIncrementStepper />
                                  <NumberDecrementStepper />
                                </NumberInputStepper>
                              </NumberInput>
                            </VStack>
                          ))}
                        </SimpleGrid>
                      </VStack>
                    )}
                  </VStack>
                )}
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="start" spacing={4}>
                <Text fontWeight="semibold" color="purple.700" fontSize="lg">
                  🎯 Appetite & Event Context
                </Text>
                
                {/* Appetite Level */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600" fontSize="sm">
                    Appetite Level
                  </Text>
                  <Select
                    value={appetiteLevel}
                    onChange={(e) => setAppetiteLevel(e.target.value)}
                    bg="white"
                    borderColor="purple.200"
                    size="sm"
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

                {/* Event Duration */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600" fontSize="sm">
                    Event Duration
                  </Text>
                  <Select
                    value={eventContext.duration}
                    onChange={(e) => {
                      const newDuration = e.target.value as 'short' | 'medium' | 'long';
                      setEventContext(prev => {
                        if (newDuration === 'long') {
                          // When switching to long, initialize with current timeOfDay
                          return {
                            ...prev,
                            duration: newDuration,
                            timeOfDayMulti: [prev.timeOfDay]
                          };
                        } else {
                          // When switching from long to short/medium, use first selected time or default to dinner
                          const newTimeOfDay = prev.duration === 'long' && prev.timeOfDayMulti.length > 0 
                            ? prev.timeOfDayMulti[0] as 'breakfast' | 'lunch' | 'dinner' | 'late-night'
                            : prev.timeOfDay;
                          return {
                            ...prev,
                            duration: newDuration,
                            timeOfDay: newTimeOfDay,
                            timeOfDayMulti: [newTimeOfDay]
                          };
                        }
                      });
                    }}
                    bg="white"
                    borderColor="purple.200"
                    size="sm"
                    _hover={{ borderColor: 'purple.300' }}
                    _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                  >
                    <option value="short">⏰ Short (&lt;2 hours)</option>
                    <option value="medium">⏰ Medium (2-4 hours)</option>
                    <option value="long">⏰ Long (&gt;4 hours)</option>
                  </Select>
                </VStack>

                {/* Time of Day */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600" fontSize="sm">
                    Time of Day
                  </Text>
                  {eventContext.duration === 'long' ? (
                    // Multi-select for long events
                    <VStack align="start" spacing={2} w="full">
                      <Text fontSize="xs" color="purple.500" fontStyle="italic">
                        Select all meal times for your long event:
                      </Text>
                      <VStack align="start" spacing={2} w="full">
                        {[
                          { value: 'breakfast', label: '🌅 Breakfast', icon: '🌅' },
                          { value: 'lunch', label: '☀️ Lunch', icon: '☀️' },
                          { value: 'dinner', label: '🌙 Dinner', icon: '🌙' },
                          { value: 'late-night', label: '🌃 Late Night', icon: '🌃' }
                        ].map((timeOption) => (
                          <Checkbox
                            key={timeOption.value}
                            isChecked={eventContext.timeOfDayMulti.includes(timeOption.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEventContext(prev => ({
                                  ...prev,
                                  timeOfDayMulti: [...prev.timeOfDayMulti, timeOption.value]
                                }));
                              } else {
                                setEventContext(prev => ({
                                  ...prev,
                                  timeOfDayMulti: prev.timeOfDayMulti.filter(t => t !== timeOption.value)
                                }));
                              }
                            }}
                            colorScheme="purple"
                            size="sm"
                          >
                            <Text fontSize="sm">{timeOption.label}</Text>
                          </Checkbox>
                        ))}
                      </VStack>
                      {eventContext.timeOfDayMulti.length === 0 && (
                        <Text fontSize="xs" color="red.500">
                          Please select at least one meal time
                        </Text>
                      )}
                    </VStack>
                  ) : (
                    // Single select for short/medium events
                    <Select
                      value={eventContext.timeOfDay}
                      onChange={(e) => setEventContext(prev => ({ ...prev, timeOfDay: e.target.value as any }))}
                      bg="white"
                      borderColor="purple.200"
                      size="sm"
                      _hover={{ borderColor: 'purple.300' }}
                      _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                    >
                      <option value="breakfast">🌅 Breakfast</option>
                      <option value="lunch">☀️ Lunch</option>
                      <option value="dinner">🌙 Dinner</option>
                      <option value="late-night">🌃 Late Night</option>
                    </Select>
                  )}
                </VStack>

                {/* Social Context */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600" fontSize="sm">
                    Social Context
                  </Text>
                  <Select
                    value={eventContext.socialContext}
                    onChange={(e) => setEventContext(prev => ({ ...prev, socialContext: e.target.value as any }))}
                    bg="white"
                    borderColor="purple.200"
                    size="sm"
                    _hover={{ borderColor: 'purple.300' }}
                    _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                  >
                    <option value="family">👨‍👩‍👧‍👦 Family</option>
                    <option value="friends">👥 Friends</option>
                    <option value="work">💼 Work</option>
                    <option value="celebration">🎉 Celebration</option>
                  </Select>
                </VStack>

                {/* Weather/Setting */}
                <VStack align="start" spacing={2} w="full">
                  <Text fontWeight="medium" color="purple.600" fontSize="sm">
                    Setting
                  </Text>
                  <Select
                    value={eventContext.weather}
                    onChange={(e) => setEventContext(prev => ({ ...prev, weather: e.target.value as any }))}
                    bg="white"
                    borderColor="purple.200"
                    size="sm"
                    _hover={{ borderColor: 'purple.300' }}
                    _focus={{ borderColor: 'purple.500', boxShadow: 'outline' }}
                  >
                    <option value="indoor">🏠 Indoor</option>
                    <option value="outdoor">🌳 Outdoor</option>
                    <option value="seasonal">🍂 Seasonal</option>
                  </Select>
                </VStack>
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
                        max={adultCount + childCount + guestDemographics.seniors}
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

          {/* Comprehensive Portion Calculator Information & Summary */}
          {(adultCount > 0 || childCount > 0 || guestDemographics.seniors > 0) && (
            <VStack spacing={6} mb={8} p={6} bg="purple.50" borderRadius="lg" border="1px solid" borderColor="purple.200">
              <Heading size="md" color="purple.800">
                🧮 Enhanced Portion Calculator & Summary
              </Heading>
              
              {/* Current Calculation Summary */}
              <VStack spacing={4} w="full" p={4} bg="white" borderRadius="md" border="1px solid" borderColor="purple.100">
                <Text fontSize="sm" fontWeight="semibold" color="purple.700" textAlign="center">
                  📊 Current Calculation Summary
                </Text>
                <Text fontSize="sm" color="purple.600" textAlign="center">
                  Based on {adultCount + childCount + guestDemographics.seniors} guests with {appetiteLevel} appetites
                  {Object.keys(dietaryGuests).length > 0 && `, plus ${Object.entries(dietaryGuests).map(([k, v]) => `${v} ${k}`).join(', ')}`}
                </Text>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  <VStack align="start" spacing={2}>
                    <Text fontSize="sm" fontWeight="semibold" color="purple.600">👥 Guest Breakdown:</Text>
                    <Text fontSize="xs" color="purple.600">
                      • Adults: {adultCount}
                    </Text>
                    <Text fontSize="xs" color="purple.600">
                      • Children: {childCount}
                    </Text>
                    <Text fontSize="xs" color="purple.600">
                      • Seniors: {guestDemographics.seniors}
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={2}>
                    <Text fontSize="sm" fontWeight="semibold" color="purple.600">🎯 Event Context:</Text>
                    <Text fontSize="xs" color="purple.600">
                      • Duration: {eventContext.duration} | Time: {eventContext.duration === 'long' && eventContext.timeOfDayMulti.length > 0 
                        ? eventContext.timeOfDayMulti.join(', ') 
                        : eventContext.timeOfDay}
                    </Text>
                    <Text fontSize="xs" color="purple.600">
                      • Social: {eventContext.socialContext} | Setting: {eventContext.weather}
                    </Text>
                    <Text fontSize="xs" color="purple.600">
                      • Appetite: {appetiteLevel}
                    </Text>
                  </VStack>
                </SimpleGrid>

                <VStack spacing={2} w="full">
                  <Text fontSize="sm" fontWeight="semibold" color="purple.600">🍽️ Portion Multipliers by Course:</Text>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} w="full">
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">Main Course:</Text>
                      <Text fontSize="xs" color="purple.600">
                        Adults: {getAdultPortionMultiplier('Main Course', appetiteLevel).toFixed(1)}x | 
                        Children: {getChildPortionMultiplier('Main Course', appetiteLevel).toFixed(1)}x
                      </Text>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">Dessert:</Text>
                      <Text fontSize="xs" color="purple.600">
                        Adults: {getAdultPortionMultiplier('Dessert', appetiteLevel).toFixed(1)}x | 
                        Children: {getChildPortionMultiplier('Dessert', appetiteLevel).toFixed(1)}x 🍰
                      </Text>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">Drinks:</Text>
                      <Text fontSize="xs" color="purple.600">
                        Adults: {getAdultPortionMultiplier('Drinks', appetiteLevel).toFixed(1)}x | 
                        Children: {getChildPortionMultiplier('Drinks', appetiteLevel).toFixed(1)}x
                      </Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>
              </VStack>

              {/* How the Calculator Works */}
              <VStack spacing={4} w="full">
                <Text fontSize="sm" fontWeight="semibold" color="purple.700">
                  🔬 How the Enhanced Portion Calculator Works
                </Text>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  <VStack align="start" spacing={3}>
                    <Text fontSize="sm" fontWeight="semibold" color="purple.600">
                      👥 Guest Demographics
                    </Text>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" color="purple.600">• <strong>Simple Mode:</strong> Uses basic adult/child counts</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Detailed Mode:</strong> Age-specific multipliers when provided</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Seniors:</strong> Separate calculations (eat 20-30% less)</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Children:</strong> Age-based portions (0-2: 20%, 3-5: 40%, 6-12: 70%, 13-17: 100%)</Text>
                    </VStack>
                  </VStack>

                  <VStack align="start" spacing={3}>
                    <Text fontSize="sm" fontWeight="semibold" color="purple.600">
                      🎯 Event Context Adjustments
                    </Text>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" color="purple.600">• <strong>Duration:</strong> Short events = less food, Long events = more food</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Time of Day:</strong> Dinner = +10%, Late-night = -30%</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Long Events:</strong> Multi-select meal times for accurate planning</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Social Context:</strong> Celebrations = +30%, Work = -10%</Text>
                      <Text fontSize="xs" color="purple.600">• <strong>Setting:</strong> Outdoor = +20% for hearty foods</Text>
                    </VStack>
                  </VStack>
                </SimpleGrid>

                <VStack spacing={3} w="full">
                  <Text fontSize="sm" fontWeight="semibold" color="purple.600">
                    🍽️ Course-Specific Safety Factors
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} w="full">
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">🍰 Desserts: +20%</Text>
                      <Text fontSize="xs" color="purple.600">Always disappear first!</Text>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">🥂 Drinks: +30%</Text>
                      <Text fontSize="xs" color="purple.600">People drink more than they think</Text>
                    </VStack>
                    <VStack align="start" spacing={1}>
                      <Text fontSize="xs" fontWeight="semibold" color="purple.600">🥨 Appetizers: +10%</Text>
                      <Text fontSize="xs" color="purple.600">People try multiple items</Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>

                <VStack spacing={3} w="full">
                  <Text fontSize="sm" fontWeight="semibold" color="purple.600">
                    🚫 Safety-First Dietary Handling
                  </Text>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="xs" color="purple.600">• <strong>Equal Treatment:</strong> All dietary restrictions treated equally for safety</Text>
                    <Text fontSize="xs" color="purple.600">• <strong>Cross-Contamination Protection:</strong> Extra portions for safe alternatives</Text>
                    <Text fontSize="xs" color="purple.600">• <strong>Smart Ingredient Scaling:</strong> Perishable items scaled down, bulk items scaled up</Text>
                    <Text fontSize="xs" color="purple.600">• <strong>Expensive Ingredients:</strong> Conservative scaling to prevent waste</Text>
                  </VStack>
                </VStack>

                <VStack spacing={2} w="full">
                  <Text fontSize="sm" fontWeight="semibold" color="purple.600">
                    🌦️ Seasonal & Weather Intelligence
                  </Text>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="xs" color="purple.600">• <strong>Winter:</strong> +30% for hot soups, stews, and hearty dishes</Text>
                    <Text fontSize="xs" color="purple.600">• <strong>Summer:</strong> +20% for salads, cold dishes, and fresh ingredients</Text>
                    <Text fontSize="xs" color="purple.600">• <strong>Outdoor Events:</strong> +20% for main courses and side dishes</Text>
                  </VStack>
                </VStack>
              </VStack>

              <Text fontSize="xs" color="purple.600" fontStyle="italic" textAlign="center">
                💡 The calculator combines all these factors for the most accurate portion estimates possible!
              </Text>
            </VStack>
          )}
        </VStack>



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
                      <HStack spacing={2}>
                        <FavoriteButton 
                          recipe={{
                            id: menu.id,
                            name: menu.name,
                            category: 'Party Planning',
                            description: menu.description,
                            difficulty: menu.difficulty,
                            cookTime: menu.time
                          }}
                        />
                        <Badge colorScheme="purple" variant="subtle">
                          {menu.mealType}
                        </Badge>
                      </HStack>
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
                      <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                        {(adultCount > 0 || childCount > 0 || guestDemographics.seniors > 0) ? 
                          `${calculateAdvancedPortions(menu.baseServings, menu.name, 'Main Course')} servings` : 
                          `${menu.baseServings} base servings`
                        }
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
            <HStack spacing={3}>
              <VStack align="start" spacing={1} flex={1}>
                <Text>{selectedMenu?.name}</Text>
              </VStack>
              {selectedMenu && (
                <FavoriteButton 
                  recipe={{
                    id: selectedMenu.id,
                    name: selectedMenu.name,
                    category: 'Party Planning',
                    description: selectedMenu.description,
                    difficulty: selectedMenu.difficulty,
                    cookTime: selectedMenu.time
                  }}
                  size="md"
                />
              )}
            </HStack>
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
                      onClick={handleAddSmartShoppingList}
                      leftIcon={<Text>🧠</Text>}
                    >
                      Smart Shopping List
                    </Button>
                    <Button
                      colorScheme="purple"
                      variant="outline"
                      onClick={handleAddToShoppingList}
                      leftIcon={<Text>🛒</Text>}
                    >
                      Standard Shopping List
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
              <HStack spacing={3}>
                <VStack align="start" spacing={1} flex={1}>
                  <Text>{selectedRecipe?.title}</Text>
                </VStack>
                {selectedRecipe && (
                  <FavoriteButton 
                    recipe={{
                      id: `recipe-${selectedRecipe.title}`,
                      name: selectedRecipe.title,
                      category: 'Party Planning',
                      description: selectedRecipe.description,
                      difficulty: 'Medium',
                      cookTime: '30 min'
                    }}
                    size="md"
                  />
                )}
              </HStack>
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
                      <Text>👥 {calculateAdvancedPortions(selectedRecipe.servings, selectedRecipe.title, selectedRecipe.courseType || 'Main Course')} for {adultCount + childCount + guestDemographics.seniors} guests</Text>
                    </HStack>
                    <Text fontSize="xs" color="purple.600" mt={1}>
                      {adultCount} adults, {childCount} children, {guestDemographics.seniors} seniors | {appetiteLevel} appetite
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