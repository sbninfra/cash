function Input({ title, placeholder, value, onChange }) {
  return (
    <div className=" w-full flex flex-col gap-1">
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
