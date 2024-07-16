import type { NextPage } from "next";

export type ChecklistItemsType = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
};

const ChecklistItems: NextPage<ChecklistItemsType> = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <div
      className={`w-[700px] flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] mt-[-0.5px] text-left text-base text-black333333 font-yugothic ${className}`}
    >
      <div className="w-40 bg-gray-ededed overflow-hidden shrink-0 flex flex-row items-start justify-start p-5 box-border z-[2] text-lg text-gyar-6a6a6a">
        <b className="relative inline-block min-w-[72px]">{prop}</b>
      </div>
      <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[63px] z-[3]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[32px]">
          {prop1}
        </div>
      </div>
      <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[63px] z-[4]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[37px]">
          {prop2}
        </div>
      </div>
      <div className="flex-1 bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px] min-w-[63px] z-[5]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[48px]">
          {prop3}
        </div>
      </div>
    </div>
  );
};

export default ChecklistItems;
