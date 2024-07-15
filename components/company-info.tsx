import type { NextPage } from "next";

export type CompanyInfoType = {
  className?: string;
  rectangle6?: string;
  sARABA?: string;
};

const CompanyInfo: NextPage<CompanyInfoType> = ({
  className = "",
  rectangle6,
  sARABA,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_14px_#cecece] flex flex-col items-end justify-start text-left text-lg text-black font-yugothic ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle6}
      />
      <div className="self-stretch bg-white-fff flex flex-col items-start justify-start py-6 px-5 gap-[16px]">
        <div className="self-stretch h-[37px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[10px]">
          <b className="relative tracking-[0.04em]">{sARABA}</b>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/brand-icon.svg"
          />
        </div>
        <div className="self-stretch relative text-xs tracking-[0.04em] leading-[170%] font-medium text-gyar-6a6a6a">
          #一般企業 #退職成功率100% #24時間対応 #即日対応 #公務員OK #正社員OK
          #契約社員OK #派遣社員OK #アルバイト・パートOK #追加料金なし
          #返金保証あり #退職後サポートあり
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch rounded-sm bg-blue-289cac flex flex-row items-center justify-center py-2.5 px-5">
            <b className="relative text-base leading-[170%] inline-block font-yugothic text-gray-ededed text-left min-w-[112px]">
              詳細情報を見る
            </b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
