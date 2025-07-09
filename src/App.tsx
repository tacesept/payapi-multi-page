import DarkLogo from "./assets/dark-logo.svg?react";
import MenuIcon from "./assets/menu-icon.svg?react";
import mobile1 from "/mobile-1.png";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <header>
        <div className=" flex items-center justify-between">
          <nav className="flex items-center gap-15">
            <a href="/">
              <DarkLogo />
            </a>
            <ul className="hidden sm:flex gap-10">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <a href="/" className="hidden sm:block">
            Schedule a Demo
          </a>
          <button className="sm:hidden">
            <MenuIcon />
          </button>
        </div>
      </header>
      <main>
        {/* hero section */}
        <section className="flex flex-col justify-center items-center">
          <figure className="max-w-[260px]">
            <img
              src={mobile1}
              width={525}
              height={999}
              className="w-full h-auto"
            />
          </figure>
          <div>
            <h1>Start building with our APIs for absolutely free.</h1>
            <EmailForm />
            <p>
              Have any questions? <a>Contact Us</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
