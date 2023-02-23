import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      const placeholder = document.querySelector("#input-buscador");
      const filter = document.querySelector("#select");

      placeholder.style.color = darkMode ? "white" : "black";
      filter.style.backgroundColor = darkMode ? "hsl(207, 26%, 17%)" : "white";
      filter.style.color = darkMode ? "white" : "black";
    }

    document.body.style.backgroundColor = darkMode
      ? "hsl(207, 26%, 17%)"
      : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);
  return (
    <header className={`${darkMode ? "darkModeHeader" : "lightModeHeader"}`}>
      <h1>Where in the world?</h1>
      {darkMode ? (
        <BsSun
          className="icono"
          color={"#fff"}
          onClick={() => setDarkMode(!darkMode)}
          size={"2rem"}
        />
      ) : (
        <BsMoon
          className="icono"
          onClick={() => setDarkMode(!darkMode)}
          size={"2rem"}
        />
      )}
    </header>
  );
};

export default NavBar;
