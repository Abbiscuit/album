import AlbumSection from '@/components/album/AlbumSection';
import AlbumSectionSeklton from '@/components/album/AlbumSectionSkelton';
import { useEffect, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// デフォルトのテーマ
import '@splidejs/react-splide/css';
import AlbumList from '@/components/album/AlbumList';
import AlbumTopCarousel from '@/components/album/AlbumTopCarousel';

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
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-4">Best Online Shop</h2>
          {loading && (
            <div className="aspect-video">
              <div className="w-full h-full bg-neutral-500 animate-pulse rounded"></div>
            </div>
          )}
          {images.length > 0 && <AlbumTopCarousel images={images} />}
        </section>

        <section className="py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
            <a className="text-emerald-400 text-sm font-semibold" href="#">
              More
            </a>
          </div>
          {loading && <AlbumSectionSeklton />}
          {images.length > 0 && <AlbumList images={images} />}
        </section>
      </div>
    </main>
  );
}
