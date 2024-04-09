"use client";

import ContactForm from "@/components/contact-form";
import Pills from "@/components/pills";

const plumbingServices = [
  "Faucets",
  "Sinks",
  "Drains",
  "Baths & showers",
  "Toilets",
  "Laundry machines",
  "Hot water tanks",
  "Water heaters",
  "Water filters",
  "Water softeners",
  "Garburators",
  "Water mains",
  "Sump pumps",
  "Sewer lines",
  "Irrigation systems",
];

const pipePlumbingServices = [
  "Repiping",
  "Poly-b replacement",
  "Leak detection",
  "Leak repair",
];

const emergencyPlumbingServices = [
  "Burst pipe repair",
  "Emergency drain cleaning",
  "Emergency water heater repair",
];

const maintenancePlumbingServices = [
  "Annual plumbing inspections",
  "Preventative maintenance",
  "Drain cleaning",
  "Water heater flushing",
  "Pipe insulation",
];

export default function Plumbing() {
  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            Plumbing
          </h1>
          <div>
            <p className="text-lg">
              KVR Plumbing and Gas provides comprehensive plumbing services for
              both residential and commercial properties. From minor repairs to
              major installations, our skilled team delivers reliable solutions
              tailored to meet your needs. Trust KVR for dependable plumbing
              services, ensuring your systems operate smoothly.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-text-blue text-center px-6">
              Services
            </h2>
            <div>
              <div className="text-lg space-y-6">
                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">
                    Installation & Repair
                  </h3>
                  <Pills array={plumbingServices} />
                </div>

                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">Pipe Services</h3>
                  <Pills array={pipePlumbingServices} />
                </div>
                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">
                    Emergency Services
                  </h3>
                  <Pills array={emergencyPlumbingServices} />
                </div>
                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">
                    Maintenance & Inspection
                  </h3>
                  <Pills array={maintenancePlumbingServices} />
                </div>
              </div>
            </div>
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
