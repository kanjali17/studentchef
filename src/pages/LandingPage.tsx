import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Card,
  CardBody,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionButton = motion(Button);

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    },
    {
      icon: '🥕',
      title: 'Ingredient Upgrades',
      description: 'Transform basic ingredients into gourmet meals that will impress everyone!',
      examples: ['Gourmet Ramen', 'Mac & Cheese', 'Rice Bowl'],
      color: 'green',
    },
    {
      icon: '🥤',
      title: 'Drink Dupes',
      description: 'Skip the expensive coffee shops and make your favorite drinks at home!',
      examples: ['Starbucks PSL', 'Smoothie King', 'Bubble Tea'],
      color: 'blue',
      to: '/drink-dupes',
    },
    {
      icon: '🔥',
      title: 'Cooking Methods',
      description: 'Learn to cook with whatever equipment you have - no fancy kitchen needed!',
      examples: ['Air Fryer', 'Microwave', 'No-Cook'],
      color: 'red',
    },
    {
      icon: '👥',
      title: 'Party Planning',
      description: 'Host the best parties with our easy-to-scale recipes and portion guides!',
      examples: ['Guest Calculator', 'Dietary Preferences', 'Portions'],
      color: 'purple',
      to: '/party-planning',
    },
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Save Money',
      description: 'Stop spending $15 on a sandwich when you can make it for $3 at home! 💰',
    },
    {
      icon: '⚡',
      title: 'Quick & Easy',
      description: 'Most recipes ready in under 15 minutes. Perfect for busy college life! ⚡',
    },
    {
      icon: '💪',
      title: 'Healthier Options',
      description: 'All recipes include healthy upgrades and alternatives. Your body will thank you! 💪',
    },
    {
      icon: '🔥',
      title: 'Actually Tasty',
      description: 'No more bland dorm food. These recipes are fire and will impress your friends! 🔥',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'This app literally saved me $200 this semester. The Chick-fil-A dupe is spot on!',
      name: 'Sarah Chen',
      major: 'Computer Science',
    },
    {
      rating: 5,
      text: 'Finally, recipes that don\'t require a full kitchen. My microwave game is now strong!',
      name: 'Mike Rodriguez',
      major: 'Business',
    },
    {
      rating: 5,
      text: 'The party planning feature is a lifesaver. My roommates think I\'m a cooking genius now!',
      name: 'Emma Thompson',
      major: 'Psychology',
    },
  ];

  const stats = [
    { number: '$500+', label: 'Saved per semester', color: 'purple' },
    { number: '15 min', label: 'Average cook time', color: 'blue' },
    { number: '100+', label: 'Easy recipes', color: 'pink' },
  ];

  return (
    <Box minH="100vh" position="relative" overflow="hidden">
      {/* Background Gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        style={{
          backgroundImage: 'linear-gradient(135deg, #fbeec1 0%, #f7cac9 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#fbeec1',
          filter: 'contrast(1.1) brightness(1.05) saturate(1.2)',
        }}
      />

      {/* Content */}
      <Box position="relative" zIndex={2}>
        {/* Hero Section */}
        <VStack spacing={8} textAlign="center" py={20} minH="80vh" justify="center">
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                colorScheme="purple"
                variant="solid"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                mb={4}
              >
                🎓 College Cooking Made Easy
              </Badge>

              <Heading
                fontSize={{ base: '3xl', md: '6xl' }}
                fontWeight="black"
                bgGradient="linear(to-r, purple.600, blue.600, pink.600)"
                bgClip="text"
                mb={6}
              >
                Student Chef
              </Heading>

              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.700"
                maxW="800px"
                mx="auto"
                mb={8}
              >
                Craving Chick-fil-A on a Sunday? We gotchu. Dupe your favs, save your coins, skip the lines! 🍕✨
              </Text>

              {/* Stats Grid */}
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
                {stats.map((stat, index) => (
                  <MotionBox
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    textAlign="center"
                  >
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color={`${stat.color}.600`}
                      mb={2}
                    >
                      {stat.number}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {stat.label}
                    </Text>
                  </MotionBox>
                ))}
              </SimpleGrid>

              <MotionButton
                size="lg"
                colorScheme="purple"
                px={8}
                py={6}
                fontSize="xl"
                borderRadius="full"
                boxShadow="xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
              >
                ▶️ See How It Works
              </MotionButton>
            </MotionBox>
          </Container>
        </VStack>

        {/* Features Section */}
        <VStack spacing={16} py={20} bg="white">
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={12}
            >
              <Heading fontSize="4xl" mb={4}>
                What Makes Us Different? 🤔
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
                We're not your typical recipe app. We speak your language and know your college struggles.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {features.map((feature, index) => {
                const isClickable = feature.to;
                return (
                  <MotionCard
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    bg={cardBg}
                    borderRadius="xl"
                    boxShadow="lg"
                    overflow="hidden"
                    whileHover={{ y: -5, boxShadow: "xl" }}
                    cursor={isClickable ? 'pointer' : 'default'}
                    onClick={isClickable ? () => navigate(feature.to!) : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    role={isClickable ? 'button' : undefined}
                    aria-label={isClickable ? `Go to ${feature.title}` : undefined}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <Box
                          p={4}
                          borderRadius="full"
                          bg={`${feature.color}.100`}
                          color={`${feature.color}.600`}
                          fontSize="2xl"
                        >
                          {feature.icon}
                        </Box>
                        <VStack spacing={4} align="start">
                          <Heading size="lg">{feature.title}</Heading>
                          <Text color="gray.600">{feature.description}</Text>
                          <VStack spacing={2} align="start">
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
                );
              })}
            </SimpleGrid>
          </Container>
        </VStack>

        {/* Benefits Section */}
        <VStack spacing={16} py={20}>
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={12}
            >
              <Heading fontSize="4xl" mb={4}>
                Why You'll Love It 💯
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
                Real benefits for real college students. No cap.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
              {benefits.map((benefit, index) => (
                <MotionBox
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                  p={6}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  whileHover={{ y: -3, boxShadow: "xl" }}
                >
                  <VStack spacing={4}>
                    <Text fontSize="3xl">{benefit.icon}</Text>
                    <Heading size="md">{benefit.title}</Heading>
                    <Text fontSize="sm" color="gray.600">
                      {benefit.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </VStack>

        {/* Testimonials Section */}
        <VStack spacing={16} py={20} bg="white">
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              textAlign="center"
              mb={12}
            >
              <Heading fontSize="4xl" mb={4}>
                What Students Are Saying 🗣️
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
                Don't just take our word for it. Here's what your peers are saying.
              </Text>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {testimonials.map((testimonial, index) => (
                <MotionBox
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  p={6}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  textAlign="center"
                >
                  <VStack spacing={4}>
                    <HStack spacing={1}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Text key={i} color="yellow.400" fontSize="lg">⭐</Text>
                      ))}
                    </HStack>
                    <Text fontSize="lg" color="gray.700" fontStyle="italic">
                      "{testimonial.text}"
                    </Text>
                    <VStack spacing={1}>
                      <Text fontWeight="bold">{testimonial.name}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {testimonial.major}
                      </Text>
                    </VStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </VStack>

        {/* CTA Section */}
        <VStack spacing={8} py={20}>
          <Container maxW="1200px" textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading fontSize="4xl" mb={4}>
                Ready to Level Up Your Cooking Game? 🚀
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={8} maxW="600px" mx="auto">
                Join thousands of college students who are already cooking like pros and saving money while doing it!
              </Text>
              <HStack spacing={4} justify="center">
                <MotionButton
                  as={Link}
                  to="/register"
                  size="lg"
                  colorScheme="purple"
                  px={8}
                  py={6}
                  fontSize="xl"
                  borderRadius="full"
                  boxShadow="xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🍴 Sign Up Now
                </MotionButton>
                <MotionButton
                  as={Link}
                  to="/login"
                  size="lg"
                  variant="outline"
                  colorScheme="purple"
                  px={8}
                  py={6}
                  fontSize="xl"
                  borderRadius="full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔑 Sign In
                </MotionButton>
              </HStack>
            </MotionBox>
          </Container>
        </VStack>

        {/* Footer */}
        <Box py={8} borderTop="1px" borderColor="gray.200">
          <Container maxW="1200px">
            <VStack spacing={4}>
              <HStack spacing={6}>
                <Text fontSize="2xl" color="purple.500" cursor="pointer">📷</Text>
                <Text fontSize="2xl" color="purple.500" cursor="pointer">🎵</Text>
                <Text fontSize="2xl" color="purple.500" cursor="pointer">🐦</Text>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                Made with ❤️ for college students everywhere
              </Text>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* How It Works Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>How Student Chef Works</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <VStack spacing={6}>
              <Box p={6} bg="yellow.50" borderRadius="lg" w="full">
                <Heading size="md" mb={2}>1. What is Student Chef?</Heading>
                <Text>A college-focused recipe app that helps you cook restaurant-quality food at home!</Text>
              </Box>
              <Box p={6} bg="purple.50" borderRadius="lg" w="full">
                <Heading size="md" mb={2}>2. Pick Your Ingredients</Heading>
                <Text>Choose from what you have or what you want to cook with.</Text>
              </Box>
              <Box p={6} bg="orange.50" borderRadius="lg" w="full">
                <Heading size="md" mb={2}>3. Choose Your Vibe</Heading>
                <Text>Select your cooking method and dietary preferences.</Text>
              </Box>
              <Box p={6} bg="green.50" borderRadius="lg" w="full">
                <Heading size="md" mb={2}>4. Cook Like a Boss</Heading>
                <Text>Follow our easy steps and enjoy your delicious creation!</Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LandingPage; 