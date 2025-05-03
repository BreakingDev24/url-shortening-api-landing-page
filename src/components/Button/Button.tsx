import clsx from "clsx";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "menu" | "login";
  size?: "large" | "small";
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "small",
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={clsx(style.button, style[variant], style[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
