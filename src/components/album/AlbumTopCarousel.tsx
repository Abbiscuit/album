import { Album } from '@/pages';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';

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
            <SplideSlide
              className="relative aspect-video rounded overflow-hidden"
              key={item.image}
            >
              <Image className="object-cover" src={item.image} alt="" fill />
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
}
