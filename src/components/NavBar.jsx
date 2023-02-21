import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "hsl(207, 26%, 17%)" : "white";
    document.body.style.color = darkMode ? 'white' : 'black';
  }, [darkMode]);
  return (
    <header className={`${darkMode ? "darkModeHeader" : "lightModeHeader"}`}>
      <h1>Where in the world?</h1>
      {darkMode ? (
        <BsSun className="icono" color={"#fff"} onClick={() => setDarkMode(!darkMode)} size={"2rem"} />
      ) : (
        <BsMoon className="icono" onClick={() => setDarkMode(!darkMode)} size={"2rem"} />
      )}
    </header>
  );
};

export default NavBar;
