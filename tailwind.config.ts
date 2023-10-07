import type { Config } from "tailwindcss";
import { shadcnPreset } from "./lib/shadcn-preset";

const config: Config = {
  presets: [shadcnPreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  plugins: []
} satisfies Config;

export default config;
