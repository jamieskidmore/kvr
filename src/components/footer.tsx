import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

config.autoAddCss = false; // Disable automatic CSS addition

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-between bg-header-bg space-x-3 m-3 text-4xl px-28 md:px-56">
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/people/KVR-Plumbing-and-Gas/100089751965347/"
          className="hover:text-light-blue"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kvrpg.ca/"
          className="hover:text-light-blue"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}
