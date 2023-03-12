import Section from "./ui/Section";
import ButtonLink from "./ui/ButtonLink";
import Team from "./ui/Team";
import Pricing from "./ui/Pricing";
import AnaNovo from "/public/Ana_Novo.jpg";
import SoniaTeles from "/public/MOJnfts.jpg";
import styles from "./page.module.css";
import { squadaOne } from "./fonts";

export default function Home() {
  const links = [
    {
      value: "The Means SZN1",
      url: "https://opensea.io/themeanscreator",
    },
    {
      value: "The Means SZN2",
      url: "https://opensea.io/collection/themeans",
    },
    {
      value: "What Do You Mean?",
      url: "https://opensea.io/collection/themeanswhatdoyoumean",
    },
    {
      value: "Look Again - Gallery",
      url: "https://oncyber.io/themeans",
    },
  ];

  const team = [
    {
      avatar: AnaNovo,
      name: "Ana Cristina Novo",
      twitter: "Ana_Novo",
      bio: "Designer, digital artist, NFT portfolio manager, physical miniature extraordinaire.",
    },
    {
      avatar: SoniaTeles,
      name: "Sonia",
      twitter: "MOJnfts",
      bio: "Copywriter, idea-haver and stuff-doer.",
    },
  ];

  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1 className={squadaOne.className}>The Means</h1>
        <span className={squadaOne.className}>
          Connecting The Memes with their Meaning.
        </span>
        <ButtonLink
          value="View on OpenSea"
          url="https://opensea.io/themeanscreator"
          target="_blank"
          xl
          blue
        />
      </div>
      <Section title="Collection Proposition.">
        <div>
          <p>The Memes:</p>
          <blockquote>
            <span>
              ...as more emerge and get distributed, feel free to use them and
              build experiments around them yourselves. NFTs are public readable
              databases of certain ideas, certain community vibes - we put
              enough out there and something interesting might emerge.
            </span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </div>
        <div>
          <p>This was the trigger that set an idea free.</p>
          <p>
            We love The Memes and what they represent. We love what Punk 6529 is
            trying to do and the mission he has dared us all to accept.
          </p>
        </div>
        <div>
          <blockquote>
            <span>
              If you want to build a ship, don't drum up the men to gather wood,
              divide the work and give orders. Instead, teach them to yearn for
              the vast and endless sea.
            </span>
            <span className="author">Antoine de St Exupery (1900-1944)</span>
          </blockquote>
        </div>
        <div>
          <p>
            We have set sail. We have left the safety of the harbour. We know
            where we want to go. We know where we don't want to stay.
          </p>
        </div>
        <div>
          <blockquote>
            <span>
              6529 is worried that the world is sleepwalking into high
              centralized systems with literally nobody pushing the other side
              of the equation.
            </span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </div>
        <div>
          <p>
            We're all here. We push. We pull. We sway and bend. We never break.
          </p>
        </div>
        <div>
          <blockquote>
            <span>we don't quit!</span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </div>
        <div>
          <p>
            Indeed. We don't quit. And not only that; we try to bring as many
            others as possible on this mission. There is strength in numbers.
          </p>
        </div>
        <div>
          <blockquote>
            <span>
              What this means that there are some of us, maybe 50,000 today,
              maybe 500,000 in 6 months, maybe 5,000,000 in a couple of years,
              maybe 50,000,000 in a few years that believe the metaverse should
              be open. And each one of us might be able to make a small
              difference in that fight
            </span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </div>
        <div>
          <p>Yes, Ser. We fight. Together.</p>
        </div>
        <div>
          <p>
            Our fight has made us look at this mission and how it's materialized
            through The Memes. We went searching for meaning. The Memes have
            meaning. That meaning is what makes a meme a meme. What it means and
            represents makes a meme instantly recognizable, immediately
            relatable, at once understood. Meaning is the heart and soul of a
            meme.
          </p>
        </div>
        <div>
          <blockquote>
            <span>gm means "good morning"</span>
            <br />
            <span>gn means "good night"</span>
            <br />
            <span>Ser means "sir"</span>
            <br />
            <span>Fren means "friend"</span>
            <br />
            <span>
              GMI/WAGMI means "Gonna Make It" / "We All Gonna Make It"
            </span>
            <br />
            <span>NGMI means Not Going To Make It.</span>
            <br />
            <span>FOMO means Fear of Missing Out.</span>
            <br />
            <span>Cope means the opposite of FOMO.</span>
            <br />
            <span>1:1 Art means art where each piece is unique (1 of 1).</span>
            <br />
            <span>IRL means In Real Life.</span>
            <br />
            <span>Probably Nothing means "probably something".</span>
            <br />
            <span>
              This Is The Way means a way to commend socially positive behavior
            </span>
            <br />
            <span>LFG means Let's Fucking Go.</span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </div>
        <div className={`${squadaOne.className} ${styles.footerNote}`}>
          <span>Meaning.</span>
          <br />
          <span>Welcome to The Means.</span>
        </div>
      </Section>
      <Section title="The Means Collection.">
        <p>
          The Means is a derivative-based collection materialized through The
          Memes meme 8 - Authentic Summer adaptations. We have taken The Memes
          and given them The Means. But there's a twist: the full meaning of
          each meme is unveiled through Punk 6529's own words. Who else could
          better explain what the Memes mean? We have read up, researched,
          listened and taken notes. Lots of notes.
        </p>
        <p>
          Why? Because “100,000,000 people in an Open Metaverse can change the
          World” (in 6529.io).
        </p>
        <p>
          We believe that if people see and own the meanings behind the Memes
          and the mission we have been requested to join, onboarding this many
          people will become easier, quicker, simpler. Meaning will always be
          what this is about - what it means to be in an Open Metaverse, what it
          means to own NFTs, what it means to be part of the NFT technology
          uprising.
        </p>
        <blockquote>
          <span>art is the utility</span>
          <br />
          <span>memes are the utility</span>
          <br />
          <span>myths are the utility</span>
          <br />
          <span>social organization is the utility</span>
          <br />
          <span>decentralization is the utility</span>
          <br />
          <span className="author">Punk 6529</span>
        </blockquote>
        <p>
          We decentralize. We expand. We grow. We become so many that we can
          longer be ignored.
        </p>
        <p>
          The collection will grow and expand as The Memes do. Supply will be
          based on The Memes' original supply, minus a decimal position. Minting
          price is the same as the year in which Satoshi Nakamoto delivered his
          Bitcoin white paper. See? Meaning, everywhere.
        </p>
        <blockquote>
          <span>The Metaverse will actually happen this decade.</span>
          <span>
            If it is open, human innovation will flourish. If it is closed, we
            are digital serfs of sorts.
          </span>
          <span>
            We 100,000 or so people right now are the front-line in this battle
            and we have to do it ourselves.
          </span>
          <span className="author">Punk 6529</span>
        </blockquote>
        <p>LFG.</p>
      </Section>
      <Section title="How it works - Mechanics.">
        <p>
          There will be no AL. Editions will drop and be open to everybody. Top
          Means hodlers will receive special drops. This and other details will
          be announced through our social media channel prior to the drop.
        </p>
        <p>
          The Means collection will launch new Means once, twice or three times
          a week, depending on market conditions and technical issues.
        </p>
        <p>
          After a certain TBD period of time, unsold editions of one or more
          select Means will be burnt (if there are any).
        </p>
        <p>
          Those hodling The Means and The Memes collections will, every now and
          then, be dropped special edition pieces. We'll work hard to make this
          happen as often as possible.
        </p>
        <p>
          In the meantime, we will continue to connect what Punk 6529 says with
          new Memes. As long as there's a Memes collection, there will be a
          Means collection.
        </p>
      </Section>
      <Section title="Wait. What do you Mean?">
        <p>There's more.</p>
        <p>
          We've created a side collection with all the ideas and art that don't
          quite fit in with The Means but that add value to the goal of
          spreading the message, onboarding more people to NFTs and Web 3, and,
          of course, having some fun along the way. We've dubbed this collection
          What do You Mean? because it's exactly that further level of meaning
          (and fun) that we aim to create.
        </p>
        <p>
          What do you Mean? will break from the base concept for The Means in
          terms of art, but not in terms of substance. You'll see what we mean.
        </p>
        <p>
          The mechanics will be the same as for The Means except for supply:
          supply will follow the original Memes' available quantity.
        </p>
      </Section>
      <Section title="Location.">
        <p>
          Drops will be done on OpenSea, an accessible and well-known platform
          that is easy to navigate and manage.
        </p>
        <p>
          We invite everyone without a crypto wallet to check out the
          alternative ways of acquiring NFTs available on the platform. That’s
          what they’re there for.
        </p>
        <p>
          Then, after due diligence, it would be great if those without crypto
          wallets could set one up (Metamask, for example, which has great
          tutorials for online security) and acquire a hardware wallet (Ledger
          or Trezor, for example) to store your pieces. Or maybe set one up for
          a friend or family member and gift them their first NFT? But be aware:
          there’s really no going back once you own your first NFT and discover
          the potential and future this technology has. DYOR (Do Your Own
          Research) and see how it can revolutionize the world and how we live
          in it.
        </p>
        <p>
          We encourage all hodlers to use a hardware wallet to store their Memes
          and Means (and any other NFTs they might own). Create an independent,
          eth-free wallet to store your Means if you do not have a hardware
          wallet.
        </p>
        <ul className={styles.cta}>
          {links.map((link, index) => (
            <li key={index}>
              <ButtonLink
                value={link.value}
                url={link.url}
                target="_blank"
                xl
                blue
              />
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Team">
        <Team team={team} />
      </Section>
      <Section title="Pricing">
        <Pricing />
      </Section>
      <Section title="Distribution">
        <p>
          <i>The Means</i> and the <i>What Do You Mean?</i> collections are open
          to all who wish to collect them.
        </p>
        <p>
          There is no AL. There will be drops for Memes and Means hodlers as
          often as possible.
        </p>
        <p>
          We will distribute 4 editions of each piece to The Means team members
          and a further 4 to The Means Vault. Please consider this when
          evaluating each piece's total supply.
        </p>
      </Section>
    </main>
  );
}
