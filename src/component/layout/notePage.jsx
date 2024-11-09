import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NoteCard } from "../Atoms/card";
import { Navbar, Header } from "../moleculs";
import { useNavigate } from "react-router-dom";
import NotesData from "../../data/Note";

function NotePage({ notes, setNotes, isArchived })
{
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();


  useEffect(() =>
  {
    // Cek localStorage saat komponen pertama kali dimuat
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes)
    {
      setNotes(JSON.parse(storedNotes)); // Muat data dari localStorage jika ada
    } else
    {
      setNotes(NotesData); // Muat data default jika localStorage kosong
      localStorage.setItem("notes", JSON.stringify(NotesData));
    }

    // console.log("Current noteId:", noteId);
  }, []);

  // Fungsi untuk menghapus catatan
  const handleDelete = (id) =>
  {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // Fungsi untuk mengubah status arsip catatan
  const toggleArchiveStatus = (id) =>
  {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
  };


  // Fungsi untuk mengedit catatan
  const handleEdit = (id) =>
  {
    navigate(`/add-note`, { state: { noteId: id } });
  };

  // Filter catatan berdasarkan status arsip untuk ditampilkan

  const handleSearchSubmit = (searchTerm) =>
  {
    setSearching(true);
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(filtered);
  };

  const filteredNotes = searching
    ? searchResult
    : notes.filter((note) => note.archived === isArchived);


  return (
    <section className="flex pt-[80px] pl-[82px] items-center gap-2 bg-blackLayer-1">
      <div className="flex items-start gap-2 flex-1 self-stretch rounded-tl-[48px] bg-blackLayer-2">
        <Navbar />
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <Header onSearchSubmit={handleSearchSubmit} />
          <section className="notes-container flex max-w-[932px] pb-20 items-center content-center gap-2 flex-wrap">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  textDescription={note.body}
                  dateText={note.createdAt}
                  color={note.color}
                  archived={note.archived}
                  onDelete={handleDelete}
                  onArchive={() => toggleArchiveStatus(note.id)}
                  onUnarchive={() => toggleArchiveStatus(note.id)}
                  onEdit={handleEdit}
                />
              ))
            ) : (
              <p className="text-white text-center w-full">
                {isArchived ? "Tidak ada catatan yang diarsipkan." : "Tidak ada hasil yang sesuai."}
              </p>
            )}
          </section>
        </div>
      </div>
    </section>
  );


  NotePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    setNotes: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
  };
}

export default NotePage;
