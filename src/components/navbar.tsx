"use client";

import Image from "next/legacy/image";
import Dropdown from "./dropdown";
import Link from "next/link";

const aboutMenuOptions = ["our story", "service area"];
const servicesMenuOptions = ["plumbing", "gas", "inspection", "commercial"];

export default function Navbar() {
  return (
    <nav className="flex flex-col pr-2 text-right">
      <div className="text-right text-orange mb-20">
        <span className="text-text-white">CALL NOW | </span>
        <span>(250) 486-6627</span>
      </div>
      <ul className="flex justify-end mt-2 space-x-8 text-right text-text-white">
        <li key="services" className="text-right hover:text-light-blue">
          <Dropdown
            content={{ category: "services", menuOptions: servicesMenuOptions }}
          />
        </li>
        <li key="about" className="hover:text-light-blue">
          <Dropdown
            content={{
              category: "about",
              menuOptions: aboutMenuOptions,
            }}
          />
        </li>
        <li key="reviews" className="hover:text-light-blue">
          <Link href="/reviews">Reviews</Link>
        </li>
        <li key="gallery" className="hover:text-light-blue">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li key="contact" className="text-right hover:text-light-blue">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
