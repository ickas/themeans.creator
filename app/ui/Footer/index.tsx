"use client";

import Link from "next/link";
import { useAnalytics } from "@/config/analytics";
import { Logo } from "../Logo";
import ButtonLink from "../ButtonLink";
import styles from "./footer.module.css";

export default function Footer() {
  const { pushEvent } = useAnalytics();

  return (
    <div className={styles.wrapper}>
      <div className={styles.copyright}>
        <Logo />
        <span>
          Powered by, not affiliated with,{" "}
          <Link
            href="https://seize.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Memes
          </Link>{" "}
          by @punk6529
        </span>
      </div>
      <div className={styles.links}>
        <ButtonLink
          value="TheMeansCreator"
          url="https://twitter.com/TheMeansCreator"
          target="_blank"
          onClick={() => pushEvent("visit_twitter")}
          icon="twitter"
          blue
        />
        <span>themeans.creator@gmail.com</span>
      </div>
    </div>
  );
}
