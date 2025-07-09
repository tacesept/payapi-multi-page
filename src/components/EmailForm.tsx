import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: EmailFormData) => {
    console.log("Submitted:", data);
    reset(); // Clear form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-4 bg-white shadow rounded-xl space-y-4"
    >
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <input
        id="email"
        type="email"
        {...register("email")}
        placeholder="you@example.com"
        className={`w-full px-4 py-2 border ${
          errors.email ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          errors.email ? "focus:ring-red-400" : "focus:ring-orange-400"
        }`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow transition"
      >
        Subscribe
      </button>

      {isSubmitSuccessful && !errors.email && (
        <p className="text-green-600 text-sm mt-2">Thanks for subscribing!</p>
      )}
    </form>
  );
}
