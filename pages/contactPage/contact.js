import Button from "../../components/button/buttons";
import Navbar from "../../components/navbar/navbar";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.ContactMain}>
        <Navbar />
        <div className={styles.contactHead}>
          <p>Contact</p>
          <div className={styles.contactLeaf}>
            <img src="../images/leafAbout.png" />
          </div>
        </div>
        <div className={styles.contactExsplain}>
          ac cursus ex in viverra gravida diam enim. Cras Donec ex quis lorem.
          consectetur tincidunt lorem. ac ex sit elementum malesuada nulla,
          lobortis, eget sapien
        </div>

        <div className={styles.contactBox}>
          <form className={styles.contactForm}>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Subject</div>
              <input
                placeholder="Enter the subject.."
                className={styles.input}
              ></input>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Email</div>
              <input
                placeholder="Enter your email address.."
                className={styles.input}
              ></input>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Message</div>
              <textarea
                placeholder="Enter your message.."
                className={styles.msgInput}
              ></textarea>
            </div>
            <div className={styles.submit}>
              <Button ButtonColor={"green"} buttonTxt={"Submit"} />
            </div>
          </form>

          <div className={styles.tree}>
            <img src="../images/contactTree.png" />
          </div>
        </div>
      </div>
    </>
  );
}
