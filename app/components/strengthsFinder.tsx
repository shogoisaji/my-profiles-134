import Link from "next/link";

export const StrengthsFinder = () => {
  type ItemTypes = {
    item: string;
    color: string;
  };
  const items: ItemTypes[] = [
    { item: "個別化", color: "text-red-100" },
    { item: "着想", color: "text-blue-100" },
    { item: "最上思考", color: "text-green-100" },
    { item: "分析思考", color: "text-orange-100" },
    { item: "自己確信", color: "text-pink-100" },
  ];
  const ImageList = (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.item} className={`border rounded-md px-2 py-1`}>
          {item.item}
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="text-2xl text-custom-orange font-bold mb-4">
        Strengths Finder 2.0
      </div>
      <div className="w-full sm:w-1/2 md:w-full">{ImageList}</div>
      <div className="mt-4 hover:text-orange-300 hover:underline">
        <Link href="https://www.gallup.com/cliftonstrengths/ja/254039/strengthsfinder.aspx">
          <div className="flex flex-row">
            <svg className="w-5 h-5 mr-2 md:ml-2 ml-0">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
            Strengths Finderとは？
          </div>
        </Link>
      </div>
    </>
  );
};
