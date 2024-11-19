import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../Atoms/searchBar";
import { ButtonIconNav } from "../Atoms/button";
import { AddNoteIcon } from "../Atoms/Icon";

const Header = ({ className = "", onSearchSubmit }) =>
{
  const navigate = useNavigate();
  return (
    <div
      className={`flex justify-between items-center md:px-20 sm:px-8 px-2 w-full sticky top-0 z-50 bg-blackLayer-2 ${className}`}
    >
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className="flex justify-center items-center p-2">
        <ButtonIconNav icon={<AddNoteIcon />} onClick={() => navigate("/add-note")} sizeIcon={24} />
      </div>
    </div>
  );
};

export default Header;
