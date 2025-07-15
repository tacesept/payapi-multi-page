import { Button } from "@/components/ui/button";
import { Link } from "react-router";

import TeslaLogo from "@/assets/images/shared/desktop/tesla.svg?react";
import OracleLogo from "@/assets/images/shared/desktop/oracle.svg?react";
import HpLogo from "@/assets/images/shared/desktop/hewlett-packard.svg?react";
import MicrosoftLogo from "@/assets/images/shared/desktop/microsoft.svg?react";
import NvidiaLogo from "@/assets/images/shared/desktop/nvidia.svg?react";
import GoogleLogo from "@/assets/images/shared/desktop/google.svg?react";

export default function PartnersSection() {
  return (
    <section className="bg-[#1B262F] text-[#FBFCFE] py-22 lg:py-25 max-lg:mt-25 wrapper-parnters">
      <div className="max-w-[1110px] mx-auto flex gap-16 max-lg:flex-col-reverse items-center justify-between px-4 sm:px-8">
        <div className="autoShowmax-lg:w-4/5 flex-1 max-lg:text-center">
          <h2 className="text-4xl md:text-6xl font-dms">Who we work with</h2>
          <p className="mt-4 lg:mt-6 opacity-75">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Button variant="aboutUs" size="custom" className="mt-8" asChild>
            <Link to="/about">About Us</Link>
          </Button>
        </div>
        <div className="space-y-10 text-white imageReveal">
          <span className="flex justify-between gap-6">
            <TeslaLogo />
            <MicrosoftLogo />
            <HpLogo />
          </span>
          <span className="flex justify-between gap-6">
            <OracleLogo />
            <GoogleLogo />
            <NvidiaLogo />
          </span>
        </div>
      </div>
    </section>
  );
}
