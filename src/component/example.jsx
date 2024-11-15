import React from "react";
import { ButtonIconNav } from "./Atoms/button";
import { HomeIcon } from "./Atoms/Icon";
import NavBar from "./moleculs/navbar";
import { SearchBar } from "./Atoms/searchBar";
import { Header, AddForm } from "./moleculs";
import { NoteCard } from "./Atoms/card";

const Example = () =>
{
  const handleClick = () =>
  {
    console.log("Button clicked!");
  };

  return <NoteCard />;
};

export default Example;
