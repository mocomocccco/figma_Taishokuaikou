import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./result-columns.module.css";

export type ResultColumnsType = {
  className?: string;
  resultIcons?: string;
  sARABA?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ResultColumns: NextPage<ResultColumnsType> = ({
  className = "",
  resultIcons,
  sARABA,
  propWidth,
  propMinWidth,
  propAlignSelf,
}) => {
  const resultColumnsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  return (
    <div
      className={[styles.resultColumns, className].join(" ")}
      style={resultColumnsStyle}
    >
      <img
        className={styles.resultIcons}
        loading="lazy"
        alt=""
        src={resultIcons}
      />
      <div className={styles.resultNames}>
        <div className={styles.resultTitles}>
          <b className={styles.saraba}>{sARABA}</b>
          <img
            className={styles.resultDescriptionIcons}
            alt=""
            src="/result-description-icons.svg"
          />
        </div>
        <div className={styles.okOkOk}>
          #一般企業 #退職成功率100% #24時間対応 #即日対応 #公務員OK #正社員OK
          #契約社員OK #派遣社員OK #アルバイト・パートOK #追加料金なし
          #返金保証あり #退職後サポートあり
        </div>
        <button className={styles.resultLinks}>
          <b className={styles.b}>詳細情報を見る</b>
        </button>
      </div>
    </div>
  );
};

export default ResultColumns;
