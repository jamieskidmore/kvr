import ContactForm from "@/components/contact-form";

export default function Commercial() {
  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            Commercial Plumbing and Gas
          </h1>
          <div>
            <p className="text-lg">
              KVR Plumbing and Gas works closely with site managers on
              commercial projects. Our experienced team ensures smooth
              coordination and timely completion of plumbing tasks. Trust KVR
              for professional and efficient plumbing services tailored to
              commercial needs.
            </p>
          </div>
          <div className="space-y-4 pb-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Contact Us
            </h2>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
