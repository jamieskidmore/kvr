"use client";

import GallerySection from "@/components/gallery-section";
import Image from "next/legacy/image";
import Link from "next/link";
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
  return (
    <div className="mx-10 mt-24" id="gallery">
      <div>
        <div className="space-y-10 text-text-gray mx-auto text-lg px-10 max-w-md md:max-w-6xl pb-4">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4 max-w-xl mx-auto">
            Gallery
          </h1>

          <div className="flex">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold text-text-blue pb-4 text-center">
                Jump to
              </h2>
              <ul className="space-y-2 text-center">
                <li key="bathroom">
                  <Link href="#bathroom" className="hover:text-light-blue">
                    Bathrooms
                  </Link>
                </li>
                <li key="hot-water-tank">
                  <Link
                    href="#hot-water-tank"
                    className="hover:text-light-blue"
                  >
                    Hot Water Tanks
                  </Link>
                </li>
                <li key="underfloor">
                  <Link href="#underfloor" className="hover:text-light-blue">
                    Underfloor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div id="bathroom">
                <GallerySection
                  name="Bathroom"
                  imagePaths={bathroomImagePaths}
                />
              </div>
              <div id="hot-water-tank">
                <GallerySection
                  name="Hot Water Tank"
                  imagePaths={hotWaterTankImagePaths}
                />
              </div>
              <div id="underfloor">
                <GallerySection
                  name="Underfloor"
                  imagePaths={underfloorImagePaths}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {!imageHidden && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-4">
                  <button
                    className="text-black"
                    // onClick={() => {
                    //   handleDisplayImage();
                    // }}
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
            )} */}
    </div>
  );
}
