import Link from "next/link";
import Logo from "../Logo";
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
      url: "/szn2mints",
      highlight: false,
    },
    {
      title: "Look Again - Online Exhibit",
      url: "/lookagainonlineexhibit",
      highlight: true,
    },
  ];

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href="/">
            <Logo />
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
