import * as React from "react";
import styles from "./styles.module.scss";
import SocialMedia from "../SocialMedia";

const ControlDot: React.FunctionComponent = (props) => {
  return (
    <section className={styles.wrap}>
      <SocialMedia />
      <h1 className={styles.introduction}>
        War is Peace, Freedom is Slavery, Ignorance is Strength
      </h1>
    </section>
  );
};

export default ControlDot;
