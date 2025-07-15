import NavBar from "./NavBar";
import Logo from "@/assets/images/shared/desktop/logo.svg?react";
import MenuIcon from "@/assets/images/shared/mobile/menu.svg?react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="px-4 md:px-8">
      <div className="flex justify-between items-center max-w-[1110px] mx-auto bg-[url(/bg-3-mobile.png)] bg-no-repeat bg-top">
        <NavBar>
          <Logo />
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
