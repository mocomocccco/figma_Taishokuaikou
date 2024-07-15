import type { NextPage } from "next";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[10px] top-[0] z-[99] sticky text-left text-lg text-black333333 font-yugothic ${className}`}
    >
      <div className="w-[277px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative">
        <img
          className="h-6 w-[34px] absolute !m-[0] top-[0px] left-[20px] object-contain"
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[11px]">
          <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
            退職代行比較検索.com
          </a>
        </div>
      </div>
      <header className="self-stretch bg-gray-ededed flex flex-row items-start justify-start py-[6.5px] px-5 text-left text-base text-gyar-6a6a6a font-yugothic">
        <a className="[text-decoration:underline] relative font-medium text-[inherit] inline-block min-w-[80px]">
          再検索する
        </a>
      </header>
      <div className="flex flex-row items-start justify-start py-0 px-5 text-7xl text-blue-289cac">
        <div className="h-[39px] relative tracking-[0.04em] inline-block min-w-[119px] whitespace-nowrap">
          <b>10</b>
          <span className="text-sm font-medium text-black333333">
            件の検索結果
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
