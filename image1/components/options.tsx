import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type OptionsType = {
  className?: string;
  optionTitlePlaceholder?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration1?: CSSProperties["textDecoration"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Options: NextPage<OptionsType> = ({
  className = "",
  optionTitlePlaceholder,
  prop,
  prop1,
  prop2,
  propTextDecoration,
  propMinWidth,
  propTextDecoration1,
  propMinWidth1,
}) => {
  const aStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propMinWidth]);

  const a1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
      minWidth: propMinWidth1,
    };
  }, [propTextDecoration1, propMinWidth1]);

  return (
    <div
      className={`self-stretch h-[143px] flex flex-row flex-wrap items-center justify-center relative text-left text-base text-black333333 font-yugothic ${className}`}
    >
      <input
        className="w-full [border:none] [outline:none] bg-gray-ededed h-[47px] flex-1 !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start py-2.5 px-6 box-border font-yugothic font-bold text-lg text-gyar-6a6a6a min-w-[216px]"
        placeholder={optionTitlePlaceholder}
        type="text"
      />
      <div className="h-24 w-full !m-[0] absolute top-[47px] left-[0px] bg-white-fff flex flex-row flex-wrap items-center justify-start">
        <div className="w-[180px] !m-[0] absolute top-[0px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <a
            className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]"
            style={aStyle}
          >
            {prop}
          </a>
        </div>
        <div className="w-[180px] !m-[0] absolute top-[0px] left-[180px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <a
            className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]"
            style={a1Style}
          >
            {prop1}
          </a>
        </div>
        <div className="w-[180px] !m-[0] absolute top-[48px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
          <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
          <div className="relative font-medium inline-block min-w-[48px]">
            {prop2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
