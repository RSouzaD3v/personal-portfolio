'use client'
import Image from "next/image";
import bgVideo from "@/assets/background-video.jpg"
import { Play } from "lucide-react";
import SenhaPin from "@/components/senhaPin";
import { useState } from "react";

export default function Home() {
  const [callModal, setCallModal] = useState<boolean>(false);

  const chamandoModal = () => {
    if (callModal) {
      setCallModal(false);
    } else {
      setCallModal(true);
    }
  }

  return (
    <div>
      <div className="text-center my-10">
        <h1 className="font-bold uppercase text-2xl">Entenda por que não devemos expor nossos filhos!</h1>
        <p className="text-red-500">Para ver o vídeo abaixo você terá que ter mais de 18 anos.</p>
      </div>

      <div className="flex justify-center my-10 relative">
        <div onClick={chamandoModal} className="w-[290px] h-full rounded-md bg-black 
        overflow-hidden relative">
          <Image className="blur-sm opacity-50" width={290} height={200} src={bgVideo} alt="background"/>
          <Play  className="text-white hover:text-white/75 absolute top-0 left-0 w-full h-full flex items-center justify-center"/>
        </div>
      </div>

      {callModal && 
        <div className="absolute bottom-0 left-0 rounded-t-[50px] w-full flex justify-center items-center bg-black/10 backdrop-blur-sm py-3">
          <SenhaPin />
        </div>
      }

    </div>
  );
}