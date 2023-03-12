import "./globals.css";
import { openSans } from "./fonts";
import Navbar from "./ui/NavBar";
import Footer from "./ui/Footer";

const title = "The Means";
const description = "The Means — connecting The Memes with their Meaning";

export const metadata = {
  title: title,
  description: description,
  keywords: "nft, meme, art, digital art, Punk 6529",
  openGraph: {
    url: "https://themeanscreator.io",
    title: title,
    description: description,
    type: "website",
    locale: "en-US",
    images: [
      {
        url: "/public/og-image.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@TheMeansCreator",
    site: "@TheMeansCreator",
    images: ["/public/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg" }],
    apple: "/public/apple-touch-icon.png",
  },
  robots: {
    index: true,
  },
  authors: [{ name: "Henrique Macedo", url: "https://ickas.dev" }],
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
