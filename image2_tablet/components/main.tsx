import type { NextPage } from "next";
import styles from "./main.module.css";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/group-161@2x.png"
        />
        <div className={styles.resultItem}>
          <a className={styles.com}>退職代行比較検索.com</a>
        </div>
      </div>
      <header className={styles.searchButton}>
        <a className={styles.a}>再検索する</a>
      </header>
      <div className={styles.resultCount}>
        <div className={styles.div}>
          <b>10</b>
          <span className={styles.span}>件の検索結果</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
