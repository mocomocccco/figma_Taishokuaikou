import type { NextPage } from "next";
import SearchHeader from "../components/search-header";
import Tablemobile from "../components/tablemobile";
import ServiceCard from "../components/service-card";
import FrameComponent from "../components/frame-component";

const Sp: NextPage = () => {
  return (
    <div className="w-full relative bg-white-fff box-border flex flex-col items-start justify-start leading-[normal] tracking-[normal] border-[1px] border-solid border-lightgray">
      <SearchHeader />
      <main className="self-stretch h-[1758px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border">
        <section className="self-stretch flex flex-col items-start justify-center gap-[60px] text-left text-[26px] text-gray- font-yugothic">
          <div className="self-stretch flex flex-col items-start justify-center gap-[100px]">
            <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0">
              <div className="self-stretch flex flex-col items-start justify-center gap-[32px]">
                <div className="self-stretch h-[49px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border gap-[10px]">
                  <b className="h-[39px] relative tracking-[0.04em] inline-block">
                    SARABA 概要
                  </b>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-25.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <Tablemobile />
                  <Tablemobile
                    propBorderRight="unset"
                    propBorderBottom="unset"
                  />
                  <Tablemobile
                    propBorderRight="unset"
                    propBorderBottom="unset"
                  />
                  <Tablemobile
                    propBorderRight="1px solid #cecece"
                    propBorderBottom="1px solid #cecece"
                  />
                </div>
                <button className="cursor-pointer [border:none] py-4 px-5 bg-blue-289cac self-stretch flex flex-row items-start justify-center">
                  <b className="relative text-base tracking-[0.04em] inline-block font-yugothic text-white-fff text-left min-w-[108px]">
                    公式HPを見る
                  </b>
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[40px] text-[20px]">
              <div className="self-stretch h-[50px] flex flex-col items-start justify-center pt-0 px-0 pb-0 box-border gap-[10px]">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-26.svg"
                />
                <b className="h-[30px] relative tracking-[0.04em] inline-block">
                  似た条件のサービス
                </b>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-26.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[40px]">
                <ServiceCard serviceIcon="/rectangle-6@2x.png" nEXT="NEXT" />
                <ServiceCard
                  serviceIcon="/rectangle-6-1@2x.png"
                  nEXT="リトライ"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch rounded-sm flex flex-row items-center justify-center py-3.5 px-5 border-[1px] border-solid border-blue-289cac">
              <b className="relative text-base leading-[170%] inline-block font-yugothic text-blue-289cac text-left min-w-[96px]">
                再検索に戻る
              </b>
            </div>
          </button>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Sp;
