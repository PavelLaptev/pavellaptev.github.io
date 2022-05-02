import * as React from "react";
import styles from "./styles.module.scss";
import SocialMedia from "../SocialMedia";

const ControlDot: React.FunctionComponent = (props) => {
  return (
    <section className={styles.wrap}>
      <SocialMedia />
      <div className={styles.textWrap}>
        <h1 className={styles.introduction}>
          Against war in Ukraine. <br />{" "}
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--primary-clr)",
              color: "#f45",
            }}
          >
            {" "}
            Against Putin.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ControlDot;
