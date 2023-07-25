/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cms from 'src/services/Cms';

import { ItemsSlider } from '$types/ItemsSlider';

// interface SliderProps {
//   params: ItemsSlider[];
// }

// export function getStaticPaths() {
//   function sectionSlider(array: any[]): any[] {
//     const dataVideo = array.find(
//       (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_slider',
//     );

//     if (Array.isArray(dataVideo)) {
//       return dataVideo.map((video: any) => {
//         return {
//           params: {
//             id: video.itemId,
//             desc: video.description,
//             slug: video.name,
//           },
//         };
//       });
//     } else {
//       console.error('Erreur: "dataVideo" n\'est pas un tableau');
//       return [];
//     }
//   }

//   const data = await Cms.getPageContent('home', {});

//   const paths = await sectionSlider(data.components);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps({ params }: any) {
//   const videoDetail = await Cms.getVideo(params.id, {});

//   return {
//     props: { video: videoDetail },
//   };
// }

function VideoDetailPage({ video }: any): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className="grid justify-center mt-4">
        {slug}

        <Link href={'/'}>
          <button className="z-10 px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
            Accueil
          </button>
        </Link>
      </div>

      {/* <div>
        <h1>{video.name}</h1>
        <p>{video.description}</p>
      </div> */}
    </>
  );
}

export default VideoDetailPage;
