import React, { useEffect, useState } from "react";
import { Icons } from "../../assets/icons";

const ModeControlls = () => {
  const [darkMode, setDarkMode] = useState(true);
  const rootElement = document.documentElement;

  useEffect(() => {
    darkMode
      ? rootElement.classList.add("dark")
      : rootElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={toggleTheme}>
        <img
          src={darkMode ? Icons.SunFill : Icons.MoonFill}
          alt=""
          className="w-5 h-5 invert-[1]"
        />
      </button>
    </div>
  );
};

export default ModeControlls;
