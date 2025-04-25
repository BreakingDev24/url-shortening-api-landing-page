import logo from "../../assets/logo.svg";
import style from "./Header.module.scss";
import menuIcon from "../../assets/burger-menu.svg";

export default function Header() {
  return (
    <header>
      <img className={style.logo} src={logo} alt="logo" />
      <div className={style.navElements}>
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
      <button className={style.menuBtn}>
        <img className={style.menuIcon} src={menuIcon} alt="menu-icon" />
      </button>
    </header>
  );
}
