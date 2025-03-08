import React, { useState } from "react";

function App() {
  const instance = import.meta.env.VITE_INSTANCE || "No definida";
  const apiUrl = import.meta.env.VITE_API_URL || "No definida";

  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simular tiempo de respuesta del backend (2 segundos)
    setTimeout(() => {
      const simulatedResponse = { status: "OK" }; // Simulando que el backend responde bien

      if (simulatedResponse.status === "OK") {
        console.log("✅ Formulario enviado correctamente");

        // Regresar a WhatsApp después de 1 segundo
        setTimeout(() => {
          window.location.href = "whatsapp://";
        }, 1000);
      } else {
        setError("Hubo un problema al enviar el formulario.");
      }

      setIsSubmitting(false);
    }, 2000); // Simula un retraso de 2 segundos
  };

  return (
    <div>
      <h1>🚀 ¡Hola Mundo desde Vite + React! 🌍</h1>
      <p><strong>Instancia:</strong> {instance}</p>
      <p><strong>API URL:</strong> {apiUrl}</p>

      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Escribir Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
