import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFromWhatsApp, setIsFromWhatsApp] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") === "whatsapp") {
      setIsFromWhatsApp(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("✅ Formulario enviado correctamente");

      // Regresar automáticamente a WhatsApp
      setTimeout(() => {
        goBackToWhatsApp();
      }, 1000);
    }, 2000);
  };

  const goBackToWhatsApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = "intent://send?phone=#PHONE#&text=Gracias!#Intent;scheme=whatsapp;package=com.whatsapp;end;";
    } else if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
      window.location.href = "whatsapp://";
    } else {
      window.location.href = "https://web.whatsapp.com/";
    }
  };

  return (
    <div>
      <h1>🚀 ¡Hola desde la App! 🌍</h1>
      {isFromWhatsApp && <p>📲 Abriste la app desde WhatsApp</p>}

      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Escribir Nombre:
          <input type="text" required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
