import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Checkbox,
  IconButton,
  Button,
  Badge,
  Divider,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Card,
  CardBody,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useShoppingList } from '../context/ShoppingListContext';

const MotionBox = motion(Box);

const ShoppingListPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, toggleItem, clearList, clearChecked } = useShoppingList();
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.recipe.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group items by recipe
  const groupedItems = filteredItems.reduce((groups, item) => {
    if (!groups[item.recipe]) {
      groups[item.recipe] = [];
    }
    groups[item.recipe].push(item);
    return groups;
  }, {} as { [key: string]: typeof items });

  const handleClearList = () => {
    clearList();
    toast({
      title: 'Shopping List Cleared',
      description: 'All items have been removed from your shopping list.',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleClearChecked = () => {
    clearChecked();
    toast({
      title: 'Checked Items Removed',
      description: 'All checked items have been removed from your shopping list.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const checkedCount = items.filter(item => item.checked).length;
  const totalCount = items.length;

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, green.50, teal.50, cyan.50)"
      py={8}
    >
      <Container maxW="container.lg">
        {/* Header */}
        <VStack spacing={6} mb={8}>
          <HStack spacing={4} w="full" justify="space-between">
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
                  Shopping List 🛒
                </Heading>
                <Text color="green.600" fontSize="sm">
                  {totalCount} items • {checkedCount} checked
                </Text>
              </VStack>
            </HStack>
            
            <HStack spacing={2}>
              {checkedCount > 0 && (
                <Button
                  size="sm"
                  colorScheme="green"
                  variant="outline"
                  onClick={handleClearChecked}
                >
                  Clear Checked
                </Button>
              )}
              {totalCount > 0 && (
                <Button
                  size="sm"
                  colorScheme="red"
                  variant="outline"
                  onClick={handleClearList}
                >
                  Clear All
                </Button>
              )}
            </HStack>
          </HStack>

          {/* Search */}
          <InputGroup maxW="400px">
            <InputLeftElement pointerEvents="none">
              <Text color="green.400">🔍</Text>
            </InputLeftElement>
            <Input
              placeholder="Search items or recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="white"
              borderColor="green.200"
              _hover={{ borderColor: 'green.300' }}
              _focus={{ borderColor: 'green.500', boxShadow: 'outline' }}
            />
          </InputGroup>
        </VStack>

        {/* Shopping List Content */}
        {totalCount === 0 ? (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            textAlign="center"
            py={12}
          >
            <Alert status="info" borderRadius="lg">
              <AlertIcon />
              <Box>
                <AlertTitle>Your shopping list is empty!</AlertTitle>
                <AlertDescription>
                  Browse recipes and add ingredients to get started. Your shopping list will be saved automatically.
                </AlertDescription>
              </Box>
            </Alert>
          </MotionBox>
        ) : filteredItems.length === 0 ? (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            textAlign="center"
            py={12}
          >
            <Alert status="warning" borderRadius="lg">
              <AlertIcon />
              <Box>
                <AlertTitle>No items found!</AlertTitle>
                <AlertDescription>
                  Try adjusting your search terms to find what you're looking for.
                </AlertDescription>
              </Box>
            </Alert>
          </MotionBox>
        ) : (
          <VStack spacing={6} align="stretch">
            {Object.entries(groupedItems).map(([recipe, recipeItems], index) => (
              <MotionBox
                key={recipe}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card bg="white" shadow="md" border="1px" borderColor="green.100">
                  <CardBody>
                    <VStack spacing={4} align="stretch">
                      <HStack justify="space-between">
                        <Heading size="md" color="green.800">
                          {recipe}
                        </Heading>
                        <Badge colorScheme="green" variant="subtle">
                          {recipeItems.length} items
                        </Badge>
                      </HStack>
                      
                      <Divider />
                      
                      <VStack spacing={2} align="stretch">
                        {recipeItems.map((item) => (
                          <HStack
                            key={item.id}
                            justify="space-between"
                            p={3}
                            bg={item.checked ? 'green.50' : 'transparent'}
                            borderRadius="md"
                            border={item.checked ? '1px' : 'none'}
                            borderColor="green.200"
                            opacity={item.checked ? 0.6 : 1}
                            transition="all 0.2s"
                          >
                            <HStack spacing={3}>
                              <Checkbox
                                isChecked={item.checked}
                                onChange={() => toggleItem(item.id)}
                                colorScheme="green"
                                size="lg"
                              />
                              <VStack align="start" spacing={0}>
                                <Text
                                  fontSize="md"
                                  fontWeight="medium"
                                  textDecoration={item.checked ? 'line-through' : 'none'}
                                  color={item.checked ? 'gray.500' : 'gray.700'}
                                >
                                  {item.name}
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                  Added {new Date(item.addedAt).toLocaleDateString()}
                                </Text>
                              </VStack>
                            </HStack>
                            
                            <IconButton
                              aria-label="Remove item"
                              icon={<Text fontSize="sm">🗑️</Text>}
                              size="sm"
                              variant="ghost"
                              colorScheme="red"
                              onClick={() => removeItem(item.id)}
                            />
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </MotionBox>
            ))}
          </VStack>
        )}

        {/* Quick Actions */}
        {totalCount > 0 && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            mt={8}
          >
            <Card bg="white" shadow="md">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="sm" color="green.800">
                    Quick Actions
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <Button
                      colorScheme="green"
                      variant="outline"
                      onClick={() => navigate('/restaurant-dupes')}
                    >
                      🍔 Browse Restaurant Dupes
                    </Button>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => navigate('/drink-dupes')}
                    >
                      🥤 Browse Drink Dupes
                    </Button>
                  </SimpleGrid>
                </VStack>
              </CardBody>
            </Card>
          </MotionBox>
        )}
      </Container>
    </Box>
  );
};

export default ShoppingListPage; 