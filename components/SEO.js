import Head from "next/head";
import { useRouter } from "next/router";
import { getURL } from "../utils/helper";

export default function SEO(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  let url = getURL(router.asPath);

  const meta = {
    title: "The Online CoWork Lottery",
    description: `Helping women from around the world to win funding for their online businesses through productivity!`,
    image: "/media/og.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="TheOnlineCoworkLottery" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:image"
          content={"https://lottery.onlinecowork.com" + meta.image}
        />
        <meta
          name="keywords"
          content="online coworking space women, female entrepreneur community, virtual coworking community for women, virtual coworking, instagram marketing for women, online marketing for artists, content marketing for artists, marketing to women 35-55, coworking space for women owners, pinterest marketing for online business, gifts for female business owners, pinterest marketing for your small business, online marketing for women, remote jobs women, female-only coworking space"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@onlinecowork" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={"https://lottery.onlinecowork.com" + meta.image}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      {children}
    </>
  );
}
