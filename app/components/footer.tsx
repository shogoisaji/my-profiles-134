import { Sns } from "@/app/components/sns";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] relative">
      <h1 className=" font-bold md:text-4xl text-3xl md:mt-12">
        Thanks for Reading!
      </h1>
      <div className="md:pt-12 pt-6">
        <Sns iconSize={42} gridCount={4} />
      </div>
      <p className="absolute bottom-4 text-gray-300">© 2024 Shogo Isaji</p>
    </div>
  );
};
