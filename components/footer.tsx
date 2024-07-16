import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <input className={styles.group71} type="checkbox" />
            <div className={styles.com}>退職代行比較検索.com</div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.div}>プライバシーポリシー</div>
        <div className={styles.div1}>免責事項</div>
      </div>
    </footer>
  );
};

export default Footer;
