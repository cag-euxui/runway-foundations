import { useEffect, useMemo, useState } from "react";
import {
  BackIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  DiningIcon,
  LoungeIcon,
  PlaneIcon,
  ShieldIcon,
  ShoppingBagIcon,
  SparkleIcon,
} from "./icons";

/**
 * PAX onboarding — "You're flying off!"
 *
 * Column mapping (restated per SKILL Section 2 rules):
 *   Mobile (4-col, 375px, margin 6px, gutter 16px):
 *     - Outer grid:     grid-cols-4, px-6, gap-x-16
 *     - Phone card:     col 1–4 (full-width, no phone-frame styling)
 *     - Inside card:    nested 4-col mobile grid (the card IS the viewport)
 *     - Sticky CTA:     col 1–4 (fixed to viewport bottom)
 *   Tablet (6-col, 768px, margin 32px, gutter 32px):
 *     - Outer grid:     grid-cols-6, px-32, gap-x-32
 *     - Phone card:     col 2–5 (4-of-6 centred, symmetric offset 1|1)
 *   Desktop (12-col, 1280px, margin 80px, gutter 32px):
 *     - Outer grid:     grid-cols-12, px-80, gap-x-32
 *     - Phone card:     col 5–8 (4-of-12 centred, symmetric offset 4|4)
 *
 * Nested-grid note (SKILL § 2.3): inside the phone card the layout
 * re-adopts a fresh 4-col mobile grid because the card renders a
 * mobile-app viewport at every breakpoint. This is the intentional
 * "phone-in-a-window" pattern for the PAX prototype.
 */

type Perk = {
  id: string;
  title: string;
  detail: string;
  status: "Ready" | "Unlocked" | "Available";
  accent: "purple" | "gold" | "iris" | "teal";
  Icon: (props: { className?: string }) => JSX.Element;
};

const PERKS: Perk[] = [
  {
    id: "priority",
    title: "Priority Security Lane",
    detail: "Skip the queue — jets you through in under 5 min.",
    status: "Ready",
    accent: "purple",
    Icon: (p) => <ShieldIcon {...p} />,
  },
  {
    id: "lounge",
    title: "The Private Room",
    detail: "Terminal 3 lounge access, Level 3 · complimentary bites.",
    status: "Unlocked",
    accent: "gold",
    Icon: (p) => <LoungeIcon {...p} />,
  },
  {
    id: "dining",
    title: "S$20 dining voucher",
    detail: "Use at any restaurant airside before 6:00pm.",
    status: "Available",
    accent: "iris",
    Icon: (p) => <DiningIcon {...p} />,
  },
  {
    id: "retail",
    title: "10% off retail",
    detail: "Apply at checkout in-store or in the iShopChangi app.",
    status: "Available",
    accent: "teal",
    Icon: (p) => <ShoppingBagIcon {...p} />,
  },
];

const ACCENT_CLASSES: Record<
  Perk["accent"],
  { chipBg: string; chipText: string; iconBg: string; iconText: string }
> = {
  // All accent tokens map to DLS entries.
  // Purple Primary/200 + /700, Gold/200 + /800, Iris blue/200 + /600, Teal/200 + /600.
  purple: {
    chipBg: "bg-purple-primary-200",
    chipText: "text-purple-primary-700",
    iconBg: "bg-purple-primary-100",
    iconText: "text-purple-primary-700",
  },
  gold: {
    chipBg: "bg-gold-200",
    chipText: "text-gold-800",
    iconBg: "bg-gold-100",
    iconText: "text-gold-800",
  },
  iris: {
    chipBg: "bg-iris-blue-200",
    chipText: "text-iris-blue-600",
    iconBg: "bg-iris-blue-200",
    iconText: "text-iris-blue-600",
  },
  teal: {
    chipBg: "bg-teal-200",
    chipText: "text-teal-600",
    iconBg: "bg-teal-200",
    iconText: "text-teal-600",
  },
};

function formatCountdown(msRemaining: number) {
  const total = Math.max(0, Math.floor(msRemaining / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function useBoardingCountdown() {
  const target = useMemo(() => {
    const t = new Date();
    t.setHours(t.getHours() + 3);
    t.setMinutes(t.getMinutes() + 42);
    t.setSeconds(0);
    return t;
  }, []);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return formatCountdown(target.getTime() - now.getTime());
}

export default function App() {
  const countdown = useBoardingCountdown();
  const [claimed, setClaimed] = useState<Record<string, boolean>>({
    priority: true,
    lounge: true,
  });

  return (
    <div className="min-h-dvh w-full bg-grey-25">
      {/* Outer grid — 4/6/12-col with DLS margins and gutters. */}
      <div
        className="
          grid min-h-dvh w-full
          grid-cols-4 gap-x-16 px-6
          md:grid-cols-6 md:gap-x-32 md:px-32 md:pt-40 md:pb-80
          xl:grid-cols-12 xl:gap-x-32 xl:px-80
        "
      >
        {/* Phone card:
              mobile   → col 1–4 (full width, no card chrome)
              tablet   → col 2–5 (4-of-6 centred)
              desktop  → col 5–8 (4-of-12 centred). */}
        <div
          className="
            col-span-4
            md:col-start-2 md:col-span-4
            xl:col-start-5 xl:col-span-4
            bg-grey-25
            md:rounded-lg md:overflow-hidden md:shadow-light-bg
          "
        >
          <Hero countdown={countdown} />
          <main
            className="
              grid grid-cols-4 gap-x-16
              px-6
              pb-80
              pt-24
            "
          >
            <FlightCard />
            <PerksSection
              claimed={claimed}
              onToggleClaim={(id) =>
                setClaimed((prev) => ({ ...prev, [id]: !prev[id] }))
              }
            />
          </main>
        </div>
      </div>
      <StickyCta />
    </div>
  );
}

function TopBar() {
  return (
    <header
      className="
        flex items-center justify-between
        px-16 pt-16 pb-8
        bg-transparent
      "
    >
      <button
        type="button"
        aria-label="Go back"
        className="
          inline-flex h-40 w-40 items-center justify-center
          rounded-full
          text-white
          hover:bg-grey-alpha-20-light
          transition
        "
      >
        <BackIcon />
      </button>
      <span className="text-all-caps-caption text-white">Trip · Aug 21</span>
      <button
        type="button"
        className="
          text-body-small font-bold text-white
          rounded-full px-12 py-6
          hover:bg-grey-alpha-20-light
          transition
        "
      >
        Skip
      </button>
    </header>
  );
}

function Hero({
  countdown,
}: {
  countdown: { hours: string; minutes: string; seconds: string };
}) {
  return (
    <section
      className="
        relative
        bg-hero-purple
        text-white
        overflow-hidden
      "
      aria-label="Trip reveal"
    >
      {/* TopBar nested inside so the purple hero fully backs it. */}
      <div className="relative z-[1]">
        <TopBar />
      </div>

      {/* Confetti overlay */}
      <div className="pointer-events-none absolute inset-0 bg-confetti opacity-80" />

      {/* Sparkles */}
      {/* text-white/80 = Grey/80% White #FFFFFF token */}
      <SparkleIcon
        className="absolute left-24 top-80 h-16 w-16 text-white/80 animate-sparkle"
        style={{ animationDelay: "0.2s" }}
      />
      <SparkleIcon
        className="absolute left-48 top-200 h-12 w-12 text-gold-500 animate-sparkle"
        style={{ animationDelay: "0.9s" }}
      />
      <SparkleIcon
        className="absolute right-24 bottom-40 h-20 w-20 text-white/80 animate-sparkle"
        style={{ animationDelay: "1.4s" }}
      />

      {/* Drifting plane, Base/White at 100%. Placed BELOW the top bar
          so it doesn't overlap the Skip label. */}
      <div className="absolute right-20 top-96 text-white animate-plane-drift">
        <PlaneIcon className="h-40 w-40" />
      </div>

      <div className="relative grid grid-cols-4 gap-x-16 px-24 pb-32 pt-40">
        <div className="col-span-4 animate-fade-up">
          <p className="text-all-caps-caption text-purple-primary-200">
            You're flying off
          </p>
          <h1 className="mt-8 text-h1-pax leading-[42px] text-white">
            Hello, Tokyo.
          </h1>
          <p className="mt-8 text-subheading text-purple-primary-200">
            SQ 636 · Singapore (SIN) — Tokyo Haneda (HND)
          </p>
        </div>

        <div
          className="
            col-span-4 mt-24
            grid grid-cols-3 gap-x-8
            rounded-lg
            backdrop-light-blur-md
            bg-grey-alpha-10-light
            px-16 py-12
            animate-fade-up
          "
          style={{ animationDelay: "0.15s" }}
          aria-label="Time to boarding"
        >
          <CountdownCell label="Hours" value={countdown.hours} />
          <CountdownCell label="Minutes" value={countdown.minutes} />
          <CountdownCell label="Seconds" value={countdown.seconds} />
        </div>

        <p
          className="
            col-span-4 mt-12
            inline-flex items-center gap-x-6
            text-body-small text-purple-primary-200
            animate-fade-up
          "
          style={{ animationDelay: "0.25s" }}
        >
          <ClockIcon className="h-16 w-16" />
          <span>until boarding at Gate B12</span>
        </p>
      </div>
    </section>
  );
}

function CountdownCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-h3 text-white tabular-nums">{value}</span>
      <span className="text-all-caps-caption text-purple-primary-200 mt-4">
        {label}
      </span>
    </div>
  );
}

function FlightCard() {
  return (
    <article
      className="
        col-span-4
        rounded-lg
        bg-white
        shadow-light-bg
        p-20
        -mt-40
        relative z-[1]
        animate-fade-up
      "
      style={{ animationDelay: "0.3s" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-all-caps-caption text-grey-500">Flight</span>
        <span className="inline-flex items-center gap-x-4 rounded-full bg-green-success-200 px-8 py-2 text-small-tag text-green-success-700">
          <CheckIcon className="h-12 w-12" />
          Checked in
        </span>
      </div>

      <div className="mt-12 grid grid-cols-4 items-end gap-x-16">
        <div className="col-span-2">
          <p className="text-h4 text-grey-900">SIN</p>
          <p className="text-body-small text-grey-500">Singapore</p>
          <p className="mt-8 text-body-small font-bold text-grey-700">
            09:15 SGT
          </p>
        </div>

        <div className="col-span-2 flex flex-col items-end">
          <p className="text-h4 text-grey-900">HND</p>
          <p className="text-body-small text-grey-500">Tokyo Haneda</p>
          <p className="mt-8 text-body-small font-bold text-grey-700">
            17:00 JST
          </p>
        </div>
      </div>

      {/* Route line */}
      <div className="mt-16 flex items-center">
        <span className="h-8 w-8 rounded-full bg-purple-primary-600" />
        <span className="mx-6 flex-1 border-t-2 border-dashed border-purple-primary-300" />
        <span className="text-purple-primary-600">
          <PlaneIcon className="h-16 w-16" />
        </span>
        <span className="mx-6 flex-1 border-t-2 border-dashed border-purple-primary-300" />
        <span className="h-8 w-8 rounded-full bg-purple-primary-600" />
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-x-12">
        <FlightDetail label="Gate" value="B12" />
        <FlightDetail label="Terminal" value="T3" />
        <FlightDetail label="Seat" value="14A" />
      </dl>
    </article>
  );
}

function FlightDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm bg-grey-50 px-12 py-8">
      <dt className="text-all-caps-caption text-grey-500">{label}</dt>
      <dd className="mt-4 text-body-default font-bold text-grey-900">
        {value}
      </dd>
    </div>
  );
}

function PerksSection({
  claimed,
  onToggleClaim,
}: {
  claimed: Record<string, boolean>;
  onToggleClaim: (id: string) => void;
}) {
  const claimedCount = PERKS.filter((p) => claimed[p.id]).length;
  return (
    <section className="col-span-4 mt-32">
      <div className="flex items-baseline justify-between">
        <h2 className="text-h5 text-grey-900">Your Changi perks</h2>
        <span className="text-body-small text-grey-500 tabular-nums">
          {claimedCount}
          <span className="text-grey-300">/{PERKS.length}</span>
        </span>
      </div>
      <p className="mt-4 text-body-small text-grey-500">
        Unlocked for this trip. Tap to activate.
      </p>

      <ul className="mt-16 flex flex-col gap-y-12">
        {PERKS.map((perk, i) => (
          <li
            key={perk.id}
            className="animate-fade-up"
            style={{ animationDelay: `${0.35 + i * 0.08}s` }}
          >
            <PerkRow
              perk={perk}
              claimed={Boolean(claimed[perk.id])}
              onToggleClaim={() => onToggleClaim(perk.id)}
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="
          mt-24 inline-flex w-full items-center justify-center gap-x-4
          text-body-small font-bold text-purple-primary-600
          hover:text-purple-primary-700
          transition
        "
      >
        See all perks
        <ChevronRightIcon className="h-16 w-16" />
      </button>
    </section>
  );
}

function PerkRow({
  perk,
  claimed,
  onToggleClaim,
}: {
  perk: Perk;
  claimed: boolean;
  onToggleClaim: () => void;
}) {
  const accent = ACCENT_CLASSES[perk.accent];
  return (
    <button
      type="button"
      onClick={onToggleClaim}
      className={`
        group
        flex w-full items-center gap-x-16
        rounded-lg
        bg-white
        px-16 py-12
        text-left
        shadow-light-bg
        transition
        hover:-translate-y-[1px]
        active:translate-y-0
      `}
    >
      <span
        className={`
          relative
          inline-flex h-48 w-48 items-center justify-center
          rounded-md
          ${accent.iconBg} ${accent.iconText}
        `}
      >
        <perk.Icon className="h-24 w-24" />
        {claimed && (
          <span
            className="
              absolute -bottom-2 -right-2
              inline-flex h-16 w-16 items-center justify-center
              rounded-full bg-green-success-600 text-white
              ring-2 ring-white
            "
            aria-hidden
          >
            <CheckIcon className="h-10 w-10" strokeWidth={2.5} />
          </span>
        )}
      </span>

      <span className="flex-1">
        <span className="flex items-center gap-x-8">
          <span className="text-body-default font-bold text-grey-900">
            {perk.title}
          </span>
          <span
            className={`
              inline-flex items-center rounded-full px-8 py-2
              text-small-tag
              ${accent.chipBg} ${accent.chipText}
            `}
          >
            {claimed ? "Claimed" : perk.status}
          </span>
        </span>
        <span className="mt-4 block text-body-small text-grey-500">
          {perk.detail}
        </span>
      </span>

      <ChevronRightIcon
        className="h-20 w-20 text-grey-300 transition group-hover:text-purple-primary-600"
      />
    </button>
  );
}

function StickyCta() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-x-0 bottom-0
        pb-24 pt-40
      "
      /* Fade scrim uses only alpha stops on the DLS Grey/Light scale
         (Grey/25 with 0, 40%, 80%, 100% alpha). */
      style={{
        background:
          "linear-gradient(180deg, rgba(252,252,252,0) 0%, rgba(252,252,252,0.40) 40%, rgba(252,252,252,0.80) 70%, #FCFCFC 100%)",
      }}
    >
      {/* Match the outer 4/6/12-col grid so the CTA aligns with the phone card. */}
      <div
        className="
          grid w-full
          grid-cols-4 gap-x-16 px-6
          md:grid-cols-6 md:gap-x-32 md:px-32
          xl:grid-cols-12 xl:gap-x-32 xl:px-80
        "
      >
        <button
          type="button"
          className="
            pointer-events-auto
            col-span-4
            md:col-start-2 md:col-span-4
            xl:col-start-5 xl:col-span-4
            inline-flex h-48 min-w-[240px] w-full
            items-center justify-center gap-x-8
            rounded-full
            bg-purple-primary-600
            px-24
            text-body-default font-bold text-white
            shadow-dark-bg
            transition
            hover:bg-purple-primary-500
            active:bg-purple-primary-700
            focus-visible:outline-none focus-visible:shadow-ring-brand
          "
        >
          <SparkleIcon className="h-16 w-16" />
          Show My Boarding Pass
        </button>
      </div>
    </div>
  );
}
