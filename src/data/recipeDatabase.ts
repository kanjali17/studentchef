export interface Recipe {
  id: string;
  name: string;
  description: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cost: string;
  rating: number;
  image: string;
  category: string;
  subcategory: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber: number;
  };
  servings?: number;
  restaurant?: string;
  cookingMethod?: string;
  upgrades?: string[];
  healthBenefits?: string[];
}

export const recipeDatabase: Recipe[] = [
  // RESTAURANT DUPES - CHICK-FIL-A
  {
    id: 'chick-fil-a-sandwich',
    name: 'Chick-fil-A Chicken Sandwich',
    description: 'The iconic crispy chicken sandwich with pickle juice marinade',
    time: '25 min',
    difficulty: 'Medium',
    cost: '$4',
    rating: 5,
    image: '🍗',
    category: 'Restaurant Dupes',
    subcategory: 'Chick-fil-A',
    restaurant: 'Chick-fil-A',
    ingredients: [
      '2 chicken breasts',
      '1 cup pickle juice',
      '1 cup flour',
      '2 eggs',
      '2 brioche buns',
      'Pickles',
      '2 tbsp butter',
      'Salt and pepper',
      'Oil for frying'
    ],
    instructions: [
      'Marinate chicken in pickle juice for 30 minutes (this is the secret sauce, no cap!)',
      'Mix flour with salt and pepper in a bowl',
      'Beat eggs in another bowl',
      'Dredge chicken in flour, then egg, then flour again (double coating = extra crispy vibes)',
      'Fry in hot oil until golden brown and cooked through (about 6-8 minutes)',
      'Butter and toast the buns',
      'Assemble: bun, chicken, pickles, top bun',
      'Enjoy your fire sandwich! 🔥'
    ],
    tips: [
      'Use pickle juice from dill pickles for that authentic taste',
      'Don\'t skip the double coating - it\'s what makes it extra crispy',
      'Let the chicken rest for 5 minutes before cutting',
      'Serve with waffle fries for the full experience'
    ],
    nutrition: {
      calories: 450,
      protein: 35,
      fat: 18,
      carbs: 45,
      fiber: 2
    }
  },
  {
    id: 'chick-fil-a-fries',
    name: 'Chick-fil-A Waffle Fries',
    description: 'Crispy waffle-cut fries with perfect seasoning',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🍟',
    category: 'Restaurant Dupes',
    subcategory: 'Chick-fil-A',
    restaurant: 'Chick-fil-A',
    ingredients: [
      '4 large potatoes',
      'Oil for frying',
      'Salt',
      'Pepper',
      'Paprika',
      'Garlic powder'
    ],
    instructions: [
      'Wash and peel potatoes (or keep skin on for extra fiber, your choice!)',
      'Use a waffle cutter or mandoline to create waffle cuts',
      'Soak in cold water for 30 minutes to remove starch',
      'Pat completely dry with paper towels',
      'Heat oil to 375°F (hot enough to make it rain crispy fries)',
      'Fry in batches until golden brown (about 4-5 minutes)',
      'Drain on paper towels and season immediately',
      'Serve hot and crispy! No soggy fries allowed 💅'
    ],
    tips: [
      'Soaking removes starch for extra crispiness',
      'Don\'t overcrowd the fryer - give them space to get crispy',
      'Season while hot so the salt sticks',
      'Double fry for extra crispy results'
    ],
    nutrition: {
      calories: 320,
      protein: 4,
      fat: 16,
      carbs: 38,
      fiber: 2
    }
  },
  {
    id: 'chick-fil-a-sauce',
    name: 'Chick-fil-A Sauce',
    description: 'The legendary dipping sauce that makes everything better',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$1',
    rating: 5,
    image: '🥄',
    category: 'Restaurant Dupes',
    subcategory: 'Chick-fil-A',
    restaurant: 'Chick-fil-A',
    ingredients: [
      '1/2 cup mayo',
      '2 tbsp mustard',
      '2 tbsp honey',
      '2 tbsp BBQ sauce',
      '1 tbsp lemon juice',
      '1/2 tsp garlic powder',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Mix all ingredients in a bowl (literally just stir it up, it\'s that easy)',
      'Taste and adjust seasoning (add more honey if you want it sweeter)',
      'Refrigerate for at least 30 minutes to let flavors meld',
      'Serve with your homemade chicken sandwich!',
      'This sauce is everything, no cap! 🔥'
    ],
    tips: [
      'Use good quality mayo for best results',
      'Let it sit in the fridge to develop flavor',
      'Adjust honey and mustard to your taste preference',
      'Keeps in fridge for up to a week'
    ],
    nutrition: {
      calories: 120,
      protein: 0,
      fat: 10,
      carbs: 8,
      fiber: 0
    }
  },
  // RESTAURANT DUPES - MCDONALD'S
  {
    id: 'mcdonalds-big-mac',
    name: 'McDonald\'s Big Mac',
    description: 'The classic double-decker burger with special sauce',
    time: '30 min',
    difficulty: 'Medium',
    cost: '$5',
    rating: 4,
    image: '🍔',
    category: 'Restaurant Dupes',
    subcategory: 'McDonald\'s',
    restaurant: 'McDonald\'s',
    ingredients: [
      '1/2 lb ground beef',
      '3 sesame seed buns',
      'Lettuce',
      'Cheese slices',
      'Pickles',
      'Onions',
      'Special sauce',
      'Salt and pepper'
    ],
    instructions: [
      'Form beef into 2 thin patties (make them thicc but not too thicc)',
      'Season with salt and pepper',
      'Cook on high heat for 3-4 minutes per side',
      'Add cheese to one patty and let it melt',
      'Toast the buns (don\'t skip this step, it\'s crucial!)',
      'Assemble: bottom bun, lettuce, patty with cheese, middle bun, lettuce, second patty, top bun',
      'Add special sauce, pickles, and onions',
      'Enjoy your homemade Big Mac! It\'s giving main character energy 🍔'
    ],
    tips: [
      'Use 80/20 ground beef for best flavor',
      'Don\'t press down on the patties while cooking',
      'Let the meat rest for 5 minutes before assembling',
      'Toast the buns for that authentic texture'
    ],
    nutrition: {
      calories: 550,
      protein: 28,
      fat: 30,
      carbs: 42,
      fiber: 2
    }
  },
  // RESTAURANT DUPES - CHIPOTLE
  {
    id: 'chipotle-burrito-bowl',
    name: 'Chipotle Burrito Bowl',
    description: 'Fresh and flavorful burrito bowl with all the fixings',
    time: '20 min',
    difficulty: 'Medium',
    cost: '$6',
    rating: 5,
    image: '🌯',
    category: 'Restaurant Dupes',
    subcategory: 'Chipotle',
    restaurant: 'Chipotle',
    ingredients: [
      'Rice',
      'Black beans',
      'Chicken',
      'Bell peppers',
      'Onions',
      'Cilantro',
      'Lime',
      'Sour cream',
      'Cheese',
      'Salsa'
    ],
    instructions: [
      'Cook rice with lime and cilantro',
      'Season and cook chicken',
      'Sauté peppers and onions',
      'Assemble bowl with rice, beans, chicken, vegetables',
      'Top with sour cream, cheese, and salsa'
    ],
    tips: [
      'Use leftover rice for convenience',
      'Marinate chicken in lime and spices',
      'Add guacamole for extra flavor',
      'Customize with your favorite toppings'
    ],
    nutrition: {
      calories: 480,
      protein: 32,
      fat: 16,
      carbs: 52,
      fiber: 8
    }
  },
  // INGREDIENT UPGRADES - MAC & CHEESE
  {
    id: 'loaded-mac-cheese',
    name: 'Loaded Mac & Cheese',
    description: 'Upgraded mac and cheese with protein and vegetables',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 5,
    image: '🧀',
    category: 'Ingredient Upgrades',
    subcategory: 'Mac & Cheese',
    upgrades: ['Add protein', 'Broccoli', 'Breadcrumb topping', 'Hot sauce'],
    ingredients: [
      'Boxed mac & cheese',
      'Milk',
      'Butter',
      'Broccoli florets',
      'Cooked chicken or tofu',
      'Breadcrumbs',
      'Hot sauce'
    ],
    instructions: [
      'Cook mac & cheese according to package directions',
      'Steam broccoli until tender',
      'Add cooked chicken/tofu and broccoli to mac & cheese',
      'Top with breadcrumbs and hot sauce',
      'Serve hot and enjoy!'
    ],
    tips: [
      'Use leftover rotisserie chicken for convenience',
      'Add extra cheese for more creaminess',
      'Try different hot sauces for variety'
    ],
    nutrition: {
      calories: 450,
      protein: 29,
      fat: 18,
      carbs: 43,
      fiber: 2
    }
  },
  // Add more recipes here...
];

// Helper functions to filter recipes
export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipeDatabase.filter(recipe => recipe.category === category);
};

export const getRecipesByRestaurant = (restaurant: string): Recipe[] => {
  return recipeDatabase.filter(recipe => recipe.restaurant === restaurant);
};

export const getRecipesBySubcategory = (subcategory: string): Recipe[] => {
  return recipeDatabase.filter(recipe => recipe.subcategory === subcategory);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowercaseQuery = query.toLowerCase();
  return recipeDatabase.filter(recipe => 
    recipe.name.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery))
  );
};

// Restaurant data for the selector
export const restaurants = [
  { value: 'chick-fil-a', label: 'Chick-fil-A', icon: '🍗' },
  { value: 'mcdonalds', label: 'McDonald\'s', icon: '🍔' },
  { value: 'chipotle', label: 'Chipotle', icon: '🌯' },
  { value: 'subway', label: 'Subway', icon: '🥪' },
  { value: 'taco-bell', label: 'Taco Bell', icon: '🌮' },
  { value: 'pizza-hut', label: 'Pizza Hut', icon: '🍕' },
  { value: 'dominos', label: 'Domino\'s', icon: '🍕' }
]; 