import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Cargar variables de entorno en local

  console.log("Entorno de ejecución:", mode);
  console.log("VITE_INSTANCE desde Vite:", env.VITE_INSTANCE);
  console.log("VITE_API_URL desde Vite:", env.VITE_API_URL);

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_INSTANCE": JSON.stringify(env.VITE_INSTANCE || "default-instance"),
      "import.meta.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL || "https://api.default.com"),
    },
  };
});
