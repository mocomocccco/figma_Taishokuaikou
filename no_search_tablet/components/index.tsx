import type { NextPage } from "next";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[768px] max-w-full flex flex-col items-center justify-center leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch bg-white-fff flex flex-col items-start justify-start pt-5 px-10 pb-[21px] box-border max-w-full text-left text-lg text-gray- font-yugothic">
        <div className="flex flex-row items-start justify-start py-0 pr-[355px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq600:pr-[177px] mq600:box-border">
          <img
            className="h-6 w-[34px] relative object-contain"
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit]">
            退職代行比較検索.com
          </a>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <input
        className="w-full [border:none] [outline:none] bg-gray-ededed self-stretch h-[37px] flex flex-col items-start justify-center py-[6.5px] px-10 box-border font-yugothic font-medium text-base text-gyar-6a6a6a min-w-[250px]"
        placeholder="再検索する"
        type="text"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <section className="self-stretch bg-white-fff flex flex-col items-start justify-start py-0 px-10 text-left text-[26px] text-blue-289cac font-yugothic">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-2.5 px-0">
          <div className="h-[39px] relative tracking-[0.04em] inline-block min-w-[103px]">
            <b>0</b>
            <span className="text-[14px] font-medium text-gray-">
              件の検索結果
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-16 px-0 gap-[40px] text-center text-base text-gray- mq450:gap-[20px]">
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
      <footer className="self-stretch bg-gyar-6a6a6a overflow-hidden flex flex-col items-center justify-center py-2.5 px-5 gap-[8px] z-[1] text-left text-[12px] text-white-fff font-yugothic">
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
      </footer>
    </div>
  );
};

export default Root;
