import React, { useEffect, useState } from 'react';

const ModeControlls = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return <div onClick={toggleTheme}>ModeControlls</div>;
};

export default ModeControlls;
