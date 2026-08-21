import type { SVGProps } from "react";

/**
 * Inline SVG icon primitives.
 *
 * The Runway DLS forbids emoji anywhere in generated UI (Section 3 of
 * runway-dls-usage-guide.md). No official CAG icon set is available in
 * this workspace, so these primitives are minimal line/fill SVGs that
 * stand in for the perk affordances (plane, lounge chair, shield,
 * dining voucher, retail bag, sparkles). They use `currentColor` so
 * DLS colour tokens are still the single source of colour.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function PlaneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 14.5 21 5.5l-3 12L14 15l-3 4-1.5-4.5L5 13.5z" />
      <path d="m14 15-3 4" />
    </svg>
  );
}

export function BackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function LoungeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8" />
      <path d="M4 17h16" />
      <path d="M7 17v2" />
      <path d="M17 17v2" />
      <path d="M8 13h8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function DiningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3v18" />
      <path d="M6 8c-1.5 0-2.5-1-2.5-2.5V3" />
      <path d="M6 8c1.5 0 2.5-1 2.5-2.5V3" />
      <path d="M15 3c-2 0-3 2-3 5s1 4 3 4v9" />
    </svg>
  );
}

export function ShoppingBagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props} strokeWidth={1.5}>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
