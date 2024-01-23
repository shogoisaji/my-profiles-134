import ContentData from '@/data/portfolioContentData.json'

export const Portfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            {ContentData.map((data: PortfolioContent) => (
                <div className="my-4 w-full flex justify-center items-center">
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
        <div className="flex flex-col items-center justify-center w-[100%] max-w-[800px] mb-16">
            <div className="flex md:flex-row flex-col md:items-end items-start justify-between md:px-4 px-1 w-full">
                <div className="flex flex-col flex-1 md:pb-4 pb-2 md:pr-4 pr-0">
                    <h1 className="text-xl">{content.subtitle}</h1>
                    <h1 className="text-5xl font-bold">{content.title}</h1>
                    <p className="text-xl mt-4">{content.description}</p>
                </div>
                <div className="flex flex-col">
                    <div
                        className={`grid ${
                            content.tools.length == 1
                                ? 'grid-rows-1'
                                : 'grid-rows-2'
                        } grid-flow-col auto-cols-max md:pb-4 pb-2`}
                    >
                        {content.tools.map((tool: string) => (
                            <img
                                src={`/toolImages/${tool}.png`}
                                className="md:rounded-xl rounded-lg md:w-[70px] w-[40px] md:mt-3 mt-0 md:mr-0 mr-1"
                                alt="tool"
                            />
                        ))}
                    </div>
                </div>
            </div>
            {content.image && (
                <img
                    src={`/images/${content.image}`}
                    className="md:rounded-2xl rounded-xl"
                    alt="account"
                />
            )}
        </div>
    )
}
