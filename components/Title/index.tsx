import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<Props> = (props) => {
  return (
    <h2 className={`${styles.title} ${props.className}`}>{props.children}</h2>
  );
};

Title.defaultProps = {
  className: ""
};

export default Title;
