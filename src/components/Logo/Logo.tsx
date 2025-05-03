import style from "./Logo.module.scss";

import logo from "../../assets/logo.svg";
import clsx from "clsx";

interface LogoProps {
  alt?: string;
  variant: "header" | "footer";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  alt = "logo",
  variant = "header",
  className = "",
}) => {
  return (
    <img
      src={logo}
      alt={alt}
      className={clsx(style.logo, style[variant], className)}
    />
  );
};

export default Logo;
