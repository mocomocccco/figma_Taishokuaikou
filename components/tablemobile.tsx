import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TablemobileType = {
  className?: string;

  /** Style props */
  propBorderRight?: CSSProperties["borderRight"];
  propBorderBottom?: CSSProperties["borderBottom"];
};

const Tablemobile: NextPage<TablemobileType> = ({
  className = "",
  propBorderRight,
  propBorderBottom,
}) => {
  const tablemobileStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: propBorderRight,
      borderBottom: propBorderBottom,
    };
  }, [propBorderRight, propBorderBottom]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start text-left text-sm text-gray- font-yugothic ${className}`}
      style={tablemobileStyle}
    >
      <div className="bg-gray-f6f6f6 flex flex-row items-center justify-center py-[22.5px] px-[22px] border-t-[1px] border-solid border-gray-cecece border-r-[1px] border-l-[1px]">
        <b className="relative inline-block min-w-[56px]">テキスト</b>
      </div>
      <div className="flex-1 bg-white-fff flex flex-row items-center justify-start py-3 pr-0 pl-5 border-t-[1px] border-solid border-gray-cecece border-r-[1px]">
        <div className="flex-1 relative font-medium">
          テキストテキストテキストテキストテキストテキスト
        </div>
      </div>
    </div>
  );
};

export default Tablemobile;
