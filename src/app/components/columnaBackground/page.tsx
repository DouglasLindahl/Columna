export default function ColumnaBackground() {
  return (
    <>
      {/* SVG filter definition (invisible) */}
      <svg width="0" height="0" className="absolute">
        <filter id="noise-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="6"
            seed="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.25" />
          </feComponentTransfer>
          <feBlend mode="overlay" in="SourceGraphic" />
        </filter>
      </svg>

      {/* Full-screen noise layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            filter: "url(#noise-texture)",
          }}
        />
      </div>
    </>
  );
}
