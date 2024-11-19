import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NoteAdd, NotePage } from "./component/layout";
import Aos from "aos";
import ScrollToTop from "./services/scrooltoTop";
import "aos/dist/aos.css";
import "./style/index.css";

const App = () =>
{
  const [notes, setNotes] = useState([]);

  useEffect(() =>
  {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0); // Scroll ke atas ketika halaman dimuat
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NotePage isArchived={false} notes={notes} setNotes={setNotes} />} />
        <Route path="/archive" element={<NotePage isArchived={true} notes={notes} setNotes={setNotes} />} />
        <Route path="/add-note" element={<NoteAdd notes={notes} setNotes={setNotes} />} />
      </Routes>
    </Router>
  );
};

export default App;
