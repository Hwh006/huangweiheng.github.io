import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site: https://huangweiheng.github.io — serve from repo /docs on main branch
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});
