import { Menu } from "@headlessui/react";
import Link from "next/link";

function capitalize(item: string) {
  return item
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function hyphenate(string: string) {
  return string.replace(/\s/g, "-");
}

export default function Dropdown({
  content,
}: {
  content: { category: string; menuOptions: string[] };
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="text-right">
        <div className="w-full flex justify-end">
          {capitalize(content.category)}
        </div>
      </Menu.Button>
      <Menu.Items className="max-w-28 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {content.menuOptions.map((optionName, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <Link
                href={`/${content.category}/${hyphenate(optionName)}`}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } block px-2 py-2 text-sm text-right`}
              >
                {capitalize(optionName)}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
