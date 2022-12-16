import React from "react";

import { Section, CardContent, Skeleton } from "../../components";
import { toShortNum } from "../../utils";

const Plugins: React.FC = () => {
  const [pluginsData, setPluginsData] = React.useState<any>([]);

  // FETCH DATA
  React.useEffect(() => {
    // fetch data from api
    const fetchUrl =
      "https://www.figma.com/api/plugins/profile/134689?fuid=987658461863261647";

    // cors proxy
    const proxyUrl = "https://fuckcors.app/";

    fetch(proxyUrl + fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        const newPluginData = data.meta.map((plugin: any) => {
          return {
            url: `https://www.figma.com/community/plugin/${plugin.id}`,
            name: (Object.values(plugin.versions)[0] as any).name,
            img: (Object.values(plugin.versions)[0] as any).redirect_icon_url,
            likes: plugin.like_count,
            likesShort: toShortNum(plugin.like_count),
            runs: plugin.unique_run_count,
            runsShort: toShortNum(plugin.unique_run_count)
          };
        });

        const resortedPluginData = newPluginData.sort(
          (a: any, b: any) => b.runs - a.runs
        );

        // exclude cloned plugin
        const clonedPlugins = ["1050439261870735490", "1052604096433126717"];

        // remove plugin with id 1050439261870735490
        const removeClonedPlugin = resortedPluginData.filter(
          (plugin: any) => !clonedPlugins.includes(plugin.url.split("/").pop())
        );

        setPluginsData(removeClonedPlugin);
      });
  }, []);

  return (
    <Section
      title="Plugins"
      description={
        <>
          I have created many Figma plugins for different purposes. If I see
          that the work process can be optimized, I try to do so. It helps free
          up time for other tasks and make the process more efficient. All my
          plugins I have made are open source and completely free.
        </>
      }
    >
      {pluginsData.length !== 0
        ? // RENDER PLUGINS
          pluginsData.map((plugin: any, index: number) => {
            return (
              <CardContent
                key={`${plugin.name}-${index}`}
                title={plugin.name}
                icon={plugin.img}
                stat={[
                  { name: "Likes", value: plugin.likesShort },
                  { name: "Runs", value: plugin.runsShort }
                ]}
                link={plugin.url}
              />
            );
          })
        : Array(13)
            .fill(0)
            .map((_, i) => <Skeleton key={i} />)}
    </Section>
  );
};

export default Plugins;
