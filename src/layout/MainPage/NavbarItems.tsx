interface NavbarItemsProps {
  name: string;
  href?: string;
}

export default function NavbarItem(props: NavbarItemsProps) {
  return (
    <li className="flex-initial">
      <a href={props.href} className="pl-6 pr-3 border inline-block">
        {props.name}
      </a>
    </li>
  );
}
