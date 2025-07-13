import LogoLight from "../assets/light-logo.svg?react";
import NavBar from "./NavBar";
import FbIcon from "../assets/facebook-icon.svg?react";
import TwIcon from "../assets/twitter-icon.svg?react";
import LdIcon from "../assets/linkedin-icon.svg?react";

export default function Footer() {
  return (
    <header>
      <div className="flex justify-between items-center px-4 md:px-6 py-8 md:py-10 bg-[#1B262F] text-white">
        <NavBar>
          <LogoLight />
        </NavBar>
        <ul className="flex gap-4 items-center">
          <li>
            <button>
              <FbIcon />
            </button>
          </li>
          <li>
            <button>
              <TwIcon />
            </button>
          </li>
          <li>
            <button>
              <LdIcon />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
