import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

export default function ServiceLink({
  service,
  path,
  faIcon,
  description,
}: {
  service: string;
  path: string;
  faIcon: IconProp;
  description: string;
}) {
  return (
    <Link href={`/services/${path}`}>
      <div>
        <div className="flex justify-between space-x-4">
          <div className="flex my-2 justify-center min-w-8">
            <FontAwesomeIcon icon={faIcon} className="text-3xl" />
          </div>
          <div className="flex w-full p-2 justify-between rounded hover:bg-light-blue hover:text-text-white">
            <h3 className="flex text-lg font-semibold">{service}</h3>
            <div className="flex">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl my-auto"
              />
            </div>
          </div>
        </div>
        <div className="px-14">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
