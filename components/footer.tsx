import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-row items-start justify-start py-2.5 px-5 gap-[20px] text-left text-7xs-2 text-black font-inter ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="w-[19px] bg-gainsboro box-border flex flex-row items-start justify-start pt-[5px] pb-1.5 pr-[3px] pl-1 border-[0.4px] border-solid border-black">
            <div className="h-[19px] w-[19px] relative bg-gainsboro box-border hidden border-[0.4px] border-solid border-black" />
            <div className="relative inline-block min-w-[11px] z-[1]">ロゴ</div>
          </div>
          <div className="relative text-xs font-medium font-yugothic text-white-fff inline-block min-w-[123px]">
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
  );
};

export default Footer;
