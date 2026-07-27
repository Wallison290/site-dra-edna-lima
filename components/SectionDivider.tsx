type DividerTone = "background" | "background-alt" | "primary";
type DividerVariant = "curve" | "wave" | "straight";

const toneVar: Record<DividerTone, string> = {
  background: "var(--background)",
  "background-alt": "var(--background-alt)",
  primary: "var(--primary)",
};

const paths: Record<"curve" | "wave", string> = {
  curve: "M0,88 C420,4 1020,4 1440,88 L1440,120 L0,120 Z",
  wave: "M0,58 C180,110 360,6 540,58 C720,110 900,6 1080,58 C1260,110 1350,86 1440,58 L1440,120 L0,120 Z",
};

export function SectionDivider({
  variant,
  from,
  to,
}: {
  variant: DividerVariant;
  from: DividerTone;
  to: DividerTone;
}) {
  if (variant === "straight") {
    return (
      <div
        className="section-divider section-divider-straight"
        style={{ background: toneVar[to] }}
        aria-hidden="true"
      >
        <span />
      </div>
    );
  }

  return (
    <div
      className={`section-divider section-divider-${variant}`}
      style={{ background: toneVar[from] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
        <path d={paths[variant]} fill={toneVar[to]} />
      </svg>
    </div>
  );
}
