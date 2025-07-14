export default function IntegrationExample() {
  return (
    <section className="flex max-lg:flex-col gap-12 lg:gap-30 justify-center items-center mt-25 lg:mt-35">
      <figure>
        <img
          src="/codes.png"
          alt="codes"
          width={445}
          height={284}
          className="w-full h-auto"
        />
      </figure>
      <div className="max-lg:max-w-3/4 w-full max-w-[445px] max-lg:text-center">
        <h2 className="text-4xl md:text-6xl lg:whitespace-nowrap font-dms">
          Easy to implement
        </h2>
        <p className="mt-4 lg:mt-6 opacity-75">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </section>
  );
}
