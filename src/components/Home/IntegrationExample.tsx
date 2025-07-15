import EasyToImplement from "@/assets/images/home/desktop/illustration-easy-to-implement.svg";

export default function IntegrationExample() {
  return (
    <section className="px-4 sm-px-8 mt-25">
      <div className="max-w-[1110px] mx-auto flex max-lg:flex-col justify-between items-center">
        <div className="imageReveal">
          <img src={EasyToImplement} alt="phone" className="w-full" />
        </div>
        <div className="autoShow w-3/4 lg:w-1/2 max-lg:text-center">
          <h2 className="text-4xl md:text-6xl lg:whitespace-nowrap font-dms">
            Easy to implement
          </h2>
          <p className="mt-4 lg:mt-6 opacity-75">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
    </section>
  );
}
