import { Route, Routes } from "react-router-dom";
import TextEditor from "../../components/TextEditor";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <h1 className="flex text-2xl font-bold">Mainlayout</h1>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/editor" element={<TextEditor />} />
      </Routes>
    </div>
  );
}
