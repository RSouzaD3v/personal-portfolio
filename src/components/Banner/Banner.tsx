'use client'
import './banner.css';

const Banner = () => {
    return (
        <main>
            <div className='flex h-[100vh] flex-col justify-center items-center'>
                <h1 className='text-[60px] md:text-[80px] font-bold -mb-5'>RSOUZA<b className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-900'>D3V</b></h1>
                <p className='text-xl'>Solução em tecnologia e desenvolvimento.</p>

                <div className='mt-5 flex items-center gap-3'>
                    <button className='bg-blue-600 hover:bg-blue-700 p-3 rounded-md'>Contratar</button>
                    <button className='hover:bg-blue-600 border border-white transition-all duration-200 ease-in-out p-3 rounded-md'>Saiba Mais</button>
                </div>
            </div>
        </main>
    );
};

export default Banner;
