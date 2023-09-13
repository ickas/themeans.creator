"use client";

import Link from "next/link";
import { useAnalytics } from "@/config/analytics";
import { LogoMark } from "../Logo";
import ButtonLink from "../ButtonLink";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { pushEvent } = useAnalytics();

  const menu = [
    {
      title: "Home",
      url: ".",
      highlight: false,
      event: "visit_home",
    },
    {
      title: "Minting Now",
      url: "/minting-now",
      highlight: false,
      event: "visit_minting_now",
    },
    {
      title: "Meaned Memes",
      url: "/meaned-memes",
      highlight: true,
      event: "visit_meaned_memes",
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
                <Link href={item.url} onClick={() => pushEvent(item.event)}>
                  {item.title}
                </Link>
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
            onClick={() => pushEvent("visit_twitter")}
          />
        </div>
      </div>
    </nav>
  );
}
