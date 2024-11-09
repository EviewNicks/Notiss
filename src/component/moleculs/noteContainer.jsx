import React from "react";
import { SearchBar } from "../Atoms/searchBar";
import { ButtonIconNav } from "../Atoms/button";
import { AddNoteIcon } from "../Atoms/Icon";

const NoteContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex justify-between items-center px-20 w-full ${className}`}
    >
      <SearchBar />
      <ButtonIconNav icon={<AddNoteIcon />} sizeIcon={24} />
    </div>
  );
};

export default NoteContainer;
