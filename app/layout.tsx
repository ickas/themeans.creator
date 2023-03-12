import "./globals.css";
import { openSans } from "./fonts";
import Navbar from "./ui/NavBar";
import Footer from "./ui/Footer";

export const metadata = {
  title: "The Means",
  description: "The Means — connecting The Memes with their Meaning",
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
