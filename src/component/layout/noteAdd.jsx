import React from "react";
import PropTypes from "prop-types";
import { Navbar, Header, AddForm } from "../moleculs";

function NoteAdd({ notes, setNotes })
{

  return (
    <section className="flex pt-[80px] pl-[82px] items-center gap-2 bg-blackLayer-1">
      <div className="flex items-start gap-2 flex-1 self-stretch rounded-tl-[48px] bg-blackLayer-2">
        <Navbar />
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          {/* Konten di sini */}
          <Header />
          <AddForm notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </section>
  );


  NoteAdd.PropTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    setNotes: PropTypes.func.isRequired,
  }
}

export default NoteAdd;
