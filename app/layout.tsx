import "./globals.css";
import { open_sans, squada_one } from "./fonts";
import Navbar from "./ui/NavBar";
import Footer from "./ui/Footer";
import AnalyticsProvider from "@/config/analytics/analytics-provider";

const title = "The Memes and their Means";
const description = "The Means — connecting The Memes with their Meaning";

export const metadata = {
  metadataBase: new URL("https://themeanscreator.io"),
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    <html lang="en">
      <body className={`${open_sans.variable} ${squada_one.variable}`}>
        <AnalyticsProvider>
          <Navbar />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
