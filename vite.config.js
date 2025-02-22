import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_INSTANCE": JSON.stringify(process.env.VITE_INSTANCE || "default-instance"),
    "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL || "https://api.default.com"),
  },
});
