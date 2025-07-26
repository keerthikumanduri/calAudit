import type { Metadata } from "next";
import "./globals.css";
import  localFont from "next/font/local"
import { Providers } from "./providers";

const calSans = localFont({
  src: "./fonts/CalSans.ttf"
})

export const metadata: Metadata = {
  title: "CalAudit",
  description: "Audit logging for cal.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calSans.className}antialiased`}
      >
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
