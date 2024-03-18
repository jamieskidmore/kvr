import Image from "next/legacy/image";

export default function Home() {
  return (
    <div className="m-10">
      <h1>Welcome to Kettle Valley Regional Plumbing & Gas</h1>
      <div className="w-full flex justify-center">
        <Image src={"/placeholder.webp"} alt="logo" width={800} height={0} />
      </div>
      <p>
        As a leading plumbing company committed to excellence, we pride
        ourselves on delivering top-notch services that go beyond fisxing leaks
        – we create solutions that flow seamlessly. With 30+ years of experience
        and a dedication to customer satisfaction, we are your go-to experts for
        all things plumbing. At KVRPG, we don&apos;t just fix problems; we build
        lasting connections with our clients. Trust us to handle your plumbing
        needs with precision, reliability, and a commitment to quality that sets
        us apart. Your satisfaction is our success, and we&apos;re ready to
        exceed your expectations.
      </p>
    </div>
  );
}
