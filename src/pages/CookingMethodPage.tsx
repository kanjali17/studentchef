import React, { useState } from 'react';
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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Divider,
  Tag,
  TagLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Recipe, cookingMethods, getRecipesByCookingMethod } from '../data/recipeDatabase';

const MotionCard = motion(Card);
const MotionButton = motion(Button);

const CookingMethodPage = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { 
    isOpen: isRecipeOpen, 
    onOpen: onRecipeOpen, 
    onClose: onRecipeClose 
  } = useDisclosure();
  const [selectedMethod, setSelectedMethod] = useState<any>(null);
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleMethodClick = (method: any) => {
    setSelectedMethod(method);
    setSelectedRecipes(getRecipesByCookingMethod(method.keywords).slice(0, 6));
    onOpen();
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    onRecipeOpen();
  };

  return (
    <Box minH="100vh" bg="brand.50" py={8}>
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                p={6}
                borderRadius="full"
                bg="red.100"
                color="red.600"
                fontSize="4xl"
                mb={6}
                display="inline-block"
              >
                🔥
              </Box>
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="black"
                bgGradient="linear(to-r, red.600, orange.600)"
                bgClip="text"
                mb={4}
              >
                Cooking Methods 🔥
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Learn to cook with whatever equipment you have - no fancy kitchen needed!
              </Text>
            </motion.div>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {cookingMethods.map((method, index) => (
              <MotionCard
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                overflow="hidden"
                whileHover={{ y: -5, boxShadow: "xl" }}
                cursor="pointer"
                onClick={() => handleMethodClick(method)}
                tabIndex={0}
                role="button"
                aria-label={`Learn about ${method.title}`}
              >
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <Box
                      p={4}
                      borderRadius="full"
                      bg={`${method.color}.100`}
                      color={`${method.color}.600`}
                      fontSize="3xl"
                      alignSelf="center"
                    >
                      {method.icon}
                    </Box>
                    
                    <VStack spacing={4} align="start" w="full">
                      <Heading size="lg" textAlign="center" w="full">
                        {method.title}
                      </Heading>
                      <Text color="gray.600" textAlign="center">
                        {method.description}
                      </Text>
                      
                      <HStack spacing={4} justify="center" w="full">
                        <Badge colorScheme={method.color} variant="solid">
                          {method.difficulty}
                        </Badge>
                        <Badge colorScheme="gray" variant="outline">
                          {method.time}
                        </Badge>
                      </HStack>
                    </VStack>
                  </VStack>
                </CardBody>
              </MotionCard>
            ))}
          </SimpleGrid>

          <VStack spacing={6} textAlign="center" py={8}>
            <Text fontSize="lg" color="gray.600">
              Don't have any of these? Check out our No-Cook recipes! ❄️
            </Text>
            <MotionButton
              size="lg"
              colorScheme="red"
              px={8}
              py={6}
              fontSize="xl"
              borderRadius="full"
              boxShadow="xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const noCookMethod = cookingMethods.find(m => m.title === 'No-Cook');
                if (noCookMethod) {
                  handleMethodClick(noCookMethod);
                }
              }}
            >
              ❄️ Try No-Cook Recipes
            </MotionButton>
          </VStack>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl" maxH="90vh" overflow="hidden">
          <ModalHeader>
            <HStack spacing={4}>
              <Text fontSize="2xl">{selectedMethod?.icon}</Text>
              <Text>{selectedMethod?.title}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8} overflowY="auto">
            {selectedMethod && (
              <VStack spacing={6} align="start">
                <Text fontSize="lg" color="gray.600">
                  {selectedMethod.description}
                </Text>
                
                <Divider />
                
                <Box w="full">
                  <Heading size="md" mb={4} color={`${selectedMethod.color}.600`}>
                    Available Recipes ({selectedRecipes.length})
                  </Heading>
                  {selectedRecipes.length > 0 ? (
                    <SimpleGrid columns={2} spacing={4}>
                      {selectedRecipes.map((recipe) => (
                        <MotionCard
                          key={recipe.id}
                          size="sm"
                          variant="outline"
                          cursor="pointer"
                          whileHover={{ scale: 1.02, y: -2 }}
                          onClick={() => handleRecipeClick(recipe)}
                        >
                          <CardBody p={4}>
                            <VStack spacing={2} align="start">
                              <HStack spacing={2}>
                                <Text fontSize="lg">{recipe.image}</Text>
                                <Text fontSize="sm" fontWeight="semibold" noOfLines={1}>
                                  {recipe.name}
                                </Text>
                              </HStack>
                              <HStack spacing={2}>
                                <Tag size="sm" colorScheme={selectedMethod.color}>
                                  <TagLabel>{recipe.time}</TagLabel>
                                </Tag>
                                <Tag size="sm" colorScheme="gray" variant="outline">
                                  <TagLabel>{recipe.difficulty}</TagLabel>
                                </Tag>
                              </HStack>
                            </VStack>
                          </CardBody>
                        </MotionCard>
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Text color="gray.500" fontSize="sm">
                      No recipes found for this cooking method yet. Check back soon!
                    </Text>
                  )}
                </Box>
                
                <Divider />
                
                <Box w="full">
                  <Heading size="md" mb={4} color={`${selectedMethod.color}.600`}>
                    Pro Tips
                  </Heading>
                  <List spacing={2}>
                    {selectedMethod.tips.map((tip: string, index: number) => (
                      <ListItem key={index}>
                        <ListIcon color={`${selectedMethod.color}.500`}>💡</ListIcon>
                        {tip}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isRecipeOpen} onClose={onRecipeClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl" maxH="90vh" overflow="hidden">
          <ModalHeader>
            <HStack spacing={4}>
              <Text fontSize="2xl">{selectedRecipe?.image}</Text>
              <Text>{selectedRecipe?.name}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8} overflowY="auto">
            {selectedRecipe && (
              <VStack spacing={6} align="start">
                <Text fontSize="lg" color="gray.600">
                  {selectedRecipe.description}
                </Text>
                
                <HStack spacing={4}>
                  <Badge colorScheme="purple" variant="solid">
                    {selectedRecipe.time}
                  </Badge>
                  <Badge colorScheme="blue" variant="solid">
                    {selectedRecipe.difficulty}
                  </Badge>
                  <Badge colorScheme="green" variant="solid">
                    {selectedRecipe.cost}
                  </Badge>
                </HStack>
                
                <Divider />
                
                <Accordion allowToggle w="full">
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Ingredients
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List spacing={2}>
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                          <ListItem key={index}>
                            <ListIcon color="green.500">🥄</ListIcon>
                            {ingredient}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Instructions
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List spacing={3}>
                        {selectedRecipe.instructions.map((instruction, index) => (
                          <ListItem key={index}>
                            <Text fontWeight="bold" color="purple.500" display="inline">
                              {index + 1}.
                            </Text>{' '}
                            {instruction}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Tips
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List spacing={2}>
                        {selectedRecipe.tips.map((tip, index) => (
                          <ListItem key={index}>
                            <ListIcon color="orange.500">💡</ListIcon>
                            {tip}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        Nutrition
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <SimpleGrid columns={2} spacing={4}>
                        <HStack>
                          <Text fontWeight="semibold">Calories:</Text>
                          <Text>{selectedRecipe.nutrition.calories}</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="semibold">Protein:</Text>
                          <Text>{selectedRecipe.nutrition.protein}g</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="semibold">Fat:</Text>
                          <Text>{selectedRecipe.nutrition.fat}g</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="semibold">Carbs:</Text>
                          <Text>{selectedRecipe.nutrition.carbs}g</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="semibold">Fiber:</Text>
                          <Text>{selectedRecipe.nutrition.fiber}g</Text>
                        </HStack>
                      </SimpleGrid>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CookingMethodPage;
