import type { NextPage } from "next";
import Options from "./options";

export type ContactMethodsType = {
  className?: string;
};

const ContactMethods: NextPage<ContactMethodsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-black333333 font-yugothic ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <input
          className="w-full [border:none] [outline:none] bg-gray-ededed self-stretch h-[47px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
          placeholder="料金"
          type="text"
        />
        <div className="self-stretch bg-white-fff flex flex-col items-center justify-center py-5 px-[35px] z-[1] mt-[-3px]">
          <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start gap-[18px]">
            <div className="rounded-sm bg-whitesmoke flex flex-row items-center justify-center py-0.5 px-[18px] gap-[10px] border-[1px] border-solid border-lightgray">
              <div className="relative leading-[21.6px] font-medium inline-block min-w-[57px] whitespace-nowrap">
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
      <Options
        optionTitlePlaceholder="連絡方法"
        prop="電話"
        prop1="LINE"
        prop2="メール"
        propTextDecoration="unset"
        propMinWidth="32px"
        propTextDecoration1="unset"
        propMinWidth1="38px"
      />
      <div className="self-stretch h-[143px] flex flex-row flex-wrap items-center justify-center relative max-w-full text-base">
        <img
          className="w-[360px] relative max-h-full hidden max-w-full z-[0]"
          alt=""
          src="/vector-11.svg"
        />
        <input
          className="w-full [border:none] [outline:none] bg-gray-ededed h-[47px] flex-1 !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
          placeholder="その他"
          type="text"
        />
        <div className="h-24 w-full !m-[0] absolute top-[47px] left-[0px] bg-white-fff flex flex-row flex-wrap items-center justify-start">
          <div className="w-[180px] !m-[0] absolute top-[0px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
            <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
            <div className="relative font-medium inline-block min-w-[64px]">
              無料相談
            </div>
          </div>
          <div className="!m-[0] absolute top-[0px] left-[180px] bg-white-fff flex flex-row items-start justify-start py-3 pr-[31px] pl-10 gap-[10px]">
            <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
            <div className="relative font-medium inline-block min-w-[84px]">
              24時間受付
            </div>
          </div>
          <div className="w-[180px] !m-[0] absolute top-[48px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
            <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
            <div className="relative font-medium inline-block min-w-[64px]">
              返金保証
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white-fff overflow-hidden flex flex-row items-start justify-start py-[30px] px-5">
        <button className="cursor-pointer [border:none] py-4 px-5 bg-blue-289cac flex-1 flex flex-row items-start justify-center">
          <b className="relative text-lg inline-block font-yugothic text-white-fff text-left min-w-[72px]">
            検索する
          </b>
        </button>
      </div>
      <footer className="self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-row items-start justify-start py-2.5 px-5 gap-[20px] text-left text-7xs-2 text-black font-inter">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="w-[19px] bg-gainsboro box-border flex flex-row items-start justify-start pt-[5px] pb-1.5 pr-[3px] pl-1 border-[0.4px] border-solid border-black">
              <div className="h-[19px] w-[19px] relative bg-gainsboro box-border hidden border-[0.4px] border-solid border-black" />
              <div className="relative inline-block min-w-[11px] z-[1]">
                ロゴ
              </div>
            </div>
            <div className="relative text-xs leading-[18.4px] font-medium font-yugothic text-white-fff inline-block min-w-[125px]">
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
  );
};

export default ContactMethods;
