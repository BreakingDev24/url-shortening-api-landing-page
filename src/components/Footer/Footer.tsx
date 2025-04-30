import clsx from "clsx";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";

export default function Footer() {
  return (
    <footer>
      <div className={style.footerContent}>
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.listContainer}>
          <div className={clsx(style.linksContainer, style.features)}>
            <strong>Features</strong>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div className={clsx(style.linksContainer, style.resources)}>
            <strong>Resources</strong>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={clsx(style.linksContainer, style.company)}>
            <strong>Company</strong>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={style.social}>
          <img src={facebookIcon} alt="facebook icon" />
          <img src={twitterIcon} alt="twitter icon" />
          <img src={pinterestIcon} alt="pinterest icon" />
          <img src={instagramIcon} alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
}
