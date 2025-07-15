import { Link } from "react-router";
import EmailForm from "@/components/EmailForm";
import PhoneMockup from "@/assets/images/home/desktop/illustration-phone-mockup.svg";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-8 max-w-[1110px] mx-auto flex max-lg:flex-col-reverse justify-between items-center">
      <div className="lg:w-1/2 flex flex-col gap-4 max-lg:items-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl max-lg:max-w-lg max-lg:text-center font-dms text-steel-blue">
          Start building with our APIs for absolutely free.
        </h1>
        <EmailForm />
        <p className="text-gray-600">
          Have any questions?{" "}
          <Link to="/contact" className="font-bold hover:underline">
            Contact Us
          </Link>
        </p>
      </div>
      <div>
        <img
          src={PhoneMockup}
          alt="phone"
          className="w-full"
        />
      </div>
    </section>
  );
}
