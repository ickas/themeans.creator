import styles from "./section.module.css";
import { SectionProps } from "./types";

export default function Section(props: SectionProps) {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
