import AlbumSection from '@/components/album/AlbumSection';
import AlbumSectionSeklton from '@/components/album/AlbumSectionSkelton';
import { useEffect, useState } from 'react';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setImages(imageData);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div>{/* Carousel */}</div>

        <section>
          <div>
            <h2>Section Title</h2>
            <a href="#">More</a>
          </div>
          <div>{/* History */}</div>
        </section>

        <section>
          <div>
            <h2>Recommended for you</h2>
            <a href="#">More</a>
          </div>
          {loading && <AlbumSectionSeklton />}
          {images.length > 0 && <AlbumSection images={images} />}
        </section>
      </div>
    </main>
  );
}
