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
        <p>
          Fugiat sit laborum labore sunt labore dolore elit id ex id officia
          aute mollit anim nisi. Est sint anim ipsum mollit consequat esse
          mollit quis ad amet nulla mollit non pariatur. Amet commodo id laborum
          et Lorem sunt pariatur. Sunt commodo excepteur anim ea aliquip.
        </p>
      </div>
      <Gallery items={openEditions} />
    </main>
  );
}
