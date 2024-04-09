import Pills from "@/components/pills";

export default function About() {
  const places = [
    { place: "Kelowna", link: "kelowna" },
    { place: "West Kelowna", link: "west-kelowna" },
    { place: "Penticton", link: "penticton" },
    { place: "Peachland", link: "peachland" },
    { place: "Summerland", link: "summerland" },
    { place: "Oliver", link: "oliver" },
    { place: "Osoyoos", link: "osoyoos" },
    { place: "Okanagan Falls", link: "okanagan-falls" },
    { place: "Naramata", link: "naramata" },
    { place: "Keremeos", link: "keremeos" },
  ];

  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            About KVR Plumbing and Gas
          </h1>
          <div className="space-y-4">
            <p className="text-lg">
              As a leading plumbing company committed to excellence, we pride
              ourselves on delivering top-notch services that go beyond fixing
              leaks – we create solutions that flow seamlessly. With 30+ years
              of experience and a dedication to customer satisfaction, we are
              your go-to experts for all things plumbing. At KVRPG, we
              don&apos;t just fix problems; we build lasting connections with
              our clients. Trust us to handle your plumbing needs with
              precision, reliability, and a commitment to quality that sets us
              apart. Your satisfaction is our success, and we&apos;re ready to
              exceed your expectations.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Service Area
            </h2>
            <p className="text-lg">
              Kettle Valley Regional Plumbing and Gas serves communities in the
              Okansgan region of British Columbia including, but not limited to:
            </p>
            <div className="max-w-2xl mx-auto">
              <Pills links={places} />
            </div>
          </div>
          <div className="space-y-4">
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
