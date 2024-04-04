import * as React from 'react';

export default function Login(){
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 bordergray-2'> 
            <h1 className='text-5xl font-semibold'>¡Bienvenido!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Para visualizar los laboratorios porfavor introduce tus datos.</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Usuario</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce tu usuario'
                    />
                </div>
                <div>
                <div>
                    <label className='text-lg font-medium'>Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce tu Contraseña'
                    />
                </div>
                </div>
                </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-2 rounded-xl bg-orange-500 text-white text-lg font-bold'>Iniciar Sesion</button>
                    </div>
            </div>
    )
}