function Button({ variant, children, onClick, size }) {
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",

    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",

    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-2 text-lg",
  };
  return (
    <>
      <button
        onClick={onClick}
        className={` rounded-md font-medium transition-colors   ${variantClasses[variant]} ${sizeClasses[size]} `}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
