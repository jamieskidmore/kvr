import ContactForm from "@/components/contact-form";

export default function Inspection() {
  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            Plumbing and Gas Inspections
          </h1>
          <div>
            <p className="text-lg">
              With more than ten years of plumbing and gas inspection expertise
              gained in government roles, our team at KVR Plumbing and Gas is
              well-versed in conducting inspections for residential, commercial,
              and industrial properties. Count on our experience to deliver
              meticulous and dependable inspections tailored to your
              requirements.
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
