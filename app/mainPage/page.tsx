import Image from "next/image";
import { Portfolio } from "../components/portfolio";
import { Contact } from "../components/contact";
import { Skills } from "../components/skills";
import { Footer } from "../components/footer";
import { StrengthsFinder } from "../components/strengthsFinder";
import { TweetList } from "../components/tweetList";

export const MainComponent = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-background px-4 py-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/account_image.png"
                alt="Profile Photo"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h1 className="text-2xl text-custom-orange font-bold">
                Shogo Isaji
              </h1>
              <p className="text-lg">App Engineer</p>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 py-8">
        <div className="bg-background rounded-lg shadow-sm md:p-6 p-4">
          <h2 className="text-2xl text-custom-orange font-bold mb-3">
            About Me
          </h2>
          <p className="">
            私はモバイル・Webアプリの開発を行うエンジニアクリエイターです。素晴らしいプロダクトを創造できるように日々探求してます。以前は製品設計に携わり、お客様に最高の価値を提供できるように心がけていました。現在はより多くの人に喜んでもらえるプロダクトを作るため、創造を繰り返している。
          </p>
          <hr className="my-4" />
          <Skills />
          <hr className="my-4" />
          <StrengthsFinder />
          <hr className="my-4" />
          <h2 className="text-2xl text-custom-orange font-bold mb-4">
            Experience
          </h2>
          <div className="grid gap-4">
            <div>
              <h3 className="text-base font-semibold">丸満産業　株式会社</h3>
              <p className="text-muted-foreground">Product Designer</p>
              <p className="text-muted-foreground">2015 - 2023</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">有限会社　真生包装</h3>
              <p className="text-muted-foreground">Machine Operator</p>
              <p className="text-muted-foreground">2010 - 2015</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">愛知工業大学</h3>
              <p className="text-muted-foreground">University Student</p>
              <p className="text-muted-foreground">2006 - 2010</p>
            </div>
          </div>

          <hr className="my-4" />
          <Contact />
        </div>
        <Portfolio />
      </main>
      <TweetList />
      <Footer />
    </div>
  );
};
