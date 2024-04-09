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
    <div id="bathroom">
      <div className="flex text-3xl font-bold text-text-blue text-center">
        <h2 className="pr-4">{name}</h2>
        <button
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          {hidden ? "v" : "-"}
        </button>
      </div>
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
                <Image src={path} alt="Bathroom" layout="fill" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
