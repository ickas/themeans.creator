import Link from "next/link";
import Icon from "../Icon";
import styles from "./buttonLink.module.css";
import { squadaOne } from "../../fonts";
import { ButtonLinkProps } from "./types";

export default function ButtonLink(props: ButtonLinkProps) {
  const {
    xl = false,
    blue = false,
    url = "#0",
    target = "_self",
    value,
    icon,
  } = props;

  return (
    <Link
      className={`${squadaOne.className} ${styles.button} ${
        xl ? styles.xl : ""
      } ${blue ? styles.blue : ""}`}
      href={url}
      target={target}
    >
      {icon && <Icon icon={icon} />}
      <span>{value}</span>
    </Link>
  );
}
