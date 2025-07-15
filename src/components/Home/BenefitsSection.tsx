import FinancesIcon from "@/assets/images/home/desktop/icon-personal-finances.svg?react";
import BankingIcon from "@/assets/images/home/desktop/icon-banking-and-coverage.svg?react";
import PaymentsIcon from "@/assets/images/home/desktop/icon-consumer-payments.svg?react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <FinancesIcon />,
      h: "Personal Finances",
      p: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
    },
    {
      icon: <BankingIcon />,
      h: "Banking & Coverage",
      p: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    },
    {
      icon: <PaymentsIcon />,
      h: "Consumer Payments",
      p: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    },
  ];

  return (
    <section className=" px-4 sm:px-8 autoShow">
      <div className="max-w-[1110px] mx-auto flex max-md:flex-col gap-4">
        {benefits.map((benefit) => (
          <article key={benefit.h} className="flex flex-col items-center">
            {benefit.icon}
            <h3 className="text-lg font-bold mt-8">{benefit.h}</h3>
            <p className="text-[#6C8294] text-center mt-4">{benefit.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
