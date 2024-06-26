import Image from 'next/image'

export const Career = () => {
    return (
        <div className="flex flex-col justify-center items-center relative text-custom-textWhite">
            <div className="md:w-[80%] w-[90%] bg-slate-500 backdrop-blur bg-opacity-50 md:rounded-3xl rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-7xl text-4xl p-4 font-black">
                    Career
                </h1>
                {/* career1 */}
                <div className="flex flex-col w-full items-center justify-center p-4">
                    <div className="flex md:flex-row flex-col justify-center w-[100%] max-w-[800px] p-8 mb-6 bg-black bg-opacity-50 rounded-3xl">
                        <div className="flex flex-col flex-1 items-start">
                            <div className="md:text-4xl text-3xl font-bold text-custom-yellow">
                                設計
                            </div>
                            <div className="ml-2">
                                <p className="md:text-xl text-lg font-semibold underline md:mt-4 mt-2">
                                    業務内容
                                </p>
                                <p className="md:text-xl text-lg mt-1 ml-2">
                                    開発、設計、生産準備
                                </p>
                                <p className="md:text-xl text-lg font-semibold underline md:mt-4 mt-2">
                                    取扱製品
                                </p>
                                <p className="md:text-xl text-lg ml-2">
                                    幌、カバー、テント、等の帆布製品
                                </p>
                                <p className="md:text-3xl text-xl font-semibold md:mt-8 mt-4 text-gray-400">
                                    7年4ヶ月{' '}
                                    <span className="md:text-2xl">
                                        2015~2023
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center">
                            <Image
                                src="/images/career1.png"
                                className="md:rounded-2xl rounded-xl md:pt-0 pt-4"
                                alt="career1"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                    {/* career2 */}
                    <div className="flex md:flex-row flex-col justify-center w-[100%] max-w-[800px] p-8  bg-black bg-opacity-50 rounded-3xl">
                        <div className="flex flex-col flex-1 items-start">
                            <div className="md:text-4xl text-3xl font-bold text-custom-yellow">
                                マシンオペレータ
                            </div>
                            <div className="ml-2">
                                <p className="md:text-xl text-lg font-semibold underline md:mt-4 mt-2">
                                    業務内容
                                </p>
                                <p className="md:text-xl text-lg mt-1 ml-2">
                                    フィルムのスリッター加工
                                </p>
                                <p className="md:text-xl text-lg font-semibold underline md:mt-4 mt-2">
                                    取扱製品
                                </p>
                                <p className="md:text-xl text-lg ml-2">
                                    食品包材、工業用フィルム
                                </p>
                                <p className="md:text-3xl text-xl font-semibold md:mt-8 mt-4 text-gray-400">
                                    5年7ヶ月{' '}
                                    <span className="md:text-2xl">
                                        2010~2015
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center">
                            <Image
                                src="/images/career2.png"
                                className="md:rounded-2xl rounded-xl md:pt-0 pt-4"
                                alt="career1"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
