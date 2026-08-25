interface NavbarItemsProps {
  name: string;
  href?: string;
}

export default function NavbarItem(props: NavbarItemsProps) {
  return (
    <li className="flex-initial p-1">
      <a href={props.href} className="inline-block relative group">
        <span className="relative rounded-full align-middle p-2 px-4 z-10 transition-all duration-300 ease-in-out group-hover:translate-y-[-1px]  shadow-[0_0px_2px_rgba(0,0,0,0.3)] group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {props.name}
        </span>
        <span className="absolute inset-0 bg-white/20 backdrop-blur-lg opacity-0 transition-opacity duration-300 ease-in-out -z-10"></span>
      </a>
    </li>
  );
}
