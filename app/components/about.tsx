import { Skills } from '@/app/components/skills'
import { Sns } from '@/app/components/sns'
import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export const About = () => {
    const ref = useRef(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ about: pageOffsetTop })
    }, [pageOffsetTop])

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center relative text-custom-textWhite"
        >
            <div className="md:w-[80%] w-[90%] bg-slate-500 bg-opacity-70 rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-6xl text-5xl p-4 font-bold">
                    About
                </h1>
                <div className="flex flex-row justify-center items-center md:ml-6 ml-1">
                    <div className="flex flex-col justify-center items-center md:mr-10 mr-6">
                        <Image
                            src="/images/account_image.png"
                            className="md:w-32 w-24"
                            alt="account"
                            width={128}
                            height={128}
                        />
                        <h1 className="text-xl font-semibold my-4">
                            Shogo Isaji
                        </h1>
                        {/* link icons */}
                        <Sns iconSize={28} />
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-[50%] flex-1 md:flex-initial md:mb-6">
                        <p className="md:text-xl mt-4">
                            情報工学系の大学を卒業後、IT系を目指すも叶わず町工場へ就職。マシンオペレータとして働くが、ものづくりの上流の職に興味を持ち、設計職へ転職。企画、開発、設計、生産管理を経験し、お客様に対し如何に価値を提供し、満足して頂くことが大切かを学ぶ。現在は、自分にしか生み出せない価値を生産するため自己を磨いています。
                        </p>
                    </div>
                </div>
                <Skills />
            </div>
        </div>
    )
}
