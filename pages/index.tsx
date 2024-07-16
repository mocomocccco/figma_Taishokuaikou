import type { NextPage } from "next";
import AdditionalOptions from "../components/additional-options";
import Footer from "../components/footer";

const Tablet: NextPage = () => {
  return (
    <div className="w-full relative bg-white-fff flex flex-col items-start justify-start pt-[20.5px] px-0 pb-0 box-border gap-[39.5px] leading-[normal] tracking-[normal] mq450:gap-[20px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[20.5px] max-w-full text-left text-lg text-gyar-6a6a6a font-yugothic">
        <header className="w-[277px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative text-left text-lg text-black333333 font-yugothic">
          <img
            className="h-6 w-[34px] absolute !m-[0] top-[0px] left-[20px] object-contain"
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <div className="flex-1 flex flex-row items-start justify-end">
            <a className="[text-decoration:none] relative font-bold text-[inherit]">
              退職代行比較検索.com
            </a>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[251px] max-w-full ml-[-768px] mq450:gap-[125px]">
            <div className="self-stretch h-[47px] flex flex-row flex-wrap items-center justify-center relative max-w-full">
              <img
                className="h-px w-[768px] absolute !m-[0] top-[0px] left-[0px]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
              <img
                className="h-px w-[768px] absolute !m-[0] top-[0px] left-[0px]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
              <input
                className="w-[180px] [border:none] [outline:none] bg-gray-ededed h-[47px] !m-[0] absolute top-[0px] left-[1.5px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a"
                placeholder="運営元"
                type="text"
              />
              <div className="w-[585px] !m-[0] absolute top-[1.5px] left-[181.5px] bg-white-fff flex flex-row flex-wrap items-start justify-start max-w-full">
                <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-2.5 px-5 box-border gap-[12px]">
                  <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                  <input
                    className="w-16 [border:none] [outline:none] font-medium font-yugothic text-base bg-[transparent] h-6 relative text-black333333 text-left inline-block p-0"
                    placeholder="労働組合"
                    type="text"
                  />
                </div>
                <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-2.5 px-5 box-border gap-[12px]">
                  <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                  <input
                    className="w-16 [border:none] [outline:none] font-medium font-yugothic text-base bg-[transparent] h-6 relative text-black333333 text-left inline-block p-0"
                    placeholder="民間企業"
                    type="text"
                  />
                </div>
                <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-2.5 px-5 box-border gap-[12px]">
                  <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                  <input
                    className="w-12 [border:none] [outline:none] font-medium font-yugothic text-base bg-[transparent] h-6 relative text-black333333 text-left inline-block p-0"
                    placeholder="弁護士"
                    type="text"
                  />
                </div>
              </div>
              <img
                className="h-px w-[768px] absolute !m-[0] top-[47px] left-[0px]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] mt-[-0.2px]">
                <div className="w-[180px] bg-gray-ededed overflow-hidden shrink-0 flex flex-row items-center justify-start p-5 box-border mq450:w-[calc(100%_-_40px)]">
                  <b className="relative inline-block min-w-[36px]">料金</b>
                </div>
                <div className="flex-1 bg-white-fff flex flex-col items-start justify-center py-[17.5px] px-5 box-border min-w-[382px] max-w-full text-sm text-black333333 mq450:min-w-full mq625:w-[calc(100%_-_40px)]">
                  <div className="overflow-x-auto flex flex-row items-center justify-start gap-[18px]">
                    <div className="rounded-sm bg-gray-f6f6f6 flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-gray-cecece">
                      <div className="relative font-medium inline-block min-w-[57px] whitespace-nowrap">
                        15,000円
                      </div>
                      <img
                        className="h-[15px] w-[15px] relative"
                        alt=""
                        src="/group-8.svg"
                      />
                    </div>
                    <div className="relative font-medium inline-block min-w-[14px] whitespace-nowrap">
                      〜
                    </div>
                    <div className="w-[120px] rounded-sm bg-gray-f6f6f6 box-border shrink-0 flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-gray-cecece">
                      <div className="relative font-medium inline-block min-w-[56px] whitespace-nowrap">
                        上限なし
                      </div>
                      <img
                        className="h-[15px] w-[15px] relative"
                        alt=""
                        src="/group-8-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[67px] flex flex-row flex-wrap items-center justify-center relative max-w-full z-[1] mt-[-0.2px]">
                <div className="h-px w-[768px] absolute !m-[0] top-[0px] left-[0px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    loading="lazy"
                    alt=""
                    src="/vector-19.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    loading="lazy"
                    alt=""
                    src="/vector-19.svg"
                  />
                </div>
                <div className="w-[180px] !m-[0] absolute top-[0px] left-[1.5px] bg-gray-ededed overflow-hidden shrink-0 flex flex-row items-start justify-start py-5 px-6 box-border">
                  <b className="relative inline-block min-w-[72px]">連絡方法</b>
                </div>
                <AdditionalOptions prop="電話" prop1="LINE" prop2="メール" />
              </div>
              <div className="self-stretch h-[67px] flex flex-row flex-wrap items-center justify-center relative max-w-full z-[3] mt-[-0.2px]">
                <img
                  className="h-px w-[768px] absolute !m-[0] top-[0px] left-[0px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-19.svg"
                />
                <div className="w-[180px] !m-[0] absolute top-[0px] left-[1.5px] bg-gray-ededed overflow-hidden shrink-0 flex flex-row items-start justify-start py-5 px-6 box-border">
                  <b className="relative inline-block min-w-[54px]">その他</b>
                </div>
                <AdditionalOptions
                  prop="無料相談"
                  prop1="24時間受付"
                  prop2="返金保証"
                />
                <img
                  className="h-px w-[768px] absolute !m-[0] top-[67px] left-[0px] z-[4]"
                  loading="lazy"
                  alt=""
                  src="/vector-19.svg"
                />
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[5] mt-[-0.2px]"
                alt=""
                src="/vector-19.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <button className="cursor-pointer [border:none] py-4 px-5 bg-blue-289cac w-[280px] flex flex-row items-start justify-center box-border hover:bg-cadetblue">
          <b className="relative text-lg inline-block font-yugothic text-white-fff text-left min-w-[72px]">
            検索する
          </b>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Tablet;
