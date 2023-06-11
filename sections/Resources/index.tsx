import React from "react";

import { Section, CardContent } from "../../components";

const resourcesData = [
  {
    img: "sources/alteos-stickers.webp",
    name: "🔖 Alteos stickers",
    likes: "117",
    copies: "2.4k",
    url: "https://www.figma.com/community/file/997572063390575469"
  },
  {
    img: "sources/alteos-design.webp",
    name: "🚀 Welcome to Alteos Design",
    likes: "77",
    copies: "698",
    url: "https://www.figma.com/community/file/852545799153115753"
  },
  {
    img: "sources/figma-api-list.webp",
    name: "☁️ Figma API list",
    likes: "23",
    copies: "150",
    url: "https://www.figma.com/community/file/1009207025721786443"
  },
  {
    img: "sources/design-qa.webp",
    name: "📐 Design QA",
    likes: "6",
    copies: "74",
    url: "https://www.figma.com/community/file/1120486617280312367"
  },
  {
    img: "sources/gpt-figma-res.webp",
    name: "Chat GPT & Figma. Friends of Figma, Berlin",
    likes: "1",
    copies: "17",
    url: "https://www.figma.com/community/file/1245726304628636662"
  }
];

const Resources: React.FC = () => {
  return (
    <Section
      title="Resources"
      description={
        <>
          I beleive that sharing knolwedge is the best way to grow. It&apos;s
          also a great way to highlight a company in the design community. Here
          a few sneak peaks of my work.
        </>
      }
    >
      {
        // RENDER PLUGINS
        resourcesData.map((source: any) => {
          return (
            <CardContent
              key={source.name}
              title={source.name}
              img={source.img}
              stat={[
                { name: "Likes", value: source.likes },
                { name: "Copies", value: source.copies }
              ]}
              link={source.url}
            />
          );
        })
      }
    </Section>
  );
};

export default Resources;
