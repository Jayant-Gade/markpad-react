interface NavbarItemsProps {
  name: string;
  onclick?: () => void;
  widthpx?: number;
}

export default function CButton(props: NavbarItemsProps) {
  return (
    <div className="flex-initial p-2">
      <span
        onClick={props.onclick}
        className="inline-block cursor-pointer relative rounded-full align-middle p-2 px-4 z-10 transition-all duration-300 ease-in-out active:duration-100 active:translate-y-[1px] active:scale-98 active:shadow-[0_2px_5px_rgba(0,0,0,0.2)] hover:translate-y-[-1px] shadow-[0_0px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      >
        {props.name}
      </span>
      <span className="absolute inset-0 bg-white/20 backdrop-blur-lg opacity-0 transition-opacity duration-300 ease-in-out -z-10"></span>
    </div>
  );
}
