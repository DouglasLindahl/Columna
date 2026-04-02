interface ColumnIconProps {
  className?: string;
  opacity?: number;
}

export default function ColumnIcon({
  className = "",
  opacity = 0.3,
}: ColumnIconProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Base */}
      <rect x="10" y="180" width="100" height="8" fill="#C8A96A" />

      {/* Column shaft - thin lines */}
      <line x1="20" y1="40" x2="20" y2="180" stroke="#C8A96A" strokeWidth="1" />
      <line x1="40" y1="40" x2="40" y2="180" stroke="#C8A96A" strokeWidth="1" />
      <line x1="60" y1="40" x2="60" y2="180" stroke="#C8A96A" strokeWidth="1" />
      <line x1="80" y1="40" x2="80" y2="180" stroke="#C8A96A" strokeWidth="1" />
      <line
        x1="100"
        y1="40"
        x2="100"
        y2="180"
        stroke="#C8A96A"
        strokeWidth="1"
      />

      {/* Capital */}
      <rect x="10" y="32" width="100" height="8" fill="#C8A96A" />

      {/* Top decorative lines */}
      <line
        x1="5"
        y1="25"
        x2="115"
        y2="25"
        stroke="#C8A96A"
        strokeWidth="1.5"
      />
      <line x1="5" y1="20" x2="115" y2="20" stroke="#C8A96A" strokeWidth="1" />
    </svg>
  );
}
