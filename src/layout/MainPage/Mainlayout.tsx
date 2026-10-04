import { Route, Routes } from "react-router-dom";
import TextEditor from "./TextEditor";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/editor" element={<TextEditor />} />
      </Routes>
    </div>
  );
}
