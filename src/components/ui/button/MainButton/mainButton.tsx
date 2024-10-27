import type { FC, ReactNode } from "react";

interface MainButtonProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const MainButton: FC<MainButtonProps> = ({
  text,
  type,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn flex items-center ${className}`}
      onClick={onClick}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default MainButton;
