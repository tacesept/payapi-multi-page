import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [checked, setChecked] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError("This field can’t be empty");
    } else {
      setEmailError("");
      alert("Form submitted!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 p-6 max-w-md mx-auto space-y-6"
    >
      <InputField label="Name" defaultValue="John Appleseed" />
      <InputField
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        isError={!!emailError}
      />
      <InputField label="Company Name" />
      <InputField label="Title" />
      <TextAreaField label="Message" />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          className="accent-rose-600 w-5 h-5 rounded-md"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm text-gray-700">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>

      <button
        type="submit"
        className="bg-slate-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-slate-800 transition"
      >
        Submit
      </button>
    </form>
  );
}

function InputField({
  label,
  value,
  onChange,
  defaultValue,
  error,
  isError,
}: {
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  error?: string;
  isError?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label
        className={`text-sm font-medium ${
          isError ? "text-rose-600" : "text-gray-800"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`border-b-2 outline-none py-2 placeholder-gray-400 text-gray-800 bg-transparent
          ${
            isError
              ? "border-rose-600"
              : "border-gray-400 focus:border-gray-800"
          }
        `}
        placeholder={label}
      />
      {isError && <p className="text-sm text-rose-600 mt-1">{error}</p>}
    </div>
  );
}

function TextAreaField({ label }: { label: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-800">{label}</label>
      <textarea
        rows={3}
        placeholder={label}
        className="border-b-2 border-gray-400 focus:border-gray-800 outline-none py-2 bg-transparent text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
