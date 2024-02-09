"use client";

import Link from "next/link";
import NavigationMenuDemo from "./navigation-menu";
import ButtonLink from "../ButtonLink";
import styles from "./navbar.module.css";
import { useAnalytics } from "@/config/analytics";
import { LogoMark } from "../Logo";

export default function Navbar() {
  const { pushEvent } = useAnalytics();

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href="/">
            <LogoMark />
          </Link>
          <NavigationMenuDemo />
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
