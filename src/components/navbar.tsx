"use client";

import Image from "next/image";
import Dropdown from "./dropdown";
import Link from "next/link";

const aboutMenuOptions = ["our story", "service area"];
const servicesMenuOptions = ["plumbing", "gas", "inspection", "commercial"];

export default function Navbar() {
  return (
    <nav className="flex flex-col pr-2 py-6">
      <div className="text-right mb-10">250-486-6627</div>
      <ul className="flex justify-center justify-between mt-2 px-20 space-x-8">
        <li key="about" className="w-20">
          <Dropdown
            content={{ category: "about", menuOptions: aboutMenuOptions }}
          />
        </li>
        <li key="services" className="w-20">
          <Dropdown
            content={{
              category: "services",
              menuOptions: servicesMenuOptions,
            }}
          />
        </li>
        <li key="gallery">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li key="reviews">
          <Link href="/reviews">Reviews</Link>
        </li>
        <li key="contact">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
