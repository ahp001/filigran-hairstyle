import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filigran Hairstylist | Augsburg",
  description:
    "Moderne, filigrane Haarkunst in Augsburg. Damen, Herren, Kinder, Coloration, Kosmetik und Event Styling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}