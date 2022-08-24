import Button from "../../components/button/buttons";
import Navbar from "../../components/navbar/navbar";
import styles from "./donation.module.css";

export default function Donation() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.txtContain}>
          <div className={styles.head}>
            <div className={styles.image}>
              <img src="../images/leafAbout.png" />
            </div>
            Thank you for your contribution!
          </div>
          <p>This is the beginning of something big and you’re in now.</p>
          <Button buttonTxt={"See your certificate"} />
          <p>and share it with your friends.</p>
          <div className={styles.memberSocial}>
            <img src="../images/memberGithub.png" />
            <img src="../images/memberTwitter.png" />
            <img src="../images/memberInstagram.png" />
          </div>
        </div>
        <div className={styles.seeds}>
          <img src="../images/seedlings.png" />
        </div>
      </div>
    </>
  );
}
