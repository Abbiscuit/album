import AlbumSection from '@/components/album/AlbumSection';
import AlbumSectionSeklton from '@/components/album/AlbumSectionSkelton';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// デフォルトのテーマ
import '@splidejs/react-splide/css';
import AlbumList from '@/components/album/AlbumList';
import AlbumTopCarousel from '@/components/album/AlbumTopCarousel';
import AlbumTopCarouselSkelton from '@/components/album/AlbumTopCarouselSkelton';
import SectionLayout from '@/components/common/SectionLayout';

const imageData = [
  { id: 1, image: 'https://picsum.photos/800/450?random=1' },
  { id: 2, image: 'https://picsum.photos/800/450?random=2' },
  { id: 3, image: 'https://picsum.photos/800/450?random=3' },
  { id: 4, image: 'https://picsum.photos/800/450?random=4' },
  { id: 5, image: 'https://picsum.photos/800/450?random=5' },
  { id: 6, image: 'https://picsum.photos/800/450?random=6' },
  { id: 7, image: 'https://picsum.photos/800/450?random=7' },
  { id: 8, image: 'https://picsum.photos/800/450?random=8' },
  { id: 9, image: 'https://picsum.photos/800/450?random=9' },
  { id: 10, image: 'https://picsum.photos/800/450?random=10' },
];

export type Album = {
  id: number;
  image: string;
};

export default function Home() {
  const [images, setImages] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);

    setTimeout(() => {
      setImages(imageData);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <SectionLayout title="Best Online Shop">
          {loading && <AlbumTopCarouselSkelton />}
          {images.length > 0 && <AlbumTopCarousel images={images} />}
        </SectionLayout>

        <SectionLayout title="Recommended for you" link="#" linkLabel="More">
          {loading && <AlbumSectionSeklton />}
          {images.length > 0 && <AlbumList images={images} />}
        </SectionLayout>
      </div>
    </main>
  );
}
