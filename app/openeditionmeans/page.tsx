import Gallery from "../ui/Gallery";
import { openEditions } from "@/app/lib/open-editions";
import styles from "./styles.module.css";

export const metadata = {
  title: "The Memes and their Means — Minting Now SZN2",
};

export default function OpenEditions() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>Open Editions</h1>
        <span>
          Giving back and celebrating special moments with our community.
        </span>
      </div>
      <Gallery items={openEditions} />
    </main>
  );
}
