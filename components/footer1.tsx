import type { NextPage } from "next";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>ロゴ</div>
          </div>
          <div className={styles.com}>退職代行比較検索.com</div>
        </div>
        <div className={styles.legal}>
          <div className={styles.div1}>プライバシーポリシー</div>
          <div className={styles.div2}>免責事項</div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.div3}>お問合せ</div>
      </div>
    </footer>
  );
};

export default Footer1;
