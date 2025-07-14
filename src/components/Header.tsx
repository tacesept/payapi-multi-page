import NavBar from "./NavBar";
import LogoDark from "@/assets/images/dark-logo.svg?react";
import MenuIcon from "@/assets/images/menu-icon.svg?react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 md:px-8">
      <div className="flex justify-between items-center mt-10 max-w-[1110px] mx-auto ">
        <NavBar>
          <LogoDark />
        </NavBar>
        <div className="hidden md:block">
          <Button variant="pill" size="custom">
            Schedule a Demo
          </Button>
        </div>
        <button className="md:hidden">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
