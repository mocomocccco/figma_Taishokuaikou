import type { NextPage } from "next";

export type ContactMethodOptionsType = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const ContactMethodOptions: NextPage<ContactMethodOptionsType> = ({
  className = "",
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div
      className={`h-24 w-full !m-[0] absolute top-[47px] left-[0px] bg-white-fff flex flex-row flex-wrap items-center justify-start text-left text-base text-black333333 font-yugothic ${className}`}
    >
      <div className="w-[180px] !m-[0] absolute top-[0px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[32px]">
          {prop}
        </div>
      </div>
      <div className="w-[180px] !m-[0] absolute top-[0px] left-[180px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[37px]">
          {prop1}
        </div>
      </div>
      <div className="w-[180px] !m-[0] absolute top-[48px] left-[0px] bg-white-fff flex flex-row items-start justify-start py-3 px-10 box-border gap-[12px]">
        <input className="m-0 h-[19.5px] w-[15px]" type="checkbox" />
        <div className="relative font-medium inline-block min-w-[48px]">
          {prop2}
        </div>
      </div>
    </div>
  );
};

export default ContactMethodOptions;
