const Input = ({ error, ...props }) => {
  return (
    <div>
      <input
        className="border border-[#D3D3D3] text-[#6A6A6A] h-[45px] p-2 bg-transparent w-full focus:outline-none placeholder:text-[#6A6A6A]"
        {...props}
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
