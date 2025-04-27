import clsx from "clsx";
import logo from "../../assets/logo.svg";
import style from "./Header.module.scss";
import menuIcon from "../../assets/burger-menu.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Cambia lo stato attuale di isMenuOpen.
    console.log(isMenuOpen);
  };

  return (
    <header>
      <div className={style.headerElements}>
        <img className={style.logo} src={logo} alt="logo" />
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
            <button className={style.loginBtn}>Login</button>
            <button className={style.signUpBtn}>Sign Up</button>
          </div>
        </div>
        <button className={style.menuBtn} onClick={toggleMenu}>
          <img className={style.menuIcon} src={menuIcon} alt="menu-icon" />
        </button>
      </div>
    </header>
  );
}
