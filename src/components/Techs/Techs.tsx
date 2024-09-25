import listTechs from "@/constants/techs";
import Image from "next/image";

const Techs = () => {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <h1 className="text-[40px] md:text-[50px] font-bold">ESPECIALIDADES</h1>

            <div className="flex items-center justify-center gap-5 flex-wrap my-5">
                {listTechs.map((item, index) => (
                    <div className="p-5 w-[120px] h-[165px] md:w-[200px] flex flex-col justify-center items-center rounded-md md:h-[245px] bg-white/10 border border-white" key={index}>
                        <Image src={item.imagem} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Techs;