import Section from "./ui/Section";
import Narrow from "./ui/Narrow";
import ButtonLink from "./ui/ButtonLink";
import Team from "./ui/Team";
import Pricing from "./ui/Pricing";
import styles from "./page.module.css";
import { links } from "./lib/links";
import { team } from "./lib/team";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>The Means</h1>
        <span>Connecting The Memes with their Meaning.</span>
        <ButtonLink
          value="View on OpenSea"
          url="https://opensea.io/themeanscreator"
          target="_blank"
          xl
          blue
        />
      </div>
      <Section title="Collection Proposition.">
        <Narrow>
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
        </Narrow>
        <Narrow>
          <p>This was the trigger that set an idea free.</p>
          <p>
            We love The Memes and what they represent. We love what Punk 6529 is
            trying to do and the mission he has dared us all to accept.
          </p>
        </Narrow>
        <Narrow>
          <blockquote>
            <span>
              If you want to build a ship, don&apos;t drum up the men to gather
              wood, divide the work and give orders. Instead, teach them to
              yearn for the vast and endless sea.
            </span>
            <span className="author">Antoine de St Exupery (1900-1944)</span>
          </blockquote>
        </Narrow>
        <Narrow>
          <p>
            We have set sail. We have left the safety of the harbour. We know
            where we want to go. We know where we don&apos;t want to stay.
          </p>
        </Narrow>
        <Narrow>
          <blockquote>
            <span>
              6529 is worried that the world is sleepwalking into high
              centralized systems with literally nobody pushing the other side
              of the equation.
            </span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </Narrow>
        <Narrow>
          <p>
            We&apos;re all here. We push. We pull. We sway and bend. We never
            break.
          </p>
        </Narrow>
        <Narrow>
          <blockquote>
            <span>we don&apos;t quit!</span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </Narrow>
        <Narrow>
          <p>
            Indeed. We don&apos;t quit. And not only that; we try to bring as
            many others as possible on this mission. There is strength in
            numbers.
          </p>
        </Narrow>
        <Narrow>
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
        </Narrow>
        <Narrow>
          <p>Yes, Ser. We fight. Together.</p>
        </Narrow>
        <Narrow>
          <p>
            Our fight has made us look at this mission and how it&apos;s
            materialized through The Memes. We went searching for meaning. The
            Memes have meaning. That meaning is what makes a meme a meme. What
            it means and represents makes a meme instantly recognizable,
            immediately relatable, at once understood. Meaning is the heart and
            soul of a meme.
          </p>
        </Narrow>
        <Narrow>
          <blockquote>
            <span>gm means &quot;good morning&quot;</span>
            <br />
            <span>gn means &quot;good night&quot;</span>
            <br />
            <span>Ser means &quot;sir&quot;</span>
            <br />
            <span>Fren means &quot;friend&quot;</span>
            <br />
            <span>
              GMI/WAGMI means &quot;Gonna Make It&quot; / &quot;We All Gonna
              Make It&quot;
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
            <span>Probably Nothing means &quot;probably something&quot;.</span>
            <br />
            <span>
              This Is The Way means a way to commend socially positive behavior
            </span>
            <br />
            <span>LFG means Let&apos;s Fucking Go.</span>
            <span className="author">Punk 6529</span>
          </blockquote>
        </Narrow>
        <div className={styles.footerNote}>
          <span>Meaning.</span>
          <br />
          <span>Welcome to The Means.</span>
        </div>
      </Section>
      <Section title="The Means Collection.">
        <p>
          The Means is a derivative-based collection materialized through The
          Memes meme 8 - Authentic Summer adaptations. We have taken The Memes
          and given them The Means. But there&apos;s a twist: the full meaning
          of each meme is unveiled through Punk 6529&apos;s own words. Who else
          could better explain what the Memes mean? We have read up, researched,
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
          based on The Memes&apos; original supply, minus a decimal position.
          Minting price is the same as the year in which Satoshi Nakamoto
          delivered his Bitcoin white paper. See? Meaning, everywhere.
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
          then, be dropped special edition pieces. We&apos;ll work hard to make
          this happen as often as possible.
        </p>
        <p>
          In the meantime, we will continue to connect what Punk 6529 says with
          new Memes. As long as there&apos;s a Memes collection, there will be a
          Means collection.
        </p>
      </Section>
      <Section title="Wait. What do you Mean?">
        <p>There&apos;s more.</p>
        <p>
          We&apos;ve created a side collection with all the ideas and art that
          don&apos;t quite fit in with The Means but that add value to the goal
          of spreading the message, onboarding more people to NFTs and Web 3,
          and, of course, having some fun along the way. We&apos;ve dubbed this
          collection What do You Mean? because it&apos;s exactly that further
          level of meaning (and fun) that we aim to create.
        </p>
        <p>
          What do you Mean? will break from the base concept for The Means in
          terms of art, but not in terms of substance. You&apos;ll see what we
          mean.
        </p>
        <p>
          The mechanics will be the same as for The Means except for supply:
          supply will follow the original Memes&apos; available quantity.
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
          evaluating each piece&apos;s total supply.
        </p>
      </Section>
    </main>
  );
}
