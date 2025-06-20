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
      'Pound chicken breasts to an even thickness (about 1/2 inch) using a meat mallet or rolling pin.',
      'Place chicken in a shallow dish and pour pickle juice over it. Marinate for at least 30 minutes, or overnight in the refrigerator.',
      'In a shallow dish, combine flour, breadcrumbs, paprika, garlic powder, cayenne, salt, and pepper.',
      'In another shallow dish, whisk together milk and egg.',
      'Heat oil in a large skillet to 350°F (175°C) over medium-high heat.',
      'Remove chicken from pickle juice and pat dry with paper towels.',
      'Dip each chicken breast in the milk mixture, then dredge in the flour mixture, pressing to coat evenly.',
      'Carefully place chicken in hot oil and fry for 3-4 minutes per side, until golden brown and cooked through (internal temperature 165°F/74°C).',
      'Remove chicken and drain on paper towels for 2-3 minutes.',
      'Toast hamburger buns in a dry skillet or toaster until lightly golden.',
      'Spread mayo on both bun halves, place chicken on bottom bun, add pickle slices, and close sandwich.'
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
      'Cut chicken breast into 1-inch chunks and place in a shallow dish.',
      'Pour pickle juice over chicken chunks and marinate for at least 30 minutes in the refrigerator.',
      'In a small bowl, whisk together egg and milk.',
      'In a separate shallow dish, combine flour, paprika, garlic powder, salt, and pepper.',
      'Heat 2-3 inches of oil in a deep pot or skillet to 350°F (175°C).',
      'Remove chicken from pickle juice and pat dry with paper towels.',
      'Dip each chicken chunk in the egg mixture, then dredge in the flour mixture to coat completely.',
      'Fry chicken in batches for 3-4 minutes, or until golden brown and cooked through. Do not overcrowd the pot.',
      'Remove with a slotted spoon and drain on paper towels.',
      'Serve hot with your favorite dipping sauce.'
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
      'Bring a large pot of salted water to a boil. Cook the macaroni from the boxed mac & cheese according to package directions (usually 7-8 minutes) until al dente.',
      'While the pasta cooks, steam the broccoli florets in a steamer basket or microwave for 3-4 minutes until tender-crisp.',
      'Drain the pasta and return it to the pot. Add the milk, butter, and cheese powder from the box, stirring until creamy.',
      'Add the steamed broccoli and cooked chicken or tofu to the mac & cheese, stirring gently to combine.',
      'Transfer to a serving bowl and top with breadcrumbs for crunch.',
      'Drizzle with hot sauce to taste and serve immediately while hot and creamy.'
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
      'To make the special sauce, combine mayonnaise, French dressing, sweet pickle relish, minced onion, sugar, white vinegar, and a pinch of salt in a small bowl. Mix well and set aside.',
      'Divide ground beef into 8 thin patties (about 2 oz each). Season both sides with salt and pepper.',
      'Heat a griddle or large skillet over medium-high heat. Cook the beef patties for 1-2 minutes per side, until cooked through.',
      'During the last 30 seconds of cooking, place a slice of American cheese on each patty to melt.',
      'Toast the hamburger buns in the same skillet until lightly golden.',
      'To assemble each Big Mac: On the bottom bun, spread special sauce, add shredded lettuce, diced onion, pickle slices, a cheese-covered patty, and the middle bun.',
      'On the middle bun, add more special sauce, lettuce, onion, pickles, and the second cheese-covered patty.',
      'Top with the sesame seed bun. Repeat for remaining burgers.'
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
      'Fill a tall glass (16-20 oz) with ice cubes, filling it about 3/4 full.',
      'Pour the White Cran-Strawberry juice over the ice, filling about 2/3 of the glass.',
      'Slowly pour the sweetened coconut milk over the juice. The coconut milk will create a beautiful layered effect.',
      'Gently stir the mixture with a long spoon to combine the juices while maintaining the pink color.',
      'Top with fresh or freeze-dried strawberries, arranging them attractively on the surface.',
      'If using green coffee bean extract, add 2-3 drops and stir gently.',
      'If adding protein powder, sprinkle it on top and stir until dissolved.',
      'Serve immediately with a straw for the authentic Starbucks experience.'
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
      'In a high-powered blender, combine the chilled coffee, milk, caramel sauce, sugar (if using), and vanilla protein powder.',
      'Blend on low speed for 10-15 seconds until the sugar and protein powder are fully dissolved.',
      'Add the ice cubes and blend on high speed for 30-45 seconds, until the mixture is smooth and thick like a milkshake.',
      'If the mixture is too thick, add a splash of milk. If too thin, add more ice and blend again.',
      'Pour the frappuccino into a tall glass (16-20 oz), leaving about 1 inch of space at the top.',
      'Top with a generous dollop of whipped cream, covering the entire surface.',
      'Drizzle additional caramel sauce over the whipped cream in a decorative pattern.',
      'Serve immediately with a straw and enjoy the creamy, caramel goodness!'
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
      'In a small saucepan, combine the milk, pumpkin purée, maple syrup, and pumpkin pie spice.',
      'Heat over medium heat, whisking constantly, until the mixture is hot and frothy (about 3-4 minutes). Do not let it boil.',
      'Remove from heat and whisk in the vanilla extract.',
      'Add the vanilla protein powder and whisk vigorously until fully dissolved and smooth.',
      'Brew your espresso or strong coffee separately.',
      'Pour the hot coffee into a large mug (12-16 oz).',
      'Slowly pour the pumpkin milk mixture over the coffee, stirring gently to combine.',
      'Top with whipped cream if desired, and sprinkle with additional pumpkin pie spice or cinnamon for garnish.',
      'Serve immediately while hot and enjoy the cozy fall flavors!'
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
      'Bring a large pot of salted water to a boil. Cook the macaroni from the boxed mac & cheese according to package directions (usually 7-8 minutes) until al dente.',
      'While the pasta cooks, steam the broccoli florets in a steamer basket or microwave for 3-4 minutes until tender-crisp.',
      'Drain the pasta and return it to the pot. Add the milk, butter, and cheese powder from the box, stirring until creamy.',
      'Add the steamed broccoli and cooked chicken or tofu to the mac & cheese, stirring gently to combine.',
      'Transfer to a serving bowl and top with breadcrumbs for crunch.',
      'Drizzle with hot sauce to taste and serve immediately while hot and creamy.'
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
  // INGREDIENT UPGRADES - RAMEN
  {
    id: 'gourmet-ramen',
    name: 'Gourmet Ramen Bowl',
    description: 'Transform instant ramen into a restaurant-worthy meal',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '🍜',
    category: 'Ingredient Upgrades',
    subcategory: 'Ramen Noodles',
    upgrades: ['Add protein', 'Fresh vegetables', 'Soft-boiled egg', 'Green onions'],
    ingredients: [
      '1 package instant ramen',
      '1 egg',
      '1/4 cup frozen mixed vegetables',
      '1/4 cup cooked chicken or tofu',
      '1 green onion, sliced',
      '1 tbsp soy sauce',
      '1/2 tsp sesame oil',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Bring a medium pot of water to a boil. Add the ramen noodles and cook according to package directions (usually 3-4 minutes).',
      'While the noodles cook, bring a small pot of water to a gentle boil. Carefully add the egg and cook for exactly 6-7 minutes for a soft-boiled egg with a runny yolk.',
      'In the last 2 minutes of cooking the noodles, add the frozen mixed vegetables to the same pot.',
      'Drain the noodles and vegetables, reserving about 1/2 cup of the cooking water.',
      'Return the noodles and vegetables to the pot. Add the cooked chicken or tofu and warm through for 1 minute.',
      'Stir in the soy sauce and sesame oil, adding a splash of the reserved cooking water if needed for moisture.',
      'Transfer to a serving bowl. Peel and halve the soft-boiled egg, placing it on top.',
      'Garnish with sliced green onions and red pepper flakes if desired. Serve immediately.'
    ],
    tips: [
      'Don\'t use the seasoning packet - it\'s too salty',
      'Add a splash of rice vinegar for brightness',
      'Use leftover protein for convenience'
    ],
    nutrition: {
      calories: 380,
      protein: 22,
      fat: 12,
      carbs: 45,
      fiber: 4
    }
  },
  {
    id: 'protein-ramen',
    name: 'Protein-Packed Ramen',
    description: 'High-protein ramen with multiple protein sources',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🍜',
    category: 'Ingredient Upgrades',
    subcategory: 'Ramen Noodles',
    upgrades: ['Multiple proteins', 'High protein', 'Vegetables', 'Healthy fats'],
    ingredients: [
      '1 package instant ramen',
      '1/2 cup cooked chicken breast',
      '1/4 cup edamame',
      '1 egg',
      '1/4 cup spinach',
      '1 tbsp peanut butter',
      '1 tbsp soy sauce',
      '1 tsp sesame oil'
    ],
    instructions: [
      'Cook ramen noodles according to package',
      'Add spinach and edamame in last minute of cooking',
      'Stir in peanut butter and soy sauce',
      'Top with cooked chicken and soft-boiled egg',
      'Drizzle with sesame oil and serve'
    ],
    tips: [
      'Use natural peanut butter for better nutrition',
      'Add more vegetables for extra fiber',
      'Adjust protein amounts based on your needs'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      fat: 16,
      carbs: 42,
      fiber: 5
    }
  },
  // INGREDIENT UPGRADES - RICE
  {
    id: 'protein-fried-rice',
    name: 'Protein Fried Rice',
    description: 'Transform plain rice into a protein-packed fried rice',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 5,
    image: '🍚',
    category: 'Ingredient Upgrades',
    subcategory: 'Rice',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked rice',
      '2 eggs',
      '1/2 cup frozen mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 green onions, chopped',
      '1 clove garlic, minced',
      '1 tbsp ginger, minced'
    ],
    instructions: [
      'Scramble eggs in a large pan and set aside',
      'Sauté garlic and ginger in sesame oil',
      'Add vegetables and cook until tender',
      'Add rice and stir-fry for 2-3 minutes',
      'Add eggs, soy sauce, and green onions',
      'Stir-fry for another 2 minutes'
    ],
    tips: [
      'Use day-old rice for better texture',
      'Add any protein you have (chicken, shrimp, tofu)',
      'Use low-sodium soy sauce if watching salt'
    ],
    nutrition: {
      calories: 380,
      protein: 16,
      fat: 12,
      carbs: 52,
      fiber: 4
    }
  },
  {
    id: 'indian-lemon-rice',
    name: 'Indian Lemon Rice',
    description: 'Aromatic and tangy Indian-style rice',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍚',
    category: 'Ingredient Upgrades',
    subcategory: 'Rice',
    upgrades: ['High protein', 'Spices', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked rice',
      '1/4 cup peanuts',
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '1 tsp cumin seeds',
      '2 dried red chilies',
      '1/4 cup curry leaves',
      '2 tbsp lemon juice',
      '1/2 tsp turmeric',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan over medium heat',
      'Add mustard seeds, cumin seeds, and chilies',
      'When seeds pop, add curry leaves and peanuts',
      'Add turmeric and stir for 30 seconds',
      'Add rice and lemon juice',
      'Stir gently until well combined',
      'Season with salt and serve'
    ],
    tips: [
      'Use basmati rice for authentic flavor',
      'Add more vegetables like peas or carrots',
      'Adjust spice level to your preference'
    ],
    nutrition: {
      calories: 320,
      protein: 8,
      fat: 14,
      carbs: 44,
      fiber: 3
    }
  },
  {
    id: 'rice-bowl',
    name: 'Protein Rice Bowl',
    description: 'Build-your-own protein rice bowl',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$3.50',
    rating: 5,
    image: '🍚',
    category: 'Ingredient Upgrades',
    subcategory: 'Rice',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 cup cooked rice',
      '1/2 cup black beans',
      '1/4 cup corn',
      '1/4 cup diced tomatoes',
      '1/4 cup diced avocado',
      '2 tbsp Greek yogurt',
      '1 tbsp lime juice',
      '1 tbsp olive oil',
      'Cilantro for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Warm rice in microwave or pan',
      'Layer rice in a bowl',
      'Add beans, corn, and tomatoes',
      'Top with avocado and Greek yogurt',
      'Drizzle with lime juice and olive oil',
      'Garnish with cilantro and season'
    ],
    tips: [
      'Use any type of beans you have',
      'Add leftover protein for extra nutrition',
      'Try different sauces like hot sauce or salsa'
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      fat: 16,
      carbs: 52,
      fiber: 8
    }
  },
  {
    id: 'rice-pudding',
    name: 'Protein Rice Pudding',
    description: 'Creamy protein-rich rice pudding',
    time: '30 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍚',
    category: 'Ingredient Upgrades',
    subcategory: 'Rice',
    upgrades: ['High protein', 'Protein powder', 'Fruit', 'Healthy fats'],
    ingredients: [
      '1 cup cooked rice',
      '1 cup milk',
      '1 scoop vanilla protein powder',
      '1/4 cup raisins',
      '2 tbsp honey',
      '1 tsp cinnamon',
      '1 tbsp butter',
      '1/4 cup chopped nuts'
    ],
    instructions: [
      'Combine rice and milk in a saucepan',
      'Cook over medium heat, stirring frequently',
      'Add protein powder and stir until dissolved',
      'Add raisins, honey, and cinnamon',
      'Cook until thickened, about 15 minutes',
      'Stir in butter and top with nuts'
    ],
    tips: [
      'Use any type of rice you have',
      'Add different fruits like berries or bananas',
      'Serve warm or cold'
    ],
    nutrition: {
      calories: 380,
      protein: 22,
      fat: 12,
      carbs: 48,
      fiber: 3
    }
  },
  // INGREDIENT UPGRADES - EGGS
  {
    id: 'protein-omelette',
    name: 'Protein Omelette',
    description: 'Transform eggs into a protein-packed omelette',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '🥚',
    category: 'Ingredient Upgrades',
    subcategory: 'Eggs',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '3 eggs',
      '1/4 cup diced bell pepper',
      '1/4 cup diced onion',
      '1/4 cup shredded cheese',
      '1 tbsp olive oil',
      '1 tbsp milk',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Whisk eggs with milk, salt, and pepper',
      'Heat olive oil in a non-stick pan over medium heat',
      'Sauté vegetables for 2-3 minutes',
      'Pour egg mixture over vegetables',
      'When edges start to set, add cheese',
      'Fold omelette in half and cook until done'
    ],
    tips: [
      'Use any vegetables you have',
      'Add leftover protein for extra nutrition',
      'Don\'t over-stir the eggs'
    ],
    nutrition: {
      calories: 320,
      protein: 24,
      fat: 22,
      carbs: 4,
      fiber: 2
    }
  },
  {
    id: 'egg-fried-rice',
    name: 'Egg Fried Rice',
    description: 'Classic egg fried rice with protein boost',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '🥚',
    category: 'Ingredient Upgrades',
    subcategory: 'Eggs',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked rice',
      '3 eggs',
      '1/2 cup frozen mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 green onions, chopped',
      '1 clove garlic, minced',
      '1 tbsp ginger, minced'
    ],
    instructions: [
      'Scramble eggs in a large pan and set aside',
      'Sauté garlic and ginger in sesame oil',
      'Add vegetables and cook until tender',
      'Add rice and stir-fry for 2-3 minutes',
      'Add eggs, soy sauce, and green onions',
      'Stir-fry for another 2 minutes'
    ],
    tips: [
      'Use day-old rice for better texture',
      'Add any protein you have (chicken, shrimp, tofu)',
      'Use low-sodium soy sauce if watching salt'
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      fat: 14,
      carbs: 52,
      fiber: 4
    }
  },
  {
    id: 'egg-sandwich',
    name: 'Protein Egg Sandwich',
    description: 'Protein-rich egg sandwich with vegetables',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🥚',
    category: 'Ingredient Upgrades',
    subcategory: 'Eggs',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 slices whole grain bread',
      '2 eggs',
      '1 slice cheese',
      '1/4 cup spinach',
      '1/4 cup sliced tomato',
      '1 tbsp butter',
      '1 tbsp mayonnaise',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Toast bread until golden brown',
      'Fry eggs to your preference',
      'Layer spinach, eggs, cheese, and tomato on bread',
      'Spread mayonnaise on other slice',
      'Assemble sandwich and season'
    ],
    tips: [
      'Use any type of bread you have',
      'Add avocado for extra healthy fats',
      'Try different cheeses for variety'
    ],
    nutrition: {
      calories: 420,
      protein: 22,
      fat: 24,
      carbs: 28,
      fiber: 4
    }
  },
  {
    id: 'egg-soup',
    name: 'Egg Drop Soup',
    description: 'Simple and protein-rich egg drop soup',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$1.50',
    rating: 4,
    image: '🥚',
    category: 'Ingredient Upgrades',
    subcategory: 'Eggs',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups chicken broth',
      '2 eggs',
      '1/4 cup frozen peas',
      '1/4 cup diced carrots',
      '2 green onions, chopped',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '1 tbsp cornstarch',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Bring broth to a boil in a pot',
      'Add vegetables and simmer for 3 minutes',
      'Whisk eggs in a bowl',
      'Slowly pour eggs into soup while stirring',
      'Mix cornstarch with water and add to thicken',
      'Season with soy sauce, sesame oil, salt, and pepper'
    ],
    tips: [
      'Use vegetable broth for vegetarian version',
      'Add more vegetables for extra nutrition',
      'Adjust seasoning to your preference'
    ],
    nutrition: {
      calories: 180,
      protein: 16,
      fat: 8,
      carbs: 12,
      fiber: 2
    }
  },
  // INGREDIENT UPGRADES - PASTA
  {
    id: 'protein-pasta-salad',
    name: 'Protein Pasta Salad',
    description: 'Transform pasta into a protein-rich cold salad',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🍝',
    category: 'Ingredient Upgrades',
    subcategory: 'Pasta',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked pasta',
      '1/2 cup diced chicken breast',
      '1/4 cup cherry tomatoes',
      '1/4 cup diced cucumber',
      '1/4 cup diced bell pepper',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      '1/4 cup feta cheese',
      'Fresh basil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Drain and rinse with cold water',
      'Combine pasta with all vegetables',
      'Add chicken and feta cheese',
      'Drizzle with olive oil and balsamic',
      'Season with salt, pepper, and basil'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add any vegetables you like',
      'Can be made ahead and stored in fridge'
    ],
    nutrition: {
      calories: 420,
      protein: 24,
      fat: 16,
      carbs: 48,
      fiber: 4
    }
  },
  {
    id: 'pasta-stir-fry',
    name: 'Pasta Stir-Fry',
    description: 'Asian-inspired pasta stir-fry with protein',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$3.50',
    rating: 5,
    image: '🍝',
    category: 'Ingredient Upgrades',
    subcategory: 'Pasta',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked pasta',
      '2 eggs',
      '1/2 cup frozen mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 green onions, chopped',
      '1 clove garlic, minced',
      '1 tbsp ginger, minced',
      '1 tbsp sesame seeds'
    ],
    instructions: [
      'Scramble eggs in a large pan and set aside',
      'Sauté garlic and ginger in sesame oil',
      'Add vegetables and cook until tender',
      'Add pasta and stir-fry for 2-3 minutes',
      'Add eggs, soy sauce, and green onions',
      'Stir-fry for another 2 minutes',
      'Top with sesame seeds'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add tofu or chicken for extra protein',
      'Use low-sodium soy sauce if watching salt'
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      fat: 14,
      carbs: 52,
      fiber: 4
    }
  },
  {
    id: 'pasta-soup',
    name: 'Pasta Soup',
    description: 'Hearty pasta soup with protein and vegetables',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍝',
    category: 'Ingredient Upgrades',
    subcategory: 'Pasta',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 cup cooked pasta',
      '2 cups chicken broth',
      '1/2 cup diced chicken breast',
      '1/4 cup frozen peas',
      '1/4 cup diced carrots',
      '1/4 cup diced celery',
      '1 tbsp olive oil',
      '1 clove garlic, minced',
      '1 tsp Italian seasoning',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pot over medium heat',
      'Sauté garlic, carrots, and celery for 3 minutes',
      'Add broth and bring to a boil',
      'Add pasta, chicken, and peas',
      'Simmer for 5 minutes',
      'Season with Italian seasoning, salt, and pepper'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add more vegetables for extra nutrition',
      'Use vegetable broth for vegetarian version'
    ],
    nutrition: {
      calories: 320,
      protein: 20,
      fat: 8,
      carbs: 44,
      fiber: 4
    }
  },
  {
    id: 'pasta-frittata',
    name: 'Pasta Frittata',
    description: 'Transform leftover pasta into a protein-rich frittata',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍝',
    category: 'Ingredient Upgrades',
    subcategory: 'Pasta',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 cup cooked pasta',
      '4 eggs',
      '1/4 cup diced bell pepper',
      '1/4 cup diced onion',
      '1/4 cup shredded cheese',
      '1 tbsp olive oil',
      '1 tbsp milk',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 350°F',
      'Whisk eggs with milk, salt, and pepper',
      'Heat olive oil in an oven-safe pan',
      'Sauté onion and bell pepper for 3 minutes',
      'Add pasta and stir to combine',
      'Pour egg mixture over pasta',
      'Sprinkle with cheese',
      'Bake for 10-12 minutes until set'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add any vegetables you like',
      'Great way to use leftover pasta'
    ],
    nutrition: {
      calories: 380,
      protein: 24,
      fat: 18,
      carbs: 32,
      fiber: 2
    }
  },
  // INGREDIENT UPGRADES - BREAD
  {
    id: 'protein-french-toast',
    name: 'Protein French Toast',
    description: 'Transform bread into a protein-packed breakfast',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '🍞',
    category: 'Ingredient Upgrades',
    subcategory: 'Bread',
    upgrades: ['High protein', 'Protein powder', 'Fruit', 'Healthy fats'],
    ingredients: [
      '2 slices bread',
      '1 egg',
      '1/4 cup milk',
      '1 scoop vanilla protein powder',
      '1 tbsp butter',
      '1/4 cup berries',
      '1 tbsp maple syrup',
      'Cinnamon to taste'
    ],
    instructions: [
      'Whisk egg, milk, protein powder, and cinnamon',
      'Dip bread slices in mixture',
      'Melt butter in a pan over medium heat',
      'Cook bread until golden brown on both sides',
      'Top with berries and maple syrup'
    ],
    tips: [
      'Use thick bread for better texture',
      'Add more protein powder for extra protein',
      'Use any fruit you have available'
    ],
    nutrition: {
      calories: 380,
      protein: 28,
      fat: 12,
      carbs: 42,
      fiber: 3
    }
  },
  {
    id: 'avocado-toast',
    name: 'Protein Avocado Toast',
    description: 'Classic avocado toast with protein boost',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 5,
    image: '🍞',
    category: 'Ingredient Upgrades',
    subcategory: 'Bread',
    upgrades: ['High protein', 'Healthy fats', 'Vegetables', 'Fiber'],
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      '1/4 cup cherry tomatoes',
      '1 tbsp olive oil',
      'Red pepper flakes',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Toast bread until golden brown',
      'Mash avocado and spread on toast',
      'Fry eggs to your preference',
      'Top toast with eggs and tomatoes',
      'Drizzle with olive oil and seasonings'
    ],
    tips: [
      'Use whole grain bread for extra fiber',
      'Add microgreens for extra nutrition',
      'Try different seasonings like everything bagel seasoning'
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      fat: 24,
      carbs: 32,
      fiber: 8
    }
  },
  {
    id: 'protein-sandwich',
    name: 'Protein-Packed Sandwich',
    description: 'Transform bread into a protein-rich sandwich',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🍞',
    category: 'Ingredient Upgrades',
    subcategory: 'Bread',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 slices whole grain bread',
      '3 oz turkey or chicken breast',
      '1 slice cheese',
      '1/4 cup spinach',
      '1/4 cup sliced cucumber',
      '1 tbsp mustard',
      '1 tbsp olive oil'
    ],
    instructions: [
      'Toast bread lightly',
      'Layer turkey/chicken on one slice',
      'Add cheese, spinach, and cucumber',
      'Spread mustard on other slice',
      'Drizzle with olive oil and assemble'
    ],
    tips: [
      'Use leftover rotisserie chicken for convenience',
      'Add avocado for extra healthy fats',
      'Try different bread types for variety'
    ],
    nutrition: {
      calories: 380,
      protein: 32,
      fat: 16,
      carbs: 28,
      fiber: 6
    }
  },
  {
    id: 'bread-pudding',
    name: 'Protein Bread Pudding',
    description: 'Transform stale bread into a protein-rich dessert',
    time: '25 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🍞',
    category: 'Ingredient Upgrades',
    subcategory: 'Bread',
    upgrades: ['High protein', 'Protein powder', 'Fruit', 'Healthy fats'],
    ingredients: [
      '4 slices stale bread, cubed',
      '2 eggs',
      '1 cup milk',
      '1 scoop vanilla protein powder',
      '1/4 cup berries',
      '2 tbsp honey',
      '1 tsp cinnamon',
      '1 tbsp butter'
    ],
    instructions: [
      'Preheat oven to 350°F',
      'Whisk eggs, milk, protein powder, and cinnamon',
      'Add bread cubes and let soak for 5 minutes',
      'Pour into greased baking dish',
      'Top with berries and honey',
      'Bake for 20 minutes until set'
    ],
    tips: [
      'Use any type of bread you have',
      'Add nuts for extra crunch',
      'Serve warm or cold'
    ],
    nutrition: {
      calories: 320,
      protein: 24,
      fat: 10,
      carbs: 38,
      fiber: 3
    }
  },
  // INGREDIENT UPGRADES - CANNED SOUP
  {
    id: 'loaded-canned-soup',
    name: 'Loaded Canned Soup',
    description: 'Transform basic canned soup into a hearty meal',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🥫',
    category: 'Ingredient Upgrades',
    subcategory: 'Canned Soup',
    upgrades: ['Add protein', 'Vegetables', 'Grains', 'Herbs'],
    ingredients: [
      '1 can soup (chicken noodle, tomato, etc.)',
      '1/4 cup cooked chicken or beans',
      '1/4 cup frozen vegetables',
      '1/4 cup cooked rice or pasta',
      '1 tbsp olive oil',
      'Fresh herbs (optional)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat soup in a pot over medium heat',
      'Add frozen vegetables and cook for 3 minutes',
      'Add cooked chicken/beans and rice/pasta',
      'Simmer for 2 minutes until heated through',
      'Drizzle with olive oil and add herbs',
      'Season with salt and pepper'
    ],
    tips: [
      'Choose low-sodium soup when possible',
      'Add more vegetables for extra nutrition',
      'Use leftover grains for convenience'
    ],
    nutrition: {
      calories: 280,
      protein: 18,
      fat: 8,
      carbs: 32,
      fiber: 4
    }
  },
  // INGREDIENT UPGRADES - FROZEN PIZZA
  {
    id: 'loaded-frozen-pizza',
    name: 'Loaded Frozen Pizza',
    description: 'Transform frozen pizza into a protein-packed meal',
    time: '25 min',
    difficulty: 'Easy',
    cost: '$4',
    rating: 4,
    image: '🍕',
    category: 'Ingredient Upgrades',
    subcategory: 'Frozen Pizza',
    upgrades: ['Add protein', 'Extra vegetables', 'Fresh herbs', 'Better cheese'],
    ingredients: [
      '1 frozen pizza',
      '1/2 cup cooked chicken or pepperoni',
      '1/4 cup diced bell peppers',
      '1/4 cup sliced mushrooms',
      '1/4 cup shredded mozzarella',
      '1 tbsp olive oil',
      'Fresh basil (optional)',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Preheat oven according to pizza package',
      'Add extra toppings to frozen pizza',
      'Drizzle with olive oil',
      'Bake according to package directions',
      'Add fresh herbs and red pepper flakes after baking',
      'Let cool for 2 minutes before slicing'
    ],
    tips: [
      'Add toppings in the last 5 minutes to prevent burning',
      'Use fresh vegetables for better taste',
      'Don\'t overload the pizza or it won\'t cook properly'
    ],
    nutrition: {
      calories: 480,
      protein: 26,
      fat: 22,
      carbs: 48,
      fiber: 3
    }
  },
  // INGREDIENT UPGRADES - BEANS
  {
    id: 'protein-bean-bowl',
    name: 'Protein Bean Bowl',
    description: 'Transform beans into a protein-packed meal',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 5,
    image: '🫘',
    category: 'Ingredient Upgrades',
    subcategory: 'Beans',
    upgrades: ['High protein', 'Vegetables', 'Grains', 'Healthy fats'],
    ingredients: [
      '1 cup cooked beans (black, pinto, or chickpeas)',
      '1/2 cup cooked rice or quinoa',
      '1/4 cup diced tomatoes',
      '1/4 cup diced avocado',
      '1/4 cup corn',
      '1 tbsp olive oil',
      '1 tsp cumin',
      '1/2 lime, juiced',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pan over medium heat',
      'Add beans and warm through',
      'Add rice/quinoa and seasonings',
      'Stir in tomatoes and corn',
      'Top with avocado and lime juice',
      'Season with salt and pepper'
    ],
    tips: [
      'Use canned beans for convenience',
      'Add hot sauce for extra flavor',
      'Customize with your favorite vegetables'
    ],
    nutrition: {
      calories: 320,
      protein: 16,
      fat: 8,
      carbs: 52,
      fiber: 12
    }
  },
  // INGREDIENT UPGRADES - VEGETABLES
  {
    id: 'protein-veggie-bowl',
    name: 'Protein Veggie Bowl',
    description: 'Transform vegetables into a protein-packed meal',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🥬',
    category: 'Ingredient Upgrades',
    subcategory: 'Vegetables',
    upgrades: ['High protein', 'Multiple vegetables', 'Grains', 'Healthy fats'],
    ingredients: [
      '2 cups mixed vegetables (broccoli, carrots, bell peppers)',
      '1/2 cup cooked quinoa or rice',
      '1/2 cup cooked chicken or tofu',
      '1/4 cup chickpeas',
      '2 tbsp olive oil',
      '1 tbsp soy sauce',
      '1 tsp garlic powder',
      '1/2 tsp ginger powder',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Steam or roast vegetables until tender',
      'Heat olive oil in a pan over medium heat',
      'Add chicken/tofu and warm through',
      'Add vegetables, quinoa/rice, and chickpeas',
      'Stir in seasonings and soy sauce',
      'Cook until heated through and serve'
    ],
    tips: [
      'Use frozen vegetables for convenience',
      'Add more protein sources for variety',
      'Use different seasonings to change the flavor'
    ],
    nutrition: {
      calories: 340,
      protein: 24,
      fat: 12,
      carbs: 38,
      fiber: 8
    }
  },
  // INGREDIENT UPGRADES - CHICKEN
  {
    id: 'chicken-stir-fry',
    name: 'Chicken Stir-Fry',
    description: 'Quick and protein-rich chicken stir-fry',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$4',
    rating: 5,
    image: '🍗',
    category: 'Ingredient Upgrades',
    subcategory: 'Chicken',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 chicken breast, sliced',
      '1/2 cup frozen mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 green onions, chopped',
      '1 clove garlic, minced',
      '1 tbsp ginger, minced',
      '1 tbsp cornstarch',
      '1/4 cup chicken broth'
    ],
    instructions: [
      'Slice chicken breast into thin strips',
      'Heat sesame oil in a large pan over high heat',
      'Stir-fry chicken until cooked through',
      'Add vegetables and stir-fry for 2 minutes',
      'Mix cornstarch with broth and add to pan',
      'Add soy sauce and stir until thickened',
      'Garnish with green onions'
    ],
    tips: [
      'Use any vegetables you have',
      'Add rice or noodles for a complete meal',
      'Use low-sodium soy sauce if watching salt'
    ],
    nutrition: {
      calories: 320,
      protein: 32,
      fat: 12,
      carbs: 16,
      fiber: 4
    }
  },
  {
    id: 'chicken-soup',
    name: 'Chicken Soup',
    description: 'Hearty chicken soup with vegetables',
    time: '25 min',
    difficulty: 'Easy',
    cost: '$3.50',
    rating: 4,
    image: '🍗',
    category: 'Ingredient Upgrades',
    subcategory: 'Chicken',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 chicken breast, diced',
      '2 cups chicken broth',
      '1/4 cup diced carrots',
      '1/4 cup diced celery',
      '1/4 cup diced onion',
      '1/4 cup frozen peas',
      '1 tbsp olive oil',
      '1 clove garlic, minced',
      '1 tsp Italian seasoning',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pot over medium heat',
      'Sauté onion, carrots, and celery for 5 minutes',
      'Add garlic and cook for 1 minute',
      'Add broth and bring to a boil',
      'Add chicken and simmer for 10 minutes',
      'Add peas and cook for 2 minutes',
      'Season with Italian seasoning, salt, and pepper'
    ],
    tips: [
      'Use leftover rotisserie chicken for convenience',
      'Add pasta or rice for extra substance',
      'Freeze leftovers for quick meals'
    ],
    nutrition: {
      calories: 280,
      protein: 28,
      fat: 8,
      carbs: 16,
      fiber: 4
    }
  },
  {
    id: 'chicken-salad',
    name: 'Chicken Salad',
    description: 'Protein-rich chicken salad with vegetables',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$3.50',
    rating: 4,
    image: '🍗',
    category: 'Ingredient Upgrades',
    subcategory: 'Chicken',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 chicken breast, cooked and diced',
      '1/4 cup diced celery',
      '1/4 cup diced onion',
      '1/4 cup diced bell pepper',
      '2 tbsp Greek yogurt',
      '1 tbsp mayonnaise',
      '1 tbsp Dijon mustard',
      '1 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Dice cooked chicken breast',
      'Combine chicken with all vegetables',
      'Mix Greek yogurt, mayonnaise, mustard, and lemon juice',
      'Toss chicken and vegetables with dressing',
      'Season with salt and pepper',
      'Serve on bread or lettuce wraps'
    ],
    tips: [
      'Use leftover rotisserie chicken',
      'Add grapes or apples for sweetness',
      'Use any vegetables you have'
    ],
    nutrition: {
      calories: 280,
      protein: 32,
      fat: 12,
      carbs: 8,
      fiber: 2
    }
  },
  {
    id: 'chicken-pasta',
    name: 'Chicken Pasta',
    description: 'Simple chicken pasta with vegetables',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$4',
    rating: 5,
    image: '🍗',
    category: 'Ingredient Upgrades',
    subcategory: 'Chicken',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 chicken breast, sliced',
      '2 cups cooked pasta',
      '1/4 cup cherry tomatoes',
      '1/4 cup spinach',
      '2 tbsp olive oil',
      '1 clove garlic, minced',
      '1/4 cup parmesan cheese',
      '1 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Heat olive oil in a pan over medium heat',
      'Cook chicken until golden and cooked through',
      'Add garlic and cook for 1 minute',
      'Add tomatoes and spinach',
      'Toss with pasta and parmesan cheese',
      'Drizzle with lemon juice and season'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add more vegetables for extra nutrition',
      'Reserve pasta water for creamier sauce'
    ],
    nutrition: {
      calories: 420,
      protein: 36,
      fat: 16,
      carbs: 48,
      fiber: 4
    }
  },
  // INGREDIENT UPGRADES - BEANS
  {
    id: 'bean-burrito',
    name: 'Bean Burrito',
    description: 'Protein-rich bean burrito with vegetables',
    time: '10 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🫘',
    category: 'Ingredient Upgrades',
    subcategory: 'Beans',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1/2 cup black beans',
      '1 large tortilla',
      '1/4 cup shredded cheese',
      '1/4 cup diced bell pepper',
      '1/4 cup diced onion',
      '2 tbsp Greek yogurt',
      '1 tbsp salsa',
      '1 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pan over medium heat',
      'Sauté onion and bell pepper for 3 minutes',
      'Add beans and warm through',
      'Warm tortilla in microwave or pan',
      'Layer beans, vegetables, and cheese on tortilla',
      'Top with Greek yogurt and salsa',
      'Roll up and serve'
    ],
    tips: [
      'Use any type of beans you have',
      'Add rice for extra substance',
      'Use any vegetables you like'
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      fat: 12,
      carbs: 48,
      fiber: 8
    }
  },
  {
    id: 'bean-soup',
    name: 'Bean Soup',
    description: 'Hearty bean soup with vegetables',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🫘',
    category: 'Ingredient Upgrades',
    subcategory: 'Beans',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 cup mixed beans',
      '2 cups vegetable broth',
      '1/4 cup diced carrots',
      '1/4 cup diced celery',
      '1/4 cup diced onion',
      '1 clove garlic, minced',
      '1 tbsp olive oil',
      '1 tsp cumin',
      '1 tsp chili powder',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pot over medium heat',
      'Sauté onion, carrots, and celery for 5 minutes',
      'Add garlic and cook for 1 minute',
      'Add broth and bring to a boil',
      'Add beans and simmer for 10 minutes',
      'Season with cumin, chili powder, salt, and pepper'
    ],
    tips: [
      'Use any type of beans you have',
      'Add more vegetables for extra nutrition',
      'Use chicken broth for non-vegetarian version'
    ],
    nutrition: {
      calories: 280,
      protein: 16,
      fat: 6,
      carbs: 44,
      fiber: 12
    }
  },
  {
    id: 'bean-salad',
    name: 'Bean Salad',
    description: 'Protein-rich bean salad with vegetables',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🫘',
    category: 'Ingredient Upgrades',
    subcategory: 'Beans',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '1 cup mixed beans',
      '1/4 cup diced bell pepper',
      '1/4 cup diced cucumber',
      '1/4 cup diced tomato',
      '1/4 cup diced onion',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      '1 tbsp balsamic vinegar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Drain and rinse beans',
      'Combine beans with all vegetables',
      'Whisk olive oil, lemon juice, and balsamic vinegar',
      'Toss salad with dressing',
      'Season with salt and pepper',
      'Serve chilled'
    ],
    tips: [
      'Use any type of beans you have',
      'Add feta cheese for extra flavor',
      'Can be made ahead and stored in fridge'
    ],
    nutrition: {
      calories: 240,
      protein: 12,
      fat: 8,
      carbs: 32,
      fiber: 8
    }
  },
  {
    id: 'bean-pasta',
    name: 'Bean Pasta',
    description: 'Protein-rich bean pasta with vegetables',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🫘',
    category: 'Ingredient Upgrades',
    subcategory: 'Beans',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked pasta',
      '1/2 cup black beans',
      '1/4 cup cherry tomatoes',
      '1/4 cup spinach',
      '2 tbsp olive oil',
      '1 clove garlic, minced',
      '1/4 cup parmesan cheese',
      '1 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Heat olive oil in a pan over medium heat',
      'Sauté garlic for 1 minute',
      'Add beans and warm through',
      'Add tomatoes and spinach',
      'Toss with pasta and parmesan cheese',
      'Drizzle with lemon juice and season'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add more vegetables for extra nutrition',
      'Use any type of beans you have'
    ],
    nutrition: {
      calories: 420,
      protein: 20,
      fat: 16,
      carbs: 52,
      fiber: 8
    }
  },
  {
    id: 'vegetable-stir-fry',
    name: 'Vegetable Stir-Fry',
    description: 'Quick and healthy vegetable stir-fry',
    time: '12 min',
    difficulty: 'Easy',
    cost: '$2.50',
    rating: 4,
    image: '🥬',
    category: 'Ingredient Upgrades',
    subcategory: 'Vegetables',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups mixed vegetables',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 green onions, chopped',
      '1 clove garlic, minced',
      '1 tbsp ginger, minced',
      '1 tbsp cornstarch',
      '1/4 cup vegetable broth',
      '1 tbsp sesame seeds'
    ],
    instructions: [
      'Heat sesame oil in a large pan over high heat',
      'Sauté garlic and ginger for 30 seconds',
      'Add vegetables and stir-fry for 3-4 minutes',
      'Mix cornstarch with broth and add to pan',
      'Add soy sauce and stir until thickened',
      'Garnish with green onions and sesame seeds'
    ],
    tips: [
      'Use any vegetables you have',
      'Add tofu or eggs for protein',
      'Use low-sodium soy sauce if watching salt'
    ],
    nutrition: {
      calories: 180,
      protein: 8,
      fat: 8,
      carbs: 20,
      fiber: 6
    }
  },
  {
    id: 'vegetable-soup',
    name: 'Vegetable Soup',
    description: 'Hearty vegetable soup with protein',
    time: '20 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🥬',
    category: 'Ingredient Upgrades',
    subcategory: 'Vegetables',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups vegetable broth',
      '1 cup mixed vegetables',
      '1/4 cup diced onion',
      '1 clove garlic, minced',
      '1 tbsp olive oil',
      '1 tsp Italian seasoning',
      '1/4 cup beans or lentils',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a pot over medium heat',
      'Sauté onion and garlic for 3 minutes',
      'Add broth and bring to a boil',
      'Add vegetables and beans/lentils',
      'Simmer for 10 minutes',
      'Season with Italian seasoning, salt, and pepper'
    ],
    tips: [
      'Use any vegetables you have',
      'Add pasta or rice for extra substance',
      'Use chicken broth for non-vegetarian version'
    ],
    nutrition: {
      calories: 160,
      protein: 8,
      fat: 4,
      carbs: 24,
      fiber: 6
    }
  },
  {
    id: 'vegetable-salad',
    name: 'Vegetable Salad',
    description: 'Protein-rich vegetable salad',
    time: '8 min',
    difficulty: 'Easy',
    cost: '$2',
    rating: 4,
    image: '🥬',
    category: 'Ingredient Upgrades',
    subcategory: 'Vegetables',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups mixed vegetables',
      '1/4 cup beans or chickpeas',
      '1/4 cup diced avocado',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      '1 tbsp balsamic vinegar',
      '1/4 cup feta cheese',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Chop all vegetables into bite-sized pieces',
      'Combine vegetables with beans/chickpeas',
      'Whisk olive oil, lemon juice, and balsamic vinegar',
      'Toss salad with dressing',
      'Top with avocado and feta cheese',
      'Season with salt and pepper'
    ],
    tips: [
      'Use any vegetables you have',
      'Add nuts for extra crunch',
      'Can be made ahead and stored in fridge'
    ],
    nutrition: {
      calories: 220,
      protein: 8,
      fat: 16,
      carbs: 16,
      fiber: 6
    }
  },
  {
    id: 'vegetable-pasta',
    name: 'Vegetable Pasta',
    description: 'Protein-rich vegetable pasta',
    time: '15 min',
    difficulty: 'Easy',
    cost: '$3',
    rating: 4,
    image: '🥬',
    category: 'Ingredient Upgrades',
    subcategory: 'Vegetables',
    upgrades: ['High protein', 'Vegetables', 'Healthy fats', 'Fiber'],
    ingredients: [
      '2 cups cooked pasta',
      '1 cup mixed vegetables',
      '1/4 cup beans or chickpeas',
      '2 tbsp olive oil',
      '1 clove garlic, minced',
      '1/4 cup parmesan cheese',
      '1 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Heat olive oil in a pan over medium heat',
      'Sauté garlic for 1 minute',
      'Add vegetables and cook until tender',
      'Add beans/chickpeas and warm through',
      'Toss with pasta and parmesan cheese',
      'Drizzle with lemon juice and season'
    ],
    tips: [
      'Use any type of pasta you have',
      'Add more vegetables for extra nutrition',
      'Use any type of beans you have'
    ],
    nutrition: {
      calories: 380,
      protein: 16,
      fat: 16,
      carbs: 48,
      fiber: 8
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

// Ingredient categories for the Ingredient Upgrades page
export const ingredientCategories = [
  { value: 'ramen', label: 'Ramen Noodles', icon: '🍜', category: 'Instant' },
  { value: 'mac-cheese', label: 'Mac & Cheese', icon: '🧀', category: 'Instant' },
  { value: 'canned-soup', label: 'Canned Soup', icon: '🥫', category: 'Canned' },
  { value: 'rice', label: 'Rice', icon: '🍚', category: 'Grains' },
  { value: 'pasta', label: 'Pasta', icon: '🍝', category: 'Grains' },
  { value: 'bread', label: 'Bread', icon: '🍞', category: 'Grains' },
  { value: 'eggs', label: 'Eggs', icon: '🥚', category: 'Protein' },
  { value: 'chicken', label: 'Chicken', icon: '🍗', category: 'Protein' },
  { value: 'beans', label: 'Beans', icon: '🫘', category: 'Protein' },
  { value: 'vegetables', label: 'Vegetables', icon: '🥬', category: 'Produce' }
]; 