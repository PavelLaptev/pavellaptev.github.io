import * as React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Icon from "./../Icon";
import Section from "./../Section";
import Card from "./../Card";

const FigmaPlugins: React.FunctionComponent = () => {
  const [plugins, setPlugins] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.allorigins.win/raw?url=https://www.figma.com/api/plugins/profile/134689`
      )
      .then((res) => {
        let pluginsArray = res.data.meta
          .sort((a: any, b: any) => {
            return a.install_count - b.install_count;
          })
          .reverse();

        let filteredArray = pluginsArray.map((item: any) => {
          let lastVersionData = item.versions[Object.keys(item.versions)[0]];

          return {
            link: `https://www.figma.com/community/plugin/${item.id}`,
            name: lastVersionData.name,
            img: `https://www.figma.com${lastVersionData.redirect_icon_url}`,
            likes: item.like_count,
            downloads: item.install_count,
            views: item.view_count,
          };
        });

        setPlugins(filteredArray);
      });
  }, []);

  return (
    <Section title="Figma plugins">
      {plugins.map((pluginItem: any, i) => {
        return (
          <Card key={i} href={pluginItem.link} className={styles.plugin}>
            <img
              className={styles.icon}
              src={pluginItem.img}
              alt="plugin icon"
            />

            <h2 className={styles.label}>{pluginItem.name}</h2>
            <div className={styles.stat}>
              <div className={styles.stat_item}>
                <Icon name="downloads" />
                <span>{pluginItem.downloads.toLocaleString()}</span>
              </div>
              <div className={styles.stat_item}>
                <Icon name="likes" />
                <span>{pluginItem.likes.toLocaleString()}</span>
              </div>
              <div className={styles.stat_item}>
                <Icon name="views" />
                <span>{pluginItem.views.toLocaleString()}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </Section>
  );
};

export default FigmaPlugins;
