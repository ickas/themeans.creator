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
  title: "The Means — Look Again Gallery",
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
              What we do see depends mainly on what we look for. ... In the same
              field, the farmer will notice the crop, the geologists the
              fossils, botanists the flowers, artists the colouring, sportmen
              the cover for the game. Though we may all look at the same things,
              it does not all follow that we should see them.
            </span>
            <span className="author">
              John Lubbock, The Beauties of Nature and the Wonders of the World
              We Live in
            </span>
          </blockquote>
        </div>
        <div>
          <blockquote>
            <span>
              Though we may all look at the same things, it does not all follow
              that we should see them
            </span>
          </blockquote>
          <p>
            This sentence does a beautiful job of summing up most people’s
            experience with art. 100 million people looking at one work of art
            will probably find 100 million different ways to describe what they
            see and how it makes them feel. We want to source that ambiguity,
            that freedom of interpretation, and transform it into a uniting
            force.
          </p>
        </div>
      </Section>
      <Section title="Looking and seeing.">
        <p>When we look at art, do we really see what it’s about?</p>
        <p>
          All art contains a message, an intent, a purpose. But, sometimes, we
          just can’t see it, no matter how hard we look. Does it matter?In the
          grand scheme of things, no. It’s part of art’s beauty. There are no
          instructions. Here, for this purpose and intent, yes, it does matter.
        </p>
        <p>
          We want everyone to Look Again until they see what’s been waiting to
          be seen all along.
        </p>
      </Section>
      <Section title="Meaning is in the eye of the beholder.">
        <p>
          Look Again is a collector-based online exhibit for The Memes by Punk
          6529 SZN1 and SZN2 themes.
        </p>
        <p>
          We want to create a “this can mean that too” base for this collection
          and what it represents, adding meaning and even more art and artists
          to a growing movement.
        </p>
        <blockquote>
          <span>
            The highest calling of art is not to look pretty in your living room
          </span>
          <span className="author">Punk 6529</span>
        </blockquote>
        <p>
          It can instigate rebellions or make people fall in love. It can make
          grown adults weep, laugh out loud or just sit in awe. Art has always
          been used as a quick, objective and sure-fire way to communicate. It
          can be a weapon of war or a tool for peace. It can destroy and heal.
          It can be disturbing and comforting. It can be anything we want it to.
          But not always. Sometimes, it can be used as a means to an end, a
          means of carrying a message and meaning. Sometimes, its goal is to
          unify opinions, offering a common-belief ground on which they can
          spread. And sometimes, if the message is clear and the medium it’s
          carried on effective, it can transform into a Meme. That’s the jackpot
          for any message, for any meaning, for anything worth sharing.
        </p>
        <p>
          Memes have elected Presidents and started trends. They’ve taken brands
          to momentous success. They have provided information (some good, some
          bad) and been used as highly-effective communication tools. They have
          been more effective at transmitting meaning than any other available
          means to date.
        </p>
        <blockquote>
          <span>Memes are the apex object of society.</span>
          <span className="author">Punk 6529</span>
        </blockquote>
        <blockquote>
          <span>
            The Memes Collection is focused on the fight for the open metaverse
            (decentralization, community, self-sovereignty) and spreading this
            message. We want many people, many wallets spreading this message.
          </span>
          <span className="author">6520.io</span>
        </blockquote>
        <p>
          As do we. So, we went looking for the message’s meaning. With some
          help, of course.
        </p>
        <p>
          The Means have asked seasoned and savvy art collectors to bridge the
          meaning behind The Memes into different art, artists, and
          perspectives. The basis? The messages the collection wants to spread
          in defending the principles of an Open Metaverse founded on
          decentralization, community and self-sovereignty. The OM goal is to
          onboard 100 million people to NFTs, but what if we’re closer to it
          than we think?
        </p>
        <p>
          Each was asked to choose a collected artwork, no matter how old or new
          that could also transmit and expand on the 10 Meme themes currently in
          production.
        </p>
        <p>
          Through their eyes, we can find new meaning. Perhaps we’ll find that
          The Memes’ messages have been around longer than we think, that we
          have been collectively encouraging and defending the 10 principles
          through different perspectives and ways of sharing the same meaning.
        </p>
        <p>
          We think the OM message is stronger and more intuitive in the NFT
          world than we all know. Have we all been moving in the same direction
          without realizing it? Can that movement be harnessed to make us see
          we’re all in this together?
        </p>
        <p>We must try.</p>
      </Section>
      <Section title="Look at it this way.">
        <blockquote>
          <span>What is art but a way of seeing?</span>
          <span className="author">Saul Bellow</span>
        </blockquote>
        <p>
          This exhibit showcases what the invited collectors see, feel and
          curate to bridge meaning, shown in a simple, clear and direct way.
        </p>
        <p>
          We hope you enjoy this journey through art, The Memes’ themes and the
          meaning these art collectors see when they look at both in a new
          light.
        </p>
        <p>
          Meaning everywhere, for everyone. Look Again and see for yourself.
        </p>
      </Section>
      <Section>
        <h4>Meme 1: Seize the Memes of Production</h4>
        {lookAgainMeme1.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 2: WAGMI</h4>
        {lookAgainMeme2.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 3: Don’t Let the Institutions Steal your JPEGS</h4>
        {lookAgainMeme3.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 4: gm</h4>
        {lookAgainMeme4.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 5: Use a Hardware Wallet</h4>
        {lookAgainMeme5.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 6: Open Metaverse/OM</h4>
        {lookAgainMeme6.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 7: Freedom to Transact Meme</h4>
        {lookAgainMeme7.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 8: Freestyle</h4>
        {lookAgainMeme8.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 9: Survive</h4>
        {lookAgainMeme9.length > 0 && <Gallery items={lookAgainMeme1} />}
        <h4>Meme 10: Not your Keys, not your coins</h4>
        {lookAgainMeme10.length > 0 && <Gallery items={lookAgainMeme1} />}
      </Section>
    </main>
  );
}
