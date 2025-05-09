import clsx from "clsx";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "menu" | "login";
  size?: "large" | "small";
  className?: string;
  type?: "button" | "submit" | "reset";
  copied?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "small",
  className = "",
  type = "button",
  copied = false,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        style.button,
        style[variant],
        style[size],
        copied && style.copied,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
