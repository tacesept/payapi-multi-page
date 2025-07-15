import EmailForm from "./EmailForm";

export default function ReadyToStart() {
  return (
    <section className="px-4 md:px-8 my-20 md:my-24">
      <div className="max-w-[1110px] mx-auto flex max-md:flex-col gap-10 justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-dms text-steel-blue whitespace-nowrap">
          Ready to start?
        </h2>
        <EmailForm />
      </div>
    </section>
  );
}
