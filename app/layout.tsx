import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Abhay Kirti | Luxury Real Estate",
  description: "Experience premium real estate with Abhay Kirti. Cinematic property journeys, smart investments, and luxury living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#050505] text-white selection:bg-accent selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
