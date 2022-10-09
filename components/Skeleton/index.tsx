import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Skeleton: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.wrap}`}>
      <div className={styles.preview} />
      <div className={styles.title} />
      <div className={styles.text} />
    </div>
  );
};

Skeleton.defaultProps = {
  className: ""
};

export default Skeleton;
