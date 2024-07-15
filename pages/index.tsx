import type { NextPage } from "next";
import Main from "../components/main";
import CompanyInfo from "../components/company-info";
import Footer from "../components/footer";

const Sp: NextPage = () => {
  return (
    <div className="w-full relative bg-white-fff box-border flex flex-col items-start justify-start pt-5 px-0 pb-0 leading-[normal] tracking-[normal] border-[1px] border-solid border-lightgray">
      <Main />
      <main className="self-stretch h-[1607px] bg-white-fff flex flex-col items-center justify-start p-5 box-border">
        <section className="self-stretch flex flex-col items-center justify-center gap-[40px] text-left text-lg text-black font-yugothic">
          <div className="self-stretch flex flex-col items-center justify-center gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
              <div className="self-stretch shadow-[0px_4px_14px_#cecece] flex flex-col items-end justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-6@2x.png"
                />
                <div className="self-stretch bg-white-fff flex flex-col items-start justify-start py-6 px-5 gap-[16px]">
                  <div className="self-stretch h-[37px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[10px]">
                    <b className="relative tracking-[0.04em]">SARABA(サラバ)</b>
                    <img
                      className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                      alt=""
                      src="/brand-icon.svg"
                    />
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.04em] leading-[170%] font-medium text-gyar-6a6a6a">
                    #一般企業 #退職成功率100% #24時間対応 #即日対応 #公務員OK
                    #正社員OK #契約社員OK #派遣社員OK #アルバイト・パートOK
                    #追加料金なし #返金保証あり #退職後サポートあり
                  </div>
                  <button className="cursor-pointer [border:none] py-2.5 px-5 bg-blue-289cac self-stretch rounded-sm flex flex-row items-center justify-center">
                    <b className="relative text-base leading-[170%] inline-block font-yugothic text-gray-ededed text-left min-w-[112px]">
                      詳細情報を見る
                    </b>
                  </button>
                </div>
              </div>
              <CompanyInfo
                rectangle6="/rectangle-6-1@2x.png"
                sARABA="SARABA(サラバ)"
              />
              <CompanyInfo
                rectangle6="/rectangle-6-2@2x.png"
                sARABA="RE:Start"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[25px] gap-[9px] text-sm text-gyar-6a6a6a">
              <div className="flex-1 rounded-sm bg-gyar-6a6a6a flex flex-col items-center justify-center py-[9.5px] px-4 text-white-fff">
                <div className="relative font-medium inline-block min-w-[8px]">
                  1
                </div>
              </div>
              <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
                <div className="relative font-medium inline-block min-w-[8px]">
                  2
                </div>
              </div>
              <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
                <div className="relative font-medium inline-block min-w-[8px]">
                  3
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
                <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
                <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
              </div>
              <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
                <div className="relative font-medium inline-block min-w-[8px]">
                  6
                </div>
              </div>
              <div className="w-10 rounded-sm box-border flex flex-col items-center justify-center py-[15px] px-[17px] h-10 border-[1px] border-solid border-gyar-6a6a6a">
                <img
                  className="w-[3px] h-1.5 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-27.svg"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-3.5 px-5 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-blue-289cac">
            <b className="relative text-lg inline-block font-yugothic text-blue-289cac text-left min-w-[90px]">
              再検索する
            </b>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sp;
