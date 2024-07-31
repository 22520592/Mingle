import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mingle",
  description: "Social Network",
  icons: {
    icon: "/public//assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <h1 className="h1-bold">This is a piece of test</h1>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
