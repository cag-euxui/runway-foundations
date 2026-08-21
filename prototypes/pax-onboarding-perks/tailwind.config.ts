import type { Config } from "tailwindcss";

/**
 * Runway DLS token mirror.
 *
 * Every value below is copied verbatim from runway-foundations/SKILL.md
 * (Sections 3, 5, 7, 8, 9). Do not introduce hex/px values here that are
 * not already named tokens in the DLS. Extended palette entries only
 * appear when explicitly referenced in a design description.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    // Reset the default palette so DLS tokens are the ONLY colour source
    // (prevents accidental use of `text-red-500` etc. from Tailwind defaults).
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#121212",
      grey: {
        25: "#FCFCFC",
        50: "#F7F7F7",
        75: "#F0F0F0",
        100: "#E5E5E5",
        200: "#CCCCCC",
        300: "#ABABAB",
        400: "#999999",
        500: "#7A7A7A",
        600: "#5E5E5E",
        700: "#454545",
        800: "#2F2F2F",
        900: "#222222",
      },
      "grey-alpha": {
        "10-light": "rgba(252, 252, 252, 0.10)",
        "20-light": "rgba(252, 252, 252, 0.20)",
        "40-light": "rgba(252, 252, 252, 0.40)",
        "80-light": "rgba(252, 252, 252, 0.80)",
      },
      "purple-primary": {
        100: "#F9F5FC",
        200: "#ECE0F5",
        300: "#D5BBEA",
        400: "#AB76D5",
        500: "#8F58BE",
        600: "#7A35B0",
        700: "#671A9D",
        800: "#4D0A76",
        900: "#270641",
      },
      "orange-warning": {
        100: "#FEF5E7",
        200: "#FCE1B6",
        300: "#F9C26C",
        400: "#F5A01A",
        500: "#F5831E",
        600: "#F2721B",
        700: "#E06A27",
        800: "#C65D00",
        900: "#994400",
      },
      "green-success": {
        100: "#F3F9F3",
        200: "#DAEDD9",
        300: "#BBE2C1",
        400: "#48BB78",
        500: "#369F62",
        600: "#008545",
        700: "#017031",
        800: "#026529",
        900: "#005C30",
      },
      "red-error": {
        200: "#FFE3E0",
        600: "#CC1000",
      },
      // Extended palette entries used in this prototype only.
      gold: {
        100: "#FBF8F5",
        200: "#F2EADF",
        500: "#CBAC7E",
        600: "#BE975E",
        800: "#8D7046",
      },
      "iris-blue": {
        200: "#E2F9FE",
        600: "#008FBA",
      },
      teal: {
        200: "#DEF8F4",
        600: "#008272",
      },
      pink: {
        200: "#FFE6F2",
        500: "#FF45A3",
        600: "#FF1F90",
      },
    },
    fontFamily: {
      // Sole typeface per SKILL.md Section 5.1.
      lato: ['"Lato"', "sans-serif"],
    },
    fontSize: {
      // (font-size, line-height) pairs — each mirrors a DLS composite style.
      "small-tag": ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
      "small-text": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
      "body-small": ["0.875rem", { lineHeight: "1.125rem", fontWeight: "400" }],
      "body-default": ["1rem", { lineHeight: "1.25rem", fontWeight: "400" }],
      subheading: ["1.125rem", { lineHeight: "1.375rem", fontWeight: "400" }],
      h6: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }],
      h5: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
      h4: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "700" }],
      h3: ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
      h2: ["2.25rem", { lineHeight: "2.625rem", fontWeight: "700" }],
      // PAX H1 override: Lato Black (900), 36px, LH 42px.
      "h1-pax": ["2.25rem", { lineHeight: "2.625rem", fontWeight: "900" }],
      "all-caps-caption": [
        "0.75rem",
        { lineHeight: "1rem", fontWeight: "700", letterSpacing: "6px" },
      ],
    },
    spacing: {
      // "none" mirrors SKILL.md § 7.1 (`spacing-none`). The numeric "0"
      // alias exists solely so Tailwind's inset/top/right/bottom/left
      // utilities (which key on `spacing.0`) still resolve to the same
      // DLS zero-value — no new spacing token is introduced.
      none: "0",
      0: "0",
      2: "0.125rem",
      4: "0.25rem",
      6: "0.375rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
      80: "5rem",
      96: "6rem",
      128: "8rem",
      200: "12.5rem",
    },
    borderRadius: {
      none: "0px",
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      full: "128px",
    },
    boxShadow: {
      // shadow-light-bg: 0 6 20 #121212 @ 8%
      "light-bg": "0 6px 20px rgba(18, 18, 18, 0.08)",
      // shadow-dark-bg: 0 10 24 #121212 @ 24%
      "dark-bg": "0 10px 24px rgba(18, 18, 18, 0.24)",
      // ring-brand focus outline (2px offset, 2px solid #7A35B0).
      "ring-brand": "0 0 0 2px #FFFFFF, 0 0 0 4px #7A35B0",
    },
    extend: {
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-med": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "plane-drift": {
          "0%": { transform: "translateX(-8px) translateY(2px) rotate(-6deg)" },
          "50%": { transform: "translateX(0) translateY(-4px) rotate(-2deg)" },
          "100%": {
            transform: "translateX(-8px) translateY(2px) rotate(-6deg)",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 4.5s ease-in-out infinite",
        "float-med": "float-med 3.2s ease-in-out infinite",
        sparkle: "sparkle 2.6s ease-in-out infinite",
        "plane-drift": "plane-drift 6s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
