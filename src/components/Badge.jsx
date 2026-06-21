function Badge({label, color}) {
  const colorClasses = {
    green: " bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: " bg-yellow-100 text-yellow-800",
    blue: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={`rounded-full px-3 py-1  text-xs font-medium ${colorClasses[color]}`}
    >
      {label}
    </span>
  );
}

export default Badge;
