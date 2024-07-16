import type { NextPage } from "next";
import SearchResult from "../components/search-result";
import Footer from "../components/footer";

const PC: NextPage = () => {
  return (
    <div className="w-full relative bg-white-fff flex flex-col items-center justify-center leading-[normal] tracking-[normal] text-left text-base text-gyar-6a6a6a font-yugothic">
      <header className="self-stretch bg-white-fff flex flex-col items-start justify-start py-5 px-[200px] text-left text-lg text-black333333 font-yugothic mq675:pl-[100px] mq675:pr-[100px] mq675:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
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
      <input
        className="w-full [border:none] [outline:none] bg-white-fff self-stretch h-[59px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-[200px] box-border min-w-[250px]"
        placeholder="10件の検索結果"
        type="text"
      />
      <main className="self-stretch bg-white-fff flex flex-col items-center justify-center pt-16 px-5 pb-10 box-border gap-[40px] max-w-full text-left text-lg text-blue-289cac font-yugothic mq675:gap-[20px] mq800:pt-[42px] mq800:pb-[26px] mq800:box-border">
        <SearchResult />
        <div className="w-80 box-border flex flex-row items-center justify-center py-3.5 px-5 border-[1px] border-solid border-blue-289cac">
          <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[90px]">
            再検索する
          </h3>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PC;
