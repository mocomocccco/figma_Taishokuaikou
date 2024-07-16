import type { NextPage } from "next";

export type SearchHeaderType = {
  className?: string;
};

const SearchHeader: NextPage<SearchHeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[11px] top-[0] z-[99] sticky max-w-full text-left text-3xs text-gyar-6a6a6a font-yugothic ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <header className="self-stretch bg-white-fff flex flex-row items-start justify-start pt-[21px] px-[66px] pb-5 box-border relative max-w-full text-left text-lg text-gray- font-yugothic">
          <div className="h-[68px] w-[360px] relative bg-white-fff hidden max-w-full z-[0]" />
          <img
            className="h-[23px] w-[30.5px] absolute !m-[0] bottom-[22px] left-[20px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit] z-[1]">
            退職代行比較検索.com
          </a>
        </header>
        <input
          className="w-full [border:none] [outline:none] bg-gray-ededed self-stretch h-[37px] flex flex-row items-start justify-start py-[6.5px] px-5 box-border font-yugothic font-medium text-base text-gyar-6a6a6a min-w-[216px]"
          placeholder="再検索する"
          type="text"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="relative font-medium">
          本ページはプロモーションが含まれています
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
