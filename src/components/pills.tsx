import Link from "next/link";

export default function Pills({
  array,
  links,
}: {
  array?: string[];
  links?: { place: string; link: string }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-auto text-lg">
      {links ? (
        links.map((item, index) => (
          <Link key={index} href={`/place/${item.link}`}>
            <div className="text-center bg-text-gray hover:bg-light-blue text-text-white p-2 rounded-2xl font-semibold">
              {item.place}
            </div>
          </Link>
        ))
      ) : array ? (
        array.map((item, index) => (
          <div
            key={index}
            className="text-center bg-text-gray text-text-white p-2 rounded-2xl font-semibold"
          >
            {item}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
