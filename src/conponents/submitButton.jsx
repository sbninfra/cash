import { cn } from "@/lib/utils";

function SubmitButton({ className }) {
  return (
    <div
      className={cn(
        " w-full font-semibold text-lg cursor-pointer text-center py-2 px-4 rounded-full bg-primary  hover:!bg-orange-700 duration-200 text-white",
        className
      )}
    >
      Send Message
    </div>
  );
}

export default SubmitButton;
