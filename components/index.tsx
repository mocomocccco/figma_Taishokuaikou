import type { NextPage } from "next";
import ChecklistItems from "./checklist-items";

export type PCType = {
  className?: string;
};

const PC: NextPage<PCType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[1440px] bg-white-fff max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-[39.5px] leading-[normal] tracking-[normal] mq725:gap-[20px] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1040px] flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="w-[237px] flex flex-row items-start justify-start relative">
            <img
              className="h-6 w-[34px] absolute !m-[0] top-[0px] left-[0px] object-contain"
              loading="lazy"
              alt=""
              src="/group-16@2x.png"
            />
            <div className="flex-1 flex flex-row items-start justify-end">
              <a className="[text-decoration:none] relative text-lg font-bold font-yugothic text-black333333 text-left">
                退職代行比較検索.com
              </a>
            </div>
          </div>
          <footer className="self-stretch flex flex-col items-start justify-start max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <div className="w-[700px] flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] mt-[-0.5px]">
              <input
                className="w-40 [border:none] [outline:none] bg-gray-ededed h-[67px] overflow-hidden flex flex-row items-start justify-start p-5 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a"
                placeholder="運営元"
                type="text"
              />
              <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[79px]">
                <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                <a className="[text-decoration:none] relative text-base font-medium font-yugothic text-black333333 text-left inline-block min-w-[64px]">
                  労働組合
                </a>
              </div>
              <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[79px]">
                <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                <a className="[text-decoration:none] relative text-base font-medium font-yugothic text-black333333 text-left inline-block min-w-[64px]">
                  民間企業
                </a>
              </div>
              <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[79px]">
                <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
                <a className="[text-decoration:none] relative text-base font-medium font-yugothic text-black333333 text-left inline-block min-w-[48px]">
                  弁護士
                </a>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <img
              className="self-stretch h-[251px] relative max-w-full overflow-hidden shrink-0 object-cover mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px] mt-[-0.5px]">
              <div className="w-40 bg-gray-ededed overflow-hidden shrink-0 flex flex-row items-center justify-start p-5 box-border">
                <b className="relative text-lg inline-block font-yugothic text-gyar-6a6a6a text-left min-w-[36px]">
                  料金
                </b>
              </div>
              <div className="flex-1 bg-white-fff flex flex-col items-start justify-center py-[17.5px] px-5 box-border min-w-[572px] max-w-full mq725:min-w-full">
                <div className="overflow-x-auto flex flex-row items-center justify-start gap-[18px]">
                  <div className="rounded-sm bg-gray-f6f6f6 flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-gray-cecece">
                    <div className="relative text-sm font-medium font-yugothic text-black333333 text-left inline-block min-w-[57px] whitespace-nowrap">
                      15,000円
                    </div>
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/group-8.svg"
                    />
                  </div>
                  <div className="relative text-sm font-medium font-yugothic text-black333333 text-left inline-block min-w-[14px] whitespace-nowrap">
                    〜
                  </div>
                  <div className="w-[120px] rounded-sm bg-gray-f6f6f6 box-border shrink-0 flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-gray-cecece">
                    <div className="relative text-sm font-medium font-yugothic text-black333333 text-left inline-block min-w-[56px] whitespace-nowrap">
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
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1] mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <ChecklistItems
              prop="連絡方法"
              prop1="電話"
              prop2="LINE"
              prop3="メール"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[6] mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
            <ChecklistItems
              prop="その他"
              prop1="無料相談"
              prop2="24時間受付"
              prop3="返金保証"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[11] mt-[-0.5px]"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
          </footer>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <button className="cursor-pointer [border:none] py-4 px-5 bg-blue-289cac w-[280px] flex flex-row items-start justify-center box-border hover:bg-cadetblue">
          <b className="relative text-lg inline-block font-yugothic text-white-fff text-left min-w-[72px]">
            検索する
          </b>
        </button>
      </div>
      <div className="self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 gap-[8px]">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <input
                className="m-0 h-[19px] w-[19px] relative min-h-[19px]"
                type="checkbox"
              />
              <div className="relative text-[12px] font-medium font-yugothic text-white-fff text-left inline-block min-w-[123px]">
                退職代行比較検索.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[20px] mq450:flex-wrap">
          <div className="relative text-3xs font-medium font-yugothic text-white-fff text-left inline-block min-w-[100px]">
            プライバシーポリシー
          </div>
          <div className="relative text-3xs font-medium font-yugothic text-white-fff text-left inline-block min-w-[40px]">
            免責事項
          </div>
          <div className="relative text-3xs font-gilda-display text-white-fff text-left inline-block min-w-[60px]">
            お問い合わせ
          </div>
        </div>
      </div>
    </form>
  );
};

export default PC;
