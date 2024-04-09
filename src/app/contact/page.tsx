"use client";

import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            Contact Us
          </h1>
          <div className="flex flex-col space-y-4">
            <p className="text-lg mx-auto">
              Reach out today and we will get back to you shortly.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Call Now
            </h2>
            <div className="flex">
              <button className="bg-cta-orange p-4 rounded-2xl mx-auto">
                <span className="text-text-white text-2xl">(250) 486-6627</span>
              </button>
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Email Us
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
