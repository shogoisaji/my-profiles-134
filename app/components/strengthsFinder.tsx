export const StrengthsFinder = () => {
    type ItemTypes = {
        item: string
        color: string
    }
    const items: ItemTypes[] = [
        { item: '個別化', color: 'text-red-800' },
        { item: '着想', color: 'text-blue-800' },
        { item: '最上思考', color: 'text-green-800' },
        { item: '分析思考', color: 'text-orange-800' },
        { item: '自己確信', color: 'text-pink-800' },
    ]
    return (
        <div className="flex flex-row justify-center items-center py-4 ">
            <div className="flex flex-col justify-center w-[100%] max-w-[800px] p-4">
                <div className="flex flex-col flex-1 items-start">
                    <div className="md:text-4xl text-3xl font-bold">
                        Strengths Finder 2.0
                    </div>
                    <p className="md:text-xl text-lg  md:my-4 my-2">
                        Strengths Finderとは
                        Gallup社による個人が強みの素になる「才能」を見つけ、成果につなげる方法を身に付けるための診断です。
                    </p>
                    <div className="flex flex-row items-center justify-center w-full  py-2">
                        <div className="bg-gray-200 w-full h-[2px]" />
                        <p className="flex flex-row w-60 px-2 justify-center md:text-xl text-lg text-white">
                            私の資質
                        </p>
                        <div className="bg-gray-200 w-full h-[2px]" />
                    </div>
                </div>
                <div className="flex flex-row flex-1 justify-between">
                    {items.map((item: ItemTypes) => (
                        <div
                            key={item.item}
                            className="flex flex-col  items-center justify-center rounded-xl py-4 md:w-[17%] w-[19%] bg-gray-300 hover:scale-110 scale-100 hover:saturate-100 filter saturate-5 transition-all duration-300"
                        >
                            <p
                                className={`md:text-xl sm:text-lg text-sm font-bold ${item.color}`}
                            >
                                {item.item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
