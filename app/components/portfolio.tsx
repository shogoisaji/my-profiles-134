import ContentData from '@/data/portfolioContentData.json'
import Link from 'next/link'

export const Portfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-600">
            <div className="fixed left-0 -rotate-90">
                <h1 className="text-5xl font-bold">Portfolio</h1>
            </div>
            {ContentData.map((data: PortfolioContent) => (
                <div
                    key={data.title}
                    className="my-4 w-full flex justify-center items-center"
                >
                    <PortfolioContent content={data} />
                </div>
            ))}
        </div>
    )
}

export const PortfolioContent = ({
    content,
}: {
    content: PortfolioContent
}) => {
    return (
        <div className="flex flex-col items-center w-[100%] max-w-[800px]">
            <div className="flex md:flex-row flex-col md:items-end items-start justify-between md:px-4 px-1 w-full">
                <div className="flex flex-col w-full md:pb-4 pb-2 md:pr-4 pr-0">
                    <h1 className="text-xl">{content.subtitle}</h1>
                    <h1 className="md:text-5xl text-3xl font-bold">
                        {content.title}
                    </h1>
                    <p className="md:text-xl text-lg md:mt-4 mt-2">
                        {content.description}
                    </p>
                </div>
                <div className="flex flex-col">
                    <div
                        className={`grid ${
                            content.tools.length == 1
                                ? 'md:grid-rows-1'
                                : 'md:grid-rows-2'
                        } grid-flow-col gap-2 md:pb-4 pb-2`}
                    >
                        {content.tools.map((tool: string) => (
                            <img
                                key={tool}
                                src={`/toolImages/${tool}.png`}
                                className="md:rounded-xl rounded-lg md:w-[70px] w-[40px]"
                                alt="tool"
                            />
                        ))}
                    </div>
                </div>
            </div>
            {content.image && (
                <img
                    src={`/images/${content.image}`}
                    className="md:rounded-2xl rounded-lg"
                    alt="account"
                />
            )}
            <div className="flex w-full flex-row justify-end md:p-4 p-2">
                {content.storeLink && (
                    <Link href={content.storeLink}>
                        <img
                            src="/images/app_store.svg"
                            className="md:mr-4 mr-2 md:h-12 h-8"
                            alt="account"
                        />
                    </Link>
                )}
                <Link href={content.detailLink}>
                    <div className="flex md:w-32 md:h-12 w-24 h-8 md:rounded-lg rounded-md items-center justify-center md:text-2xl text-xl font-semibold border hover:border-black hover:text-gray-700 hover:bg-amber-200 bg-custom-green text-white border-white">
                        Detail
                    </div>
                </Link>
            </div>
        </div>
    )
}
