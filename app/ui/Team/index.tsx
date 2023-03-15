import Image from "next/image";
import Link from "next/link";
import styles from "./team.module.css";
import { TeamProps } from "./types";

export default function Team(props: TeamProps) {
  const { team } = props;

  return (
    <div className={styles.wrapper}>
      {team.map((member, index) => (
        <div key={index}>
          <div className={styles.avatar}>
            <Image
              width={120}
              height={120}
              src={member.avatar}
              alt={member.name}
              placeholder="blur"
            />
          </div>
          <div>
            <div className={styles.id}>
              <span>{member.name}</span>
              <br />
              <Link href={`https://twitter/${member.twitter}`} target="_blank">
                <span className="handle">@{member.twitter}</span>
              </Link>
            </div>
            <div className={styles.bio}>
              <span className="bio">{member.bio}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
