import React from "react";

const ButtonAction = ({
  icon,
  size = "medium",
  sizeIcon = 16,
  tooltip = "",
  iconClassName = "",
  onClick,
  onSubmit,
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
      onSubmit={onSubmit}
      className={`flex w-10 h-10 justify-center ${sizeClasses[size]} rounded-full border border-white shadow-md
        bg-blackLayer-3 hover:bg-opacity-90 active:bg-opacity-70 
        hover:shadow-lg active:shadow-md
        transform transition-all duration-150
        hover:scale-105 active:scale-95`}
      aria-label={tooltip}
      {...props}
    >
      {React.cloneElement(icon, { size: sizeIcon, className: iconClassName })}
      {tooltip && <span className="sr-only">{tooltip}</span>}
    </button>
  );
};

export default ButtonAction;
