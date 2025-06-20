export interface PartyMenu {
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
  }[];
  baseServings: number;
  additionalDishes: string[];
  dietaryTags: string[];
}

export const partyMenus: PartyMenu[] = [
  // DINNER PARTIES
  {
    id: 'italian-dinner',
    name: 'Italian Dinner Party',
    description: 'Classic Italian dishes perfect for a dinner party',
    time: '2 hours',
    difficulty: 'Medium',
    cost: '$8 per person',
    rating: 5,
    image: '🍝',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Bruschetta',
        description: 'Easy student-friendly recipe with fresh tomatoes and basil.',
        ingredients: ['4 slices bread', '2 tomatoes', '1/4 cup basil', '2 tbsp olive oil', '1 clove garlic', 'Salt and pepper'],
        instructions: [
          'Preheat oven to 375°F (190°C).',
          'Arrange bread slices on a baking sheet and toast for 5-7 minutes, until golden brown and crisp.',
          'While bread is toasting, dice tomatoes and finely chop basil.',
          'In a small bowl, combine diced tomatoes, chopped basil, and olive oil. Season with salt and pepper to taste.',
          'Once the bread is toasted, lightly rub one side of each slice with a peeled garlic clove.',
          'Top the garlic-rubbed side of the bread with the tomato mixture and serve immediately.'
        ],
        servings: 4
      },
      {
        title: 'Chicken Parmesan',
        description: 'Classic Italian chicken dish with marinara sauce.',
        ingredients: ['4 chicken breasts', '1 cup breadcrumbs', '1/2 cup parmesan cheese', '2 eggs', '1 cup marinara sauce', '1 cup mozzarella cheese', '2 tbsp olive oil'],
        instructions: [
          'Preheat oven to 400°F (200°C).',
          'In a shallow dish, combine breadcrumbs and parmesan cheese. In another dish, whisk the eggs.',
          'Dip each chicken breast in the whisked eggs, then dredge in the breadcrumb mixture, ensuring it\'s fully coated.',
          'Heat olive oil in a large skillet over medium-high heat. Fry the chicken for 2-3 minutes per side, until golden brown.',
          'Place the fried chicken in a baking dish. Top each breast with marinara sauce and a slice of mozzarella cheese.',
          'Bake for 15-20 minutes, or until the chicken is cooked through and the cheese is bubbly and slightly browned.'
        ],
        servings: 4
      },
      {
        title: 'Garlic Bread',
        description: 'Simple garlic bread to accompany the meal.',
        ingredients: ['1 loaf bread', '1/2 cup butter', '4 cloves garlic', '1/4 cup parsley', '1/4 cup parmesan cheese'],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'In a small bowl, mix softened butter with minced garlic and chopped parsley.',
          'Slice the loaf of bread, but not all the way through, creating pull-apart slices.',
          'Spread the garlic butter mixture between each slice.',
          'Sprinkle parmesan cheese over the top and in between slices.',
          'Wrap the loaf in aluminum foil and bake for 15 minutes. Then, open the foil and bake for another 5 minutes until the top is golden brown.'
        ],
        servings: 4
      },
      {
        title: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone.',
        ingredients: ['6 egg yolks', '1/2 cup sugar', '1 cup mascarpone cheese', '1 cup heavy cream', '1 cup strong brewed coffee, cooled', '24 ladyfinger cookies', 'Cocoa powder for dusting'],
        instructions: [
          'In a large bowl, beat the egg yolks and sugar with an electric mixer until pale and thick, about 5 minutes.',
          'Gently fold in the mascarpone cheese until just combined.',
          'In a separate bowl, whip the heavy cream until stiff peaks form. Gently fold the whipped cream into the mascarpone mixture.',
          'Briefly dip each ladyfinger into the cooled coffee and arrange a single layer in the bottom of a serving dish.',
          'Spread half of the mascarpone mixture over the ladyfingers.',
          'Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture.',
          'Cover and refrigerate for at least 4 hours, or overnight for best results.',
          'Just before serving, dust the top generously with cocoa powder.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Caprese Salad', 'Pasta Primavera', 'Risotto', 'Cannoli'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'mexican-fiesta',
    name: 'Mexican Fiesta',
    description: 'Vibrant Mexican dishes for a festive dinner party',
    time: '1.5 hours',
    difficulty: 'Easy',
    cost: '$6 per person',
    rating: 5,
    image: '🌮',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Guacamole',
        description: 'Fresh and creamy guacamole with chips.',
        ingredients: ['3 ripe avocados', '1 lime, juiced', '1/4 cup finely chopped cilantro', '1/2 red onion, finely diced', '1 jalapeño, minced (optional)', '1 tomato, diced', 'Salt and pepper to taste'],
        instructions: [
          'Halve the avocados, remove the pits, and scoop the flesh into a medium bowl.',
          'Mash the avocado with a fork to your desired consistency (chunky or smooth).',
          'Add the lime juice, cilantro, red onion, and jalapeño (if using). Stir to combine.',
          'Gently fold in the diced tomato.',
          'Season with salt and pepper to taste. Serve immediately with tortilla chips.'
        ],
        servings: 4
      },
      {
        title: 'Chicken Tacos',
        description: 'Flavorful chicken tacos with fresh toppings.',
        ingredients: ['1 lb chicken breast, boneless and skinless', '8 tortillas', '1 packet taco seasoning', '1 tbsp olive oil', '1 cup shredded lettuce', '1 cup shredded cheddar cheese', '1 cup salsa', '1/2 cup sour cream'],
        instructions: [
          'Cut the chicken breast into small, bite-sized pieces.',
          'Heat the olive oil in a large skillet over medium-high heat. Add the chicken and cook until no longer pink.',
          'Add the taco seasoning and a splash of water. Stir to coat the chicken and simmer for 2-3 minutes.',
          'While the chicken is cooking, warm the tortillas in a dry skillet or microwave.',
          'Assemble the tacos by filling each tortilla with the cooked chicken, shredded lettuce, cheese, and salsa.',
          'Top with a dollop of sour cream if desired.'
        ],
        servings: 4
      },
      {
        title: 'Mexican Rice',
        description: 'Flavorful rice with tomatoes and spices.',
        ingredients: ['1 cup long-grain white rice', '2 cups chicken broth', '1/2 cup tomato sauce', '1/2 onion, finely chopped', '2 cloves garlic, minced', '1 tsp cumin', '1 tbsp olive oil'],
        instructions: [
          'Heat the olive oil in a medium saucepan over medium heat. Add the chopped onion and cook until softened, about 3-4 minutes.',
          'Add the rice and garlic, and stir frequently until the rice is lightly toasted and fragrant, about 2-3 minutes.',
          'Stir in the chicken broth, tomato sauce, and cumin. Bring to a boil.',
          'Reduce the heat to low, cover the saucepan, and let it simmer for 15-20 minutes, or until the liquid is absorbed and the rice is tender.',
          'Fluff the rice with a fork before serving.'
        ],
        servings: 4
      },
      {
        title: 'Churros',
        description: 'Sweet fried dough with cinnamon sugar.',
        ingredients: ['1 cup all-purpose flour', '1 cup water', '2 tbsp butter', '2 eggs', '1/2 cup sugar', '1 tsp cinnamon', 'Vegetable oil for frying'],
        instructions: [
          'In a small saucepan, bring the water and butter to a boil.',
          'Remove from heat and stir in the flour until a smooth ball of dough forms.',
          'Allow the dough to cool for 5 minutes. Then, add the eggs one at a time, beating well after each addition until the dough is smooth.',
          'Transfer the dough to a piping bag fitted with a star tip.',
          'Heat 2-3 inches of vegetable oil in a deep pot or skillet to 350°F (175°C).',
          'Carefully pipe 4-6 inch strips of dough into the hot oil. Fry for 2-3 minutes per side, until golden brown.',
          'Remove the churros with a slotted spoon and drain on paper towels.',
          'In a shallow dish, mix together the sugar and cinnamon. Roll the warm churros in the cinnamon-sugar mixture until coated. Serve warm.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Queso Dip', 'Enchiladas', 'Refried Beans', 'Flan'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'asian-fusion',
    name: 'Asian Fusion Dinner',
    description: 'Modern Asian dishes with a fusion twist',
    time: '2.5 hours',
    difficulty: 'Medium',
    cost: '$10 per person',
    rating: 4,
    image: '🥢',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Spring Rolls',
        description: 'Fresh vegetable spring rolls with peanut sauce.',
        ingredients: ['8 rice paper wrappers', '1 cup cooked rice noodles', '1 cup mixed fresh vegetables (carrots, cucumbers, bell peppers), julienned', '1/4 cup fresh mint leaves', '1/4 cup fresh cilantro leaves', '1/2 cup peanut sauce for dipping'],
        instructions: [
          'Fill a shallow dish with warm water.',
          'Submerge one rice paper wrapper in the warm water for about 15-20 seconds, until it becomes soft and pliable.',
          'Carefully lay the wrapper flat on a clean surface.',
          'Arrange a small amount of rice noodles, mixed vegetables, mint, and cilantro in the center of the wrapper.',
          'Fold the bottom of the wrapper over the filling, then fold in the sides, and roll tightly to the end.',
          'Repeat with the remaining wrappers and filling. Serve immediately with peanut sauce.'
        ],
        servings: 4
      },
      {
        title: 'Teriyaki Salmon',
        description: 'Glazed salmon with teriyaki sauce.',
        ingredients: ['4 salmon fillets', '1/2 cup teriyaki sauce', '2 tbsp honey', '1 tbsp fresh ginger, grated', '2 green onions, sliced', '1 tsp sesame seeds'],
        instructions: [
          'Preheat your oven to 400°F (200°C).',
          'In a small bowl, whisk together the teriyaki sauce, honey, and grated ginger.',
          'Place the salmon fillets in a baking dish and pour the sauce over them, ensuring they are well-coated.',
          'Let the salmon marinate for at least 15 minutes.',
          'Bake for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.',
          'Garnish with sliced green onions and sesame seeds before serving.'
        ],
        servings: 4
      },
      {
        title: 'Stir-Fried Vegetables',
        description: 'Colorful stir-fried vegetables with soy sauce.',
        ingredients: ['2 cups mixed vegetables (broccoli, carrots, snow peas, bell peppers)', '2 tbsp soy sauce', '1 tbsp sesame oil', '2 cloves garlic, minced', '1 tbsp fresh ginger, grated'],
        instructions: [
          'Heat the sesame oil in a large skillet or wok over medium-high heat.',
          'Add the garlic and ginger, and stir-fry for about 30 seconds until fragrant.',
          'Add the mixed vegetables and stir-fry for 5-7 minutes, until they are tender-crisp.',
          'Pour the soy sauce over the vegetables and toss to combine. Serve hot.'
        ],
        servings: 4
      },
      {
        title: 'Mochi Ice Cream',
        description: 'Sweet rice dough wrapped around ice cream.',
        ingredients: ['1 cup mochiko (sweet rice) flour', '1/2 cup sugar', '1 cup water', '8 small scoops of your favorite ice cream', 'Cornstarch for dusting'],
        instructions: [
          'Scoop 8 small balls of ice cream onto a baking sheet lined with parchment paper. Freeze until very firm, at least 1 hour.',
          'In a microwave-safe bowl, whisk together the mochiko flour, sugar, and water until smooth.',
          'Cover the bowl with plastic wrap and microwave on high for 1 minute. Stir the mixture, then microwave for another 1 minute until it becomes translucent and sticky.',
          'Generously dust a clean work surface with cornstarch. Scrape the mochi dough onto the surface and dust the top with more cornstarch.',
          'Once cool enough to handle, roll the dough out to about 1/8-inch thickness.',
          'Use a cookie cutter to cut out 8 circles. Wrap each circle of dough around a frozen ice cream scoop, pinching the edges to seal.',
          'Place the finished mochi ice cream balls back in the freezer for at least 30 minutes to firm up before serving.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Dumplings', 'Pad Thai', 'Sushi Rolls', 'Green Tea Ice Cream'],
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Dairy-Free']
  },
  {
    id: 'mediterranean-feast',
    name: 'Mediterranean Feast',
    description: 'Fresh and healthy Mediterranean dishes',
    time: '2 hours',
    difficulty: 'Medium',
    cost: '$9 per person',
    rating: 5,
    image: '🫔',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Hummus',
        description: 'Creamy chickpea dip with tahini.',
        ingredients: ['1 can (15 oz) chickpeas, drained and rinsed', '1/4 cup tahini', '2 cloves garlic, minced', '1 lemon, juiced', '2 tbsp olive oil', '1 tsp cumin', 'Salt and pepper to taste', 'Paprika for garnish'],
        instructions: [
          'In a food processor, combine the chickpeas, tahini, garlic, and lemon juice. Blend until smooth.',
          'With the processor running, stream in the olive oil until the hummus is creamy.',
          'Stir in the cumin, and season with salt and pepper to taste.',
          'Transfer the hummus to a serving bowl, drizzle with a little more olive oil, and sprinkle with paprika before serving with pita bread or vegetables.'
        ],
        servings: 4
      },
      {
        title: 'Greek Chicken',
        description: 'Herb-roasted chicken with lemon and oregano.',
        ingredients: ['4 chicken breasts', '1/4 cup olive oil', '2 lemons (1 juiced, 1 sliced)', '4 cloves garlic, minced', '2 tbsp dried oregano', '1 tsp dried rosemary', 'Salt and pepper to taste'],
        instructions: [
          'Preheat oven to 400°F (200°C).',
          'In a bowl, whisk together the olive oil, lemon juice, minced garlic, oregano, and rosemary.',
          'Place the chicken breasts in a baking dish and pour the marinade over them. Season generously with salt and pepper.',
          'Arrange the lemon slices around the chicken.',
          'Bake for 25-30 minutes, or until the chicken is cooked through and the juices run clear.'
        ],
        servings: 4
      },
      {
        title: 'Greek Salad',
        description: 'Fresh salad with feta and olives.',
        ingredients: ['2 cups mixed greens', '1 cucumber', '1 cup cherry tomatoes', '1/2 cup feta cheese', '1/4 cup olives', '1/4 cup red onion', '2 tbsp olive oil', '1 tbsp red wine vinegar'],
        instructions: [
          'Chop all vegetables',
          'Combine in large bowl',
          'Add feta and olives',
          'Dress with olive oil and vinegar'
        ],
        servings: 4
      },
      {
        title: 'Baklava',
        description: 'Sweet pastry with layers of phyllo and nuts.',
        ingredients: ['1 package (16 oz) phyllo dough, thawed', '1 lb mixed nuts (walnuts, pistachios), finely chopped', '1 cup unsalted butter, melted', '1 tsp ground cinnamon', 'Syrup: 1 cup water, 1 cup sugar, 1/2 cup honey, 1 cinnamon stick'],
        instructions: [
          'Preheat oven to 350°F (175°C).',
          'In a bowl, mix the chopped nuts with the ground cinnamon.',
          'Brush a 9x13 inch baking dish with melted butter. Lay down a sheet of phyllo dough, brush with butter, and repeat for 8 layers.',
          'Spread a layer of the nut mixture over the phyllo. Top with two more sheets of phyllo, brushing each with butter.',
          'Continue to layer nuts and phyllo until all ingredients are used, ending with a top layer of 8 phyllo sheets with butter in between each.',
          'Cut the baklava into diamond or square shapes before baking.',
          'Bake for 45-50 minutes, until golden brown and crisp.',
          'While the baklava is baking, prepare the syrup. Combine water, sugar, honey, and a cinnamon stick in a saucepan. Bring to a boil, then reduce heat and simmer for 10 minutes. Remove the cinnamon stick and let the syrup cool.',
          'Pour the cooled syrup over the hot baklava. Let it cool completely before serving to allow the syrup to be absorbed.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Falafel', 'Tzatziki', 'Pita Bread', 'Rice Pilaf'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'american-bbq',
    name: 'American BBQ',
    description: 'Classic American barbecue with all the fixings',
    time: '3 hours',
    difficulty: 'Hard',
    cost: '$12 per person',
    rating: 5,
    image: '🍖',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'BBQ Wings',
        description: 'Sticky barbecue wings with dry rub.',
        ingredients: ['2 lbs chicken wings', '1/4 cup BBQ sauce', '2 tbsp brown sugar', '1 tbsp paprika', '1 tsp garlic powder', '1 tsp onion powder', 'Salt and pepper'],
        instructions: [
          'Season wings with dry rub',
          'Bake at 400°F for 45 minutes',
          'Toss with BBQ sauce',
          'Broil for 5 minutes until sticky'
        ],
        servings: 4
      },
      {
        title: 'Pulled Pork',
        description: 'Slow-cooked pulled pork with BBQ sauce.',
        ingredients: ['3 lbs pork shoulder', '1 cup BBQ sauce', '1 onion', '4 cloves garlic', '1 tbsp brown sugar', '1 tsp paprika', 'Hamburger buns'],
        instructions: [
          'Season pork with spices',
          'Cook in slow cooker for 8 hours',
          'Shred pork and mix with BBQ sauce',
          'Serve on buns with coleslaw'
        ],
        servings: 4
      },
      {
        title: 'Coleslaw',
        description: 'Creamy coleslaw with tangy dressing.',
        ingredients: ['1 small head of cabbage, shredded', '1 carrot, grated', '1/4 cup mayonnaise', '2 tbsp apple cider vinegar', '1 tbsp sugar', 'Salt and pepper'],
        instructions: [
          'In a large bowl, combine the shredded cabbage and grated carrot.',
          'In a small bowl, whisk together the mayonnaise, apple cider vinegar, and sugar.',
          'Pour the dressing over the cabbage and carrot mixture, and toss to coat.',
          'Season with salt and pepper to taste. For best results, let the coleslaw chill in the refrigerator for at least 30 minutes before serving.'
        ],
        servings: 4
      },
      {
        title: 'Apple Pie',
        description: 'Classic American apple pie.',
        ingredients: ['2 pie crusts', '6 apples', '1 cup sugar', '1 tsp cinnamon', '1/4 tsp nutmeg', '2 tbsp butter', '1 egg'],
        instructions: [
          'Peel and slice apples',
          'Mix with sugar and spices',
          'Fill pie crust with apple mixture',
          'Top with second crust and brush with egg wash',
          'Bake at 375°F for 45 minutes'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Cornbread', 'Baked Beans', 'Potato Salad', 'Ice Cream'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'indian-curry-night',
    name: 'Indian Curry Night',
    description: 'Spicy and aromatic Indian dishes',
    time: '2 hours',
    difficulty: 'Medium',
    cost: '$7 per person',
    rating: 4,
    image: '🍛',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Samosas',
        description: 'Crispy pastry filled with spiced potatoes.',
        ingredients: ['1 package puff pastry', '2 potatoes', '1/2 cup peas', '1 onion', '2 cloves garlic', '1 tbsp curry powder', '1 tsp cumin', 'Oil for frying'],
        instructions: [
          'Boil and mash potatoes',
          'Sauté onion, garlic, and spices',
          'Mix with potatoes and peas',
          'Fill pastry and fry until golden'
        ],
        servings: 4
      },
      {
        title: 'Chicken Tikka Masala',
        description: 'Creamy curry with tender chicken.',
        ingredients: ['1 lb chicken breast', '1 cup yogurt', '2 tbsp curry powder', '1 can coconut milk', '1 onion', '2 cloves garlic', '1 tbsp ginger', '1 cup tomato sauce'],
        instructions: [
          'Marinate chicken in yogurt and spices',
          'Grill or bake chicken',
          'Sauté onion, garlic, and ginger',
          'Add coconut milk and tomato sauce',
          'Simmer with chicken until thickened'
        ],
        servings: 4
      },
      {
        title: 'Basmati Rice',
        description: 'Fragrant basmati rice with spices.',
        ingredients: ['1 cup basmati rice', '2 cups water', '1 tbsp butter', '1 tsp cumin', '1 bay leaf', 'Salt'],
        instructions: [
          'Rinse rice until water runs clear',
          'Heat butter and toast cumin',
          'Add rice and water',
          'Simmer covered for 20 minutes'
        ],
        servings: 4
      },
      {
        title: 'Gulab Jamun',
        description: 'Sweet milk dumplings in syrup.',
        ingredients: ['1 cup milk powder', '1/4 cup flour', '1/4 cup butter', '1/4 cup milk', '1 cup sugar', '1 cup water', '1 tsp cardamom', 'Oil for frying'],
        instructions: [
          'Mix milk powder, flour, and butter',
          'Form into small balls',
          'Fry until golden brown',
          'Soak in sugar syrup flavored with cardamom'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Naan Bread', 'Raita', 'Dal', 'Kheer'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  // BRUNCH PARTIES
  {
    id: 'sunday-brunch',
    name: 'Sunday Brunch',
    description: 'Perfect brunch menu for lazy Sundays',
    time: '1 hour',
    difficulty: 'Easy',
    cost: '$5 per person',
    rating: 5,
    image: '🥞',
    mealType: 'brunch',
    courses: ['Drinks', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Mimosa Bar',
        description: 'Build-your-own mimosa station.',
        ingredients: ['1 bottle champagne', '1 cup orange juice', '1 cup grapefruit juice', '1 cup cranberry juice', 'Fresh berries', 'Mint leaves'],
        instructions: [
          'Set up juice options',
          'Add fresh berries and mint',
          'Let guests mix their own mimosas'
        ],
        servings: 4
      },
      {
        title: 'Eggs Benedict',
        description: 'Classic eggs benedict with hollandaise sauce.',
        ingredients: ['4 eggs', '4 English muffins', '4 slices ham', '1/2 cup hollandaise sauce', '1 tbsp vinegar', 'Salt and pepper'],
        instructions: [
          'Poach eggs in simmering water',
          'Toast English muffins',
          'Layer ham, eggs, and hollandaise',
          'Season with salt and pepper'
        ],
        servings: 4
      },
      {
        title: 'Hash Browns',
        description: 'Crispy hash browns with herbs.',
        ingredients: ['4 potatoes', '2 tbsp butter', '1/4 cup herbs', 'Salt and pepper'],
        instructions: [
          'Shred potatoes and squeeze out moisture',
          'Heat butter in pan',
          'Add potatoes and cook until crispy',
          'Season with herbs, salt, and pepper'
        ],
        servings: 4
      },
      {
        title: 'French Toast',
        description: 'Sweet French toast with maple syrup.',
        ingredients: ['8 slices bread', '4 eggs', '1 cup milk', '2 tbsp sugar', '1 tsp cinnamon', 'Butter for frying', 'Maple syrup'],
        instructions: [
          'Whisk eggs, milk, sugar, and cinnamon',
          'Dip bread in mixture',
          'Fry until golden brown',
          'Serve with maple syrup'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Pancakes', 'Bacon', 'Fruit Salad', 'Coffee Cake'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'breakfast-burrito-brunch',
    name: 'Breakfast Burrito Brunch',
    description: 'Mexican-inspired breakfast with a twist',
    time: '45 min',
    difficulty: 'Easy',
    cost: '$4 per person',
    rating: 4,
    image: '🌯',
    mealType: 'brunch',
    courses: ['Drinks', 'Main Course', 'Side Dish'],
    recipes: [
      {
        title: 'Bloody Mary Bar',
        description: 'Build-your-own Bloody Mary station.',
        ingredients: ['1 bottle vodka', '1 bottle tomato juice', '1 cup pickle juice', 'Hot sauce', 'Worcestershire sauce', 'Celery stalks', 'Pickles', 'Olives'],
        instructions: [
          'Set up vodka and tomato juice',
          'Add various garnishes',
          'Let guests customize their drinks'
        ],
        servings: 4
      },
      {
        title: 'Breakfast Burritos',
        description: 'Loaded breakfast burritos with eggs and potatoes.',
        ingredients: ['8 large tortillas', '8 eggs', '2 cups hash browns', '1 cup cheese', '1 cup salsa', '1/2 cup sour cream', '1 avocado'],
        instructions: [
          'Scramble eggs and cook hash browns',
          'Warm tortillas',
          'Layer eggs, potatoes, cheese, and toppings',
          'Roll up and serve with salsa'
        ],
        servings: 4
      },
      {
        title: 'Fresh Fruit Platter',
        description: 'Colorful fruit platter with yogurt dip.',
        ingredients: ['2 cups mixed berries', '1 pineapple', '1 melon', '1 cup grapes', '1 cup yogurt', '2 tbsp honey', '1/4 cup granola'],
        instructions: [
          'Cut all fruits into bite-sized pieces',
          'Arrange on platter',
          'Mix yogurt with honey',
          'Serve with granola for topping'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Chorizo', 'Refried Beans', 'Coffee', 'Orange Juice'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  // SNACK PARTIES
  {
    id: 'movie-night',
    name: 'Movie Night Snacks',
    description: 'Perfect snacks for a movie marathon',
    time: '30 min',
    difficulty: 'Easy',
    cost: '$3 per person',
    rating: 4,
    image: '🍿',
    mealType: 'snack',
    courses: ['Snacks', 'Dips', 'Drinks'],
    recipes: [
      {
        title: 'Popcorn Bar',
        description: 'Build-your-own popcorn with toppings.',
        ingredients: ['1/2 cup popcorn kernels', '2 tbsp coconut oil or vegetable oil', 'Toppings: 1/2 cup melted butter, 1/4 cup grated parmesan cheese, 1/4 cup nutritional yeast, 1/4 cup caramel sauce, salt'],
        instructions: [
          'Heat the oil in a large pot with a lid over medium-high heat. Add 2-3 popcorn kernels; when they pop, the oil is ready.',
          'Add the rest of the popcorn kernels in an even layer. Cover the pot and remove from heat for 30 seconds.',
          'Return the pot to the heat. The kernels will begin to pop. Gently shake the pot occasionally to prevent burning.',
          'Once the popping slows to several seconds between pops, remove the pot from the heat.',
          'Pour the popcorn into a large serving bowl.',
          'Set out the melted butter and other toppings in small bowls so guests can customize their own popcorn. Enjoy immediately.'
        ],
        servings: 4
      },
      {
        title: 'Nachos',
        description: 'Loaded nachos with cheese and toppings.',
        ingredients: ['1 bag tortilla chips', '2 cups cheese', '1 cup beans', '1/2 cup salsa', '1/4 cup sour cream', '1/4 cup guacamole'],
        instructions: [
          'Layer chips on baking sheet',
          'Add cheese and beans',
          'Bake until cheese melts',
          'Top with salsa, sour cream, and guacamole'
        ],
        servings: 4
      },
      {
        title: 'Buffalo Wings',
        description: 'Spicy buffalo wings with ranch dip.',
        ingredients: ['2 lbs chicken wings', '1/2 cup hot sauce', '1/4 cup butter', '1/4 cup ranch dressing', 'Celery sticks'],
        instructions: [
          'Bake wings until crispy',
          'Mix hot sauce and butter',
          'Toss wings in sauce',
          'Serve with ranch and celery'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Pizza Rolls', 'Chips and Dip', 'Candy Mix', 'Soda'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'game-night-snacks',
    name: 'Game Night Snacks',
    description: 'Finger foods perfect for game night',
    time: '45 min',
    difficulty: 'Easy',
    cost: '$4 per person',
    rating: 4,
    image: '🎮',
    mealType: 'snack',
    courses: ['Finger Foods', 'Dips', 'Drinks'],
    recipes: [
      {
        title: 'Sliders',
        description: 'Mini burgers perfect for snacking.',
        ingredients: ['12 slider buns', '1 lb ground beef', '6 slices cheese', '1 onion', '1 tomato', 'Lettuce', 'Condiments'],
        instructions: [
          'Form small burger patties',
          'Cook on grill or stovetop',
          'Assemble with cheese and toppings',
          'Serve with condiments'
        ],
        servings: 4
      },
      {
        title: 'Pizza Bites',
        description: 'Quick pizza bites with marinara.',
        ingredients: ['1 package pizza dough', '1 cup marinara sauce', '1 cup mozzarella cheese', '1/4 cup pepperoni', 'Italian seasoning'],
        instructions: [
          'Cut pizza dough into small pieces',
          'Top with sauce, cheese, and pepperoni',
          'Bake until golden brown',
          'Serve with extra marinara'
        ],
        servings: 4
      },
      {
        title: 'Queso Dip',
        description: 'Creamy cheese dip with chips.',
        ingredients: ['1 lb Velveeta cheese', '1 can Rotel tomatoes', '1/2 cup milk', '1/4 cup jalapeños', 'Tortilla chips'],
        instructions: [
          'Cube cheese and add to slow cooker',
          'Add tomatoes and milk',
          'Cook until melted and smooth',
          'Serve with tortilla chips'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Soft Pretzels', 'Wings', 'Chips', 'Beer'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  // DESSERT PARTIES
  {
    id: 'dessert-extravaganza',
    name: 'Dessert Extravaganza',
    description: 'Sweet treats for dessert lovers',
    time: '1.5 hours',
    difficulty: 'Medium',
    cost: '$4 per person',
    rating: 5,
    image: '🍰',
    mealType: 'dessert',
    courses: ['Small Bites', 'Main Dessert', 'Drinks'],
    recipes: [
      {
        title: 'Chocolate Truffles',
        description: 'Rich chocolate truffles with cocoa powder.',
        ingredients: ['8 oz dark chocolate', '1/2 cup heavy cream', '2 tbsp butter', '1/4 cup cocoa powder', '1/4 cup chopped nuts'],
        instructions: [
          'Melt chocolate with cream and butter',
          'Chill until firm',
          'Roll into balls',
          'Coat with cocoa powder and nuts'
        ],
        servings: 4
      },
      {
        title: 'Cheesecake',
        description: 'Creamy New York style cheesecake.',
        ingredients: ['2 cups graham crackers', '1/2 cup butter', '16 oz cream cheese', '1 cup sugar', '3 eggs', '1 tsp vanilla'],
        instructions: [
          'Make crust with graham crackers and butter',
          'Beat cream cheese with sugar',
          'Add eggs and vanilla',
          'Bake until set'
        ],
        servings: 4
      },
      {
        title: 'Fruit Tart',
        description: 'Fresh fruit tart with custard filling.',
        ingredients: ['1 pie crust', '1 cup custard', '2 cups mixed berries', '1/4 cup apricot jam'],
        instructions: [
          'Bake pie crust until golden',
          'Fill with custard',
          'Arrange fresh fruit on top',
          'Glaze with apricot jam'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Brownies', 'Ice Cream', 'Cookies', 'Hot Chocolate'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'chocolate-festival',
    name: 'Chocolate Festival',
    description: 'All things chocolate for chocolate lovers',
    time: '2 hours',
    difficulty: 'Medium',
    cost: '$5 per person',
    rating: 5,
    image: '🍫',
    mealType: 'dessert',
    courses: ['Chocolate Bites', 'Main Dessert', 'Drinks'],
    recipes: [
      {
        title: 'Chocolate Covered Strawberries',
        description: 'Fresh strawberries dipped in chocolate.',
        ingredients: ['1 lb strawberries', '8 oz dark chocolate', '8 oz white chocolate', '1/4 cup sprinkles', '1/4 cup chopped nuts'],
        instructions: [
          'Wash and dry strawberries',
          'Melt chocolate in double boiler',
          'Dip strawberries in chocolate',
          'Decorate with sprinkles and nuts'
        ],
        servings: 4
      },
      {
        title: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center.',
        ingredients: ['4 oz dark chocolate', '1/2 cup butter', '2 eggs', '2 egg yolks', '1/4 cup sugar', '1/4 cup flour', 'Butter for ramekins'],
        instructions: [
          'Melt chocolate and butter',
          'Whisk eggs and sugar',
          'Fold in chocolate and flour',
          'Bake in ramekins for 12 minutes'
        ],
        servings: 4
      },
      {
        title: 'Chocolate Mousse',
        description: 'Light and fluffy chocolate mousse.',
        ingredients: ['6 oz dark chocolate', '3 eggs', '1/4 cup sugar', '1 cup heavy cream', '1 tsp vanilla'],
        instructions: [
          'Melt chocolate and let cool',
          'Separate eggs and beat whites',
          'Whip cream with vanilla',
          'Fold all ingredients together'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Chocolate Chip Cookies', 'Hot Chocolate', 'Chocolate Ice Cream', 'Chocolate Fondue'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  // COCKTAIL PARTIES
  {
    id: 'cocktail-hour',
    name: 'Cocktail Hour',
    description: 'Sophisticated cocktails with appetizers',
    time: '1 hour',
    difficulty: 'Medium',
    cost: '$7 per person',
    rating: 4,
    image: '🍹',
    mealType: 'cocktail',
    courses: ['Cocktails', 'Appetizers'],
    recipes: [
      {
        title: 'Signature Cocktails',
        description: 'Three signature cocktails for the party.',
        ingredients: ['1 bottle vodka', '1 bottle gin', '1 bottle rum', '1 cup lime juice', '1 cup simple syrup', '1 cup cranberry juice', 'Fresh herbs'],
        instructions: [
          'Prepare Moscow Mule: vodka, lime, ginger beer',
          'Prepare Gin Fizz: gin, lemon, simple syrup, soda',
          'Prepare Rum Punch: rum, fruit juices, grenadine'
        ],
        servings: 4
      },
      {
        title: 'Bruschetta',
        description: 'Classic Italian appetizer.',
        ingredients: ['1 baguette', '4 tomatoes', '1/4 cup basil', '2 tbsp olive oil', '1 clove garlic', 'Balsamic glaze'],
        instructions: [
          'Toast baguette slices',
          'Mix diced tomatoes with basil and olive oil',
          'Top bread with mixture',
          'Drizzle with balsamic glaze'
        ],
        servings: 4
      },
      {
        title: 'Stuffed Mushrooms',
        description: 'Savory stuffed mushrooms with cheese.',
        ingredients: ['16 mushrooms', '1/2 cup cream cheese', '1/4 cup parmesan', '2 cloves garlic', '1/4 cup breadcrumbs', 'Fresh herbs'],
        instructions: [
          'Remove mushroom stems',
          'Mix cream cheese, parmesan, garlic, and herbs',
          'Stuff mushrooms with mixture',
          'Top with breadcrumbs and bake'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Cheese Board', 'Olives', 'Nuts', 'Chocolate Covered Strawberries'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'tiki-party',
    name: 'Tiki Party',
    description: 'Tropical cocktails and island vibes',
    time: '1.5 hours',
    difficulty: 'Medium',
    cost: '$8 per person',
    rating: 4,
    image: '🏝️',
    mealType: 'cocktail',
    courses: ['Tropical Drinks', 'Island Appetizers'],
    recipes: [
      {
        title: 'Tiki Cocktails',
        description: 'Classic tiki drinks with tropical flavors.',
        ingredients: ['1 bottle rum', '1 bottle coconut rum', '1 cup pineapple juice', '1 cup orange juice', '1 cup coconut cream', '1 cup grenadine', 'Fresh fruit'],
        instructions: [
          'Prepare Mai Tai: rum, lime, orange liqueur, orgeat',
          'Prepare Piña Colada: coconut rum, pineapple juice, coconut cream',
          'Prepare Zombie: multiple rums, fruit juices, grenadine'
        ],
        servings: 4
      },
      {
        title: 'Hawaiian Pizza Bites',
        description: 'Mini Hawaiian pizza bites.',
        ingredients: ['1 package pizza dough', '1 cup marinara sauce', '1 cup mozzarella cheese', '1/2 cup ham', '1/2 cup pineapple', 'Italian seasoning'],
        instructions: [
          'Cut pizza dough into small pieces',
          'Top with sauce, cheese, ham, and pineapple',
          'Bake until golden brown',
          'Serve hot'
        ],
        servings: 4
      },
      {
        title: 'Coconut Shrimp',
        description: 'Crispy coconut shrimp with sweet chili sauce.',
        ingredients: ['1 lb shrimp', '1 cup shredded coconut', '1/2 cup breadcrumbs', '2 eggs', '1/2 cup flour', 'Oil for frying', 'Sweet chili sauce'],
        instructions: [
          'Peel and devein shrimp',
          'Mix coconut and breadcrumbs',
          'Coat shrimp in flour, egg, then coconut mixture',
          'Fry until golden brown',
          'Serve with sweet chili sauce'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Pineapple Salsa', 'Tropical Fruit', 'Coconut Rice', 'Macadamia Nuts'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  // PREGAME PARTIES
  {
    id: 'pregame-party',
    name: 'Pregame Party',
    description: 'Quick and easy snacks for pregame festivities',
    time: '45 min',
    difficulty: 'Easy',
    cost: '$4 per person',
    rating: 4,
    image: '🍾',
    mealType: 'pregame',
    courses: ['Drinks', 'Snacks'],
    recipes: [
      {
        title: 'Beer and Wine Selection',
        description: 'Variety of beers and wines for the party.',
        ingredients: ['6 pack craft beer', '2 bottles wine', '1 bottle prosecco', 'Ice', 'Wine glasses', 'Beer mugs'],
        instructions: [
          'Chill beer and white wine',
          'Set up wine glasses and beer mugs',
          'Display drinks in ice bucket',
          'Let guests serve themselves'
        ],
        servings: 4
      },
      {
        title: 'Sliders',
        description: 'Mini burgers perfect for snacking.',
        ingredients: ['12 slider buns', '1 lb ground beef', '6 slices cheese', '1 onion', '1 tomato', 'Lettuce', 'Condiments'],
        instructions: [
          'Form small burger patties',
          'Cook on grill or stovetop',
          'Assemble with cheese and toppings',
          'Serve with condiments'
        ],
        servings: 4
      },
      {
        title: 'Pizza Bites',
        description: 'Quick pizza bites with marinara.',
        ingredients: ['1 package pizza dough', '1 cup marinara sauce', '1 cup mozzarella cheese', '1/4 cup pepperoni', 'Italian seasoning'],
        instructions: [
          'Cut pizza dough into small pieces',
          'Top with sauce, cheese, and pepperoni',
          'Bake until golden brown',
          'Serve with extra marinara'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Chips and Dip', 'Wings', 'Nachos', 'Soft Pretzels'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'tailgate-party',
    name: 'Tailgate Party',
    description: 'Game day favorites for the ultimate tailgate',
    time: '1 hour',
    difficulty: 'Easy',
    cost: '$5 per person',
    rating: 4,
    image: '🏈',
    mealType: 'pregame',
    courses: ['Drinks', 'Game Day Food'],
    recipes: [
      {
        title: 'Beer and Soda',
        description: 'Classic tailgate beverages.',
        ingredients: ['12 pack beer', '12 pack soda', '1 bag ice', 'Cooler', 'Cups'],
        instructions: [
          'Fill cooler with ice',
          'Add beer and soda',
          'Set up cups and bottle opener',
          'Keep drinks cold throughout the party'
        ],
        servings: 4
      },
      {
        title: 'Hot Dogs',
        description: 'Classic hot dogs with all the toppings.',
        ingredients: ['8 hot dogs', '8 hot dog buns', '1 cup sauerkraut', '1 cup relish', '1 cup mustard', '1 cup ketchup', '1 cup onions'],
        instructions: [
          'Grill or boil hot dogs',
          'Toast buns on grill',
          'Set up topping bar',
          'Let guests customize their dogs'
        ],
        servings: 4
      },
      {
        title: 'Potato Chips and Dip',
        description: 'Classic chips with homemade dip.',
        ingredients: ['2 bags potato chips', '1 cup sour cream', '1/2 cup mayo', '1 packet ranch seasoning', '1/4 cup chives'],
        instructions: [
          'Mix sour cream, mayo, and ranch seasoning',
          'Chop chives and stir in',
          'Chill for 30 minutes',
          'Serve with potato chips'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Burgers', 'Corn on the Cob', 'Baked Beans', 'Apple Pie'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'fast-food-fiesta',
    name: 'Fast Food Fiesta',
    description: 'All your favorite fast food dupes in one party',
    time: '1.5 hours',
    difficulty: 'Medium',
    cost: '$6 per person',
    rating: 5,
    image: '🍔',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Chick-fil-A Nuggets',
        description: 'Bite-sized, juicy nuggets just like CFA.',
        ingredients: ['1 lb boneless, skinless chicken breast, cut into 1-inch chunks', '1/2 cup dill pickle juice', '1 egg', '1/4 cup milk', '1 cup all-purpose flour', '2 tbsp powdered sugar', '1 tsp paprika', '1 tsp salt', '1/2 tsp black pepper', 'Peanut oil for frying'],
        instructions: [
          'Marinate the chicken chunks in pickle juice for at least 30 minutes in the refrigerator.',
          'In a small bowl, whisk together the egg and milk.',
          'In a separate shallow dish, combine the flour, powdered sugar, paprika, salt, and pepper.',
          'Heat 2-3 inches of peanut oil in a deep pot or skillet to 350°F (175°C).',
          'Drain the chicken from the pickle juice. Dip each piece into the egg mixture, then dredge in the flour mixture to coat completely.',
          'Fry the chicken in batches for 3-4 minutes, or until golden brown and cooked through. Do not overcrowd the pot.',
          'Remove with a slotted spoon and drain on a wire rack.'
        ],
        servings: 4
      },
      {
        title: 'Chick-fil-A Chicken Sandwich',
        description: 'The iconic crispy chicken sandwich marinated in pickle juice.',
        ingredients: ['2 chicken breasts', '1 cup dill pickle juice', '1/2 cup milk', '1 egg', '1 1/4 cups all-purpose flour', '2 tbsp powdered sugar', '2 tsp paprika', '1 tsp salt', '1/2 tsp black pepper', '4 hamburger buns', '2 tbsp melted butter', 'Pickle slices', 'Peanut oil for frying'],
        instructions: [
          'Pound chicken breasts to an even thickness. Marinate in pickle juice for 30 minutes.',
          'In a bowl, whisk milk and egg. In another bowl, mix flour and spices.',
          'Heat peanut oil to 325°F (165°C).',
          'Dip chicken in milk/egg wash, then dredge in flour mixture.',
          'Fry for 3-5 minutes per side, until golden and cooked through.',
          'Brush toasted buns with melted butter. Assemble sandwich with chicken and pickles.'
        ],
        servings: 4
      },
      {
        title: 'Mac & Cheese',
        description: 'Creamy and cheesy like CFA\'s.',
        ingredients: ['1 lb elbow macaroni', '4 tbsp butter', '1/4 cup all-purpose flour', '2 1/2 cups milk', '1 cup heavy cream', '2 cups shredded cheddar cheese', '1 cup shredded parmesan cheese', 'Salt and pepper to taste'],
        instructions: [
          'Cook macaroni according to package directions. Drain and set aside.',
          'In a large pot, melt butter over medium heat. Whisk in flour and cook for 1 minute.',
          'Gradually whisk in milk and heavy cream until smooth. Bring to a simmer and cook for 2-3 minutes, until thickened.',
          'Reduce heat to low and stir in the cheeses until melted and smooth. Season with salt and pepper.',
          'Add the cooked macaroni and stir to coat. Serve immediately.'
        ],
        servings: 4
      },
      {
        title: 'Big Mac',
        description: 'Double-stacked burger with "special sauce".',
        ingredients: ['1 lb ground beef, divided into 8 thin patties', '8 slices American cheese', '4 sesame seed hamburger buns (with a top and bottom half, plus an extra bottom bun for the middle)', 'Shredded iceberg lettuce', 'Finely chopped onion', 'Dill pickle slices', 'Special Sauce: 1/2 cup mayonnaise, 2 tbsp French dressing, 4 tsp sweet pickle relish, 1 tbsp minced white onion, 1 tsp sugar, 1 tsp white vinegar, pinch of salt'],
        instructions: [
          'To make the special sauce, combine all sauce ingredients in a bowl and mix well. Set aside.',
          'Cook the beef patties on a griddle or skillet over medium-high heat for 1-2 minutes per side.',
          'To assemble each Big Mac: Toast the bun halves.',
          'On the bottom bun, add special sauce, lettuce, onion, pickles, a cheese slice, and a beef patty.',
          'Place the extra "middle" bun on top. Add more special sauce, lettuce, onion, pickles, another cheese slice, and the second beef patty.',
          'Top with the sesame seed bun. Repeat for the remaining burgers.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['French Fries', 'Onion Rings', 'Milkshakes', 'Apple Pie'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'coffee-shop-brunch',
    name: 'Coffee Shop Brunch',
    description: 'Starbucks-inspired brunch with coffee drinks',
    time: '1 hour',
    difficulty: 'Easy',
    cost: '$5 per person',
    rating: 4,
    image: '☕',
    mealType: 'brunch',
    courses: ['Drinks', 'Main Course', 'Side Dish'],
    recipes: [
      {
        title: 'Starbucks Pink Drink',
        description: 'Refreshing strawberry coconut drink.',
        ingredients: ['1 cup coconut milk', '1/2 cup Tazo Iced Passion Tea concentrate or strong-brewed passion tea, cooled', '1/4 cup white grape juice', '1/4 cup freeze-dried strawberries', '1 tbsp agave syrup (optional)', 'Ice'],
        instructions: [
          'Fill a large glass with ice.',
          'In a shaker or jar, combine the coconut milk, passion tea concentrate, and white grape juice. Shake well.',
          'Pour the mixture over the ice.',
          'Stir in the freeze-dried strawberries and agave, if using. Serve immediately.'
        ],
        servings: 4
      },
      {
        title: 'Starbucks Pumpkin Spice Latte',
        description: 'Classic fall favorite with pumpkin spice.',
        ingredients: ['2 cups milk', '1/4 cup pumpkin puree', '2 tbsp sugar', '1 tsp pumpkin pie spice', '1/2 cup strong brewed coffee or 2 shots of espresso', 'Whipped cream for topping'],
        instructions: [
          'In a saucepan, heat the milk, pumpkin puree, and sugar over medium heat. Whisk until hot, but do not boil.',
          'Remove from heat and stir in the pumpkin pie spice and coffee.',
          'Pour into mugs and top with whipped cream.',
          'Sprinkle a little extra pumpkin pie spice on top of the whipped cream before serving.'
        ],
        servings: 4
      },
      {
        title: 'Avocado Toast',
        description: 'Classic avocado toast with protein boost.',
        ingredients: ['2 slices whole grain bread', '1 ripe avocado', '2 eggs', '1/4 cup cherry tomatoes, halved', '1 tbsp olive oil', 'Red pepper flakes, salt, and pepper to taste'],
        instructions: [
          'Toast the bread to your desired crispness.',
          'While the bread is toasting, mash the avocado in a small bowl. Season with salt and pepper.',
          'Heat olive oil in a non-stick skillet over medium heat. Fry or poach the eggs to your preference.',
          'Spread the mashed avocado evenly on the toasted bread.',
          'Top with the cooked eggs and halved cherry tomatoes.',
          'Drizzle with a little more olive oil and sprinkle with red pepper flakes.'
        ],
        servings: 4
      },
      {
        title: 'Protein French Toast',
        description: 'Transform bread into a protein-packed breakfast.',
        ingredients: ['2 slices bread', '1 egg', '1/4 cup milk', '1 scoop vanilla protein powder', '1 tbsp butter', '1/4 cup mixed berries for topping', '1 tbsp maple syrup', 'Cinnamon to taste'],
        instructions: [
          'In a shallow dish, whisk together the egg, milk, protein powder, and a pinch of cinnamon.',
          'Melt the butter in a non-stick skillet over medium heat.',
          'Dip each slice of bread into the egg mixture, ensuring it\'s coated on both sides but not overly saturated.',
          'Cook the bread for 2-3 minutes per side, until golden brown and cooked through.',
          'Serve warm, topped with fresh berries and a drizzle of maple syrup.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Scones', 'Muffins', 'Yogurt Parfait', 'Coffee Cake'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'student-budget-party',
    name: 'Student Budget Party',
    description: 'Delicious party food that won\'t break the bank',
    time: '1 hour',
    difficulty: 'Easy',
    cost: '$3 per person',
    rating: 4,
    image: '💰',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Bean Burrito',
        description: 'Protein-rich bean burrito with vegetables.',
        ingredients: ['1/2 cup canned black beans, rinsed', '1 large tortilla', '1/4 cup shredded cheddar cheese', '1/4 cup diced bell pepper', '1/4 cup diced onion', '2 tbsp Greek yogurt or sour cream', '1 tbsp salsa', '1 tsp olive oil', 'Salt and pepper to taste'],
        instructions: [
          'Heat the olive oil in a small pan over medium heat.',
          'Sauté the onion and bell pepper for 3-4 minutes, until softened.',
          'Add the black beans to the pan and cook for another 2 minutes, until warmed through. Mash lightly with a fork if desired.',
          'Warm the tortilla in a dry skillet or microwave for about 20-30 seconds.',
          'Layer the bean mixture, cheese, Greek yogurt, and salsa down the center of the tortilla.',
          'Fold in the sides and roll up the burrito tightly. Serve immediately.'
        ],
        servings: 4
      },
      {
        title: 'Protein Rice Bowl',
        description: 'Build-your-own protein rice bowl.',
        ingredients: ['1 cup cooked rice', '1/2 cup canned black beans, rinsed', '1/4 cup frozen corn, thawed', '1/4 cup diced tomatoes', '1/4 avocado, sliced', '2 tbsp Greek yogurt', '1 tbsp lime juice', 'Cilantro for garnish', 'Salt and pepper to taste'],
        instructions: [
          'Reheat the cooked rice in a microwave or on the stovetop.',
          'Assemble the bowl by layering the warm rice as the base.',
          'Top the rice with black beans, corn, diced tomatoes, and sliced avocado.',
          'In a small bowl, mix the Greek yogurt with lime juice to create a creamy dressing. Drizzle over the bowl.',
          'Garnish with fresh cilantro and season with salt and pepper to taste.'
        ],
        servings: 4
      },
      {
        title: 'Vegetable Stir-Fry',
        description: 'Quick and healthy vegetable stir-fry.',
        ingredients: ['2 cups mixed frozen vegetables', '2 tbsp soy sauce', '1 tbsp sesame oil', '2 green onions, chopped', '1 clove garlic, minced', '1 tbsp fresh ginger, grated', '1 tbsp cornstarch', '1/4 cup vegetable broth', '1 cup cooked rice or noodles for serving'],
        instructions: [
          'Heat the sesame oil in a large skillet or wok over medium-high heat.',
          'Add the garlic, ginger, and the white parts of the green onions. Stir-fry for 30 seconds until fragrant.',
          'Add the frozen vegetables and stir-fry for 5-7 minutes, until tender-crisp.',
          'In a small bowl, whisk together the cornstarch and vegetable broth until smooth. Pour into the skillet along with the soy sauce.',
          'Stir continuously until the sauce thickens, about 1-2 minutes.',
          'Garnish with the remaining green onions and serve hot over rice or noodles.'
        ],
        servings: 4
      },
      {
        title: 'Protein Bread Pudding',
        description: 'Transform stale bread into a protein-rich dessert.',
        ingredients: ['4 slices stale bread, cubed', '2 eggs', '1 cup milk', '1 scoop vanilla protein powder', '1/4 cup berries', '2 tbsp honey or maple syrup', '1 tsp cinnamon', '1 tbsp butter, melted'],
        instructions: [
          'Preheat oven to 350°F (175°C). Lightly grease a small baking dish.',
          'In a bowl, whisk together the eggs, milk, protein powder, and cinnamon.',
          'Add the bread cubes to the egg mixture and let them soak for 5-10 minutes, pressing down gently to submerge.',
          'Pour the mixture into the prepared baking dish.',
          'Top with berries and drizzle with honey or maple syrup.',
          'Bake for 20-25 minutes, or until the pudding is set and the top is golden brown.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Pasta Salad', 'Bean Soup', 'Rice Pudding', 'Fruit Salad'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'healthy-living-party',
    name: 'Healthy Living Party',
    description: 'Nutritious and delicious party food',
    time: '1.5 hours',
    difficulty: 'Medium',
    cost: '$7 per person',
    rating: 4,
    image: '🥗',
    mealType: 'dinner',
    courses: ['Appetizer', 'Main Course', 'Side Dish', 'Dessert'],
    recipes: [
      {
        title: 'Bean Salad',
        description: 'Protein-rich bean salad with vegetables.',
        ingredients: ['1 can (15 oz) mixed beans, rinsed', '1/2 cup diced bell pepper', '1/2 cup diced cucumber', '1/2 cup diced tomato', '1/4 cup diced red onion', 'Dressing: 3 tbsp olive oil, 2 tbsp lemon juice, 1 tbsp balsamic vinegar, salt and pepper'],
        instructions: [
          'In a large bowl, combine the rinsed mixed beans, bell pepper, cucumber, tomato, and red onion.',
          'In a small jar or bowl, whisk together the olive oil, lemon juice, balsamic vinegar, salt, and pepper to create the dressing.',
          'Pour the dressing over the bean and vegetable mixture and toss gently to combine.',
          'For best flavor, let the salad marinate in the refrigerator for at least 30 minutes before serving.'
        ],
        servings: 4
      },
      {
        title: 'Protein Omelette',
        description: 'Transform eggs into a protein-packed omelette.',
        ingredients: ['3 large eggs', '1/4 cup diced bell pepper', '1/4 cup diced onion', '1/4 cup shredded cheese', '1 tsp olive oil', '1 tbsp milk', 'Salt and pepper to taste'],
        instructions: [
          'In a small bowl, whisk the eggs with milk, salt, and pepper until light and frothy.',
          'Heat the olive oil in a non-stick skillet over medium heat. Add the onion and bell pepper and sauté for 2-3 minutes until softened.',
          'Pour the egg mixture over the vegetables in the skillet. Let it cook undisturbed for a minute until the edges start to set.',
          'Gently lift the cooked edges with a spatula and tilt the pan to allow the uncooked egg to flow underneath.',
          'When the omelette is nearly set, sprinkle the cheese over one half.',
          'Fold the other half of the omelette over the cheese and cook for another minute, until the cheese is melted. Slide onto a plate and serve immediately.'
        ],
        servings: 4
      },
      {
        title: 'Vegetable Soup',
        description: 'Hearty vegetable soup with protein.',
        ingredients: ['2 cups vegetable broth', '1 cup mixed frozen vegetables', '1/4 cup diced onion', '1 clove garlic, minced', '1 tbsp olive oil', '1 tsp Italian seasoning', '1/2 cup canned beans or lentils, rinsed', 'Salt and pepper to taste'],
        instructions: [
          'Heat the olive oil in a medium pot or Dutch oven over medium heat.',
          'Add the onion and garlic and sauté for 3-4 minutes, until the onion is translucent.',
          'Pour in the vegetable broth and bring to a simmer.',
          'Add the mixed vegetables, beans or lentils, and Italian seasoning. Simmer for 10-15 minutes, until the vegetables are tender.',
          'Season with salt and pepper to taste before serving.'
        ],
        servings: 4
      },
      {
        title: 'Chocolate Mousse',
        description: 'Light and fluffy chocolate mousse.',
        ingredients: ['6 oz dark chocolate, chopped', '3 large eggs, separated', '1/4 cup granulated sugar', '1 cup heavy cream', '1 tsp vanilla extract'],
        instructions: [
          'Melt the chopped dark chocolate in a heatproof bowl set over a saucepan of simmering water (or in the microwave in 30-second intervals). Let it cool slightly.',
          'In a clean bowl, beat the egg whites with an electric mixer until soft peaks form. Gradually add the sugar and continue to beat until stiff, glossy peaks form.',
          'In another bowl, whip the heavy cream and vanilla extract until stiff peaks form.',
          'Gently fold the egg yolks into the slightly cooled melted chocolate.',
          'Fold one-third of the whipped cream into the chocolate mixture to lighten it, then gently fold in the remaining cream.',
          'Carefully fold in the beaten egg whites in two batches until just combined. Be careful not to overmix and deflate the mousse.',
          'Divide the mousse among serving glasses and refrigerate for at least 2 hours to set. Serve chilled.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Quinoa Bowl', 'Greek Yogurt', 'Nuts and Seeds', 'Fresh Fruit'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'late-night-study-snacks',
    name: 'Late Night Study Snacks',
    description: 'Perfect snacks for late-night study sessions',
    time: '30 min',
    difficulty: 'Easy',
    cost: '$3 per person',
    rating: 4,
    image: '📚',
    mealType: 'snack',
    courses: ['Snacks', 'Drinks'],
    recipes: [
      {
        title: 'Popcorn Bar',
        description: 'Build-your-own popcorn with toppings.',
        ingredients: ['1/2 cup popcorn kernels', '2 tbsp coconut oil or vegetable oil', 'Toppings: 1/2 cup melted butter, 1/4 cup grated parmesan cheese, 1/4 cup nutritional yeast, 1/4 cup caramel sauce, salt'],
        instructions: [
          'Heat the oil in a large pot with a lid over medium-high heat. Add 2-3 popcorn kernels; when they pop, the oil is ready.',
          'Add the rest of the popcorn kernels in an even layer. Cover the pot and remove from heat for 30 seconds.',
          'Return the pot to the heat. The kernels will begin to pop. Gently shake the pot occasionally to prevent burning.',
          'Once the popping slows to several seconds between pops, remove the pot from the heat.',
          'Pour the popcorn into a large serving bowl.',
          'Set out the melted butter and other toppings in small bowls so guests can customize their own popcorn. Enjoy immediately.'
        ],
        servings: 4
      },
      {
        title: 'Starbucks Caramel Frappuccino',
        description: 'Creamy caramel coffee drink.',
        ingredients: ['1 cup strong brewed coffee, chilled', '1/2 cup milk', '3 tbsp caramel syrup', '2 tbsp sugar', '1 1/2 cups ice', 'Whipped cream and caramel drizzle for topping'],
        instructions: [
          'In a blender, combine the chilled coffee, milk, caramel syrup, and sugar.',
          'Blend on low until the sugar is dissolved.',
          'Add the ice and blend on high until the mixture is smooth and thick.',
          'Pour into tall glasses.',
          'Top with a generous amount of whipped cream and a drizzle of caramel sauce before serving.'
        ],
        servings: 4
      },
      {
        title: 'Protein French Toast',
        description: 'Transform bread into a protein-packed breakfast.',
        ingredients: ['2 slices bread', '1 egg', '1/4 cup milk', '1 scoop vanilla protein powder', '1 tbsp butter', '1/4 cup mixed berries for topping', '1 tbsp maple syrup', 'Cinnamon to taste'],
        instructions: [
          'In a shallow dish, whisk together the egg, milk, protein powder, and a pinch of cinnamon.',
          'Melt the butter in a non-stick skillet over medium heat.',
          'Dip each slice of bread into the egg mixture, ensuring it\'s coated on both sides but not overly saturated.',
          'Cook the bread for 2-3 minutes per side, until golden brown and cooked through.',
          'Serve warm, topped with fresh berries and a drizzle of maple syrup.'
        ],
        servings: 4
      }
    ],
    baseServings: 4,
    additionalDishes: ['Trail Mix', 'Energy Balls', 'Hot Chocolate', 'Tea'],
    dietaryTags: ['Vegetarian', 'Gluten-Free']
  }
]; 