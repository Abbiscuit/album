import { Album } from '@/pages';
import AlbumList from './AlbumList';

type Props = {
  images: Album[];
};

export default function AlbumSection({ images }: Props) {
  return <AlbumList images={images} />;
}
