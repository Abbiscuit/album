import { Album } from '@/pages';
import AlbumList from './AlbumList';

type Props = {
  images: Album[];
};

export default function AlbumSection({ images }: Props) {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Best Album</h2>
      <AlbumList images={images} />
    </section>
  );
}
