import { Link } from "react-router";


export default function NavBar({ children }: { children: React.ReactNode }) {
  return ( 
      <nav className="flex items-center gap-16">
        <Link to="/">{children}</Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> 
  );
}
