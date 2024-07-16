import type { NextPage } from "next";

export type ServiceCardType = {
  className?: string;
  serviceIcon?: string;
  nEXT?: string;
};

const ServiceCard: NextPage<ServiceCardType> = ({
  className = "",
  serviceIcon,
  nEXT,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_14px_#cecece] flex flex-col items-end justify-start text-left text-lg text-black font-yugothic ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={serviceIcon}
      />
      <div className="self-stretch bg-white-fff flex flex-col items-start justify-start pt-6 px-5 pb-10 gap-[16px]">
        <div className="self-stretch h-[37px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[10px]">
          <b className="relative tracking-[0.04em] inline-block min-w-[53px]">
            {nEXT}
          </b>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/vector-25-2.svg"
          />
        </div>
        <div className="self-stretch relative text-xs tracking-[0.04em] leading-[170%] font-medium text-gyar-6a6a6a">
          #一般企業 #退職成功率100% #24時間対応 #即日対応 #公務員OK #正社員OK
          #契約社員OK #派遣社員OK #アルバイト・パートOK #追加料金なし
          #返金保証あり #退職後サポートあり
        </div>
        <button className="cursor-pointer [border:none] py-2.5 px-5 bg-blue-289cac self-stretch rounded-sm flex flex-row items-center justify-center">
          <b className="relative text-base leading-[170%] inline-block font-yugothic text-gray-ededed text-left min-w-[112px]">
            詳細情報を見る
          </b>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
