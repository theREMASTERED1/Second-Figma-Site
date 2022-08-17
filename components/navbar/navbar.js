import styles from "./navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Button from "../button/buttons";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function togBurgerOn() {
    if (burgerOpen) {
      setBurgerOpen(false);
      console.log("YES");
    } else {
      setBurgerOpen(true);
      console.log("NO");
    }
  }
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.mainNav}>
          <div className={styles.logo}>
            <img className={styles.img} src="../images/logo.png" />
          </div>
          <div className={styles.hamburger} onClick={togBurgerOn}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
          </div>
          <div className={styles.navLinks}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Our Token</Link>
            <Link href={"/"}>Learn</Link>
            <Link href={"/contactPage/contact"}>Contact us</Link>
            <Button buttonTxt={"Connect wallet"} />
          </div>
        </div>

        <div className={styles.burgerList}>
          {burgerOpen ? (
            <div className={styles.navLinks1}>
              <div className={styles.navLinksItems}>
                <Link href={"/"} onClick={togBurgerOn}>
                  About us
                </Link>
                <Link href={"/"} onClick={togBurgerOn}>
                  Our Token
                </Link>
              </div>
              <div className={styles.navLinksItems}>
                <Link href={"/"} onClick={togBurgerOn}>
                  Learn
                </Link>
                <Link href={"/contactPage/contact"} onClick={togBurgerOn}>
                  Contact us
                </Link>
              </div>

              <div className={styles.button}>
                <Button
                  className={styles.button1}
                  onClick={togBurgerOn}
                  buttonTxt={"Connect wallet"}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
