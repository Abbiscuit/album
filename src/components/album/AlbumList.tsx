import { Album } from '@/pages';
import Image from 'next/image';

type Props = {
  images: Album[];
};

export default function AlbumList({ images }: Props) {
  return (
    <ul className="grid grid-cols-5 gap-4">
      {images.map(item => {
        return (
          <li className="aspect-[9/16] relative" key={item.id}>
            <Image
              alt=""
              className="h-full w-full bg-neutral-500 object-cover"
              src={item.image}
              fill
            />
          </li>
        );
      })}
    </ul>
  );
}
