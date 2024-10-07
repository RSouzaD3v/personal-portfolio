'use client'
import { Delete } from "lucide-react";
import { useState } from "react";

const SenhaPin = () => {
    const [pinDigits, setPinDigits] = useState<number[]>([]);
    const [active, setActive] = useState<boolean>(false);

    const col1 = [
        {
            number: 1,
            letter: ''
        },
        {
            number: 2,
            letter: 'ABC'
        },
        {
            number: 3,
            letter: 'DEF'
        },
    ];
    const col2 = [
        {
            number: 4,
            letter: 'GHI'
        },
        {
            number: 5,
            letter: 'JKL'
        },
        {
            number: 6,
            letter: 'MNO'
        },
    ];
    const col3 = [
        {
            number: 7,
            letter: 'PQRS'
        },
        {
            number: 8,
            letter: 'TUV'
        },
        {
            number: 9,
            letter: 'WXYZ'
        },
    ];

    const addDigit = (digit: number) => {
        setPinDigits([...pinDigits, digit]);

        if(pinDigits.length > 3) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const deleteDigit = () => {
        if (pinDigits.length > 0) {
            const newPinDigits = [...pinDigits];
            newPinDigits.pop();
            setPinDigits(newPinDigits);
        }
    };

    const handleOkButtonClick = () => {
        // Aqui você pode implementar a lógica para validar o PIN, por exemplo.
        console.log('PIN digitado:', pinDigits.join(''));
        // Implemente sua lógica de validação aqui
    };

    return(
        <div className="w-[320px] flex flex-col items-center justify-center">
            <div className="text-center">
                {pinDigits.length < 1 &&
                    <div>
                        <h3 className="font-semibold text-xl">Inserir PIN</h3>
                        <p>Seu PIN contém pelo menos 4 dígitos</p>
                    </div>
                
                }

                <div className="flex justify-center">
                    {pinDigits.map((digit, index) => (
                            <div key={index}>
                                <input className="w-[20px] text-center bg-transparent border-none" type="password" value={digit}/>
                            </div>
                    ))}
                </div>
            </div>


            <div>
                <div className="flex flex-col">
                    <div className="flex gap-6">
                        {col1.map((val, i) => (
                            <div onClick={() => addDigit(val.number)}
                            className="mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-white/40 hover:bg-white/50 rounded-full" key={i}>
                                <h2 className="-mb-1 text-xl font-bold">{val.number}</h2>
                                <p className="text-[8px] -mb-2">{val.letter}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6">
                        {col2.map((val, i) => (
                            <div onClick={() => addDigit(val.number)}
                            className="mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-white/40 hover:bg-white/50 rounded-full" key={i}>
                                <h2 className="-mb-1 text-xl font-bold">{val.number}</h2>
                                <p className="text-[8px] -mb-2">{val.letter}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6">
                        {col3.map((val, i) => (
                            <div onClick={() => addDigit(val.number)}
                            className="mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-white/40 hover:bg-white/50 rounded-full" key={i}>
                                <h2 className="-mb-1 text-xl font-bold">{val.number}</h2>
                                <p className="text-[8px] -mb-2">{val.letter}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-6 items-center">
                        <div onClick={deleteDigit}
                            className="mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-transparent hover:bg-white/30 rounded-full">
                                <Delete width={35}/>
                        </div>
                        <div onClick={() => addDigit(0)}
                            className="mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-white/40 hover:bg-white/50 rounded-full">
                                <h2 className="-mb-1 text-xl font-bold">0</h2>
                                <p className="text-[8px] -mb-2"></p>
                        </div>
                        <div onClick={handleOkButtonClick}
                            className={` ${active === true ? 'opacity-100' : 'opacity-80'} mt-5 w-[65px] h-[65px] flex
                            flex-col items-center justify-center bg-transparent hover:bg-white/30 rounded-full`}>
                                OK
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SenhaPin;