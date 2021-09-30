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

const FigmaResources: React.FunctionComponent<Props> = (props) => {
  const [resources, setResources] = React.useState([] as Array<object>);
  const [isLoading, setIsLoading] = React.useState(true);

  const rootLink =
    "https://raw.githubusercontent.com/PavelLaptev/figma-stat/gh-pages/hub_files/";

  const pluginsIDs = [
    "852545799153115753",
    "1009207025721786443",
    "997572063390575469",
  ];

  React.useEffect(() => {
    axios
      .all([
        axios.all(
          pluginsIDs.map((id) =>
            axios.get(`${rootLink}/${id}/counters/latest.json`)
          )
        ),
        axios.all(
          pluginsIDs.map((id) => axios.get(`${rootLink}/${id}/info.json`))
        ),
      ])
      .then((result) => {
        const groupArrays = result.map((arrayGroup) =>
          arrayGroup.map((array) => array.data)
        );

        const mergedCounters = groupArrays[0].map((array, index) => {
          return {
            ...array,
            ...groupArrays[1][index],
          };
        });

        setResources(mergedCounters);
        setIsLoading(false);
        console.log("resources fetched");
      });
  }, []);

  return (
    <Section title="Figma resources">
      {isLoading
        ? new Array(props.sckeletonAmount).fill(0).map((_, i) => {
            return <SkeletonCard key={i} />;
          })
        : resources.map((resource: any, i) => {
            return (
              <Card
                key={i}
                href={`https://www.figma.com/community/file/${resource.id}`}
                className={styles.resource}
              >
                <h2 className={styles.label}>{resource.name}</h2>
                <div className={styles.stat}>
                  <div className={styles.stat_item}>
                    <Icon name="downloads" />
                    <span>{resource.duplicateCount.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="likes" />
                    <span>{resource.likeCount.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="views" />
                    <span>{resource.viewCount.toLocaleString()}</span>
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
