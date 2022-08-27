import Layout from '$components/layout/Layout';

import Cms from 'src/services/Cms';
import { useQuery } from 'react-query';

export async function getStaticPaths() {
  const dataPage = await Cms.getPageContent('home', {});

  const videoIdsAndSlugs = (components) => {
    const videos = components.find(
      (component) => component._kenticoItemType === 'section_static_carousel',
    ).items;

    return videos.map((video) => {
      return {
        params: {
          id: video.itemId,
          slug: video.name.toLowerCase().split(' ').join('-'),
        },
      };
    });
  };

  const paths = await videoIdsAndSlugs(dataPage.components);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const dataVideo = await Cms.getVideo(params.id, {});

  console.log("DATAVIDEO", dataVideo);

  return {
    props: { dataVideo },
  };
}

export default function Videos({dataVideo}) {
  console.log(dataVideo);

  return <h1>ITS WORKING</h1>;
}
