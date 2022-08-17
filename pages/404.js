import Button from "../components/button/buttons";
import styles from "./404.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.messageBox}>
          <div className={styles.heading}>
            <img src="../images/404.png" />
          </div>
          <div className={styles.txt}>
            Oops! The page you’re looking for doesn’t exit. It might be have
            been moved or deleted.
          </div>
          <Link href={"/"}>
            <Button buttonTxt={"Return to Home"} ButtonColor={"white"} />
          </Link>
        </div>
      </div>
    </>
  );
}
