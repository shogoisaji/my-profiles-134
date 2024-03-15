import { DetailButton } from '@/app/components/detailButton'
import ContentData from '@/data/portfolioContentData.json'
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'

export const Portfolio = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-custom-textWhite">
            <div className="md:w-[80%] w-[90%] bg-slate-500 backdrop-blur bg-opacity-50 md:rounded-3xl rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-7xl text-4xl p-4 font-black">
                    Portfolio
                </h1>
                <Spline
                    className="flex flex-row justify-center w-ful md:mb-4 mb-0 md:scale-100 scale-75"
                    scene="https://prod.spline.design/pLGYrfuvxCUnZo8a/scene.splinecode"
                />
                {ContentData.map((data: PortfolioContent) => (
                    <div
                        key={data.title}
                        className="my-4 px-2 w-full flex justify-center items-center"
                    >
                        <PortfolioContent content={data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export const PortfolioContent = ({
    content,
}: {
    content: PortfolioContent
}) => {
    return (
        <div className="flex flex-col items-center md:py-8 py-4 w-[100%] max-w-[800px] relative">
            <div
                className="absolute top-32 border-2 border-gray-300 opacity-40 rounded-full md:block hidden"
                style={{
                    rotate: '35deg',
                    borderRadius: '50%',
                    height: '35vw',
                    width: '85vw',
                }}
            />
            <div className="flex md:flex-row flex-col md:items-end items-start justify-between z-10 md:px-4 px-1 w-full">
                <div className="flex flex-col w-full md:pb-4 pb-2 md:pr-4 pr-0">
                    <h1 className="text-xl text-custom-yellow">
                        {content.subtitle}
                    </h1>
                    <h1 className="md:text-5xl text-3xl font-bold text-custom-yellow">
                        {content.title}
                    </h1>
                    <p className="md:text-xl text-lg md:mt-3 mt-2">
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
                            <div
                                key={tool}
                                className="hover:saturate-100 filter saturate-5 transition-all duration-300"
                            >
                                <Image
                                    src={`/toolImages/${tool}.png`}
                                    className="md:rounded-xl rounded-lg md:w-[70px] w-[40px]"
                                    alt="tool"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {content.image && (
                <div className="z-10">
                    <Image
                        src={`/images/${content.image}`}
                        className="md:rounded-2xl rounded-lg z-10"
                        alt="account"
                        width={800}
                        height={600}
                    />
                </div>
            )}
            <div className="flex w-full flex-row justify-end md:p-4 p-2 z-10 ">
                {content.storeLink && (
                    <Link href={content.storeLink}>
                        <Image
                            src="/images/app_store.svg"
                            className="md:mr-8 mr-3 md:mt-0 mt-1 md:w-[133px] w-[92px]"
                            alt="store"
                            width={92}
                            height={35}
                        />
                    </Link>
                )}
                <Link href={content.detailLink}>
                    <div className="md:w-36  w-32 md:h-14 h-12">
                        <DetailButton />
                    </div>
                </Link>
            </div>
        </div>
    )
}
