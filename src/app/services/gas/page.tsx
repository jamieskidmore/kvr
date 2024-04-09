"use client";

import ContactForm from "@/components/contact-form";
import Pills from "@/components/pills";

const gasServices = [
  "Gas stove installation",
  "Gas oven installation",
  "Gas grill installation",
  "Gas fireplace installation",
  "Gas water heater installation",
  "Gas furnace installation",
  "Gas dryer installation",
  "Gas appliance repair",
];

const gasLineServices = [
  "Gas line installation",
  "Gas line repair",
  "Gas line inspection",
  "Gas leak detection",
  "Gas line pressure testing",
];

const maintenanceServices = [
  "Carbon monoxide testing",
  "Gas safety inspections",
  "Gas shut-off valve installation",
  "Gas appliance venting inspection",
  "Gas appliance ventilation cleaning",
];

export default function Gas() {
  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto px-10 max-w-md md:max-w-6xl">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4">
            Gas
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
                  <Pills array={gasServices} />
                </div>

                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">
                    Gas Line Services
                  </h3>
                  <Pills array={gasLineServices} />
                </div>
                <div className="text-lg space-y-2">
                  <h3 className="flex text-xl font-semibold">
                    Maintenance & Inspection
                  </h3>
                  <Pills array={maintenanceServices} />
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
