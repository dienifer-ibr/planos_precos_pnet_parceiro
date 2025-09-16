import { useEffect, useState } from "react";

const FormParceiro = () => {
     const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");
    setId(idParam);
  }, []);

  console.log("ID do parceiro:", id);

    return (

        <section id="FormParceiro" className="relative" >
            <div className="relative z-10 flex flex-col items-center mb-24">

                <h1 className="text-4xl font-bold text-primary mt-24">Contato</h1>
                <p className="text-lg text-muted-foreground text-blue-800 text-center mt-4">
                    Preencha com suas informações para contato
                </p>
                <iframe
                    src={`https://ibrsistemas-form-parceiro.site.builderallsite.com${id ? `?id=${id}` : ""
                        }`}
                    width="100%"
                    height="300">
                </iframe>
            </div>
        </section>
    )

}

export default FormParceiro;