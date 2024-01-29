export const StrengthsFinder = () => {
    type ItemTypes = {
        item: string
        color: string
    }
    const items: ItemTypes[] = [
        { item: '個別化', color: 'text-red-700' },
        { item: '着想', color: 'text-blue-700' },
        { item: '最上思考', color: 'text-green-700' },
        { item: '分析思考', color: 'text-yellow-700' },
        { item: '自己確信', color: 'text-purple-700' },
    ]
    return (
        <div className="flex flex-row justify-center items-center py-4 ">
            <div className="flex flex-col justify-center w-[100%] max-w-[800px] p-4 mb-4">
                <div className="flex flex-col flex-1 items-start">
                    <div className="md:text-4xl text-3xl font-bold">
                        Strengths Finder 2.0
                    </div>
                    <p className="md:text-xl text-lg  md:my-4 my-2">
                        Strengths Finderとは
                        Gallup社による個人が強みの素になる「才能」を見つけ、成果につなげる方法を身に付けるための診断です。
                    </p>
                </div>
                <div className="flex flex-row flex-1 justify-between">
                    {items.map((item: ItemTypes) => (
                        <div
                            key={item.item}
                            className="flex flex-col  items-center justify-center rounded-xl py-4 md:w-[17%] w-[19%] bg-gray-300"
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
