import Image from "next/image";
import Link from "next/link";
import styles from "./gallery.module.css";
import { GalleryProps } from "./types";

export default function Gallery(props: GalleryProps) {
  const { items } = props;

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ pointerEvents: !item.url ? "none" : "initial" }}
        >
          <Link
            href={item.url ?? "#0"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.image}>
              <Image src={item.image} alt={item.name} fill />
            </div>
            <div className={styles.details}>
              <h5>{item.name}</h5>
              {(item.collector || item.artist) && (
                <ul>
                  {item.collector && <li>from {item.collector}</li>}
                  {item.artist && <li>by {item.artist}</li>}
                </ul>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
