import React, { useState } from "react";
import { ButtonIconNav } from "../button";
import { SearchIcon, FlowIcon } from "../Icon";

const SearchBar = ({ placeholder = "Search...", onSearchSubmit, leftIcon }) =>
{
  const [input, setInput] = useState("");

  const handleInputChange = (e) =>
  {
    setInput(e.target.value);
  };

  const handleSearchClick = (e) =>
  {
    e.preventDefault();
    if (onSearchSubmit)
    {
      onSearchSubmit(input);
    }
  };

  const defaultIcon = leftIcon || <FlowIcon size={16} className="text-gray-500 dark:text-gray-400" />;

  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <div className="relative w-full pr-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {defaultIcon}
        </div>
        <input
          type="text"
          id="search-input"
          onChange={handleInputChange}
          className="bg-blackLayer-1 border border-blackLayer-2 text-sm rounded-lg text-white focus:ring-primary focus:border-blackLayer-1 block w-full pl-10 p-2.5"
          placeholder={placeholder}
          value={input}
          required
        />
      </div>
      <ButtonIconNav
        icon={<SearchIcon />}
        size="tiny"
        sizeIcon={14}
        onClick={handleSearchClick}
      />
    </form>
  );
};

export default SearchBar;
