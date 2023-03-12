import styles from "./pricing.module.css";
import { squadaOne } from "../../fonts";

export default function Pricing() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>
          <h3 className={squadaOne.className}>The Means</h3>
          <span className={`${squadaOne.className} ${styles.price}`}>
            0.02008 ETH
          </span>
          <br />
          <span className={styles.desc}>
            Year the Satoshi Nakamoto bitcoin white paper came out
          </span>
        </div>
        <div className={styles.disclaimer}>
          <span>Disclaimer</span>
          <ul>
            <li>OpenSea wanted to round 0.02008 up to 0.0201</li>
            <li>Not gonna happen. We took the last digit off.</li>
            <li>OS mint price: 0.0200 eth (We're sorry, Nakamoto)</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          <h3 className={squadaOne.className}>What Do You Mean?</h3>
          <span className={`${squadaOne.className} ${styles.price}`}>
            0.01994 ETH
          </span>
          <br />
          <span className={styles.desc}>Vitalik Buterin’s year of birth</span>
        </div>
        <div className={styles.disclaimer}>
          <span>Disclaimer</span>
          <ul>
            <li>OpenSea wouldn't accept the 4 in 0.01994</li>
            <li>So, we took it off too.</li>
            <li>OS mint price: 0.0199 eth (We're really sorry, Vitalik)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
