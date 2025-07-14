import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button, HStack, Spacer } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import RestaurantDupesPage from './pages/RestaurantDupesPage';
import DrinkDupesPage from './pages/DrinkDupesPage';
import IngredientUpgradesPage from './pages/IngredientUpgradesPage';
import PartyPlanningPage from './pages/PartyPlanningPage';
import CookingMethodPage from './pages/CookingMethodPage';
import ShoppingListPage from './pages/ShoppingListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FavoritesPage from './pages/FavoritesPage';
import { ShoppingListProvider } from './context/ShoppingListContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import MusicControl from './components/MusicControl';
import UserProfile from './components/UserProfile';

const NavButton = Button as any;

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box minH="100vh" bg="brand.50">
      <Flex as="nav" p={4} gap={2} bg="brand.100" align="center">
        <HStack spacing={4} flex={1}>
          <NavButton as={RouterLink} to="/" variant="ghost">Home</NavButton>
          <NavButton as={RouterLink} to="/main" variant="ghost">Main</NavButton>
          <NavButton as={RouterLink} to="/restaurant-dupes" variant="ghost">Restaurant Dupes</NavButton>
          <NavButton as={RouterLink} to="/drink-dupes" variant="ghost">Drink Dupes</NavButton>
          <NavButton as={RouterLink} to="/ingredient-upgrades" variant="ghost">Ingredient Upgrades</NavButton>
          <NavButton as={RouterLink} to="/party-planning" variant="ghost">Party Planning</NavButton>
          <NavButton as={RouterLink} to="/cooking-method" variant="ghost">Cooking Method</NavButton>
          <NavButton as={RouterLink} to="/shopping-list" variant="ghost">Shopping List</NavButton>
        </HStack>
        <Spacer />
        {user ? (
          <UserProfile />
        ) : (
          <HStack spacing={2}>
            <NavButton as={RouterLink} to="/login" variant="ghost" size="sm">Login</NavButton>
            <NavButton as={RouterLink} to="/register" variant="solid" colorScheme="brand" size="sm">Sign Up</NavButton>
          </HStack>
        )}
      </Flex>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/restaurant-dupes" element={<RestaurantDupesPage />} />
        <Route path="/drink-dupes" element={<DrinkDupesPage />} />
        <Route path="/ingredient-upgrades" element={<IngredientUpgradesPage />} />
        <Route path="/party-planning" element={<PartyPlanningPage />} />
        <Route path="/cooking-method" element={<CookingMethodPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <MusicControl />
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <FavoritesProvider>
          <ShoppingListProvider>
            <AppContent />
          </ShoppingListProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
