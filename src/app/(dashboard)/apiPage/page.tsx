'use client'
import apiThema from "@/constants/apis";
import { useState } from "react";
import { MdApi, MdFileCopy } from "react-icons/md";

const Api = () => {
    const [copiado, setCopiado] = useState(false);
    const [isHidden, setIsHidden] = useState('hidden');
    console.log(copiado); // Apenas para não gerar erro!

    const copiarTexto = (text: string) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiado(true);
          setIsHidden(''); // Exibe a mensagem
          setTimeout(() => {
            setCopiado(false);
            setIsHidden('hidden'); // Oculta a mensagem após 2 segundos
          }, 2000); // Feedback temporário de 2 segundos
        })
        .catch(err => {
          console.error('Falha ao copiar o texto: ', err);
        });
    };

    return(
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold flex items-center gap-2 mt-10">
                <MdApi /> 
                Aqui tem APIs para você testar no seu projeto!
            </h1>

            {/* Mensagem de cópia bem-sucedida */}
            <div className={`${isHidden} fixed bottom-5 right-5 bg-white text-black text-center p-5 rounded-md`}>
                <h1>Copiado com Sucesso</h1>
            </div>

            <div className="mt-20 flex items-center justify-center flex-wrap gap-6">
                {apiThema.map((item, index) => (
                    <div className="bg-white/10 p-10 h-52 border-white rounded-md border-[2px] flex flex-col justify-center" key={index}>
                        <div className="flex flex-col justify-center items-center h-full">
                            <h1 className="text-2xl">{item.title}</h1>
                            <p>{item.link}</p>
                            <p>Method: <b className={`${item.method === 'GET' ? 'text-green-500' : item.method === 'POST' ? 'text-orange-500' : 'text-white'} `}>{item.method}</b></p>
                        </div>

                        {item.method === 'GET' && 
                          <a target="_blank" href={item.link} className="bg-green-500 text-center mt-3 rounded-md p-2 text-white">
                            Ver Json
                          </a>}
                          
                        <button className="flex justify-center items-center gap-2 text-xl mt-2 hover:bg-white/15 rounded-md" 
                                onClick={() => copiarTexto('https://rsouzad3v.com' + item.link)}>
                            <MdFileCopy /> 
                            Copiar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Api;
