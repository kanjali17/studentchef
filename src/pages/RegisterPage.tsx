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
import { RegisterRequest } from '../types/user';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<RegisterRequest>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<RegisterRequest>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterRequest> = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      await register(formData);
      
      toast({
        title: 'Account created successfully! 🎉',
        description: `Welcome to Student Chef, ${formData.username}!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      navigate('/main');
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error instanceof Error ? error.message : 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof RegisterRequest, value: string) => {
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
                    Join Student Chef 👨‍🍳
                  </Heading>
                  <Text color="gray.600">
                    Create your account and start cooking like a pro!
                  </Text>
                </VStack>

                {/* Registration Form */}
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

                    {/* Confirm Password Field */}
                    <FormControl isInvalid={!!errors.confirmPassword}>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Confirm your password"
                        size="lg"
                        borderRadius="lg"
                      />
                      <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                    </FormControl>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      borderRadius="lg"
                      isLoading={isSubmitting}
                      loadingText="Creating Account..."
                      mt={4}
                    >
                      Create Account
                    </Button>
                  </VStack>
                </form>

                {/* Login Link */}
                <HStack justify="center" pt={4}>
                  <Text color="gray.600">Already have an account?</Text>
                  <ChakraLink as={Link} to="/login" color="brand.500" fontWeight="semibold">
                    Sign In
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

export default RegisterPage; 