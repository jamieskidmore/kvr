"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

import Image from "next/legacy/image";
import Dropdown from "./dropdown";
import Link from "next/link";
import { useState } from "react";

const aboutMenuOptions = ["our story", "service area"];
const servicesMenuOptions = ["plumbing", "gas", "commercial", "inspection"];

export default function Navbar() {
  const [showHMenu, setShowHMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      <nav className="flex flex-col text-right z-0">
        <div className="flex md:hidden justify-between m-2">
          <div className="flex">
            <Link href="/">
              <Image src={"/kvr-logo.webp"} alt="logo" width={75} height={75} />
            </Link>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-cta-orange text-4xl my-auto pr-4"
            />
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-5xl my-auto cursor-pointer"
              onClick={() => {
                setShowHMenu(!showHMenu);
              }}
            />
          </div>
        </div>
        <ul className="justify-end mt-10 space-x-8 text-md text-right text-text-white hidden md:flex py-2 px-6">
          <li key="services" className="text-right hover:text-light-blue">
            <Dropdown
              content={{
                category: "services",
                menuOptions: servicesMenuOptions,
              }}
            />
          </li>
          <li key="about" className="hover:text-light-blue">
            <Link href="/about">About</Link>
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
      {showHMenu && (
        <div className="h-full flex flex-col text-text-white text-2xl pb-4 md:hidden">
          <div className="mx-auto space-y-4">
            <div>
              <div>
                <p
                  className="text-center hover:text-light-blue"
                  onClick={() => {
                    setShowServices(!showServices);
                  }}
                >
                  Services
                </p>
                {showServices && (
                  <div className="bg-white rounded space-y-2 text-xl text-gray-600">
                    <div className="pt-2 px-4 hover:bg-black hover:bg-opacity-10">
                      <Link href="/services/plumbing">
                        <p
                          className="text-center"
                          onClick={() => {
                            setShowHMenu(!showHMenu);
                            setShowServices(!showServices);
                          }}
                        >
                          Plumbing
                        </p>
                      </Link>
                    </div>
                    <div className="py-1 px-4 hover:bg-black hover:bg-opacity-10">
                      <Link href="/services/gas">
                        <p
                          className="text-center"
                          onClick={() => {
                            setShowHMenu(!showHMenu);
                            setShowServices(!showServices);
                          }}
                        >
                          Gas
                        </p>
                      </Link>
                    </div>
                    <div className="py-1 px-4 hover:bg-black hover:bg-opacity-10">
                      <Link href="/services/commercial">
                        <p
                          className="text-center"
                          onClick={() => {
                            setShowHMenu(!showHMenu);
                            setShowServices(!showServices);
                          }}
                        >
                          Commercial
                        </p>
                      </Link>
                    </div>
                    <div className="pb-2 px-4 hover:bg-black hover:bg-opacity-10">
                      <Link href="/services/inspection">
                        <p
                          className="text-center"
                          onClick={() => {
                            setShowHMenu(!showHMenu);
                            setShowServices(!showServices);
                          }}
                        >
                          Inspection
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <Link href="/about">
                <p
                  className="text-center hover:text-light-blue"
                  onClick={() => {
                    setShowHMenu(!showHMenu);
                    setShowServices(!showServices);
                  }}
                >
                  About
                </p>
              </Link>
            </div>
            <div>
              <Link href="/reviews">
                <p
                  className="text-center hover:text-light-blue"
                  onClick={() => {
                    setShowHMenu(!showHMenu);
                    setShowServices(!showServices);
                  }}
                >
                  Reviews
                </p>
              </Link>
            </div>
            <div>
              <Link href="/gallery">
                <p
                  className="text-center hover:text-light-blue"
                  onClick={() => {
                    setShowHMenu(!showHMenu);
                    setShowServices(!showServices);
                  }}
                >
                  Gallery
                </p>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <p
                  className="text-center hover:text-light-blue"
                  onClick={() => {
                    setShowHMenu(!showHMenu);
                    setShowServices(!showServices);
                  }}
                >
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
