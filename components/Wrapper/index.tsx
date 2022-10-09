import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = (props) => {
  return (
    <section className={`${styles.wrapper} ${props.className}`}>
      {props.children}
    </section>
  );
};

Wrapper.defaultProps = {
  className: "",
};

export default Wrapper;
