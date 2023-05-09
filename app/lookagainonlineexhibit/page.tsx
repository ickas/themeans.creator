import Section from "../ui/Section";
import Gallery from "../ui/Gallery";
import styles from "./page.module.css";
import { squadaOne } from "../fonts";
import {
  lookAgainMeme1,
  lookAgainMeme2,
  lookAgainMeme3,
  lookAgainMeme4,
  lookAgainMeme5,
  lookAgainMeme6,
  lookAgainMeme7,
  lookAgainMeme8,
  lookAgainMeme9,
  lookAgainMeme10,
} from "@/app/lib/look-again";

export const metadata = {
  title: "The Means - Powered by The Memes",
};

export default function LookAgain() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1 className={squadaOne.className}>Look Again</h1>
        <span className={squadaOne.className}>online exhibit</span>
      </div>
      <Section>
        <div>
          <blockquote>
            <span>
              The Means are powered by - not affiliated with - The Memes by Punk 6529. We combine The Memes' art with quotes by the collection's creator to bring each piece even more Meaning. By doing this, we are also building a legacy collection for one of our space's most followed and respected thought-leaders. We're documenting how The Memes movement started and the ride we're all on with them.
            </span>
          </blockquote>
        </div>
      </Section>
      <Section>
        <h4>Meme 1: Seize the Memes of Production</h4>
        {lookAgainMeme1.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 2: WAGMI</h4>
        {lookAgainMeme2.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 3: Don&apos;t Let the Institutions Steal Your JPEGs</h4>
        {lookAgainMeme3.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 4: gm</h4>
        {lookAgainMeme4.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 5: Use a Hardware Wallet</h4>
        {lookAgainMeme5.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 6: Open Metaverse/OM</h4>
        {lookAgainMeme6.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 7: Freedom to Transact</h4>
        {lookAgainMeme7.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 8: Freestyle</h4>
        {lookAgainMeme8.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 9: Survive</h4>
        {lookAgainMeme9.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 10: Not Your Keys, Not Your Coins</h4>
        {lookAgainMeme10.length > 0 && <Gallery items={lookAgainMeme1} />}
      </Section>
    </main>
  );
}
