import Gallery from "../ui/Gallery";
import { szn2 } from "@/app/lib/szn2";
import styles from "./szn2.module.css";
import Link from "next/link";

export const metadata = {
  title: "The Memes and their Means — Minting Now SZN2",
};

export default function TheMeansSzn2() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>This is your Means heads up page for mints. </h1>
        <p>
          The Means have moved minting to Manifold. To keep up with new drops,
          use this page as a reference and guide to minting URLs. To stay even
          more on top of things, follow us on{" "}
          <Link
            href="https://twitter.com/TheMeansCreator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          and get all drop information as soon as it’s out.
        </p>
        <p>Check out active mints below.</p>
      </div>
      <Gallery items={szn2} />
    </main>
  );
}
