import type { Metadata } from "next";
import "@/styles/index.scss";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NT. Night Trips",
  description: "Night Trips Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
