export default function PopularAlbumListSkelton() {
  return (
    <ul className="flex flex-row gap-8 animate-pulse px-0 overflow-x-auto">
      {[...Array(10)].map((_, index) => {
        return (
          <li
            className="shrink-0 w-[118px] rounded aspect-[9/16] p-4 bg-neutral-500"
            key={index}
          ></li>
        );
      })}
    </ul>
  );
}
