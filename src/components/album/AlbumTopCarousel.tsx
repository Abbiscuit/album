import { Album } from '@/pages';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

type Props = {
  images: Album[];
};

export default function AlbumTopCarousel({ images }: Props) {
  return (
    <Splide
      hasTrack={false}
      options={{
        interval: 2500,
        autoplay: true,
        pauseOnHover: true,
        type: 'loop',
      }}
      aria-label="お気に入りの写真"
    >
      <SplideTrack>
        {images.map(item => {
          return (
            <SplideSlide key={item.image}>
              <img
                className="w-full aspect-video rounded"
                src={item.image}
                alt=""
              />
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
}
