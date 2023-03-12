import styles from "./narrow.module.css";
import { NarrowProps } from "./types";

export default function Narrow(props: NarrowProps) {
  const { children } = props;

  return <div className={styles.wrapper}>{children}</div>;
}
