import NavbarItem from "./NavbarItems";
import "/src/index.css";

export default function Navbar() {
  return (
    <div className="flex items-center bg-[#5d46c2]">
      <img
        src="https://placehold.co/50/aeff00/000000/png"
        className="rounded-full"
      ></img>
      <nav>
        <ul className="flex list-none">
          <NavbarItem name="Home" href="#" />
          <NavbarItem name="About" />
          <NavbarItem name="Notes" />
          <NavbarItem name="Editor" />
        </ul>
      </nav>
    </div>
  );
}
