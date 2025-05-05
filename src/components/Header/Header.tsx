import clsx from "clsx";
import style from "./Header.module.scss";
import menuIcon from "../../assets/burger-menu.svg";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useMenu } from "../../context/MenuContext";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();

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
