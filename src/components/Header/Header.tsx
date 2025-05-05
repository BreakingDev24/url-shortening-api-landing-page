import clsx from "clsx";
import style from "./Header.module.scss";
import menuIcon from "../../assets/burger-menu.svg";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 790px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className={style.headerElements}>
          <Logo variant="header"></Logo>
          <div
            className={clsx(style.navElements, { [style.active]: isMenuOpen })}
          >
            <nav className={style.nav}>
              <ul>
                <li>Feautures</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </nav>
            <div className={style.logBtnContainer}>
              <Button variant="login">Login</Button>
              <Button variant="primary" size="small">
                Sign Up
              </Button>
            </div>
          </div>
          <Button variant="menu" onClick={toggleMenu}>
            <img className={style.menuIcon} src={menuIcon} alt="menu-icon" />
          </Button>
        </div>
      </div>
    </header>
  );
}
