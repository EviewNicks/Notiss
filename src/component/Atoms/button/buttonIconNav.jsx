import React from "react";
import { useMediaQuery } from "react-responsive";

const ButtonIconNav = ({
  icon,
  size,
  sizeIcon,
  tooltip = "",
  iconClassName = "",
  onClick,
  ...props
}) =>
{
  // Media query untuk mendeteksi ukuran layar
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Maksimal 768px dianggap mobile

  // Set ukuran berdasarkan media query
  const buttonSize = isMobile ? "tiny" : size || "medium";
  const iconSize = isMobile ? 24 : sizeIcon || 30;

  const sizeClasses = {
    tiny: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${sizeClasses[buttonSize]} bg-glass rounded-full border border-white shadow-lg hover:shadow-hover-glow`}
      aria-label={tooltip}
      {...props}
    >
      {React.cloneElement(icon, { size: iconSize, className: iconClassName })}
      {tooltip && (
        <span className="sr-only">{tooltip}</span>
      )}
    </button>
  );
};

export default ButtonIconNav;
