import Cms from 'src/services/Cms';
import { useQuery } from 'react-query';

export function getAllvideoIdsAndSlugs() {
  const { data: dataPage } = useQuery(['videoIdsAndSlugs'], () => Cms.getPageContent('home', {}));

  const videoIdsAndSlugs = (components) => {
    const videos = components.find(
      (component) => component._kenticoItemType === 'section_static_carousel',
    ).items;

    return videos.map((video) => {
      return {
        params: {
          id: video.itemId,
          slug: video.name.toLowerCase().split(' ').join('-')
        }
      }
    });
  };

  return videoIdsAndSlugs(dataPage.components)
}

export function getDataVideo(id: string) {
  const {data: dataVideo} = useQuery(['dataVideo'], () => Cms.getVideo(id, {}))

  return dataVideo
}