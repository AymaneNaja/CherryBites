
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import Providers from "./Providers";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";

const merri = Merriweather({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "CherryBites",
  description: "tastiest food for you only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html data-theme={'light'} lang="en">
        <body >
          <div className={' max-w-[85rem] mx-auto min-h-screen' + merri.className}>
            <Nav />
            {children}

          </div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
