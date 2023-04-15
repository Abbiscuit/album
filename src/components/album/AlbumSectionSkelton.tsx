type Props = {};

export default function AlbumSectionSeklton({}: Props) {
  return (
    <section className="animate-pulse">
      <h2 className="h-9 w-full max-w-xs bg-neutral-500 rounded mb-4"></h2>
      <ul className="grid grid-cols-5 gap-4">
        {[...Array(10)].map((_, index) => {
          return (
            <li className="aspect-[9/16]" key={index}>
              <div className="h-full w-full rounded bg-neutral-500"></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
