import React from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  icon?: string | null;
  img?: string | null;
  title: string;
  link: string;
  stat?: Array<{ name: string; value: string }> | null;
  text?: string | null;
  date?: string | null;
}

const Section: React.FC<Props> = (props) => {
  return (
    <article className={`${styles.wrap} ${props.className}`}>
      {props.img && <img className={styles.img} src={`/assets/${props.img}`} />}
      {props.icon && (
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(https://www.figma.com${props.icon})` }}
        />
      )}
      <a className={"title"} href={props.link} target="_blank" rel="noreferrer">
        {props.title}
      </a>
      {props.text && <p className={styles.text}>{props.text}</p>}
      <ul className={styles.stat}>
        {props.stat
          ? props.stat.map((item, index) => (
              <li key={index}>
                <span className={styles.stat__value}>{item.value} </span>
                <span className={styles.stat__name}>{item.name}</span>
              </li>
            ))
          : null}
      </ul>
      {props.date && <span className={styles.date}>{props.date}</span>}
    </article>
  );
};

Section.defaultProps = {
  className: ""
};

export default Section;
