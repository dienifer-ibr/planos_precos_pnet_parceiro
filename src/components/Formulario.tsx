import React, { useState, useEffect } from 'react';

const FormularioFront: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
  <div
    id="contato"
    style={{
      width: "80%",
      maxWidth: "800px",
      margin: "0 auto",
      background: "#1E40AF",
      padding: "20px",
      borderRadius: "20px",
      color: "#ffffff",
      marginTop: "150px",
      marginBottom: "100px"
    }}
  >
    <h1 style={{ fontWeight: "bold", marginTop: "20px", marginBottom: "20px", textAlign: "center" }}>Solicite contato agora!</h1>
    <hr />

    <form
      action="https://app.mailingboss.com/lists/68cd8de988d34/subscribe"
      method="post"
    >
      <div className="form-group" style={{ marginBottom: "20px", marginTop: "30px" }}>
        <label htmlFor="FNAME">Nome</label>
        <input
          className="form-control"
          required
          placeholder="Informe seu Nome"
          name="FNAME"
          type="text"
          id="FNAME"
          style={{ width: "100%", padding: "8px", borderRadius: "20px" }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "20px" }}>
        <label htmlFor="EMAIL">E-mail</label>
        <input
          className="form-control"
          required
          placeholder="Informe seu melhor E-mail"
          name="EMAIL"
          type="email"
          id="EMAIL"
          style={{ width: "100%", padding: "8px", borderRadius: "20px"  }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "20px" }}>
        <label htmlFor="PHONE">Telefone</label>
        <input
          className="form-control"
          required
          placeholder="Informe seu Telefone"
          name="PHONE"
          type="text"
          id="PHONE"
          style={{ width: "100%", padding: "8px", borderRadius: "20px"  }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: "20px" }}>
        <label htmlFor="ID">Alguém te indicou a ParanhanaNet?</label>
        <input
          className="form-control"
          placeholder="Se sim, informe aqui"
          name="ID"
          type="text"
          id="ID"
          style={{ width: "100%", padding: "8px", borderRadius: "20px"  }}
        />
      </div>

      <input
        type="submit"
        className="btn btn-default"
        value="Enviar"
        style={{
          background: "#f2f2f2",
          border: "1px solid #ccc",
          padding: "8px 50px",
          cursor: "pointer", 
          borderRadius: "20px", 
          alignContent: "center",
          display: "block",
          margin: "20px auto",
          marginTop: "50px",
          color: "#1E40AF",
          fontWeight: "bold"
        }}
      />
    </form>
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
