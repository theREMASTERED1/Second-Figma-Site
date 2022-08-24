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
  function togBurgerOff() {
    if (burgerOpen) {
      setBurgerOpen(false);
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
            <Link href={"/#about"}>About us</Link>
            <Link href={"/tokenPage/token"}>Our Token</Link>
            <Link href={"/learnPage/learn"}>Learn</Link>
            <Link href={"/contactPage/contact"}>Contact us</Link>
            <Link href={"/donationPage/donation"}>
              <div>
                <Button buttonTxt={"Connect wallet"} />
              </div>
            </Link>
          </div>
        </div>
        {burgerOpen ? (
          <div className={styles.burgerList}>
            <div className={styles.navLinks1} onClick={togBurgerOff}>
              <Link href={"/#about"} onClick={togBurgerOn}>
                About us
              </Link>

              <hr />
              <Link href={"/tokenPage/token"} onClick={togBurgerOn}>
                Our Token
              </Link>
              <hr />
              <Link href={"/learnPage/learn"} onClick={togBurgerOn}>
                Learn
              </Link>
              <hr />
              <Link href={"/contactPage/contact"} onClick={togBurgerOn}>
                Contact us
              </Link>
              <hr />
              <Link href={"/donationPage/donation"}>
                <div className={styles.button}>
                  <Button
                    className={styles.button1}
                    onClick={togBurgerOn}
                    buttonTxt={"Connect wallet"}
                  />
                </div>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
