export default function ColumnaUnderline({
  width = "short", // "short" | "long"
  color = "accent", // "accent" | "white"
}) {
  const widthClass =
    width === "long"
      ? "w-full left-0 translate-x-0"
      : "w-[60%] left-1/2 -translate-x-1/2";

  const colorClass = color === "white" ? "via-white" : "via-accent";

  return (
    <span className="relative block w-full mt-2 h-[2px]">
      {/* core */}
      <span
        className={`absolute inset-y-0 ${widthClass} bg-gradient-to-r from-transparent ${colorClass} to-transparent`}
      />

      {/* glow */}
      <span
        className={`absolute inset-y-0 ${widthClass} bg-gradient-to-r from-transparent ${colorClass} to-transparent blur-sm opacity-40`}
      />
    </span>
  );
}
