import Image from "next/image";

import logo from "@/assets/Logo-Cor-WhiteBlack.png";

const About = () => {
    return (
        <div className="p-10 flex justify-between items-center w-full h-screen">
            <div>
                <h1 className="text-[50px] font-bold">Sobre</h1>
                <p className="text-[16px]">
                    Então meu caro amigo(a) e desenvolvedor(a), essa plantaforma é muito mais que um simples anúncio de negócio. <br />
                    Você poderá evoluir junto com <b className="bg-blue-600">RsouzaD3v. </b>
                    Temos como objetivo criar um plantaforma onde conectaremos desenvolvedores. <br />
                    Terá diversos tutoriais e soluções de problemas populares. <b className="text-blue-500">#Em breve teremos diversos canais!</b>
                </p>

                <button className="bg-blue-500 p-2 rounded-md text-xl mt-3">Desejo Fazer Parte do Progresso!</button>
            </div>
            <div className="hidden md:flex w-[250px] bg-white/5 rounded-full p-5">
                <Image src={logo} alt="logotiopo"/>
            </div>
        </div>
    );
};

export default About;