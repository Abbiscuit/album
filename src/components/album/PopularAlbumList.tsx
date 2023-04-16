import { Album } from '@/pages';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';

type Props = {
  images: Album[];
};

export default function PopularAlbumList({ images }: Props) {
  return (
    <Splide
      hasTrack={false}
      options={{
        type: 'slide',
        perPage: 3,
        perMove: 1,
        padding: '4rem',
      }}
      aria-label="お気に入りの写真"
    >
      <SplideTrack>
        {images.map(item => {
          return (
            <SplideSlide className="p-4 max-w-[150px]" key={item.image}>
              <div className="aspect-[9/16] relative rounded overflow-hidden">
                <Image className="object-cover" src={item.image} alt="" fill />
              </div>
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
}
