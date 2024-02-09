import React, { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeButton';
import Card from './components/Card';
import { ThemeProvider } from './context/theme';

const App = () => {
  const [ themeMode, setThemeMode ] = useState();

  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
