import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Technologies from "./components/Technologies";

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

  useEffect(() => {
    window.onload = () => {
      if (document.querySelector("html")) {
        window.scrollTo(0, 0);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <MyProjects />
      <Experience />
      <Technologies />
      <Footer />
      <Buttons toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
