import ContentData from "@/data/portfolioContentData.json";
import Image from "next/image";
import Link from "next/link";

export const Portfolio = () => {
  return (
    <div className="bg-background rounded-lg shadow-sm md:p-0 p-4">
      <h2 className="text-2xl text-custom-orange font-bold mb-4">My Apps</h2>
      <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
        {ContentData.map((data: PortfolioContent) => (
          <div
            key={data.title}
            className="w-full flex justify-center items-center"
          >
            <PortfolioContent content={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const PortfolioContent = ({
  content,
}: {
  content: PortfolioContent;
}) => {
  return (
    <div className="w-full border md:p-6 p-4 rounded-2xl">
      <Image
        src={`/images/${content.image}`}
        alt="Profile Photo"
        className="md:rounded-2xl rounded-xl"
        width={2000}
        height={2000}
      />
      <div className="md:px-2 px-0 py-4">
        <h3 className="text-2xl font-bold">{content.title}</h3>
        <p className="text-gray-300 w-full xl:h-20 overflow-hidden text-ellipsis">
          {content.description}
        </p>
        <div className="flex items-center gap-2 mt-4">
          {content.tools.map((tool: string) => (
            <div
              key={tool}
              className="hover:saturate-100 filter saturate-5 transition-all duration-300"
            >
              <Image
                src={`/toolImages/${tool}.png`}
                className="md:rounded-lg rounded-md md:w-[50px] w-[30px] mr-1"
                alt="tool"
                width={30}
                height={30}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Link href={content.detailLink}>
          <div className="flex flex-row pt-2">
            <svg className="w-5 h-5 mt-0.5 mr-2 md:ml-2 ml-0">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
            <p className="text-xl">View Detail</p>
          </div>
        </Link>
        {content.storeLink !== "" ? (
          <Link href={content.storeLink!}>
            <Image
              src={"/images/app_store.svg"}
              className="md:w-24 w-20"
              alt="app"
              width={30}
              height={30}
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
};
