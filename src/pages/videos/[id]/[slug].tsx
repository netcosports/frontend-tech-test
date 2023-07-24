import { useState } from 'react';
import { useRouter } from 'next/router';

function VideoDetailPage() {
  const router = useRouter();
  const { slug } = router.query.itemId;
  console.log('SLUG Vidéo ID', router);

  const [video, setVideo] = useState(null);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {slug}
      {/* <h1>{video.name}</h1>
      <p>{video.description}</p> */}
    </div>
  );
}

export default VideoDetailPage;
