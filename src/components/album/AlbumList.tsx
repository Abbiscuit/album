import { Album } from '@/pages';

type Props = {
  images: Album[];
};

export default function AlbumList({ images }: Props) {
  return (
    <ul className="grid grid-cols-5 gap-4">
      {images.map(item => {
        return (
          <li className="aspect-[9/16]" key={item.id}>
            <img className="h-full object-cover" src={item.image} />
          </li>
        );
      })}
    </ul>
  );
}
