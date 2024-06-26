import Link from "next/link";
import Image from "next/image";

export const Sns = (props: { iconSize: number; gridCount: number }) => {
  // grid 2 or 4
  const gridClass = `grid ${
    props.gridCount === 2 ? "grid-cols-2" : "grid-cols-4"
  } gap-4`;
  return (
    <div className="flex flex-col">
      <div className={gridClass}>
        <Link href="https://github.com/shogoisaji">
          <Image
            src="/images/github.png"
            className=" hover:rotate-6 hover:scale-110 md:mx-3 mx-1"
            alt="github"
            width={props.iconSize}
            height={props.iconSize}
          />
        </Link>
        <Link href="https://zenn.dev/s134">
          <Image
            src="/images/zenn.png"
            className="hover:rotate-6 hover:scale-110 md:mx-3 mx-1"
            alt="zenn"
            width={props.iconSize}
            height={props.iconSize}
          />
        </Link>
        <Link href="https://twitter.com/_isaji134">
          <Image
            src="/images/x.png"
            className="hover:rotate-6 hover:scale-110 md:mx-3 mx-1"
            alt="x"
            width={props.iconSize}
            height={props.iconSize}
          />
        </Link>
        <Link href="https://rive.app/@134/">
          <Image
            src="/images/rive_white.png"
            className="hover:rotate-6 hover:scale-110 md:mx-3 mx-1"
            alt="rive"
            width={props.iconSize}
            height={props.iconSize}
          />
        </Link>
      </div>
      <Link
        href="https://shogoisaji.github.io/ui_playground_134/"
        className="w-full flex justify-center mt-4"
      >
        <Image
          src="/images/playground.png"
          className="hover:rotate-6 hover:scale-110 "
          alt="rive"
          width={props.iconSize * 4}
          height={props.iconSize}
        />
      </Link>
    </div>
  );
};
