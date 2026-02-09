import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quiz.codiac.online"),
  title: "Quiz Master | Test Your Knowledge",
  description:
    "Challenge yourself with interactive quizzes on JavaScript, React, CSS, TypeScript, and more!",
  openGraph: {
    title: "Quiz Master | Test Your Knowledge",
    description:
      "Challenge yourself with interactive quizzes on JavaScript, React, CSS, TypeScript, and more!",
    url: "https://quiz.codiac.online",
    siteName: "Quiz Master",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quiz Master Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Master | Test Your Knowledge",
    description:
      "Challenge yourself with interactive quizzes on JavaScript, React, CSS, TypeScript, and more!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
