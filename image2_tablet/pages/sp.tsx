import type { NextPage } from "next";
import Main from "../components/main";
import ResultColumns from "../components/result-columns";
import CompanyInfo from "../components/company-info";
import Footer1 from "../components/footer1";
import styles from "./sp.module.css";

const Sp: NextPage = () => {
  return (
    <div className={styles.sp}>
      <Main />
      <main className={styles.body}>
        <section className={styles.contentWrapper}>
          <div className={styles.mainResult}>
            <div className={styles.searchResult}>
              <ResultColumns
                resultIcons="/rectangle-6@2x.png"
                sARABA="SARABA(サラバ)"
                propWidth="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
              />
              <CompanyInfo
                rectangle6="/rectangle-6-1@2x.png"
                sARABA="SARABA(サラバ)"
              />
              <CompanyInfo
                rectangle6="/rectangle-6-2@2x.png"
                sARABA="RE:Start"
              />
            </div>
            <div className={styles.resultNavigation}>
              <div className={styles.pagination}>
                <div className={styles.pageIndicator}>1</div>
              </div>
              <div className={styles.pagination1}>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.pagination2}>
                <div className={styles.div1}>3</div>
              </div>
              <div className={styles.pageDots}>
                <div className={styles.pageDot} />
                <div className={styles.pageDot1} />
                <div className={styles.pageDot2} />
              </div>
              <div className={styles.pagination3}>
                <div className={styles.div2}>6</div>
              </div>
              <div className={styles.pagination4}>
                <img
                  className={styles.paginationChild}
                  loading="lazy"
                  alt=""
                  src="/vector-27.svg"
                />
              </div>
            </div>
          </div>
          <button className={styles.searchAgain}>
            <b className={styles.b}>再検索する</b>
          </button>
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default Sp;
