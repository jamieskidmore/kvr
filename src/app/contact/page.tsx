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
              Email Us
            </h2>
            <ContactForm />
          </div>
          <div className="space-y-4 pb-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Location
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654236.7200813997!2d-123.96371522151834!3d49.483977198555486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa49ac26bad7a597f%3A0x7aa26bf93ecec84b!2sKVR%20Plumbing%20and%20Gas!5e0!3m2!1sen!2sca!4v1712631725279!5m2!1sen!2sca"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
