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
    <Menu as="div" className="">
      <Menu.Button className="">{capitalize(content.category)}</Menu.Button>
      <Menu.Items className="">
        {content.menuOptions.map((optionName) => (
          <Menu.Item>
            {({ active }) => (
              <Link
                href={`/${content.category}/${hyphenate(optionName)}`}
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } group flex items-center w-full py-2 text-sm`}
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
