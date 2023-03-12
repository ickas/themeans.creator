import Logo from "../Logo";
import ButtonLink from "../ButtonLink";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
        <span>Powered by, not affiliated with, The Memes by @punk6529</span>
      </div>
      <div>
        <ButtonLink url="#0" value="TheMeansCreator" icon="twitter" />
        <span>themeans.creator@gmail.com</span>
      </div>
    </div>
  );
}
