import type { NextPage } from "next";

export type AdditionalOptionsType = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const AdditionalOptions: NextPage<AdditionalOptionsType> = ({
  className = "",
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div
      className={`w-[585px] !m-[0] absolute top-[0px] left-[181.5px] bg-white-fff flex flex-row flex-wrap items-start justify-start max-w-full text-left text-base text-black333333 font-yugothic ${className}`}
    >
      <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[32px]">
          {prop}
        </div>
      </div>
      <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[37px]">
          {prop1}
        </div>
      </div>
      <div className="w-[180px] bg-white-fff flex flex-row items-start justify-start py-[21.5px] px-5 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[48px]">
          {prop2}
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
