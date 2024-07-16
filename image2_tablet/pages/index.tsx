import type { NextPage } from "next";
import ResultColumns from "../components/result-columns";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Tablet: NextPage = () => {
  return (
    <div className={styles.tablet}>
      <img
        className={styles.tabletChild}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <header className={styles.header}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-16@2x.png"
          />
          <a className={styles.com}>退職代行比較検索.com</a>
        </div>
      </header>
      <input
        className={styles.tabletItem}
        placeholder="再検索する"
        type="text"
      />
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <b>10</b>
          <span className={styles.span}>件の検索結果</span>
        </div>
      </div>
      <main className={styles.frameGroup}>
        <section className={styles.resultItemParent}>
          <div className={styles.resultItem}>
            <ResultColumns
              resultIcons="/rectangle-6@2x.png"
              sARABA="SARABA(サラバ)"
            />
            <ResultColumns
              resultIcons="/rectangle-6-1@2x.png"
              sARABA="SARABA(サラバ)"
              propWidth="320px"
              propMinWidth="304px"
              propAlignSelf="unset"
            />
            <ResultColumns
              resultIcons="/rectangle-6-2@2x.png"
              sARABA="RE:Start"
              propWidth="320px"
              propMinWidth="304px"
              propAlignSelf="unset"
            />
          </div>
          <div className={styles.pagination}>
            <div className={styles.pageNumbers}>
              <div className={styles.pageNumberDots}>1</div>
            </div>
            <div className={styles.pageNumbers1}>
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.pageNumbers2}>
              <div className={styles.div2}>3</div>
            </div>
            <div className={styles.pageIndicators}>
              <div className={styles.pageIndicatorDots} />
              <div className={styles.pageIndicatorDots1} />
              <div className={styles.pageIndicatorDots2} />
            </div>
            <div className={styles.pageNumbers3}>
              <div className={styles.div3}>6</div>
            </div>
            <div className={styles.pageNumbers4}>
              <img
                className={styles.pageNumbersChild}
                loading="lazy"
                alt=""
                src="/vector-27.svg"
              />
            </div>
          </div>
        </section>
        <button className={styles.container}>
          <b className={styles.b}>再検索する</b>
        </button>
      </main>
      <img
        className={styles.tabletInner}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.tabletChild1}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.tabletChild2}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.tabletChild3}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.tabletChild4}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <img
        className={styles.tabletChild5}
        loading="lazy"
        alt=""
        src="/vector-19.svg"
      />
      <Footer />
    </div>
  );
};

export default Tablet;
