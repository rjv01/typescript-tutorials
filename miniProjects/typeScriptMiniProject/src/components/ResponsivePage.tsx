import { Menu } from "lucide-react";
import { useState } from "react";

function ResponsivePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="
        w-full flex items-center justify-between
        border-2 md:rounded-full p-4 m-4
        text-xl bg-white text-black"
    >
      {/* Logo */}
      <div className="cursor-pointer hover:underline duration-200">
        Logo
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <button className="hover:underline hover:text-blue-500 duration-200">Home</button>
        <button className="hover:underline hover:text-blue-500 duration-200">About</button>
        <button className="hover:underline hover:text-blue-500 duration-200">Projects</button>
        <button className="hover:underline hover:text-blue-500 duration-200">Contact</button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <Menu onClick={() => setOpen(!open)} />
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="
            absolute top-20 left-0 w-full 
            flex flex-col items-center gap-6
            py-6 bg-white border-t
            md:hidden text-black"
        >
            <div className="md:hidden ">
                <Menu onClick={() => setOpen(!open)} />
            </div>
          <button className="hover:underline hover:text-blue-500 duration-200">Home</button>
          <button className="hover:underline hover:text-blue-500 duration-200">About</button>
          <button className="hover:underline hover:text-blue-500 duration-200">Projects</button>
          <button className="hover:underline hover:text-blue-500 duration-200">Contact</button>
        </div>
      )}
    </div>
  );
}

export default ResponsivePage;
