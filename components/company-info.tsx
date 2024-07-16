import type { NextPage } from "next";
import styles from "./company-info.module.css";

export type CompanyInfoType = {
  className?: string;
  rectangle6?: string;
  sARABA?: string;
};

const CompanyInfo: NextPage<CompanyInfoType> = ({
  className = "",
  rectangle6,
  sARABA,
}) => {
  return (
    <div className={[styles.companyInfo, className].join(" ")}>
      <img
        className={styles.companyInfoChild}
        loading="lazy"
        alt=""
        src={rectangle6}
      />
      <div className={styles.frameParent}>
        <div className={styles.sarabaParent}>
          <b className={styles.saraba}>{sARABA}</b>
          <img
            className={styles.frameChild}
            alt=""
            src="/result-description-icons.svg"
          />
        </div>
        <div className={styles.okOkOk}>
          #一般企業 #退職成功率100% #24時間対応 #即日対応 #公務員OK #正社員OK
          #契約社員OK #派遣社員OK #アルバイト・パートOK #追加料金なし
          #返金保証あり #退職後サポートあり
        </div>
        <button className={styles.frameWrapper}>
          <div className={styles.wrapper}>
            <b className={styles.b}>詳細情報を見る</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
