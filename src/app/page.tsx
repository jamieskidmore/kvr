"use client";

import {
  faTint,
  faSmog,
  faBuilding,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import ContactForm from "@/components/contact-form";
import ServiceLink from "@/components/service-link";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <Image
          src={"/view.png"}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <div className="mt-20 flex flex-col justify-center items-center h-96">
          <div className="">
            <h1
              className="text-white text-5xl font-bold p-4 text-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Kettle Valley Regional Plumbing & Gas
            </h1>
          </div>
          <button className="bg-cta-orange p-4 rounded-2xl">
            <span className="text-text-white text-2xl">(250) 486-6627</span>
          </button>
        </div>
        <div className="h-2 bg-border-gray w-full"></div>
        <div className="bg-main-bg ">
          <div className="space-y-10">
            <div className="space-y-4 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
              <h2 className="text-3xl font-bold text-text-blue text-center px-6 pt-4">
                Welcome to Kettle Valley Plumbing & Gas
              </h2>
              <p className="text-lg">
                As a leading plumbing company committed to excellence, we pride
                ourselves on delivering top-notch services that go beyond fixing
                leaks – we create solutions that flow seamlessly. With 30+ years
                of experience and a dedication to customer satisfaction, we are
                your go-to experts for all things plumbing. At KVRPG, we don't
                just fix problems; we build lasting connections with our
                clients. Trust us to handle your plumbing needs with precision,
                reliability, and a commitment to quality that sets us apart.
                Your satisfaction is our success, and we're ready to exceed your
                expectations.
              </p>
              <p className="text-lg">
                Kettle Valley Regional Plumbing and Gas serves communities in
                the Okanagan region of British Columbia including, but not
                limited to:
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto text-lg">
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Kelowna
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  West Kelowna
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Pentiction
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Peachland
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Summerland
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Oliver
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Osoyoos
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Okanagan Falls
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Naramata
                </div>
                <div className="text-center bg-text-gray text-text-white px-2 rounded-2xl font-semibold">
                  Keremeos
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-text-blue text-center px-6">
                Services
              </h2>
              <div className="text-text-gray mx-auto space-y-4 px-10 max-w-md md:max-w-6xl">
                <div className="flex text-lg">
                  <div className="space-y-4 w-full">
                    <div>
                      <ServiceLink
                        service="Plumbing"
                        path="plumbing"
                        faIcon={faTint}
                        description="KVR Plumbing and Gas provides comprehensive plumbing services for both residential and commercial properties. From minor repairs to major installations, our skilled team delivers reliable solutions tailored to meet your needs. Trust KVR for dependable plumbing services, ensuring your systems operate smoothly."
                      />
                    </div>
                    <div>
                      <ServiceLink
                        service="Gas"
                        path="gas"
                        faIcon={faSmog}
                        description="KVR Plumbing and Gas offers gas services for homes and businesses. Our experienced team handles everything from installations to repairs, ensuring safety and efficiency. Trust KVR for reliable gas solutions tailored to your needs."
                      />
                    </div>
                    <div>
                      <ServiceLink
                        service="Commercial"
                        path="commercial"
                        faIcon={faBuilding}
                        description="KVR Plumbing and Gas works closely with site managers on commercial projects. Our experienced team ensures smooth coordination and timely completion of plumbing tasks. Trust KVR for professional and efficient plumbing services tailored to commercial needs."
                      />
                    </div>
                    <div>
                      <ServiceLink
                        service="Inspection"
                        path="inspection"
                        faIcon={faSearch}
                        description="With more than ten years of plumbing and gas inspection expertise gained in government roles, our team at KVR Plumbing and Gas is well-versed in conducting inspections for residential, commercial, and industrial properties. Count on our experience to deliver meticulous and dependable inspections tailored to your requirements."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pb-4">
              <h2 className="text-3xl font-bold text-text-blue text-center px-6">
                Contact Us
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
