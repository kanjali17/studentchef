# 🍕 Student Chef - College Cooking Made Easy

A modern, college-focused recipe finder web app designed to help students cook easy, affordable, and fun meals in their dorms or apartments. Built with React, TypeScript, Chakra UI, and Framer Motion.

![Student Chef](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.2-purple?logo=chakra-ui)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0-green)

## 🎯 Project Overview

**Student Chef** is a playful, modern web application that helps college students:
- **Save money** by making restaurant-quality food at home
- **Cook quickly** with recipes under 15 minutes
- **Use simple ingredients** and basic cooking equipment
- **Plan parties** with easy-to-scale recipes
- **Find healthy alternatives** to expensive takeout

## ✨ Features

### 🏠 Landing Page
- **Hero Section** with engaging statistics and call-to-action
- **Feature Cards** showcasing main app capabilities
- **Benefits Section** highlighting student-focused advantages
- **Testimonials** from real college students
- **Interactive Demo Modal** explaining how the app works

### 🍔 Restaurant Dupes
- Recreate popular restaurant dishes at home
- Save money on expensive takeout
- Includes recipes for Chick-fil-A, McDonald's, Chipotle, and more

### 🥕 Ingredient Upgrades
- Transform basic ingredients into gourmet meals
- Upgrade ramen, mac & cheese, rice, and other dorm staples
- Creative recipes using minimal ingredients

### ☕ Drink Dupes
- Make Starbucks, smoothie shop, and bubble tea drinks at home
- Healthy alternatives to expensive coffee shop drinks
- Easy-to-follow recipes with common ingredients

### 🎉 Party Planning
- Scale recipes for groups
- Calculate portions based on guest count
- Accommodate dietary preferences and allergies

### 🔥 Cooking Methods
- Filter recipes by available equipment
- Air fryer, microwave, stove, oven, and no-cook options
- Perfect for limited dorm/apartment kitchens

### 🛒 Shopping List
- Centralized ingredient management
- Add ingredients from any recipe
- Track costs and quantities

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Chakra UI 2.8.2
- **Animations**: Framer Motion 10
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Styling**: Emotion (CSS-in-JS)
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-chef.git
   cd student-chef
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main page components
│   ├── LandingPage.tsx # Landing page with hero section
│   ├── MainPage.tsx    # Feature selection page
│   ├── RestaurantDupesPage.tsx
│   ├── DrinkDupesPage.tsx
│   ├── IngredientUpgradesPage.tsx
│   ├── PartyPlanningPage.tsx
│   ├── CookingMethodPage.tsx
│   └── ShoppingListPage.tsx
├── context/            # React Context providers
├── data/               # Recipe database and static data
├── assets/             # Images, icons, and other assets
├── theme.ts            # Chakra UI theme configuration
├── App.tsx             # Main app component with routing
└── index.tsx           # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#805AD5) - Brand color
- **Secondary**: Orange (#DD6B20) - Restaurant theme
- **Accent**: Green (#38A169) - Ingredients theme
- **Background**: Cream to Pink gradient (#fbeec1 → #f7cac9)

### Typography
- **Headings**: Fredoka One (fun, bold)
- **Body**: Quicksand (clean, readable)

### Animations
- **Entrance**: Fade in with staggered delays
- **Hover**: Scale up and lift effects
- **Transitions**: Smooth 0.6s duration

## 🧪 Features in Development

- [ ] Recipe database with full recipe details
- [ ] Shopping list context and state management
- [ ] User authentication and favorites
- [ ] Recipe search and filtering
- [ ] Mobile app version
- [ ] Social sharing features
- [ ] Recipe ratings and reviews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **College Students** - For inspiration and feedback
- **Chakra UI Team** - For the amazing component library
- **Framer Motion** - For smooth animations
- **React Community** - For the excellent ecosystem

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/student-chef](https://github.com/yourusername/student-chef)
- **Email**: your.email@example.com

---

Made with ❤️ for college students everywhere
