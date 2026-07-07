import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static single page build. No backend, deploys as is to Vercel.
export default defineConfig({
  plugins: [react()],
});
