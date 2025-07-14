import LogoLight from "@/assets/images/light-logo.svg?react";
import { Link } from "react-router";
import NavBar from "./NavBar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 bg-[#1B262F] text-white">
      <div className="max-w-[1110px] mx-auto flex max-md:flex-col gap-10 justify-between items-center py-8 md:py-10 ">
        <NavBar textClass="text-[#FBFCFE]">
          <LogoLight />
        </NavBar>
        <ul className="flex md:hidden flex-col items-center gap-10">
          {["Pricing", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                className="opacity-75 hover:opacity-100 font-bold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/" className="hover:text-[#DA6D97] text-[#FBFCFE]">
              <FaFacebookSquare className=" size-6" />
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#DA6D97] text-[#FBFCFE]">
              <FaTwitter className=" size-6" />
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#DA6D97] text-[#FBFCFE]">
              <FaLinkedin className=" size-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
