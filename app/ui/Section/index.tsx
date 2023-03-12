import styles from "./section.module.css";
import { squadaOne } from "../../fonts";
import { SectionProps } from "./types";

export default function Section(props: SectionProps) {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      <h2 className={squadaOne.className}>{title}</h2>
      {children}
    </section>
  );
}
