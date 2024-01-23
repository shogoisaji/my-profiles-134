import Image from 'next/image'

export const Career = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4">
            {/* career1 */}
            <div className="flex md:flex-row flex-col justify-center w-[100%] max-w-[800px] p-4 mb-4 bg-gray-800">
                <div className="flex flex-col flex-1 items-start">
                    <div className="md:text-4xl text-3xl font-bold">設計</div>
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
                        <p className="md:text-3xl font-semibold text-lg md:mt-4 mt-2">
                            7年4ヶ月 2015~2023
                        </p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                    <Image
                        src="/images/career1.png"
                        className="md:rounded-2xl rounded-xl"
                        alt="career1"
                    />
                </div>
            </div>
            {/* career2 */}
            <div className="flex md:flex-row flex-col justify-center w-[100%] max-w-[800px] p-4 bg-gray-800">
                <div className="flex flex-col flex-1 items-start">
                    <div className="md:text-4xl text-3xl font-bold">
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
                        <p className="md:text-3xl font-semibold text-lg md:mt-4 mt-2">
                            5年7ヶ月 2010~2015
                        </p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                    <Image
                        src="/images/career2.png"
                        className="md:rounded-2xl rounded-xl"
                        alt="career1"
                    />
                </div>
            </div>
        </div>
    )
}
