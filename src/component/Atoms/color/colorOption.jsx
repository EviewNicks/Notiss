// ColorOption.jsx
import React, { useState } from "react";

const colors = [
    { id: 1, color: "#FFD5F8" },
    { id: 2, color: "#F4DFCD" },
    { id: 3, color: "#C7EBB3" },
    { id: 4, color: "#FFFFFF" },
];

const ColorOption = ({ selectedColor, onColorSelect }) =>
{
    return (
        <div className="color-option flex flex-col md:gap-6 gap-12 p-3 rounded-2xl bg-gray-700">
            {colors.map((clr) => (
                <div
                    key={clr.id}
                    className={`color md:w-14 md:h-14 w-10 h-10 rounded-lg cursor-pointer transition-transform duration-200 ${selectedColor === clr.color ? "outline outline-2 outline-white" : ""
                        }`}
                    style={{ backgroundColor: clr.color }}
                    onClick={() => onColorSelect(clr.color)}
                ></div>
            ))}
        </div>
    );
};

export default ColorOption;
