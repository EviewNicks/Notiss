import React, { useState, useEffect } from "react";
import { NoteCard } from "../Atoms/card";
import { NotesData } from "../../data";
import { Navbar, Header } from "../moleculs";
import { useNavigate } from "react-router-dom";

function NoteArchive()
{
  const [archivedNotes, setArchivedNotes] = useState([]);
  const navigate = useNavigate();

  // Mengambil data dari NotesData saat komponen pertama kali dirender
  useEffect(() =>
  {
    setArchivedNotes(NotesData.filter((note) => note.archived));
  }, []);

  // Fungsi untuk menangani penghapusan catatan
  const handleDelete = (id) =>
  {
    setArchivedNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Fungsi untuk membuka arsip catatan
  const handleUnarchive = (id) =>
  {
    setArchivedNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      )
    );
  };

  // Fungsi untuk mengedit catatan
  const handleEdit = (id) =>
  {
    navigate(`/add`, { state: { noteId: id } });
  };

  return (
    <section className="flex pt-[80px] pl-[82px] items-center gap-2 bg-blackLayer-1">
      <div className="flex items-start gap-2 flex-1 self-stretch rounded-tl-[48px] bg-blackLayer-2">
        <Navbar />
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <Header />
          <section className="notes-container flex max-w-[932px] pb-20 items-center content-center gap-2 flex-wrap">
            {archivedNotes.length > 0 ? (
              archivedNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  textDescription={note.body}
                  dateText={note.createdAt}
                  archived={note.archived}
                  onDelete={handleDelete}
                  onUnarchive={handleUnarchive}
                  onEdit={handleEdit}
                />
              ))
            ) : (
              <p className="text-white text-center w-full">
                Tidak ada catatan yang diarsipkan.
              </p>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

export default NoteArchive;
