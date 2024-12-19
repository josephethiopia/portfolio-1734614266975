
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              {'<Portfolio />'}
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm hover:text-gray-300">
                About
              </Link>
              <Link href="/skills" className="text-sm hover:text-gray-300">
                Skills
              </Link>
              <Link href="/work" className="text-sm hover:text-gray-300">
                Work
              </Link>
              <Link href="/contact" className="text-sm hover:text-gray-300">
                Contact
              </Link>
              <Button className="bg-white text-black hover:bg-gray-200">
                Download CV
              </Button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}