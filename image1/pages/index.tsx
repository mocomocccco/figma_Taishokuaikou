import type { NextPage } from "next";
import Options from "../components/options";
import ContactMethods from "../components/contact-methods";

const Mobile: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-white-fff flex flex-row items-start justify-start pt-5 px-[68px] pb-[21px] sticky top-[0] z-[99] text-left text-lg text-black333333 font-yugothic">
        <img
          className="h-6 w-[34px] absolute !m-[0] top-[20px] left-[20px] object-contain"
          loading="lazy"
          alt=""
          src="/group-16@2x.png"
        />
        <a className="[text-decoration:none] h-[27px] relative font-bold text-[inherit] inline-block">
          退職代行比較検索.com
        </a>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start pt-[143px] px-0 pb-0 box-border max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/frame-17-1@2x.png"
          />
        </section>
        <section className="flex-1 flex flex-col items-start justify-start gap-[251px] max-w-full ml-[-360px]">
          <Options
            optionTitlePlaceholder="運営元"
            prop="労働組合"
            prop1="民間企業"
            prop2="弁護士"
          />
          <ContactMethods />
        </section>
      </main>
    </div>
  );
};

export default Mobile;
