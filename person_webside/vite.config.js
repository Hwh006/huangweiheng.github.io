import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: https://hwh006.github.io/huangweiheng.github.io/
// (Repo name ≠ GitHub username, so this is not a user root site.)
export default defineConfig({
  plugins: [react()],
  base: "/huangweiheng.github.io/",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});
