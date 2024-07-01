import { StrengthsFinder } from "@/app/components/strengthsFinder";
import Image from "next/image";

export const Skills = () => {
  const tools = [
    "Flutter",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Firebase",
    "Supabase",
    "GCP",
    "Laravel",
    "Lottie, Rive",
  ];
  const ImageList = (
    <div className="grid grid-cols-2 gap-2">
      {tools.map((tool) => (
        <div key={tool} className="border rounded-md px-2 py-1">
          {tool}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="text-2xl text-custom-orange font-bold mb-4">Skills</div>
      <div className="w-full sm:w-1/2 md:w-full">{ImageList}</div>
      <div className="hover:saturate-100 filter saturate-5 transition-all duration-200">
        <Image
          src="/images/aws_saa.webp"
          className="md:w-20 w-18 mt-4"
          alt="aws"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};
