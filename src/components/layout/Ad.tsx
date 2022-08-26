export default function Ad({ dataAd }): JSX.Element {
  const { image, redirectionTarget } = dataAd;
  return (
    <div className="ad-container">
      <a href={redirectionTarget} target="_blank">
        <img src={image[0].image.url} alt={image[0].image.name} />
      </a>
    </div>
  );
}
