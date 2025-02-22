import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env ANTES de acceder a process.env
dotenv.config();

export default defineConfig(({ mode }) => {
  console.log("Entorno de ejecución:", mode);
  console.log("VITE_INSTANCE desde process.env:", process.env.VITE_INSTANCE);
  console.log("VITE_API_URL desde process.env:", process.env.VITE_API_URL);

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_INSTANCE": JSON.stringify(process.env.VITE_INSTANCE || "default-instance"),
      "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL || "https://api.default.com"),
    },
  };
});
