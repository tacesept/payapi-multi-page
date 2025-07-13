import { Link } from "react-router";
import EmailForm from "../components/EmailForm";

export default function Home() {
  return (
    <main className="px-4 sm:px-8">
      <section className="max-w-[1110px] mx-auto flex max-lg:flex-col-reverse justify-between items-center mt-8 sm:mt-12 lg:mt-18">
        <div className="lg:w-1/2 flex flex-col gap-4 max-lg:items-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl max-lg:max-w-lg max-lg:text-center">
            Start building with our APIs for absolutely free.
          </h1>
          <EmailForm />
          <p className="text-gray-600">
            Have any questions? <Link to="/contact" className="font-bold hover:underline">Contact Us</Link>
          </p>
        </div>
        <figure className="w-1/2 sm:w-[262px] lg:mr-25 mb-12 lg:mb-0">
          <img
            src="/mobile-1.png"
            alt="mobile phone"
            width={525}
            height={999}
            className="w-full h-auto"
          />
        </figure>
      </section>
    </main>
  );
}
