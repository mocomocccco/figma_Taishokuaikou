import type { NextPage } from "next";
import SarabaAdImage from "./saraba-ad-image";

export type SearchResultType = {
  className?: string;
};

const SearchResult: NextPage<SearchResultType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1040px] flex flex-col items-center justify-center gap-[32px] max-w-full text-left text-lg text-black font-yugothic mq675:gap-[16px] ${className}`}
    >
      <div className="self-stretch grid flex-row items-center justify-center gap-[40px] grid-cols-[repeat(3,_minmax(240px,_1fr))] mq675:gap-[20px] mq675:grid-cols-[minmax(240px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <SarabaAdImage
          sarabaAdShapes="/rectangle-6@2x.png"
          sARABA="SARABA(サラバ)"
        />
        <SarabaAdImage
          sarabaAdShapes="/rectangle-6-1@2x.png"
          sARABA="SARABA(サラバ)"
        />
        <SarabaAdImage
          sarabaAdShapes="/rectangle-6-2@2x.png"
          sARABA="RE:Start"
        />
      </div>
      <div className="w-80 flex flex-row items-center justify-center py-0 px-[25px] box-border gap-[9px] text-sm text-gyar-6a6a6a">
        <div className="flex-1 rounded-sm bg-gyar-6a6a6a flex flex-col items-center justify-center py-[9.5px] px-4 text-white-fff">
          <div className="relative font-medium inline-block min-w-[8px]">1</div>
        </div>
        <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
          <div className="relative font-medium inline-block min-w-[8px]">2</div>
        </div>
        <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
          <div className="relative font-medium inline-block min-w-[8px]">3</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
          <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
          <div className="h-[5px] w-[5px] relative rounded-[50%] bg-gainsboro" />
        </div>
        <div className="flex-1 rounded-sm flex flex-col items-center justify-center py-2 px-[15px] border-[1px] border-solid border-gyar-6a6a6a">
          <div className="relative font-medium inline-block min-w-[8px]">6</div>
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
    </section>
  );
};

export default SearchResult;
