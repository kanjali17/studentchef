import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Container,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

const MainPage = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const navigate = useNavigate();

  const features = [
    {
      icon: '🍔',
      title: 'Restaurant Dupes',
      description: 'Make your favorite restaurant dishes at home for a fraction of the price!',
      examples: ['Chick-fil-A', "McDonald's", 'Chipotle'],
      color: 'orange',
      to: '/restaurant-dupes',
      badge: 'Most Popular',
    },
    {
      icon: '🥕',
      title: 'Ingredient Upgrades',
      description: 'Transform basic ingredients into gourmet meals that will impress everyone!',
      examples: ['Gourmet Ramen', 'Mac & Cheese', 'Rice Bowl'],
      color: 'green',
      to: '/ingredient-upgrades',
      badge: 'Budget Friendly',
    },
    {
      icon: '🥤',
      title: 'Drink Dupes',
      description: 'Skip the expensive coffee shops and make your favorite drinks at home!',
      examples: ['Starbucks PSL', 'Smoothie King', 'Bubble Tea'],
      color: 'blue',
      to: '/drink-dupes',
      badge: 'Caffeine Fix',
    },
    {
      icon: '🔥',
      title: 'Cooking Methods',
      description: 'Learn to cook with whatever equipment you have - no fancy kitchen needed!',
      examples: ['Air Fryer', 'Microwave', 'No-Cook'],
      color: 'red',
      to: '/cooking-method',
      badge: 'Equipment Free',
    },
    {
      icon: '👥',
      title: 'Party Planning',
      description: 'Host the best parties with our easy-to-scale recipes and portion guides!',
      examples: ['Guest Calculator', 'Dietary Preferences', 'Portions'],
      color: 'purple',
      to: '/party-planning',
      badge: 'Social Life',
    },
    {
      icon: '🛒',
      title: 'Shopping List',
      description: 'Never forget ingredients again with our smart shopping list generator!',
      examples: ['Auto-Generate', 'Budget Tracking', 'Meal Planning'],
      color: 'teal',
      to: '/shopping-list',
      badge: 'Smart Shopping',
    },
  ];

  return (
    <Box minH="100vh" bg="brand.50" py={8}>
      <Container maxW="1200px">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="black"
                bgGradient="linear(to-r, purple.600, blue.600, pink.600)"
                bgClip="text"
                mb={4}
              >
                What's Cooking Today? 🍳
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Choose your adventure and let's make some magic happen in the kitchen!
              </Text>
            </motion.div>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {features.map((feature, index) => (
              <MotionCard
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                overflow="hidden"
                whileHover={{ y: -5, boxShadow: "xl" }}
                cursor="pointer"
                onClick={() => navigate(feature.to)}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${feature.title}`}
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    {/* Badge */}
                    {feature.badge && (
                      <Badge
                        colorScheme={feature.color}
                        variant="solid"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        alignSelf="start"
                      >
                        {feature.badge}
                      </Badge>
                    )}
                    
                    {/* Icon */}
                    <Box
                      p={4}
                      borderRadius="full"
                      bg={`${feature.color}.100`}
                      color={`${feature.color}.600`}
                      fontSize="3xl"
                      alignSelf="center"
                    >
                      {feature.icon}
                    </Box>
                    
                    {/* Content */}
                    <VStack spacing={4} align="start" w="full">
                      <Heading size="lg" textAlign="center" w="full">
                        {feature.title}
                      </Heading>
                      <Text color="gray.600" textAlign="center">
                        {feature.description}
                      </Text>
                      
                      {/* Examples */}
                      <VStack spacing={2} align="start" w="full">
                        <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                          Examples:
                        </Text>
                        {feature.examples.map((example) => (
                          <HStack key={example} spacing={2}>
                            <Text color={`${feature.color}.400`} fontSize="sm">⭐</Text>
                            <Text fontSize="sm" color="gray.500">
                              {example}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </VStack>
                </CardBody>
              </MotionCard>
            ))}
          </SimpleGrid>

          {/* Bottom CTA */}
          <VStack spacing={6} textAlign="center" py={8}>
            <Text fontSize="lg" color="gray.600">
              Can't decide? Start with Restaurant Dupes - it's our most popular feature! 🍔
            </Text>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                as="button"
                px={6}
                py={3}
                bg="purple.500"
                color="white"
                borderRadius="full"
                fontWeight="semibold"
                onClick={() => navigate('/restaurant-dupes')}
                _hover={{ bg: 'purple.600' }}
              >
                🍔 Try Restaurant Dupes
              </Box>
            </motion.div>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default MainPage; 