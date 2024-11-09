import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ColorOption } from "../Atoms/color";
import { ButtonIconAction } from "../Atoms/button";
import { CancelIcon } from "../Atoms/Icon";

const AddForm = ({ notes = [], setNotes }) =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const noteId = location.state?.noteId || null;

    const [title, setTitle] = useState("");
    const [note, setNote] = useState([]);
    const [selectedColor, setSelectedColor] = useState("#FFFFFF");
    const maxCharacter = 50;

    //fetch existing note data if in edit mode

    useEffect(() =>
    {
        if (noteId)
        {
            const noteToEdit = notes.find((n) => n.id === noteId);
            if (noteToEdit)
            {
                setTitle(noteToEdit.title);
                setNote(noteToEdit.body);
                setSelectedColor(noteToEdit.color || "#ffffff");
            }
        }
    }, [noteId, notes]);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleNoteChange = (e) => setNote(e.target.value);

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        // Validasi input
        if (!title.trim() || !note.trim())
        {
            alert("Judul dan deskripsi catatan harus diisi!");
            return;
        }

        // Pastikan 'notes' adalah array yang valid
        const validNotes = Array.isArray(notes) ? notes : [];

        let updatedNotes;
        let newNote; // Tempatkan 'newNote' di luar blok agar bisa diakses di console.log

        if (noteId)
        {
            // Jika `noteId` ada, perbarui catatan yang sudah ada
            updatedNotes = validNotes.map((n) =>
                n.id === noteId ? { ...n, title, body: note, color: selectedColor } : n
            );
        } else
        {
            // Tambahkan catatan baru jika `noteId` tidak ada
            newNote = {
                id: Date.now(),
                title,
                body: note,
                color: selectedColor,
                archived: false,
                createdAt: new Date().toLocaleDateString(),
            };
            updatedNotes = [...validNotes, newNote];
        }

        // Simpan data terbaru ke localStorage
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        setNotes(updatedNotes); // Update state dengan catatan terbaru

        // Menampilkan note yang baru disubmit di console
        if (!noteId)
        {
            console.log("New note submitted:", newNote);
        } else
        {
            console.log("Note updated:", { title, note, color: selectedColor });
        }

        // Membersihkan form setelah submit
        setTitle('');
        setNote('');
        setSelectedColor('#ffffff');

        // Arahkan kembali atau lakukan navigasi setelah submit
        navigate("/");
    };



    return (
        <section className="add-note flex flex-col p-2 justify-center items-center gap-2 w-full">
            <div className="inner-container flex flex-col max-w-[912px] p-4 items-end gap-[-6px] rounded-[48px_8px_8px_8px] bg-[#445069] w-full">
                <div className="flex p-[4px] justify-end items-center gap-[4px] rounded-full bg-blackLayer-4 ">
                    <ButtonIconAction icon={<CancelIcon />} size="tiny" sizeIcon={26} onClick={() => navigate("/")} />
                </div>
                <div className="content-container flex flex-col items-center gap-2 w-full">
                    <h2 className=" flex text-add-note text-white justify-center items-center font-normal text-2xl text-center">{noteId ? "Edit Catatan" : "Buat Catatan"}</h2>
                    <form onSubmit={handleSubmit} className="form-add-note flex gap-3 w-full">
                        <ColorOption selectedColor={selectedColor} onColorSelect={setSelectedColor} />
                        <div className="note-input-container flex flex-col gap-2 flex-1">
                            <span className="character text-white text-xs self-stretch text-right">
                                Sisa Karakter: {maxCharacter - title.length}
                            </span>
                            <input
                                type="text"
                                className="title-input-container w-full p-4 rounded-lg border border-white bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Masukkan judul catatan"
                                value={title}
                                onChange={handleTitleChange}
                                maxLength={maxCharacter}
                            />
                            <textarea
                                className="note-input-area-container w-full p-4 min-h-[200px] rounded-lg border border-white bg-gray-700 text-white resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Tulis deskripsi catatan di sini"
                                value={note}
                                onChange={handleNoteChange}
                            ></textarea>
                            <button
                                type="submit"
                                className="add-button flex justify-center items-center gap-2 w-full p-3 rounded-lg border border-white bg-primary text-black font-normal text-base hover:bg-orange-400 active:bg-orange-500 transition-colors"
                            >
                                {noteId ? "Perbarui Catatan" : "Buat Catatan"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddForm;
