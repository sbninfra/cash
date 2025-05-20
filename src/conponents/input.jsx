import { cn } from "@/lib/utils";

function Input({ title, placeholder, value, onChange, className }) {
  return (
    <div className={cn(" w-full flex flex-col gap-1", className)}>
      <p className=" font-medium">{title}</p>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md py-1.5 px-2 bg-white"
      />
    </div>
  );
}

export default Input;
