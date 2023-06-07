import Link from "next/link";
import Icon from "../Icon";
import styles from "./buttonLink.module.css";
import { ButtonLinkProps } from "./types";

export default function ButtonLink(props: ButtonLinkProps) {
  const {
    xl = false,
    white = false,
    blue = false,
    url = "#0",
    target = "_self",
    value,
    icon,
  } = props;

  return (
    <Link
      className={`${styles.button} ${xl ? styles.xl : ""} ${
        blue ? styles.blue : white ? styles.white : ""
      }`}
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {icon && <Icon icon={icon} />}
      <span>{value}</span>
    </Link>
  );
}
