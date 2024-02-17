import { Skills } from '@/app/components/skills'
import { Sns } from '@/app/components/sns'
import Image from 'next/image'

export const About = () => {
    return (
        <div className="flex flex-col items-center justify-center relative text-custom-textWhite">
            <div className="md:w-[80%] w-[90%] bg-slate-500 backdrop-blur bg-opacity-50 md:rounded-3xl rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-7xl text-4xl p-4 font-black">
                    About
                </h1>
                <div className="flex flex-row justify-center items-center md:ml-6 ml-1">
                    <div className="flex flex-col justify-center items-center md:mr-10 mr-6">
                        <div className="hover:saturate-100 hover:scale-110 scale-100 filter saturate-5 transition-all duration-300">
                            <Image
                                src="/images/account_image.png"
                                className="md:w-32 w-24"
                                alt="account"
                                width={128}
                                height={128}
                            />
                        </div>
                        <h1 className="text-xl font-semibold my-4">
                            Shogo Isaji
                        </h1>
                        {/* link icons */}
                        <Sns iconSize={28} gridCount={2} />
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
