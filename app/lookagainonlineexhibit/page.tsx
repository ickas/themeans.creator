import Section from "../ui/Section";
import Gallery from "../ui/Gallery";
import styles from "./page.module.css";
import {
  lookAgainMeme1 SZN1,
  lookAgainMeme1 SZN2,
  lookAgainMeme1 SZN3,
  lookAgainMeme2 SZN1,
  lookAgainMeme2 SZN2,
  lookAgainMeme2 SZN3,
  lookAgainMeme3 SZN1,
  lookAgainMeme3 SZN2,
  lookAgainMeme3 SZN3,
  lookAgainMeme4 SZN1,
  lookAgainMeme4 SZN2,
  lookAgainMeme4 SZN3,
  lookAgainMeme5 SZN1,
  lookAgainMeme5 SZN2,
  lookAgainMeme5 SZN3,
  lookAgainMeme6 SZN1,
  lookAgainMeme6 SZN2,
  lookAgainMeme6 SZN3,
  lookAgainMeme7 SZN1,
  lookAgainMeme7 SZN2,
  lookAgainMeme7 SZN3,
  lookAgainMeme8 SZN1,
  lookAgainMeme8 SZN2,
  lookAgainMeme8 SZN3,
  lookAgainMeme9 SZN2,
  lookAgainMeme9 SZN3,
  lookAgainMeme10 SZN2,
  lookAgainMeme10 SZN3,
  lookAgainMeme11 SZN2,
  lookAgainMeme11 SZN3,
} from "@/app/lib/look-again";

export const metadata = {
  title: "The Means - 6529 & Memes Legacy Collection",
};

export default function LookAgain() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>Look Again</h1>
        <span>online exhibit</span>
      </div>
      <Section>
        <div>
          <blockquote>
            <span>
              The Means are powered by - not affiliated with - The Memes by Punk
              6529. We combine The Memes&apos; art with quotes by the
              collection&apos;s creator to bring each piece even more Meaning.
              By doing this, we are also building a legacy collection for one of
              our space&apos;s most followed and respected thought-leaders.
              We&apos;re documenting how The Memes movement started and the ride
              we&apos;re all on with them.
            </span>
          </blockquote>
        </div>
      </Section>
      <Section>
        <h4>Meme 1: Seize the Memes of Production</h4>
        {lookAgainMeme1.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 2: WAGMI</h4>
        {lookAgainMeme2.length > 0 && <Gallery items={lookAgainMeme2} />}
        <h4>Meme 3: Don&apos;t Let the Institutions Steal Your JPEGs</h4>
        {lookAgainMeme3.length > 0 && <Gallery items={lookAgainMeme3} />}
        <h4>Meme 4: gm</h4>
        {lookAgainMeme4.length > 0 && <Gallery items={lookAgainMeme4} />}
        <h4>Meme 5: Use a Hardware Wallet</h4>
        {lookAgainMeme5.length > 0 && <Gallery items={lookAgainMeme5} />}
        <h4>Meme 6: Open Metaverse/OM</h4>
        {lookAgainMeme6.length > 0 && <Gallery items={lookAgainMeme6} />}
        <h4>Meme 7: Freedom to Transact</h4>
        {lookAgainMeme7.length > 0 && <Gallery items={lookAgainMeme7} />}
        <h4>Meme 8: Freestyle</h4>
        {lookAgainMeme8.length > 0 && <Gallery items={lookAgainMeme8} />}
        <h4>Meme 9: Survive</h4>
        {lookAgainMeme9.length > 0 && <Gallery items={lookAgainMeme9} />}
        <h4>Meme 10: Not Your Keys, Not Your Coins</h4>
        {lookAgainMeme10.length > 0 && <Gallery items={lookAgainMeme10} />}
        <h4>Meme 11: Digital Rights Charter</h4>
        {lookAgainMeme11.length > 0 && <Gallery items={lookAgainMeme11} />}
      </Section>
    </main>
  );
}
