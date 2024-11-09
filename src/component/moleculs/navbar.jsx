// Nav.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonIconNav } from "../Atoms/button";
import { HomeIcon, ArchiveIcon } from "../Atoms/Icon";

function NavBar()
{
  const navigate = useNavigate();

  return (
    <nav className="h-screen sticky top-0">
      <ul className="bg-blackLayer-3 rounded-tl-[48px] p-9 flex flex-col items-center gap-8 shadow-lg shadow-[rgba(255,255,255,0.25)] h-full">
        <li>
          <ButtonIconNav
            icon={<HomeIcon />}
            sizeIcon={30}
            tooltip="Home"
            onClick={() => navigate("/", { state: { isArchived: false } })}
          />
        </li>
        <li>
          <ButtonIconNav
            icon={<ArchiveIcon />}
            sizeIcon={30}
            tooltip="Archive"
            onClick={() => navigate("/archive", { state: { isArchived: true } })}
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;