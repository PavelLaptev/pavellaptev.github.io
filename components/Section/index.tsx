import React from "react";
import styles from "./styles.module.scss";

import { Wrapper } from "../../components";

interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const Section: React.FC<Props> = (props) => {
  return (
    <Wrapper className={`${styles.wrap} ${props.className}`}>
      <section className={styles.about}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
      </section>
      <section className={styles.grid}>{props.children}</section>
    </Wrapper>
  );
};

Section.defaultProps = {
  className: ""
};

export default Section;
