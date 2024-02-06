import Gallery from "../ui/Gallery";
import ButtonLinkOS from "./button-os";
import styles from "./wdym.module.css";
import { wdym } from "@/app/lib/wdym";

export const metadata = {
  title: "The Memes and their Means — What Do You Mean?",
};

export default function WhatDoYouMean() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>What Do You Mean?</h1>
        <span>Ut exercitation sint pariatur eu duis ex culpa.</span>
        <ButtonLinkOS />
      </div>
      <Gallery items={wdym} />
    </main>
  );
}
