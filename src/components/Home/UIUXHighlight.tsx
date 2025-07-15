import SimpleUi from "@/assets/images/home/desktop/illustration-simple-ui.svg";

export default function UIUXHighlight() {
  return (
    <section className="py-25 lg:py-30 px-4 sm:px-8 wrapper-uiux">
      <div className="max-w-[1110px] mx-auto flex gap-4 max-lg:gap-12 max-lg:flex-col-reverse justify-between items-center">
        <div className="autoShow w-3/4 lg:w-1/2 max-lg:text-center">
          <h2 className="text-4xl md:text-6xl lg:whitespace-nowrap font-dms">
            Simple UI & UX
          </h2>
          <p className="mt-4 lg:mt-6 opacity-75">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <div className="imageReveal">
          <img src={SimpleUi} alt="phone" className="w-full" />
        </div>
      </div>
    </section>
  );
}
