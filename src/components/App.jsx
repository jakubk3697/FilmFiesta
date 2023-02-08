import { Header } from './Header';
import { RandomQuestions } from './RandomQuestions';
import { MainPage } from './MainPage';
import { Footer } from './Footer';
import Container from '@mui/material/Container';
import { ThemeContext } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header handleTheme={handleTheme} />
      <MainPage />
      <RandomQuestions />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
