import Route from "./Route";

const HeadMeta = (options: any, head: any) => {
  let { settings, navigation, footer } = options ?? {};

  let url = head?.url ?? Route.index(true);
  let siteName = settings?.site_name ?? "Hoang Nguyen Blog";
  let siteDescription =
    head?.description ??
    settings?.site_description ??
    "I’m Hoang, a guy who loves running, writing & web3 | hoang.run is a blog about Web3, Self Development and Marathon!";
  let siteTitle = head?.title ? `${head.title} | ${siteName}` : siteName;
  let ogImage = head?.image ?? Route.defaultCover(true);
  let author = head?.author ?? settings?.author ?? "Hoang Nguyen";

  return {
    url,
    siteName,
    siteDescription,
    siteTitle,
    ogImage,
    author,
  };
};

export default HeadMeta;
