import * as React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Icon from "../Icon";
import Section from "../Section";
import Card from "../Card";
import SkeletonCard from "../SkeletonCard";

interface Props {
  sckeletonAmount?: number;
}

const stripHtml = (html: string) => {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const FigmaResources: React.FunctionComponent<Props> = (props) => {
  const [resources, setResources] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const setResourceObject = (resource: any) => {
    let lastVersionData = resource.versions[Object.keys(resource.versions)[0]];

    return {
      name: lastVersionData.name,
      likes: resource.like_count,
      link: `https://www.figma.com/community/file/${resource.id}`,
      downloads: resource.duplicate_count,
      img: resource.redirect_thumbnail_url,
      description: stripHtml(lastVersionData.description),
    };
  };

  React.useEffect(() => {
    axios
      .all([
        axios.get(
          `https://api.allorigins.win/raw?url=https://www.figma.com/api/hub_files/profile/134689`
        ),
        axios.get(
          `https://api.allorigins.win/raw?url=https://www.figma.com/api/hub_files/profile/850025365157932848`
        ),
      ])
      .then(
        axios.spread((...responses) => {
          let mergedArray = responses
            .map((files: any) => files.data.meta)
            .flat(1);

          let resourceObj = mergedArray.map((item: any) => {
            return setResourceObject(item);
          });

          setIsLoading(false);
          setResources(resourceObj as any);
        })
      );
  }, []);

  return (
    <Section title="Figma resources">
      {isLoading
        ? new Array(props.sckeletonAmount).fill(0).map((_, i) => {
            return <SkeletonCard key={i} />;
          })
        : resources.map((resource: any, i) => {
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

FigmaResources.defaultProps = {
  sckeletonAmount: 2,
} as Partial<Props>;

export default FigmaResources;
