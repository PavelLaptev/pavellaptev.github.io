import React from "react";
import styles from "./styles.module.scss";

import { Section } from "../../components";

const experienceData = [
  {
    role: "Lead designer, design system developer",
    company: "Backer",
    about: "Fintech, Investment platform",
    date: "APR 2022 - Present",
    ort: "San Francisco, CA, Remote",
    linkedin: "https://www.linkedin.com/company/backer529/mycompany/",
    duties: [
      "Design and develop design system using React, TypeScript, Figma, and Storybook",
      "Designing product features and user flows",
      "DesignOps"
    ]
  },
  {
    role: "Lead designer",
    company: "Alteos",
    about: "Digital insurance platform",
    date: "MAY 2019 – APR 2022",
    ort: "Berlin, Germany",
    linkedin: "https://www.linkedin.com/company/alteostech/",
    duties: [
      "Development and supervision design system and UI Kits",
      "Products development",
      "Branding supervision and art direction",
      "DesignOps"
    ]
  },
  {
    role: "Product designer, interaction designer",
    company: "Farfetch",
    about: "Luxury fashion retail platform",
    date: "MAY 2018 – FEB 2019",
    ort: "London, UK, Remote",
    linkedin: "https://www.linkedin.com/company/farfetch.com/",
    duties: [
      "Development and supervision Design system and UI Kits",
      "Prototypes and animations"
    ]
  },
  {
    role: "Lead designer",
    company: "Wirex",
    about: "Fintech",
    date: "MAR 2017 – MAY 2018",
    ort: "London, UK & Kyiv, Ukraine",
    linkedin: "https://www.linkedin.com/company/wirex-limited/",
    duties: [
      "Web devision coordination",
      "Development and supervision UI Kits",
      "Coordination between developers and designers",
      "DesignOps"
    ]
  },
  {
    role: "Senior Product Designer",
    company: "Sberbank-Technology",
    about: "Fintech",
    date: "SEP 2016 – MAR 2017",
    ort: "Moscow, Russia",
    linkedin: "https://www.linkedin.com/company/sberbank-technology/",
    duties: [
      "Development of the mobile library for internal services.",
      "Creating layouts, framework, guidelines",
      "Establishing cooperation between developers and designers.",
      "Design concepts for different company devisions and services (retails & corporate)"
    ]
  },
  {
    role: "Design and Art Direction",
    company: "Sitesoft",
    about: "Design agency",
    date: "SEP 2013 – SEP 2016",
    ort: "Yekaterinburg, Russia",
    linkedin: null,
    duties: [
      "Responsible for web-design and mobile design devisions",
      "Creating concepts, approaching for clients, negotiating projects, clinching the deals",
      "Maintaining communication between clients, developers and designers"
    ]
  }
];

interface CardProps {
  role: string;
  company: string;
  about: string;
  date: string;
  ort: string;
  linkedin: string | null;
  duties: string[];
}

const ExperienceCard: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={"title"}>
        {props.role}{" "}
        <span
          style={{
            fontStyle: "italic",
            fontWeight: "normal",
            opacity: 0.5
          }}
        >
          at{" "}
        </span>
        {props.linkedin ? (
          <a
            href={props.linkedin}
            style={{
              textDecoration: "underline"
            }}
          >
            {props.company}
          </a>
        ) : (
          props.company
        )}
      </h3>

      <p className={styles.about}>{props.about}</p>

      <div className={styles.date}>
        <span>{props.date}</span>
        <span>📍 {props.ort}</span>
      </div>

      <ul className={styles.duties}>
        {props.duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section
      title="Experience"
      className={styles.wrap}
      description={
        <>
          I have been working in the field of design for more than 10 years. I
          have experience in different areas of design, and I am always ready to
          learn something new. During my career, I have always been interested
          in the development of design systems and design processes. It is
          important for me to work in a team where I can share my experience and
          knowledge with colleagues. If you are interested in my experience or
          if you have any questions, please write me at{" "}
          <a className={styles.link} href="mailto:pawellaptew@gmail.com">
            pawellaptew@gmail.com
          </a>{" "}
          or contact me via{" "}
          <a className={styles.link} href="">
            LinkedIn
          </a>
          .
        </>
      }
    >
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </Section>
  );
};

export default Experience;
