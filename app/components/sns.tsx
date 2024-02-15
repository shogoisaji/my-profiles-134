import Link from 'next/link'
import Image from 'next/image'

export const Sns = (props: { iconSize: number; gridCount: number }) => {
    const gridClass = `grid grid-cols-${props.gridCount} gap-4`
    return (
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
    )
}
