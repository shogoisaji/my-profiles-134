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
                            私はモバイル・Webアプリの開発を行うジュニアエンジニアクリエイターです。素晴らしいプロダクトを創造できるエンジニアを目指しています。以前は製品設計に携わり、お客様に最高の価値を提供できるように心がけていました。現在はより多くの人に喜んでもらえるプロダクトを作るため、日々知識を広めています。
                        </p>
                    </div>
                </div>
                <Skills />
            </div>
        </div>
    )
}
