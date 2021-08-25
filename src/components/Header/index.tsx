import * as React from "react";
import styles from "./styles.module.scss";
import SocialMedia from "../SocialMedia";

const ControlDot: React.FunctionComponent = (props) => {
  return (
    <section className={styles.wrap}>
      <SocialMedia />
      <h3 className={styles.introduction}>
        Hi! My name is <span>Pavel Laptev</span>. I'm a digital designer. Love
        design, frontend, art and architecture. Make things work, create
        plugins, make pet-projects and write articles. Believe in opensource.
      </h3>
    </section>
  );
};

export default ControlDot;
