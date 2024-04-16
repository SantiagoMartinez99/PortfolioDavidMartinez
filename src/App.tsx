import { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

function App() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ? storedTheme : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <Header />
      <Hero />
      <MyProjects />
      <Experience />
      <Footer />
      <Buttons toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
