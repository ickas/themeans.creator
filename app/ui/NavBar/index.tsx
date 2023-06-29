import Link from "next/link";
import { LogoMark } from "../Logo";
import ButtonLink from "../ButtonLink";
import styles from "./navbar.module.css";

export default function Navbar() {
  const menu = [
    {
      title: "Home",
      url: ".",
      highlight: false,
    },
    {
      title: "Minting Now",
      url: "/minting-now",
      highlight: false,
    },
    {
      title: "Meaned Memes",
      url: "/meaned-memes",
      highlight: true,
    },
  ];

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href="/">
            <LogoMark />
          </Link>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cta}>
          <ButtonLink
            value="TheMeansCreator"
            url="https://twitter.com/TheMeansCreator"
            target="_blank"
            icon="twitter"
          />
        </div>
      </div>
    </nav>
  );
}
