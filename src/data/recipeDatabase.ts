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
    description: 'The iconic crispy chicken sandwich marinated in pickle juice',
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
      '1 cup dill pickle juice',
      '1/2 cup milk',
      '1/2 cup flour',
      '1/2 cup breadcrumbs',
      'Paprika',
      'Garlic powder',
      'Cayenne',
      'Salt',
      'Pepper',
      '2 hamburger buns',
      'Mayo',
      'Pickle slices',
      'Oil for frying'
    ],
    instructions: [
      'Marinate chicken in pickle juice (30 min–overnight)',
      'Mix flour & spices',
      'Dip chicken in milk, then dredge in flour mix',
      'Fry ~4 min/side',
      'Toast buns',
      'Assemble with mayo and pickles'
    ],
    tips: [
      'Chill breaded chicken before frying for better crisp',
      'Use pickle juice from dill pickles for authentic taste',
      'Don\'t skip the double coating - it\'s what makes it extra crispy',
      'Let the chicken rest for 5 minutes before cutting'
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
    id: 'chick-fil-a-nuggets',
    name: 'Chick-fil-A Nuggets',
    description: 'Bite-sized, juicy nuggets just like CFA',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 5,
    image: '🍗',
    category: 'Restaurant Dupes',
    subcategory: 'Chick-fil-A',
    restaurant: 'Chick-fil-A',
    ingredients: [
      'Chicken breast chunks',
      'Pickle juice',
      'Egg',
      'Milk',
      'Flour',
      'Paprika',
      'Garlic powder'
    ],
    instructions: [
      'Marinate chicken in pickle juice',
      'Dip in egg & milk, then flour',
      'Fry until golden'
    ],
    tips: [
      'Serve with CFA sauce (mayo + BBQ + honey + mustard)',
      'Use bite-sized chicken pieces for perfect nuggets',
      'Don\'t overcrowd the fryer for even cooking'
    ],
    nutrition: {
      calories: 390,
      protein: 32,
      fat: 17,
      carbs: 24,
      fiber: 1
    }
  },
  {
    id: 'chick-fil-a-mac-cheese',
    name: 'Mac & Cheese',
    description: 'Creamy and cheesy like CFA\'s',
    time: '30 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🧀',
    category: 'Restaurant Dupes',
    subcategory: 'Chick-fil-A',
    restaurant: 'Chick-fil-A',
    ingredients: [
      'Elbow macaroni',
      'Milk',
      'Butter',
      'Cheddar',
      'Parmesan'
    ],
    instructions: [
      'Cook pasta',
      'Melt butter, whisk in milk and cheese',
      'Mix with pasta, bake if desired'
    ],
    tips: [
      'Top with breadcrumbs',
      'Use a mix of cheeses for best flavor',
      'Don\'t overcook the pasta'
    ],
    nutrition: {
      calories: 420,
      protein: 14,
      fat: 20,
      carbs: 46,
      fiber: 2
    }
  },
  // RESTAURANT DUPES - MCDONALD'S
  {
    id: 'mcdonalds-big-mac',
    name: 'Big Mac',
    description: 'Double-stacked burger with "special sauce"',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 5,
    image: '🍔',
    category: 'Restaurant Dupes',
    subcategory: 'McDonald\'s',
    restaurant: 'McDonald\'s',
    ingredients: [
      'Hamburger patties',
      'Buns',
      'Cheese',
      'Lettuce',
      'Onion',
      'Pickles',
      'Sauce'
    ],
    instructions: [
      'Cook patties',
      'Toast buns',
      'Stack with lettuce, cheese, pickles, onion, and sauce'
    ],
    tips: [
      'Special Sauce = mayo + relish + ketchup + mustard',
      'Use 80/20 ground beef for best flavor',
      'Don\'t press down on the patties while cooking'
    ],
    nutrition: {
      calories: 540,
      protein: 28,
      fat: 29,
      carbs: 42,
      fiber: 3
    }
  },
  {
    id: 'mcdonalds-egg-mcmuffin',
    name: 'Egg McMuffin',
    description: 'Classic breakfast sandwich',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🥚',
    category: 'Restaurant Dupes',
    subcategory: 'McDonald\'s',
    restaurant: 'McDonald\'s',
    ingredients: [
      'English muffin',
      'Egg',
      'Ham',
      'Cheese'
    ],
    instructions: [
      'Toast muffin',
      'Fry egg in ring mold',
      'Stack with cheese and ham'
    ],
    tips: [
      'Add a butter sear for real McD vibes',
      'Use a mason jar lid as an egg ring if needed',
      'Let the egg set before flipping'
    ],
    nutrition: {
      calories: 300,
      protein: 16,
      fat: 12,
      carbs: 29,
      fiber: 1
    }
  },
  {
    id: 'mcdonalds-fries',
    name: 'Fries',
    description: 'Crispy, salty, golden fries',
    time: '25 min',
    difficulty: 'Medium',
    cost: '$1.50',
    rating: 5,
    image: '🍟',
    category: 'Restaurant Dupes',
    subcategory: 'McDonald\'s',
    restaurant: 'McDonald\'s',
    ingredients: [
      'Russet potatoes',
      'Oil',
      'Sugar water soak'
    ],
    instructions: [
      'Thin slice & soak potatoes in sugar water 30 min',
      'Double fry: first at 325°F, then at 375°F',
      'Salt after'
    ],
    tips: [
      'Soak = secret to crispiness',
      'Don\'t overcrowd the fryer',
      'Season while hot so the salt sticks'
    ],
    nutrition: {
      calories: 330,
      protein: 4,
      fat: 17,
      carbs: 44,
      fiber: 3
    }
  },
  // RESTAURANT DUPES - CHIPOTLE
  {
    id: 'chipotle-burrito-bowl',
    name: 'Burrito Bowl',
    description: 'Fresh and flavorful burrito bowl with all the fixings',
    time: '30 min',
    difficulty: 'Easy',
    cost: '$5',
    rating: 5,
    image: '🌯',
    category: 'Restaurant Dupes',
    subcategory: 'Chipotle',
    restaurant: 'Chipotle',
    ingredients: [
      'Rice',
      'Grilled chicken',
      'Black beans',
      'Corn',
      'Salsa',
      'Cheese',
      'Sour cream',
      'Lime'
    ],
    instructions: [
      'Layer everything into a bowl'
    ],
    tips: [
      'Use pre-cooked chicken and frozen corn',
      'Marinate chicken in lime and spices',
      'Add guacamole for extra flavor'
    ],
    nutrition: {
      calories: 600,
      protein: 40,
      fat: 20,
      carbs: 55,
      fiber: 7
    }
  },
  {
    id: 'chipotle-guacamole',
    name: 'Guacamole',
    description: 'Fresh and creamy guacamole',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '🥑',
    category: 'Restaurant Dupes',
    subcategory: 'Chipotle',
    restaurant: 'Chipotle',
    ingredients: [
      'Avocado',
      'Lime',
      'Red onion',
      'Cilantro',
      'Salt'
    ],
    instructions: [
      'Mash and mix'
    ],
    tips: [
      'Add tomato if you like',
      'Serve immediately',
      'Use ripe avocados for best results'
    ],
    nutrition: {
      calories: 240,
      protein: 3,
      fat: 20,
      carbs: 13,
      fiber: 7
    }
  },
  {
    id: 'chipotle-cilantro-lime-rice',
    name: 'Cilantro Lime Rice',
    description: 'Fresh and flavorful rice',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$1',
    rating: 4,
    image: '🍚',
    category: 'Restaurant Dupes',
    subcategory: 'Chipotle',
    restaurant: 'Chipotle',
    ingredients: [
      'Cooked white rice',
      'Lime juice',
      'Cilantro',
      'Salt'
    ],
    instructions: [
      'Stir everything into warm rice'
    ],
    tips: [
      'Day-old rice = best texture',
      'Use fresh cilantro for best flavor',
      'Add a squeeze of lime juice for brightness'
    ],
    nutrition: {
      calories: 200,
      protein: 4,
      fat: 1,
      carbs: 42,
      fiber: 1
    }
  },
  // RESTAURANT DUPES - SUBWAY
  {
    id: 'subway-italian-sub',
    name: 'Italian Sub',
    description: 'Classic Italian cold cut sandwich',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$4',
    rating: 4,
    image: '🥪',
    category: 'Restaurant Dupes',
    subcategory: 'Subway',
    restaurant: 'Subway',
    ingredients: [
      'Hoagie roll',
      'Ham',
      'Salami',
      'Pepperoni',
      'Cheese',
      'Lettuce',
      'Tomato',
      'Onion',
      'Pickles',
      'Italian dressing'
    ],
    instructions: [
      'Stack it up cold or toast'
    ],
    tips: [
      'Use pre-packaged lunch meat',
      'Toast the bread for extra crunch',
      'Layer meats evenly for best flavor'
    ],
    nutrition: {
      calories: 480,
      protein: 26,
      fat: 24,
      carbs: 38,
      fiber: 3
    }
  },
  {
    id: 'subway-veggie-delite',
    name: 'Veggie Delite',
    description: 'Fresh vegetable sandwich',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🥪',
    category: 'Restaurant Dupes',
    subcategory: 'Subway',
    restaurant: 'Subway',
    ingredients: [
      'Roll',
      'Lettuce',
      'Tomato',
      'Cucumber',
      'Olives',
      'Vinaigrette'
    ],
    instructions: [
      'Layer vegetables on roll',
      'Drizzle with vinaigrette'
    ],
    tips: [
      'Add hummus or cheese for protein',
      'Use fresh vegetables for best taste',
      'Customize with your favorite veggies'
    ],
    nutrition: {
      calories: 280,
      protein: 6,
      fat: 6,
      carbs: 48,
      fiber: 5
    }
  },
  {
    id: 'subway-tuna-sub',
    name: 'Tuna Sub',
    description: 'Classic tuna sandwich',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$3.50',
    rating: 5,
    image: '🥪',
    category: 'Restaurant Dupes',
    subcategory: 'Subway',
    restaurant: 'Subway',
    ingredients: [
      'Tuna',
      'Mayo',
      'Roll',
      'Lettuce',
      'Tomato',
      'Onion'
    ],
    instructions: [
      'Mix tuna with mayo',
      'Stuff into roll with vegetables'
    ],
    tips: [
      'Light mayo for fewer calories',
      'Add celery for crunch',
      'Use good quality tuna for best flavor'
    ],
    nutrition: {
      calories: 430,
      protein: 20,
      fat: 22,
      carbs: 35,
      fiber: 3
    }
  },
  // RESTAURANT DUPES - TACO BELL
  {
    id: 'taco-bell-crunchwrap-supreme',
    name: 'Crunchwrap Supreme',
    description: 'Wrapped and grilled to perfection',
    time: '25 min',
    difficulty: 'Medium',
    cost: '$4',
    rating: 5,
    image: '🌮',
    category: 'Restaurant Dupes',
    subcategory: 'Taco Bell',
    restaurant: 'Taco Bell',
    ingredients: [
      'Tortilla',
      'Tostada shell',
      'Ground beef',
      'Sour cream',
      'Lettuce',
      'Tomato',
      'Cheese'
    ],
    instructions: [
      'Layer everything',
      'Fold tortilla over',
      'Pan-fry until golden'
    ],
    tips: [
      'Use yogurt for a healthy swap',
      'Don\'t overstuff or it won\'t fold properly',
      'Press down while cooking for even browning'
    ],
    nutrition: {
      calories: 510,
      protein: 24,
      fat: 28,
      carbs: 42,
      fiber: 4
    }
  },
  {
    id: 'taco-bell-bean-burrito',
    name: 'Bean Burrito',
    description: 'Simple and satisfying',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🌮',
    category: 'Restaurant Dupes',
    subcategory: 'Taco Bell',
    restaurant: 'Taco Bell',
    ingredients: [
      'Tortilla',
      'Refried beans',
      'Cheese',
      'Red sauce',
      'Optional onion'
    ],
    instructions: [
      'Fill and roll'
    ],
    tips: [
      'Warm the tortilla first',
      'Add extra cheese for more flavor',
      'Serve with hot sauce'
    ],
    nutrition: {
      calories: 350,
      protein: 12,
      fat: 10,
      carbs: 50,
      fiber: 8
    }
  },
  {
    id: 'taco-bell-cinnamon-twists',
    name: 'Cinnamon Twists',
    description: 'Sweet and crunchy dessert',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$1',
    rating: 5,
    image: '🍩',
    category: 'Restaurant Dupes',
    subcategory: 'Taco Bell',
    restaurant: 'Taco Bell',
    ingredients: [
      'Duros (pasta wheels)',
      'Oil',
      'Cinnamon sugar'
    ],
    instructions: [
      'Fry duros till puffed',
      'Toss in sugar mix'
    ],
    tips: [
      'Watch them puff in 10 seconds!',
      'Don\'t overcook or they\'ll burn',
      'Toss immediately while hot'
    ],
    nutrition: {
      calories: 220,
      protein: 1,
      fat: 10,
      carbs: 33,
      fiber: 0
    }
  },
  // DRINK DUPES - STARBUCKS
  {
    id: 'starbucks-pink-drink',
    name: 'Starbucks Pink Drink',
    description: 'Viral pink drink with coconut milk and strawberries',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '🌸',
    category: 'Drink Dupes',
    subcategory: 'Starbucks',
    restaurant: 'Starbucks',
    healthBenefits: [
      'Natural ingredients',
      'No artificial colors',
      'Refreshing',
      'Low calorie'
    ],
    ingredients: [
      '3/4 cup Ocean Spray White Cran-Strawberry juice',
      '1/4 cup sweetened coconut milk',
      'Handful of sliced fresh or freeze-dried strawberries',
      'Ice',
      'Optional: Green coffee bean extract (for caffeine)',
      '1 scoop vanilla protein powder (optional)'
    ],
    instructions: [
      'Fill a cup with ice (we want it extra cold!)',
      'Pour in the White Cran-Strawberry juice',
      'Add the coconut milk and stir gently',
      'Add strawberries on top',
      'Optional: add a few drops of green coffee extract for caffeine',
      'Optional: add protein powder for extra nutrition'
    ],
    tips: [
      'Use freeze-dried strawberries for better shelf life',
      'Adjust coconut milk to your preference',
      'Add more ice for extra refreshment',
      'Use different juice flavors to mix it up'
    ],
    nutrition: {
      calories: 120,
      protein: 2,
      fat: 4,
      carbs: 18,
      fiber: 2
    }
  },
  {
    id: 'starbucks-caramel-frappuccino',
    name: 'Caramel Frappuccino',
    description: 'Protein-boosted blended drink with caramel',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '☕',
    category: 'Drink Dupes',
    subcategory: 'Starbucks',
    restaurant: 'Starbucks',
    healthBenefits: [
      'High protein',
      'Natural sweeteners',
      'Customizable',
      'No artificial colors'
    ],
    ingredients: [
      '1 cup strong brewed coffee or cold brew (chilled)',
      '1 cup milk (dairy or plant-based)',
      '3 tbsp caramel sauce',
      '2 tsp sugar (optional)',
      '1 1/2 cups ice',
      '1 scoop vanilla protein powder',
      'Whipped cream & caramel drizzle (for topping)'
    ],
    instructions: [
      'Blend coffee, milk, caramel sauce, sugar, protein powder, and ice until smooth',
      'Pour into a tall glass',
      'Top with whipped cream',
      'Drizzle more caramel on top'
    ],
    tips: [
      'Use cold brew for smoother taste',
      'Adjust caramel sauce to your sweetness preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives to mix it up'
    ],
    nutrition: {
      calories: 280,
      protein: 18,
      fat: 12,
      carbs: 32,
      fiber: 2
    }
  },
  {
    id: 'starbucks-pumpkin-spice-latte',
    name: 'Pumpkin Spice Latte',
    description: 'Real pumpkin with natural sweeteners',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '☕',
    category: 'Drink Dupes',
    subcategory: 'Starbucks',
    restaurant: 'Starbucks',
    healthBenefits: [
      'Real pumpkin',
      'No artificial flavors',
      'Natural sweeteners',
      'Protein boost'
    ],
    ingredients: [
      '1/2 cup milk (any kind)',
      '1/4 cup brewed espresso or strong coffee',
      '1 tbsp pumpkin purée',
      '1 tbsp maple syrup',
      '1/4 tsp pumpkin pie spice',
      '1/4 tsp vanilla extract',
      '1 scoop vanilla protein powder',
      'Whipped cream (optional)',
      'Cinnamon for garnish'
    ],
    instructions: [
      'In a small pot, heat milk, pumpkin purée, maple syrup, and spices over medium heat',
      'Stir until hot and frothy (don\'t boil)',
      'Add vanilla extract and protein powder',
      'Pour over brewed coffee or espresso',
      'Top with whipped cream and a sprinkle of pumpkin spice'
    ],
    tips: [
      'Use real pumpkin purée, not pie filling',
      'Adjust maple syrup to your sweetness preference',
      'Add more protein powder for extra protein boost',
      'Use oat milk for creamier texture'
    ],
    nutrition: {
      calories: 180,
      protein: 15,
      fat: 6,
      carbs: 22,
      fiber: 2
    }
  },
  // DRINK DUPES - SMOOTHIE KING
  {
    id: 'smoothie-king-healthy-hulk',
    name: 'Healthy Hulk Smoothie',
    description: 'Green smoothie packed with protein and nutrients',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 5,
    image: '🥤',
    category: 'Drink Dupes',
    subcategory: 'Smoothie King',
    restaurant: 'Smoothie King',
    healthBenefits: [
      'High protein',
      'Green vegetables',
      'Natural ingredients',
      'No artificial colors'
    ],
    ingredients: [
      '1 cup spinach',
      '1/2 frozen banana',
      '1 scoop vanilla protein powder',
      '1 cup almond milk',
      '1 tbsp peanut butter',
      '1 tbsp honey',
      'Ice'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into a large glass'
    ],
    tips: [
      'Use frozen spinach for convenience',
      'Adjust protein powder to your preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 280,
      protein: 25,
      fat: 8,
      carbs: 32,
      fiber: 6
    }
  },
  {
    id: 'smoothie-king-berry-blast',
    name: 'Berry Blast Protein',
    description: 'Antioxidant-rich berry smoothie with protein',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🥤',
    category: 'Drink Dupes',
    subcategory: 'Smoothie King',
    restaurant: 'Smoothie King',
    healthBenefits: [
      'Antioxidants',
      'High protein',
      'Natural ingredients',
      'No artificial sweeteners'
    ],
    ingredients: [
      '1 cup mixed berries (frozen)',
      '1 scoop vanilla protein powder',
      '1 cup milk',
      '1 tbsp honey',
      '1/4 cup Greek yogurt',
      'Ice'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into a large glass'
    ],
    tips: [
      'Use frozen berries for convenience',
      'Adjust protein powder to your preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 240,
      protein: 22,
      fat: 4,
      carbs: 28,
      fiber: 4
    }
  },
  // DRINK DUPES - BUBBLE TEA
  {
    id: 'bubble-tea-protein',
    name: 'Protein Bubble Tea',
    description: 'High protein bubble tea with natural ingredients',
    time: '10 min',
    difficulty: 'Medium',
    cost: '$3',
    rating: 4,
    image: '🧋',
    category: 'Drink Dupes',
    subcategory: 'Bubble Tea Shops',
    restaurant: 'Bubble Tea Shops',
    healthBenefits: [
      'High protein',
      'Natural ingredients',
      'Customizable',
      'No artificial colors'
    ],
    ingredients: [
      '1 cup strong brewed tea (black or green)',
      '1 scoop vanilla protein powder',
      '1/4 cup milk',
      '2 tbsp honey',
      '1/4 cup cooked tapioca pearls',
      'Ice'
    ],
    instructions: [
      'Brew tea and let cool',
      'Mix protein powder with milk',
      'Add honey to taste',
      'Cook tapioca pearls according to package',
      'Add pearls to glass',
      'Pour tea and protein mixture over ice'
    ],
    tips: [
      'Use different tea flavors for variety',
      'Adjust protein powder to your preference',
      'Make tapioca pearls ahead of time',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 200,
      protein: 20,
      fat: 4,
      carbs: 24,
      fiber: 2
    }
  },
  // DRINK DUPES - JAMBA JUICE
  {
    id: 'jamba-juice-strawberry-banana',
    name: 'Strawberry Banana Smoothie',
    description: 'Classic Jamba Juice smoothie with protein boost',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '🍹',
    category: 'Drink Dupes',
    subcategory: 'Jamba Juice',
    restaurant: 'Jamba Juice',
    healthBenefits: [
      'High protein',
      'Natural ingredients',
      'No artificial sweeteners',
      'Fruit-based'
    ],
    ingredients: [
      '1 cup frozen strawberries',
      '1 frozen banana',
      '1 scoop vanilla protein powder',
      '1 cup milk or almond milk',
      '1 tbsp honey',
      '1/4 cup Greek yogurt',
      'Ice'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into a large glass'
    ],
    tips: [
      'Use frozen fruit for best texture',
      'Adjust protein powder to your preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 260,
      protein: 24,
      fat: 4,
      carbs: 30,
      fiber: 4
    }
  },
  {
    id: 'jamba-juice-mango-magic',
    name: 'Mango Magic Smoothie',
    description: 'Tropical mango smoothie with protein',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍹',
    category: 'Drink Dupes',
    subcategory: 'Jamba Juice',
    restaurant: 'Jamba Juice',
    healthBenefits: [
      'High protein',
      'Natural ingredients',
      'Tropical flavors',
      'No artificial colors'
    ],
    ingredients: [
      '1 cup frozen mango chunks',
      '1/2 frozen banana',
      '1 scoop vanilla protein powder',
      '1 cup coconut milk',
      '1 tbsp honey',
      '1/4 cup Greek yogurt',
      'Ice'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Pour into a large glass'
    ],
    tips: [
      'Use frozen mango for best texture',
      'Adjust protein powder to your preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 240,
      protein: 22,
      fat: 6,
      carbs: 28,
      fiber: 3
    }
  },
  // DRINK DUPES - DUNKIN'
  {
    id: 'dunkin-iced-latte',
    name: 'Iced Latte',
    description: 'Classic iced latte with protein boost',
    time: '5 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '☕',
    category: 'Drink Dupes',
    subcategory: 'Dunkin\'',
    restaurant: 'Dunkin\'',
    healthBenefits: [
      'High protein',
      'Natural ingredients',
      'Customizable',
      'No artificial sweeteners'
    ],
    ingredients: [
      '1 cup strong brewed coffee (chilled)',
      '1/2 cup milk or almond milk',
      '1 scoop vanilla protein powder',
      '1 tbsp honey or maple syrup',
      'Ice'
    ],
    instructions: [
      'Brew coffee and let cool',
      'Mix protein powder with milk',
      'Add honey to taste',
      'Pour over ice and stir'
    ],
    tips: [
      'Use cold brew for smoother taste',
      'Adjust protein powder to your preference',
      'Add more ice for extra coldness',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 160,
      protein: 18,
      fat: 4,
      carbs: 16,
      fiber: 1
    }
  },
  {
    id: 'dunkin-frozen-hot-chocolate',
    name: 'Frozen Hot Chocolate',
    description: 'Rich chocolate drink with protein boost',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '☕',
    category: 'Drink Dupes',
    subcategory: 'Dunkin\'',
    restaurant: 'Dunkin\'',
    healthBenefits: [
      'High protein',
      'Natural ingredients',
      'No artificial colors',
      'Customizable'
    ],
    ingredients: [
      '1 cup milk or almond milk',
      '2 tbsp cocoa powder',
      '2 tbsp honey',
      '1 scoop chocolate protein powder',
      '1 1/2 cups ice',
      'Whipped cream (optional)'
    ],
    instructions: [
      'Blend milk, cocoa powder, honey, protein powder, and ice until smooth',
      'Pour into a tall glass',
      'Top with whipped cream if desired'
    ],
    tips: [
      'Use dark cocoa powder for richer flavor',
      'Adjust honey to your sweetness preference',
      'Add more ice for thicker consistency',
      'Use different milk alternatives'
    ],
    nutrition: {
      calories: 220,
      protein: 20,
      fat: 6,
      carbs: 24,
      fiber: 2
    }
  },
  // DRINK DUPES - JUICE BARS
  {
    id: 'juice-bars-green-detox',
    name: 'Green Detox Juice',
    description: 'Cleansing green juice with natural ingredients',
    time: '10 min',
    difficulty: 'Medium',
    cost: '$3',
    rating: 4,
    image: '🥤',
    category: 'Drink Dupes',
    subcategory: 'Juice Bars',
    restaurant: 'Juice Bars',
    healthBenefits: [
      'Detoxifying',
      'Natural ingredients',
      'High in vitamins',
      'No artificial colors'
    ],
    ingredients: [
      '2 cups spinach',
      '1 cucumber',
      '2 celery stalks',
      '1 green apple',
      '1/2 lemon',
      '1 inch ginger',
      '1 scoop vanilla protein powder (optional)'
    ],
    instructions: [
      'Wash all vegetables thoroughly',
      'Cut into pieces that fit your juicer',
      'Juice all ingredients',
      'Stir in protein powder if using',
      'Serve immediately'
    ],
    tips: [
      'Use organic vegetables when possible',
      'Drink immediately for best nutrition',
      'Add more ginger for extra spice',
      'Use a blender if you don\'t have a juicer'
    ],
    nutrition: {
      calories: 120,
      protein: 4,
      fat: 1,
      carbs: 20,
      fiber: 6
    }
  },
  {
    id: 'juice-bars-carrot-orange',
    name: 'Carrot Orange Juice',
    description: 'Vitamin-rich carrot and orange juice',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '🥤',
    category: 'Drink Dupes',
    subcategory: 'Juice Bars',
    restaurant: 'Juice Bars',
    healthBenefits: [
      'High in vitamin A',
      'Natural ingredients',
      'Immune boosting',
      'No artificial colors'
    ],
    ingredients: [
      '4 large carrots',
      '2 oranges',
      '1 inch ginger',
      '1 tbsp honey (optional)',
      '1 scoop vanilla protein powder (optional)'
    ],
    instructions: [
      'Wash carrots and peel oranges',
      'Cut into pieces that fit your juicer',
      'Juice all ingredients',
      'Stir in honey and protein powder if using',
      'Serve immediately'
    ],
    tips: [
      'Use organic carrots and oranges when possible',
      'Drink immediately for best nutrition',
      'Add more ginger for extra spice',
      'Use a blender if you don\'t have a juicer'
    ],
    nutrition: {
      calories: 140,
      protein: 4,
      fat: 1,
      carbs: 28,
      fiber: 4
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
  }
];

// Helper functions to filter recipes
export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipeDatabase.filter(recipe => recipe.category === category);
};

export const getRecipesByRestaurant = (restaurantValue: string): Recipe[] => {
  // Map dropdown values to actual restaurant names
  const restaurantMapping: { [key: string]: string } = {
    'chick-fil-a': 'Chick-fil-A',
    'mcdonalds': 'McDonald\'s',
    'chipotle': 'Chipotle',
    'subway': 'Subway',
    'taco-bell': 'Taco Bell'
  };
  
  const actualRestaurantName = restaurantMapping[restaurantValue];
  if (!actualRestaurantName) return [];
  
  return recipeDatabase.filter(recipe => recipe.restaurant === actualRestaurantName);
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
  { value: 'taco-bell', label: 'Taco Bell', icon: '🌮' }
];

// Drink categories for the Drink Dupes page
export const drinkCategories = [
  { value: 'starbucks', label: 'Starbucks', icon: '☕' },
  { value: 'smoothie-king', label: 'Smoothie King', icon: '🥤' },
  { value: 'jamba-juice', label: 'Jamba Juice', icon: '🍹' },
  { value: 'dunkin', label: 'Dunkin\'', icon: '☕' },
  { value: 'bubble-tea', label: 'Bubble Tea Shops', icon: '🧋' },
  { value: 'juice-bars', label: 'Juice Bars', icon: '🥤' }
]; 