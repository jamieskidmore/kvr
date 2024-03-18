"use client";

import Image from "next/image";
import { useState } from "react";

const bathroomImagePaths = [
  "/bathroom1.webp",
  "/bathroom2.webp",
  "/bathroom3.webp",
  "/bathroom4.webp",
  "/bathroom5.webp",
  "/bathroom6.webp",
];

const hotWaterTankImagePaths = ["/tank1.webp", "/tank2.webp"];

const underfloorImagePaths = [
  "/underfloor1.webp",
  "/underfloor2.webp",
  "/underfloor3.webp",
];

export default function Gallery() {
  const [bathroomHidden, setBathroomHidden] = useState(false);
  const [underfloorHidden, setUnderfloorHidden] = useState(false);
  const [hotWaterTankHidden, setHotWaterTankHidden] = useState(false);

  const [imageHidden, setImageHidden] = useState(true);
  const [displayedImagePath, setDisplayedImagePath] =
    useState("/download.webp");

  const handleDisplayImage = (path?: string) => {
    if (path) {
      setDisplayedImagePath(path);
    }
    setImageHidden(!imageHidden);
  };

  return (
    <div className="m-10">
      <div>
        <h1 className="mb-10">Gallery</h1>
        <ul className="mb-10">
          <li key="bathroom">
            <a href="#bathroom">Bathrooms</a>
          </li>
          <li key="hot-water-tank">
            <a href="#hot-water-tank">Hot Water Tanks</a>
          </li>
          <li key="underfloor">
            <a href="#underfloor">Underfloor</a>
          </li>
        </ul>
        <div className="space-y-8">
          <div id="bathroom">
            <div className="flex">
              <h2 className="mr-2">Bathroom</h2>
              <button
                onClick={() => {
                  setBathroomHidden(!bathroomHidden);
                }}
              >
                v
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {!bathroomHidden &&
                bathroomImagePaths.map((path, index) => (
                  <div
                    key={index}
                    className="w-full h-64 relative"
                    onClick={() => {
                      handleDisplayImage(path);
                    }}
                  >
                    <Image
                      src={path}
                      alt="Bathroom"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div id="hot-water-tank">
            <div className="flex">
              <h2 className="mr-2">Hot Water Tank</h2>
              <button
                onClick={() => {
                  setHotWaterTankHidden(!hotWaterTankHidden);
                }}
              >
                v
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {!hotWaterTankHidden &&
                hotWaterTankImagePaths.map((path, index) => (
                  <div
                    key={index}
                    className="w-full h-64 relative"
                    onClick={() => {
                      handleDisplayImage(path);
                    }}
                  >
                    <Image
                      src={path}
                      alt="Hot water tank"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div id="underfloor">
            <div className="flex">
              <h2 className="mr-2">Underfloor</h2>
              <button
                onClick={() => {
                  setUnderfloorHidden(!underfloorHidden);
                }}
              >
                v
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {!underfloorHidden &&
                underfloorImagePaths.map((path, index) => (
                  <div
                    key={index}
                    className="w-full h-64 relative"
                    onClick={() => {
                      handleDisplayImage(path);
                    }}
                  >
                    <Image
                      src={path}
                      alt="placeholder"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {!imageHidden && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-4">
            <button
              className="text-black"
              onClick={() => {
                handleDisplayImage();
              }}
            >
              X
            </button>
            <div className="max-h-[600px] overflow-hidden w-full flex justify-center">
              <Image
                src={displayedImagePath}
                alt="placeholder"
                width={600}
                height={0}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
