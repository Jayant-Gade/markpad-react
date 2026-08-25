import NavbarItem from "./NavbarItems";
import "/src/index.css";

export default function Navbar() {
  return (
    <div className="p-1 rounded-[10px] bg-lime-400/30 bg-opacity-30 shadow-2xl shadow-green-500/0 backdrop-blur-xl ">
      <div className="flex items-center w-full bg-[#40ff006b] bg-opacity-30 backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] rounded-[10px]">
        <div className="rounded-tr-[10px] border-2 border-white/30 shadow-lg w-10 m-2">
          <a
            href=""
            className="group shadow-[0_0px_2px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            <img
              src="src\assets\pencil.png"
              className=" w-10 scale-75 transition-all duration-300 
              group-hover:translate-x-[10px] group-hover:translate-y-[-10px]"
            ></img>
          </a>
        </div>
        <nav>
          <ul className="flex list-none pl-4">
            <NavbarItem name="Home" href="#" />
            <NavbarItem name="About" href="#" />
            <NavbarItem name="Notes" href="#" />
            <NavbarItem name="Editor" href="#" />
          </ul>
        </nav>
      </div>
    </div>
  );
}
