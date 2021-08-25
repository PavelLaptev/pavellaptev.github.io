import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const SkeletonCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={styles.title} />
      <div className={styles.content} />
    </div>
  );
};

SkeletonCard.defaultProps = {
  className: "",
} as Partial<Props>;

export default SkeletonCard;
