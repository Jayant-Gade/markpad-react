import "./App.css";
import MainLayout from "./layout/MainPage/Mainlayout";

function App() {
  return (
    <div className="h-screen w-screen">
      <img
        src="src\assets\gray-paper-texture.jpg"
        className="bg-cover h-screen w-screen absolute bg-center -z-10"
      ></img>
      <div className="h-screen w-screen">
        <MainLayout />
        <h1 className="text-3xl font-bold underline ">Hello</h1>
      </div>
    </div>
  );
}

export default App;
