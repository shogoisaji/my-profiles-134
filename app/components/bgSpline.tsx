import Spline from "@splinetool/react-spline";
import Image from "next/image";

export const BgSpline = () => {
  return (
    <div>
      <div className="backdrop-blur bg-opacity-50 bg-slate-500 w-screen h-screen">
        <Spline
          className="lg:block hidden fixed top-0 left-0 w-full h-full backdrop-blur bg-opacity-50"
          scene="https://prod.spline.design/lSSNw-vp-4c7z7wz/scene.splinecode"
        />
      </div>
      <div className="lg:hidden block fixed top-0 left-0">
        <Image
          src="/images/alt_bg.svg"
          width={664}
          height={1440}
          alt="background"
        />
      </div>
    </div>
  );
};
