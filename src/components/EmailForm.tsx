import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("Submitted", data);

    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };
  return (
    <>
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-md:flex-col max-md:gap-4 items-center bg-transparent md:bg-white md:rounded-full md:shadow-md overflow-hidden w-full sm:max-w-md"
      >
        <input
          type="email"
          placeholder="Enter email address"
          className="md:flex-1 px-4 py-3 text-sm text-steel-blue placeholder-gray-400 focus:outline-none 
          max-md:w-full max-md:rounded-full max-md:shadow-md max-md:bg-white"
          {...register("email")}
        />

        <Button variant="pill" size="custom" disabled={isSubmitting}>
          Schedule a Demo
        </Button>
      </form>
    </>
  );
}
