import Logo from "../Logo";
import ButtonLink from "../ButtonLink";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.copyright}>
        <Logo />
        <span>Powered by, not affiliated with, The Memes by @punk6529</span>
      </div>
      <div className={styles.links}>
        <ButtonLink
          value="TheMeansCreator"
          url="https://twitter.com/TheMeansCreator"
          target="_blank"
          icon="twitter"
        />
        <span>themeans.creator@gmail.com</span>
      </div>
    </div>
  );
}
