import React from "react";

const ButtonIconNav = ({
  icon,
  size = "medium", // New prop for size
  sizeIcon = 24,
  tooltip = "",
  iconClassName = "",
  onClick,
  ...props
}) =>
{
  const sizeClasses = {
    tiny: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${sizeClasses[size]} bg-glass rounded-full border border-white shadow-lg hover:shadow-hover-glow`}
      aria-label={tooltip}
      {...props}
    >
      {React.cloneElement(icon, { size: sizeIcon, className: iconClassName })}
      {tooltip && (
        <span className="sr-only">{tooltip}</span> // Tooltip for accessibility
      )}
    </button>
  );
};

export default ButtonIconNav;
