import { Header } from '../Header';
import { RandomQuestions } from '../RandomQuestions';
import { Footer } from '../Footer';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useState, useEffect } from 'react';
import styles from '../../assets/styles/pages/App.module.scss';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={styles.container}>
        <Header handleTheme={handleTheme} />
        <Outlet />
      </div>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
