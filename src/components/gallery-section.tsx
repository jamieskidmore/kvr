import { useState } from "react";
import Image from "next/image";

export default function GallerySection({
  name,
  imagePaths,
}: {
  name: string;
  imagePaths: string[];
}) {
  const [hidden, setHidden] = useState(false);
  const [displayedImagePath, setDisplayedImagePath] =
    useState("/download.webp");

  const handleDisplayImage = (path?: string) => {
    if (path) {
      setDisplayedImagePath(path);
    }
    setHidden(!hidden);
  };

  return (
    <div className="space-y-4">
      <button
        className="w-full"
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <div className="flex text-3xl font-bold text-text-blue text-center justify-between hover:bg-light-blue hover:text-text-white cursor-pointer rounded px-2">
          <h2 className="pr-4">{name}</h2>
          {hidden ? "v" : "-"}
        </div>
      </button>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {!hidden &&
            imagePaths.map((path, index) => (
              <div
                key={index}
                className="w-60 h-60 relative z-0"
                onClick={() => {
                  handleDisplayImage(path);
                }}
              >
                <Image src={path} alt={`${name}`} layout="fill" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
