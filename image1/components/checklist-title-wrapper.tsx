import type { NextPage } from "next";

export type ChecklistTitleWrapperType = {
  className?: string;
};

const ChecklistTitleWrapper: NextPage<ChecklistTitleWrapperType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[143px] flex flex-row flex-wrap items-center justify-center relative max-w-full text-left text-base text-black333333 font-yugothic ${className}`}
    >
      <img
        className="w-[360px] relative max-h-full hidden max-w-full z-[0]"
        alt=""
        src="/vector-28.svg"
      />
      <input
        className="w-full [border:none] [outline:none] bg-gray-ededed h-[47px] flex-1 !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
        placeholder="運営元"
        type="text"
      />
      <div className="h-24 w-full !m-[0] absolute top-[47px] left-[0px] bg-white-fff flex flex-row flex-wrap items-center justify-start">
        <div className="w-[180px] !m-[0] absolute top-[0px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]">
            労働組合
          </a>
        </div>
        <div className="w-[180px] !m-[0] absolute top-[0px] left-[180px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]">
            民間企業
          </a>
        </div>
        <div className="w-[180px] !m-[0] absolute top-[48px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <div className="relative font-medium inline-block min-w-[48px]">
            弁護士
          </div>
        </div>
        <img
          className="h-px w-[360px] absolute !m-[0] top-[96px] left-[0px]"
          loading="lazy"
          alt=""
          src="/vector-28.svg"
        />
      </div>
    </div>
  );
};

export default ChecklistTitleWrapper;
