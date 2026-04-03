interface ColumnIconProps {
  className?: string;
  opacity?: number;
  variant?: "gold" | "black";
}

export default function ColumnIcon({
  className = "",
  opacity = 0.3,
  variant = "gold",
}: ColumnIconProps) {
  const src =
    variant === "gold" ? "/columna-logo-gold.jpg" : "/columna-logo-black.jpg";

  return (
    <img
      src={src}
      alt="Columna logo"
      className={className}
      style={{ opacity }}
    />
  );
}
