import type { NextPage } from "next";

export type PcType = {
  className?: string;
};

const Pc: NextPage<PcType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white-fff max-w-full flex flex-col items-center justify-center leading-[normal] tracking-[normal] text-left text-lg text-gray- font-yugothic ${className}`}
    >
      <div className="self-stretch bg-white-fff flex flex-col items-start justify-start py-5 px-[200px] mq450:pl-5 mq450:pr-5 mq450:box-border mq650:pl-[100px] mq650:pr-[100px] mq650:box-border">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-6 w-[34px] relative object-contain"
            alt=""
            src="/group-16@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit]">
            退職代行比較検索.com
          </a>
        </div>
      </div>
      <div className="self-stretch bg-gray-ededed flex flex-col items-start justify-center py-[6.5px] pr-5 pl-[200px] text-base text-gyar-6a6a6a mq450:pl-5 mq450:box-border">
        <a className="[text-decoration:underline] relative font-medium text-[inherit] inline-block min-w-[80px]">
          再検索する
        </a>
      </div>
      <section className="self-stretch bg-white-fff flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-[26px] text-blue-289cac font-yugothic">
        <div className="w-[1040px] overflow-hidden flex flex-row items-center justify-start py-2.5 px-0 box-border max-w-full">
          <div className="h-[39px] relative tracking-[0.04em] inline-block min-w-[103px]">
            <b>0</b>
            <span className="text-[14px] font-medium text-gray-">
              件の検索結果
            </span>
          </div>
        </div>
        <div className="w-[1040px] flex flex-col items-center justify-center py-16 px-0 box-border gap-[40px] max-w-full text-center text-base text-gray- mq450:gap-[20px]">
          <h2 className="m-0 relative text-inherit tracking-[0.04em] font-medium font-inherit">
            <p className="m-0">条件を変更して</p>
            <p className="m-0">もう一度検索してください</p>
          </h2>
          <button className="cursor-pointer py-3.5 px-5 bg-[transparent] w-80 box-border flex flex-row items-center justify-center border-[1px] border-solid border-blue-289cac hover:bg-cadetblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cadetblue-100">
            <b className="relative text-lg inline-block font-yugothic text-blue-289cac text-left min-w-[90px]">
              再検索する
            </b>
          </button>
        </div>
      </section>
      <div className="self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 gap-[8px] text-[12px] text-white-fff">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <input
                className="m-0 h-[19px] w-[19px] relative min-h-[19px]"
                type="checkbox"
              />
              <div className="relative font-medium inline-block min-w-[123px]">
                退職代行比較検索.com
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[20px] text-3xs mq450:flex-wrap">
          <div className="relative font-medium inline-block min-w-[100px]">
            プライバシーポリシー
          </div>
          <div className="relative font-medium inline-block min-w-[40px]">
            免責事項
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pc;
