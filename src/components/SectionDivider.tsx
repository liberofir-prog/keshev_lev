interface SectionDividerProps {
  variant?: "wave" | "curve" | "gentle";
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export default function SectionDivider({
  variant = "wave",
  fillColor = "#FFFFFF",
  className = "",
  flip = false,
}: SectionDividerProps) {
  const paths = {
    wave: "M0,64 C120,100 240,20 360,64 C480,108 600,28 720,64 C840,100 960,20 1080,64 C1200,108 1320,28 1440,64 L1440,128 L0,128 Z",
    curve:
      "M0,96 C360,20 720,120 1080,60 C1260,30 1380,50 1440,80 L1440,128 L0,128 Z",
    gentle:
      "M0,80 C240,100 480,60 720,80 C960,100 1200,60 1440,80 L1440,128 L0,128 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{
        marginTop: "-1px",
        marginBottom: "-1px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="block h-16 w-full sm:h-20 md:h-24 lg:h-28"
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
}
