import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 gap-[8px] z-[2] text-left text-xs text-white-fff font-yugothic ${className}`}
    >
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <input
              className="m-0 h-[19px] w-[19px] relative min-h-[19px]"
              type="checkbox"
            />
            <div className="relative font-medium inline-block min-w-[123px]">
              退職代行比較検索.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[20px] text-3xs mq450:flex-wrap">
        <div className="relative font-medium inline-block min-w-[100px]">
          プライバシーポリシー
        </div>
        <div className="relative font-medium inline-block min-w-[40px]">
          免責事項
        </div>
      </div>
    </div>
  );
};

export default Footer;
