import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Avatar,
  useToast,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();
  const toast = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged out successfully',
      description: 'Come back soon! 👋',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  if (!user) {
    return null;
  }

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar
          size="sm"
          name={user.username}
          bg="purple.500"
          color="white"
          cursor="pointer"
          _hover={{ transform: 'scale(1.05)' }}
          transition="transform 0.2s"
        />
      </PopoverTrigger>
      <PopoverContent p={2} w="auto">
        <PopoverBody>
          <VStack spacing={1}>
            <Button
              as={Link}
              to="/favorites"
              size="sm"
              variant="ghost"
              colorScheme="purple"
              w="full"
            >
              Favorites
            </Button>
            <Button
              size="sm"
              variant="ghost"
              colorScheme="red"
              onClick={handleLogout}
              w="full"
            >
              Logout
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile; 