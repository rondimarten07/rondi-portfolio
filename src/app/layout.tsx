import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rondi | Mobile Developer Portfolio",
  description:
    "Mid-Level Mobile Developer with 3+ years of experience in Android (Kotlin, Jetpack Compose), Flutter, and fullstack development. Based in Bandung, Indonesia.",
  keywords: [
    "Rondi",
    "Mobile Developer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Portfolio",
    "Bandung",
  ],
  openGraph: {
    title: "Rondi | Mobile Developer Portfolio",
    description:
      "Mid-Level Mobile Developer with 3+ years of experience building high-quality mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
