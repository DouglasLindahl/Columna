export default function ColumnaLight() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {/* Base cloudy texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.16]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="paperTexture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="8"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.18 0
              "
            />
          </filter>

          <pattern
            id="paperPattern"
            x="0"
            y="0"
            width="220"
            height="220"
            patternUnits="userSpaceOnUse"
          >
            <rect width="220" height="220" filter="url(#paperTexture)" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#paperPattern)" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.06),transparent_32%),radial-gradient(circle_at_72%_36%,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_52%_78%,rgba(255,255,255,0.035),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_6px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.22)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,106,0.025),transparent_70%)]" />
    </div>
  );
}
