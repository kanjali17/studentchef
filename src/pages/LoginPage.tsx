import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Container,
  Card,
  CardBody,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginRequest } from '../types/user';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginRequest>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginRequest>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginRequest> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await login(formData);
      
      toast({
        title: 'Welcome back! 👋',
        description: `Great to see you again, ${formData.username}!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      navigate('/main');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Invalid credentials',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LoginRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Box minH="100vh" bg="brand.50" py={8}>
      <Container maxW="md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionCard
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            borderRadius="xl"
            boxShadow="xl"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <CardBody p={8}>
              <VStack spacing={6} align="stretch">
                {/* Header */}
                <VStack spacing={2} textAlign="center">
                  <Heading size="lg" color="brand.600">
                    Welcome Back! 👨‍🍳
                  </Heading>
                  <Text color="gray.600">
                    Sign in to your Student Chef account
                  </Text>
                </VStack>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="stretch">
                    {/* Username Field */}
                    <FormControl isInvalid={!!errors.username}>
                      <FormLabel>Username</FormLabel>
                      <Input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        placeholder="Enter your username"
                        size="lg"
                        borderRadius="lg"
                      />
                      <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>

                    {/* Password Field */}
                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Enter your password"
                        size="lg"
                        borderRadius="lg"
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      borderRadius="lg"
                      isLoading={isSubmitting}
                      loadingText="Signing In..."
                      mt={4}
                    >
                      Sign In
                    </Button>
                  </VStack>
                </form>

                {/* Register Link */}
                <HStack justify="center" pt={4}>
                  <Text color="gray.600">Don't have an account?</Text>
                  <ChakraLink as={Link} to="/register" color="brand.500" fontWeight="semibold">
                    Sign Up
                  </ChakraLink>
                </HStack>
              </VStack>
            </CardBody>
          </MotionCard>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default LoginPage; 