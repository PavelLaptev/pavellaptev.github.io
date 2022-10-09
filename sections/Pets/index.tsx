import React from "react";

import { Section, CardContent } from "../../components";

const petsData = [
  {
    url: "https://pavellaptev.github.io/squircle-houdini-css/",
    title: "Squircle Houdini CSS module",
    text: "A lightweight CSS module for cubic-bezier squircles.",
    date: "15.4.2021"
  },
  {
    url: "https://pavellaptev.github.io/kinetik-typography-three-js/#/",
    title: "Kinetic Typography with ThreeJS",
    text: "How to create motion and visual illusions with simple 3d shapes and tile text textures.",
    date: "15.1.2021"
  },
  {
    url: "https://pavellaptev.github.io/context-cursor/",
    title: "Context Cursor",
    text: "A cursor that takes the shape of the hovered element. Inspired by iPad pointer.",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/warp-svg/",
    title: "Warp SVG Online!",
    text: "A simple online tool that allows you to warp, bend, and distort SVG files.",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/web-dark-ages/",
    title: "Dark Ages of the Web",
    text: "The year 1994 when all began and the great era when the web we know today was born…",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/tiny-flexbox-grid-system/",
    title: "Flexbox SCSS grid Framework",
    text: "Experience in making complex but simple CSS frameworks based on Flexbox and SCSS.",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/brutalist-buildings/",
    title: "BRUTALISM KARTE",
    text: "An interactive map using D3.js. You can manage buildings on the map by date of construction with a range slider.",
    date: null
  },
  {
    url: "https://medium.com/@PavelLaptev/design-tokens-with-figma-aef25c42430f",
    title: "Design tokens with Figma",
    text: "A new article about Figma API. In this article I will show you how to generate design tokens via Figma API and convert them through the Style Dictionary.",
    date: null
  },
  {
    url: "https://www.figma.com/community/file/824599213491948267",
    title: "Wûnderzin free Ui Kit",
    text: "Figma free UI Kit of a nonexistent online magazine Wûnderzine. A few pages and many components.",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/markdown-theme-shell/public/",
    title: "Markdown Theme Shell",
    text: "This library converts markdown files into a beautiful website.",
    date: null
  },
  {
    url: "https://pavellaptev.github.io/JSON-from-Figma",
    title: "JSON from figma file",
    text: "On this page you could get a full JSON structure, pages and nested artboards, and also filter all by a flag name.",
    date: null
  }
];

const Pets: React.FC = () => {
  return (
    <Section
      title="Pets"
      description={
        <>
          Pet projects are very important for me. They help me to learn new
          things and improve my skills from development to design. I always try
          to make them interesting and useful. I hope you will like them.
        </>
      }
    >
      {
        // RENDER PLUGINS
        petsData.map((pet: any) => {
          return (
            <CardContent
              key={pet.title}
              title={pet.title}
              link={pet.url}
              text={pet.text}
            />
          );
        })
      }
    </Section>
  );
};

export default Pets;
