"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Image from "next/legacy/image";
import Dropdown from "./dropdown";
import Link from "next/link";

const aboutMenuOptions = ["our story", "service area"];
const servicesMenuOptions = ["plumbing", "gas", "inspection", "commercial"];

export default function Navbar() {
  return (
    <nav className="flex flex-col text-right z-0">
      <div className="flex md:hidden justify-between m-2">
        <div className="flex">
          <Image src={"/kvr-logo.webp"} alt="logo" width={75} height={75} />
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-3xl my-auto"
          />
        </div>
      </div>
      <ul className="justify-end mt-10 space-x-8 text-md text-right text-text-white hidden md:flex py-2 px-6">
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
        <li key="contact" className="text-right hover:text-light-blue">
          <button className="bg-cta-orange rounded-2xl px-2">
            <span className="text-text-white text-lg px-2">CALL NOW</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
