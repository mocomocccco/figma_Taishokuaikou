import type { NextPage } from "next";
import ChecklistTitleWrapper from "../components/checklist-title-wrapper";
import ContactMethodOptions from "../components/contact-method-options";

const Sp: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-white-fff flex flex-row items-start justify-start pt-5 px-[70px] pb-[21px] sticky top-[0] z-[99] text-left text-lg text-black333333 font-yugothic">
        <img
          className="h-6 w-[34px] absolute !m-[0] top-[20px] left-[20px] object-contain"
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <a className="[text-decoration:none] relative font-bold text-[inherit]">
          退職代行比較検索.com
        </a>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/vector-28.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/vector-28.svg"
      />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start pt-[143px] px-0 pb-0 box-border max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/frame-17-1@2x.png"
          />
        </section>
        <section className="flex-1 flex flex-col items-start justify-start gap-[251px] max-w-full ml-[-360px] text-left text-sm text-black333333 font-yugothic">
          <ChecklistTitleWrapper />
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <input
                className="w-full [border:none] [outline:none] bg-gray-ededed self-stretch h-[47px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
                placeholder="料金"
                type="text"
              />
              <div className="self-stretch bg-white-fff flex flex-col items-center justify-center py-5 px-[35px] z-[1] mt-[-3px]">
                <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start gap-[18px]">
                  <div className="rounded-sm bg-whitesmoke flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-lightgray">
                    <div className="relative font-medium inline-block min-w-[57px] whitespace-nowrap">
                      15,000円
                    </div>
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/group-8.svg"
                    />
                  </div>
                  <div className="relative font-medium text-black inline-block min-w-[14px] whitespace-nowrap">
                    〜
                  </div>
                  <div className="w-[120px] rounded-sm bg-whitesmoke box-border shrink-0 flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-lightgray">
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
            <div className="self-stretch h-[143px] flex flex-row flex-wrap items-center justify-center relative">
              <input
                className="w-full [border:none] [outline:none] bg-gray-ededed h-[47px] flex-1 !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
                placeholder="連絡方法"
                type="text"
              />
              <ContactMethodOptions prop="電話" prop1="LINE" prop2="メール" />
            </div>
            <div className="self-stretch h-[143px] flex flex-row flex-wrap items-center justify-center relative max-w-full z-[1]">
              <img
                className="w-[360px] relative max-h-full hidden max-w-full z-[0]"
                alt=""
                src="/vector-11.svg"
              />
              <img
                className="w-[360px] relative max-h-full hidden max-w-full z-[1]"
                alt=""
                src="/vector-28.svg"
              />
              <input
                className="w-full [border:none] [outline:none] bg-gray-ededed h-[47px] flex-1 !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
                placeholder="その他"
                type="text"
              />
              <ContactMethodOptions
                prop="無料相談"
                prop1="24時間受付"
                prop2="返金保証"
              />
            </div>
            <div className="self-stretch bg-white-fff overflow-hidden flex flex-row items-start justify-start py-[30px] px-5 z-[3]">
              <button className="cursor-pointer [border:none] py-4 px-5 bg-blue-289cac flex-1 flex flex-row items-start justify-center">
                <b className="relative text-lg inline-block font-yugothic text-white-fff text-left min-w-[72px]">
                  検索する
                </b>
              </button>
            </div>
            <footer className="self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-row items-start justify-start py-2.5 px-5 gap-[20px] z-[4] text-left text-[5.2px] text-black font-inter">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="w-[19px] bg-gainsboro box-border flex flex-row items-start justify-start pt-[5px] pb-1.5 pr-[3px] pl-1 border-[0.4px] border-solid border-black">
                    <div className="h-[19px] w-[19px] relative bg-gainsboro box-border hidden border-[0.4px] border-solid border-black" />
                    <div className="relative inline-block min-w-[11px] z-[1]">
                      ロゴ
                    </div>
                  </div>
                  <div className="relative text-[12px] font-medium font-yugothic text-white-fff inline-block min-w-[123px]">
                    退職代行比較検索.com
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px] text-3xs text-white-fff font-yugothic">
                  <div className="relative font-medium inline-block min-w-[100px]">
                    プライバシーポリシー
                  </div>
                  <div className="relative font-medium inline-block min-w-[40px]">
                    免責事項
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0 text-3xs text-white-fff font-yugothic">
                <div className="relative font-medium inline-block min-w-[40px]">
                  お問合せ
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sp;
