import Button from "../../components/button/buttons";
import Navbar from "../../components/navbar/navbar";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [first, setFirst] = useState("");
  const [disable, setDisable] = useState(true);

  const handleSubmit = (event) => {
    const name = document.getElementById("input1");
    const email = document.getElementById("input2");
    const message = document.getElementById("input3");
    name.value = "";
    email.value = "";
    message.value = "";
    console.log("form submitted ✅");
    event.preventDefault();
    if (disable) {
      setDisable(false);
      console.log("YES");
    }
  };

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
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Subject</div>
              <input
                placeholder="Enter the subject.."
                className={styles.input}
                type="text"
                required
                minLength={1}
                id="input1"
              ></input>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Email</div>
              <input
                placeholder="Enter your email address.."
                className={styles.input}
                type="email"
                alert={"no this is wrong"}
                required
                minLength={1}
                id="input2"
              ></input>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.subHead}>Message</div>
              <textarea
                placeholder="Enter your message.."
                className={styles.msgInput}
                type="text"
                required
                minLength={1}
                title="please tell us whats on your mind"
                id="input3"
              ></textarea>
            </div>

            <div className={styles.submit} id="submit1">
              {disable ? (
                <Button
                  ButtonColor={"green"}
                  buttonTxt={"Submit"}
                  type="submit"
                />
              ) : null}
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
