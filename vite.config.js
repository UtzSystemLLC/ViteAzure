import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables desde .env

export default defineConfig(({ mode }) => {
  console.log("Entorno de ejecución:", mode);
  console.log("VITE_INSTANCE desde dotenv:", process.env.VITE_INSTANCE);
  console.log("VITE_API_URL desde dotenv:", process.env.VITE_API_URL);

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_INSTANCE": JSON.stringify(process.env.VITE_INSTANCE || "default-instance"),
      "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL || "https://api.default.com"),
    },
  };
});
