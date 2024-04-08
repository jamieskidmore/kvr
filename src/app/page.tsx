"use client";

import ContactForm from "@/components/contact-form";
import Image from "next/legacy/image";

export default async function Home() {
  return (
    <div className="m-0">
      <div className="fixed top-0 left-0 w-screen h-2/3 z-0">
        <Image
          src={"/view.jpeg"}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative">
        <div className="bg-white bg-opacity-20 flex flex-col justify-center items-center h-96">
          <div>
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
        <div className="bg-main-bg">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-blue text-center p-6">
                Welcome to Kettle Valley Plumbing & Gas
              </h2>
              <p className="text-text-gray px-10">
                As a leading plumbing company committed to excellence, we pride
                ourselves on delivering top-notch services that go beyond
                fisxing leaks – we create solutions that flow seamlessly. With
                30+ years of experience and a dedication to customer
                satisfaction, we are your go-to experts for all things plumbing.
                At KVRPG, we don't just fix problems; we build lasting
                connections with our clients. Trust us to handle your plumbing
                needs with precision, reliability, and a commitment to quality
                that sets us apart. Your satisfaction is our success, and we're
                ready to exceed your expectations.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-blue text-center p-6">
                Services
              </h2>
              <p className="text-text-gray px-10">Our services include:</p>
              <ul className="text-text-gray px-20">
                <li>Plumbing</li>
                <li>Gas</li>
                <li>Residenstial & Commercial!</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-blue text-center p-6">
                Contact Us Today!
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
