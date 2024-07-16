import type { NextPage } from "next";
import Results from "../components/results";
import Footer from "../components/footer";

const PC: NextPage = () => {
  return (
    <div className="w-full relative bg-white-fff flex flex-col items-center justify-center leading-[normal] tracking-[normal] text-left text-base text-gyar-6a6a6a font-yugothic">
      <header className="self-stretch bg-white-fff flex flex-col items-start justify-start py-5 px-[200px] text-left text-lg text-gray- font-yugothic mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[100px] mq750:pr-[100px] mq750:box-border">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-6 w-[34px] relative object-contain"
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit]">
            退職代行比較検索.com
          </a>
        </div>
      </header>
      <div className="self-stretch bg-gray-ededed flex flex-col items-start justify-center py-[6.5px] pr-5 pl-[200px] mq450:pl-5 mq450:box-border">
        <a className="[text-decoration:underline] relative font-medium text-[inherit] inline-block min-w-[80px]">
          再検索する
        </a>
      </div>
      <div className="self-stretch bg-white-fff flex flex-col items-start justify-center py-[11px] pr-5 pl-[200px] text-3xs mq450:pl-5 mq450:box-border">
        <div className="relative font-medium">
          本ページはプロモーションが含まれています
        </div>
      </div>
      <main className="self-stretch bg-white-fff overflow-hidden flex flex-col items-center justify-start pt-10 px-5 pb-[60px] box-border max-w-full lg:pt-[26px] lg:pb-[39px] lg:box-border mq750:pt-5 mq750:pb-[25px] mq750:box-border">
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default PC;
