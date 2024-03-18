import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Image from "next/legacy/image";
import Footer from "@/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="fixed top-0 flex w-full mb-5 bg-blue-500 z-50">
          <div className="fixed" style={{ width: "150px", height: "150px" }}>
            <Link href="/">
              <Image
                src={"/kvr-logo.webp"}
                alt="logo"
                width={150}
                height={150}
                className="fixed p-2"
              />
            </Link>
          </div>
          <div className="w-full relative mr-4">
            <Navbar />
          </div>
        </header>
        <main className="mt-40">
          {children}
          <div className="fixed bottom-0 w-full">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
