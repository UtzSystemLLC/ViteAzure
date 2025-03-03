import React from "react";

function App() {
  const instance = import.meta.env.VITE_INSTANCE || "No definida";
  const apiUrl = import.meta.env.VITE_API_URL || "No definida";

  return (
    <div>
      <h1>🚀¡Hola Mundo desde Vite + React! 🌍</h1>
      <p><strong>Instancia:</strong> {instance}</p>
      <p><strong>API URL:</strong> {apiUrl}</p>
    </div>
  );
}

export default App;
