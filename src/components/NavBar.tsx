import { Link } from "react-router";

export default function NavBar({
  children,
  textClass = "text-steel-blue",
}: {
  children: React.ReactNode;
  textClass?: string;
}) {
  return (
    <nav className={`flex items-center gap-16 ${textClass}`}>
      <Link to="/">{children}</Link>
      <ul className="hidden md:flex items-center gap-10">
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
    </nav>
  );
}
