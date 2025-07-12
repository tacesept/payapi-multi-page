import NavBar from "./NavBar";
import LogoDark from "../assets/dark-logo.svg?react";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <NavBar>
          <LogoDark />
        </NavBar>
        <button className="whitespace-nowrap">Schedule a Demo</button>
      </div>
    </header>
  );
} 