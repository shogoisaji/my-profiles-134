'use client'

import Rive from '@rive-app/react-canvas'
import Image from 'next/image'

export const History = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full relative text-custom-textWhite">
            <div className="md:w-[80%] w-[90%] bg-slate-500 backdrop-blur bg-opacity-50 md:rounded-3xl rounded-xl">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="flex flex-col justify-between">
                        <h1 className="flex flex-row justify-start z-20 w-full md:text-7xl text-4xl pt-4 pl-4 font-black">
                            History
                        </h1>
                        <Image
                            src="/images/history.png"
                            className="md:block hidden p-12 w-full"
                            alt="store"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="md:w-[50%] w-[92%] h-auto aspect-w-1 aspect-h-1 m-4 pl-2 bg-slate-400 bg-opacity-20 rounded-xl">
                        <Rive src={'rive/history.riv'} stateMachines="state" />
                    </div>
                </div>
            </div>
        </div>
    )
}
