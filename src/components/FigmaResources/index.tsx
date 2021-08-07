import * as React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Icon from "../Icon";
import Section from "../Section";
import Card from "../Card";

const stripHtml = (html: string) => {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const FigmaResources: React.FunctionComponent = () => {
  const [resources, setResources] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/raw?url=https://www.figma.com/api/hub_files/profile/850025365157932848`
      )
      .then((res) => {
        let resourcesArray = res.data.meta.map((item: any) => {
          let lastVersionData = item.versions[Object.keys(item.versions)[0]];

          return {
            name: lastVersionData.name,
            likes: item.like_count,
            link: `https://www.figma.com/community/file/${item.id}`,
            downloads: item.duplicate_count,
            img: item.redirect_thumbnail_url,
            description: stripHtml(lastVersionData.description),
          };
        });

        setResources(resourcesArray);
      });
  }, []);

  return (
    <Section title="Figma resources">
      {resources.map((resource: any, i) => {
        return (
          <Card key={i} href={resource.link} className={styles.resource}>
            <h2 className={styles.label}>{resource.name}</h2>
            <div className={styles.stat}>
              <div className={styles.stat_item}>
                <Icon name="downloads" />
                <span>{resource.downloads.toLocaleString()}</span>
              </div>
              <div className={styles.stat_item}>
                <Icon name="likes" />
                <span>{resource.likes.toLocaleString()}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </Section>
  );
};

export default FigmaResources;
