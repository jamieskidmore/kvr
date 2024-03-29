import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between py-6 px-64 bg-blue-500 space-x-3">
      <div>
        <Link href="https://www.facebook.com/people/KVR-Plumbing-and-Gas/100089751965347/">
          Facebook
        </Link>
      </div>
      <div>
        <Link href="https://www.instagram.com/kvrpg.ca/">Instagram</Link>
      </div>
    </div>
  );
}
