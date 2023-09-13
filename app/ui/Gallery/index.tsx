"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnalytics } from "@/config/analytics";
import { GalleryProps } from "./types";
import styles from "./gallery.module.css";

export default function Gallery(props: GalleryProps) {
  const { items } = props;
  const { pushEvent } = useAnalytics();

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const now = new Date();
        const endDate = new Date(item.endDate ?? "");
        const isEnded = now > endDate;
        const url = isEnded ? item.osUrl : item.url ?? "#";

        return (
          <div
            key={index}
            style={{ pointerEvents: !item.url ? "none" : "initial" }}
          >
            <Link
              href={url ?? "#0"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent("visit_gallery_item")}
            >
              <div
                className={`${styles.image} ${
                  isEnded ? styles.disabled : undefined
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
              </div>
              <div className={styles.details}>
                <h5>{item.name}</h5>
                {(item.startDate || item.endDate) && (
                  <span className={styles.date}>
                    {item.startDate} — {item.endDate}
                  </span>
                )}
                {(item.collector || item.artist) && (
                  <ul>
                    {item.collector && <li>from {item.collector}</li>}
                    {item.artist && <li>by {item.artist}</li>}
                  </ul>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
