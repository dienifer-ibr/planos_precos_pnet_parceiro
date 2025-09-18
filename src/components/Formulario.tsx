import React, { useState, useEffect } from 'react';

const FormularioFront: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState('https://app.mailingboss.com/lists/68cc3a561e4e2/subscribe');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    if (idParam) {
      // adiciona o id como query string no iframe
      setIframeSrc(`https://app.mailingboss.com/lists/68cc3a561e4e2/subscribe?id=${idParam}`);
    }
  }, []);

  

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <iframe
        src={iframeSrc}
        style={{ width: "100%", height: "500px", border: "0", display: "block", marginTop: "20px" }}
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default FormularioFront;
