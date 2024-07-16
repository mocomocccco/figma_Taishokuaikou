import type { NextPage } from "next";
import ServiceCard from "./service-card";

export type ResultsType = {
  className?: string;
};

const Results: NextPage<ResultsType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1040px] flex flex-col items-center justify-center gap-[60px] max-w-full text-left text-xl text-gray- font-yugothic mq1050:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[120px] max-w-full mq750:gap-[30px] mq1050:gap-[60px]">
        <form className="m-0 self-stretch flex flex-col items-center justify-center gap-[24px] max-w-full">
          <div className="self-stretch h-[49px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border gap-[10px]">
            <b className="h-[39px] relative text-7xl tracking-[0.04em] inline-block font-yugothic text-gray- text-left mq450:text-2xl">
              SARABA 概要
            </b>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/service-icon.svg"
            />
          </div>
          <div className="w-[688px] flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch h-12 flex flex-row items-start justify-start max-w-full">
              <div className="h-[49px] bg-gray-f6f6f6 box-border flex flex-row items-center justify-center py-3 px-[38px] border-t-[1px] border-solid border-gray-cecece border-r-[1px] border-l-[1px]">
                <b className="relative text-base inline-block font-yugothic text-gray- text-left min-w-[64px]">
                  テキスト
                </b>
              </div>
              <div className="flex-1 bg-white-fff box-border flex flex-row items-center justify-start pt-2.5 pb-3 pr-0 pl-[19px] max-w-[calc(100%_-_142px)] shrink-0 border-t-[1px] border-solid border-gray-cecece border-r-[1px]">
                <div className="flex-1 relative text-base font-medium font-yugothic text-gray- text-left inline-block max-w-full">
                  テキストテキストテキストテキストテキストテキスト
                </div>
              </div>
            </div>
            <div className="self-stretch h-12 flex flex-row items-start justify-start max-w-full">
              <div className="h-[49px] bg-gray-f6f6f6 box-border flex flex-row items-center justify-center py-3 px-[38px] border-t-[1px] border-solid border-gray-cecece border-r-[1px] border-l-[1px]">
                <b className="relative text-base inline-block font-yugothic text-gray- text-left min-w-[64px]">
                  テキスト
                </b>
              </div>
              <div className="flex-1 bg-white-fff box-border flex flex-row items-center justify-start pt-2.5 pb-3 pr-0 pl-[19px] max-w-[calc(100%_-_142px)] shrink-0 border-t-[1px] border-solid border-gray-cecece border-r-[1px]">
                <div className="flex-1 relative text-base font-medium font-yugothic text-gray- text-left inline-block max-w-full">
                  テキストテキストテキストテキストテキストテキスト
                </div>
              </div>
            </div>
            <div className="self-stretch h-12 flex flex-row items-start justify-start max-w-full">
              <div className="h-[49px] bg-gray-f6f6f6 box-border flex flex-row items-center justify-center py-3 px-[38px] border-t-[1px] border-solid border-gray-cecece border-r-[1px] border-l-[1px]">
                <b className="relative text-base inline-block font-yugothic text-gray- text-left min-w-[64px]">
                  テキスト
                </b>
              </div>
              <div className="flex-1 bg-white-fff box-border flex flex-row items-center justify-start pt-2.5 pb-3 pr-0 pl-[19px] max-w-[calc(100%_-_142px)] shrink-0 border-t-[1px] border-solid border-gray-cecece border-r-[1px]">
                <div className="flex-1 relative text-base font-medium font-yugothic text-gray- text-left inline-block max-w-full">
                  テキストテキストテキストテキストテキストテキスト
                </div>
              </div>
            </div>
            <div className="self-stretch h-12 box-border flex flex-row items-start justify-start max-w-full border-b-[1px] border-solid border-gray-cecece">
              <div className="h-[49px] bg-gray-f6f6f6 box-border flex flex-row items-center justify-center py-3 px-[38px] border-t-[1px] border-solid border-gray-cecece border-r-[1px] border-l-[1px]">
                <b className="relative text-base inline-block font-yugothic text-gray- text-left min-w-[64px]">
                  テキスト
                </b>
              </div>
              <div className="flex-1 bg-white-fff box-border flex flex-row items-center justify-start pt-2.5 pb-3 pr-0 pl-[19px] max-w-[calc(100%_-_142px)] shrink-0 border-t-[1px] border-solid border-gray-cecece border-r-[1px]">
                <div className="flex-1 relative text-base font-medium font-yugothic text-gray- text-left inline-block max-w-full">
                  テキストテキストテキストテキストテキストテキスト
                </div>
              </div>
            </div>
          </div>
          <div className="w-[400px] bg-blue-289cac flex flex-row items-start justify-center py-4 px-5 box-border max-w-full">
            <b className="relative text-base tracking-[0.04em] inline-block font-yugothic text-white-fff text-left min-w-[108px]">
              公式HPを見る
            </b>
          </div>
        </form>
        <div className="w-[688px] flex flex-col items-center justify-center gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="self-stretch h-[50px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border gap-[10px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/similar-header-icons.svg"
            />
            <b className="h-[30px] relative tracking-[0.04em] inline-block mq450:text-base">
              似た条件のサービス
            </b>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/similar-header-icons.svg"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-1 pl-0 gap-[44px] text-lg text-black mq750:gap-[22px]">
            <ServiceCard cardThumbnail="/rectangle-6@2x.png" nEXT="NEXT" />
            <ServiceCard
              cardThumbnail="/rectangle-6-1@2x.png"
              nEXT="リトライ"
            />
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[400px] flex flex-col items-center justify-center max-w-full">
        <div className="self-stretch rounded-sm flex flex-row items-center justify-center py-3.5 px-5 border-[1px] border-solid border-blue-289cac">
          <b className="relative text-base leading-[170%] inline-block font-yugothic text-blue-289cac text-left min-w-[96px]">
            再検索に戻る
          </b>
        </div>
      </button>
    </section>
  );
};

export default Results;
