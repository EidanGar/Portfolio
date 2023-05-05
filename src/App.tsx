import "./styles.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import LandingSection from "./components/LandingSection";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactGroup from "./components/ContactGroup";

const App = () => {
  const [theme, setTheme] = useState(
    window?.matchMedia("(prefers-color-scheme: dark)").matches
      ? "DARK"
      : "LIGHT"
  );

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const bgPrimary = theme === "DARK" ? "13 34 68" : "255 255 255";
    const clrPrimary = theme === "DARK" ? "239 239 239" : "10 11 13";
    const bgSecondary = theme === "DARK" ? "23 49 90" : "245 248 255";
    document.documentElement.style.setProperty("--bg-primary", bgPrimary);
    document.documentElement.style.setProperty("--clr-primary", clrPrimary);
    document.documentElement.style.setProperty("--bg-secondary", bgSecondary);
  }, [theme]);

  return (
    <div className="app">
      <Navigation {...{ setTheme, theme, scrollPosition }} />
      <ContactGroup />
      <LandingSection />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default App;
