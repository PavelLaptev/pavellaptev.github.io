import * as React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Icon from "./../Icon";
import Section from "./../Section";
import Card from "./../Card";
import SkeletonCard from "../SkeletonCard";

interface Props {
  sckeletonAmount?: number;
}

const FigmaPlugins: React.FunctionComponent<Props> = (props) => {
  const [plugins, setPlugins] = React.useState([] as Array<object>);
  const [isLoading, setIsLoading] = React.useState(true);

  const rootLink =
    "https://raw.githubusercontent.com/PavelLaptev/figma-stat/gh-pages/plugins/";

  const pluginsIDs = [
    "734746297902924375",
    "789839703871161985",
    "891448180042913164",
    "914972720109480252",
    "923820065156924054",
    "939173063111899081",
    "952189489892583044",
    "953318991680776075",
    "961245776147091630",
    "981938541965949273",
    "1000012087652644703",
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

        setPlugins(mergedCounters);
        setIsLoading(false);
        console.log("plugins fetched");
      });
  }, []);

  return (
    <Section title="Figma plugins">
      {isLoading
        ? new Array(props.sckeletonAmount).fill(0).map((_, i) => {
            return <SkeletonCard key={i} />;
          })
        : plugins.map((pluginItem: any, i) => {
            return (
              <Card
                key={i}
                href={`https://www.figma.com/community/plugin/${pluginItem.id}`}
                className={styles.plugin}
              >
                <img
                  className={styles.icon}
                  src={pluginItem.iconUrl}
                  alt="plugin icon"
                />

                <h2 className={styles.label}>{pluginItem.name}</h2>
                <div className={styles.stat}>
                  <div className={styles.stat_item}>
                    <Icon name="downloads" />
                    <span>{pluginItem.installCount.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="likes" />
                    <span>{pluginItem.likeCount.toLocaleString()}</span>
                  </div>
                  <div className={styles.stat_item}>
                    <Icon name="views" />
                    <span>{pluginItem.viewCount.toLocaleString()}</span>
                  </div>
                </div>
              </Card>
            );
          })}
    </Section>
  );
};

FigmaPlugins.defaultProps = {
  sckeletonAmount: 5,
} as Partial<Props>;

export default FigmaPlugins;
