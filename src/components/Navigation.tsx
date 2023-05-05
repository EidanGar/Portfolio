import React, { useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { CgMoon } from "react-icons/cg";

interface NavigationProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  scrollPosition: number;
}

const Navigation = ({ theme, setTheme, scrollPosition }: NavigationProps) => {
  const navigationTriggerRef = useRef<HTMLInputElement>(null);

  const setTriggerFalse = () => {
    if (navigationTriggerRef.current == null) return;
    navigationTriggerRef.current.checked = false;
  };

  const ChangeTheme = ({ className }: { className: string }) => (
    <div
      onClick={() => setTheme((prev) => (prev === "DARK" ? "LIGHT" : "DARK"))}
      className={className}
    >
      {theme === "LIGHT" ? (
        <CgMoon className="header__theme-change__icon" />
      ) : (
        <IoSunnyOutline className="header__theme-change__icon" />
      )}
    </div>
  );

  const NavigationMenu = () => (
    <nav className="header__nav">
      <ul className="nav__list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );

  const MobileNavigationMenu = () => (
    <nav className="header__nav-mobile">
      <div className="menu__container">
        <input
          ref={navigationTriggerRef}
          type="checkbox"
          className="menu__trigger"
        />
        <CgMenuRightAlt className="nav__menu" />
      </div>
      <div className="nav__container">
        <button onClick={setTriggerFalse} className="nav__close">
          <AiOutlineClose className="nav__close__icon" />
        </button>
        <ul className="nav__list-mobile">
          <li onClick={setTriggerFalse}>
            <a href="#home">Home</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#about">About</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ChangeTheme className={"header__theme-change-mobile"} />
      </div>
    </nav>
  );

  return (
    <header
      className={`app__header ${
        scrollPosition > 10 && "app__header-activated"
      }`}
    >
      <h2 className="header__logo">
        {"</"}
        <span style={{ color: "rgb(40, 162, 250)" }}>Eidan</span>
        {">"}
      </h2>
      <NavigationMenu />
      <MobileNavigationMenu />
      <ChangeTheme className={"header__theme-change"} />
    </header>
  );
};

export default Navigation;
