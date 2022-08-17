import styles from "./buttons.module.css";

export default function Button({ buttonTxt, ButtonColor }) {
  switch (ButtonColor) {
    case "white":
      return (
        <div>
          <button className={styles.whiteButton}>{buttonTxt}</button>
        </div>
      );

    case "green":
      return (
        <div>
          <button className={styles.greenButton}>{buttonTxt}</button>
        </div>
      );

    default:
      return (
        <div>
          <button className={styles.greenButton}>{buttonTxt}</button>
        </div>
      );
      break;
  }
}
