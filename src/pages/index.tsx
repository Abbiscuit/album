import AlbumSectionSeklton from '@/components/album/AlbumSectionSkelton';
import { useEffect, useState } from 'react';
// デフォルトのテーマ
import AlbumList from '@/components/album/AlbumList';
import AlbumTopCarousel from '@/components/album/AlbumTopCarousel';
import AlbumTopCarouselSkelton from '@/components/album/AlbumTopCarouselSkelton';
import SectionLayout from '@/components/common/SectionLayout';
import '@splidejs/react-splide/css';
import PopularAlbumList from '@/components/album/PopularAlbumList';
import PopularAlbumListSkelton from '@/components/album/PopularAlbumListSkelton';
import useSWR from 'swr';

export type Album = {
  id: number;
  image: string;
};

export default function Home() {
  const { data: images } = useSWR(`/api/albums`, (url: string) =>
    fetch(url).then(resp => resp.json())
  );

  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <SectionLayout title="Best Online Shop">
          {images === undefined && <AlbumTopCarouselSkelton />}
          {images?.length > 0 && <AlbumTopCarousel images={images} />}
        </SectionLayout>

        <SectionLayout title="Popular">
          {images === undefined && <PopularAlbumListSkelton />}
          {images?.length > 0 && <PopularAlbumList images={images} />}
        </SectionLayout>

        <SectionLayout title="Recommended for you" link="#" linkLabel="More">
          {images === undefined && <AlbumSectionSeklton />}
          {images?.length > 0 && <AlbumList images={images} />}
        </SectionLayout>
      </div>
    </main>
  );
}
