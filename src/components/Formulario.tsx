import { noop } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

const FormularioFront: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState('https://app.mailingboss.com/lists/68cd8de98368d/subscribe');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

      setIframeSrc(`https://app.mailingboss.com/lists/68cd8de98368d/subscribe`);
    });

  const isMobile = window.innerWidth <= 768; 
  const iframeStyle = {
    width: "100%",
    height: isMobile ? "480px" : "580px", 
    border: "0",
    display: "block",
    marginTop: isMobile ? "50px" : "150px",
    marginBottom: isMobile ? "50px" : "100px",
  };
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <iframe style={iframeStyle} src="https://app.mailingboss.com/lists/68cd8de98368d/subscribe" scrolling="no"></iframe>
    </div>
  );
};

export default FormularioFront;



//--------------------------------------------------/PARCEIRO-------------------------------------------------------------
// import React, { useState, useEffect } from 'react';

// const FormularioFront: React.FC = () => {
//   const [iframeSrc, setIframeSrc] = useState('https://app.mailingboss.com/lists/68cc3a561e4e2/subscribe');

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const idParam = params.get("id");

//     if (idParam) {
//       setIframeSrc(`https://app.mailingboss.com/lists/68cc3a561e4e2/subscribe?id=${idParam}`);
//     }
//   }, []);

  

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//       <iframe
//         src={iframeSrc}
//         style={{ width: "100%", height: "500px", border: "0", display: "block", marginTop: "20px" }}
//         scrolling="no"
//       ></iframe>
//     </div>
//   );
// };

// export default FormularioFront;
