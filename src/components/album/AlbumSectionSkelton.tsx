type Props = {};

export default function AlbumSectionSeklton({}: Props) {
  return (
    <ul className="grid grid-cols-5 gap-4 animate-pulse">
      {[...Array(10)].map((_, index) => {
        return (
          <li className="aspect-[9/16]" key={index}>
            <div className="h-full w-full rounded bg-neutral-500"></div>
          </li>
        );
      })}
    </ul>
  );
}
