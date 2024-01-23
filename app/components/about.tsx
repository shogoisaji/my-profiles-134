import Link from 'next/link'

export const About = () => {
    return (
        <div className="flex items-center justify-center py-8 bg-custom-green relative">
            <div className="absolute left-0 -rotate-90 md:block hidden">
                <h1 className="text-5xl font-bold">About</h1>
            </div>
            <div className="flex flex-row justify-center items-center ml-6">
                <div className="flex flex-col justify-center items-center mr-10">
                    <img
                        src="/images/account-image.png"
                        className="w-32"
                        alt="account"
                    />
                    <h1 className="text-xl font-semibold my-4">Shogo Isaji</h1>
                    {/* link icons */}
                    <div className="flex flex-row w-32 justify-between">
                        <Link href="https://github.com/shogoisaji">
                            <img
                                src="/images/github.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="github"
                            />
                        </Link>
                        <Link href="https://zenn.dev/s134">
                            <img
                                src="/images/zenn.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="zenn"
                            />
                        </Link>
                        <Link href="https://twitter.com/_isaji134">
                            <img
                                src="/images/x.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="x"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[50%] ">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <p className="text-xl mt-4">
                            情報工学系の大学を卒業後、IT系を目指すも叶わず町工場へ就職。マシンオペレーターとして働くが、ものづくりの上流の職に興味を持ち、設計職へ転職。企画、開発、設計、生産管理を経験し、お客様に対し如何に価値を提供し、満足して頂くことが大切かを学ぶ。現在は、自分にしか生み出せない価値を生産するため自己を磨いている。最近は夢中でコード書いてます！最高な人生をありがとう！
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
