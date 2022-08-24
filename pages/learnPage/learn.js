import CarouselHandler from "../../components/carousel/carousel";
import Navbar from "../../components/navbar/navbar";
import React from "react";
import YouTube from "react-youtube";
import styles from "./learn.module.css";
import YouTubeVid from "../../components/youtube/youtube";
import { useState } from "react";

export default function LearnPage() {
  const [MoreOpen, setMoreOpen] = useState(false);
  const [ViewClose, setViewClose] = useState(true);

  function togMoreOn() {
    if (MoreOpen) {
      setMoreOpen(false);
      setViewClose(true);
      console.log("YES");
    } else {
      setMoreOpen(true);
      setViewClose(false);
      console.log("NO");
    }
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.learnContainer}>
          <div className={styles.details}>
            <div className={styles.mainHeading}>
              Learn
              <img src="../images/leafAbout.png" />
            </div>
            <p>
              ac cursus ex in viverra gravida diam enim. Cras Donec ex quis
              lorem. consectetur tincidunt lorem. ac ex sit elementum malesuada
              nulla, lobortis, eget sapien
            </p>
          </div>
          <CarouselHandler />
          <div className={styles.pointMain}>
            <div className={styles.leafHead}>
              <img src="../images/leafMembersLeft.png" />
              <p>Whats the point</p>
              <img src="../images/leafMembersRight.png" />
            </div>
            <div className={styles.youtube}>
              <YouTubeVid />
            </div>
          </div>
          <div className={styles.blogMain}>
            <div className={styles.leafHead}>
              <img src="../images/leafMembersLeft.png" />
              <p>Our blog</p>
              <img src="../images/leafMembersRight.png" />
            </div>
            <p className={styles.blogSub}>
              Check out different topics about Web 3.0, Cryptocurrency and
              more...
            </p>
            <div className={styles.slidesMain}>
              <div className={styles.blogSlides}>
                <div className={styles.slidesBox}>
                  <div className={styles.slide}>
                    <img src="../images/nature.png" />
                    <div className={styles.slideTxt}>
                      <div className={styles.slideHead}>What is Doycoin</div>
                      <p>
                        Cras Donec ex quis lorem. consectetur tincidunt lorem.
                        Cras Donec ex quis lorem. consectetur tincidunt lorem...
                      </p>
                    </div>
                  </div>
                  <div className={styles.slide}>
                    <img src="../images/nature.png" />
                    <div className={styles.slideTxt}>
                      <div className={styles.slideHead}>What is Web 3.0?</div>
                      <p>
                        Cras Donec ex quis lorem. consectetur tincidunt lorem.
                        Cras Donec ex quis lorem. consectetur tincidunt lorem...
                      </p>
                    </div>
                  </div>
                  <div className={styles.slide}>
                    <img src="../images/nature.png" />
                    <div className={styles.slideTxt}>
                      <div className={styles.slideHead}>
                        How IPFS system works?
                      </div>
                      <p>
                        Cras Donec ex quis lorem. consectetur tincidunt lorem.
                        Cras Donec ex quis lorem. consectetur tincidunt lorem...
                      </p>
                    </div>
                  </div>
                </div>

                {MoreOpen ? (
                  <div className={styles.slidesBox1}>
                    <div className={styles.slide}>
                      <img src="../images/nature.png" />
                      <div className={styles.slideTxt}>
                        <div className={styles.slideHead}>What is Doycoin</div>
                        <p>
                          Cras Donec ex quis lorem. consectetur tincidunt lorem.
                          Cras Donec ex quis lorem. consectetur tincidunt
                          lorem...
                        </p>
                      </div>
                    </div>
                    <div className={styles.slide}>
                      <img src="../images/nature.png" />
                      <div className={styles.slideTxt}>
                        <div className={styles.slideHead}>What is Doycoin</div>
                        <p>
                          Cras Donec ex quis lorem. consectetur tincidunt lorem.
                          Cras Donec ex quis lorem. consectetur tincidunt
                          lorem...
                        </p>
                      </div>
                    </div>
                    <div className={styles.slide}>
                      <img src="../images/nature.png" />
                      <div className={styles.slideTxt}>
                        <div className={styles.slideHead}>What is Doycoin</div>
                        <p>
                          Cras Donec ex quis lorem. consectetur tincidunt lorem.
                          Cras Donec ex quis lorem. consectetur tincidunt
                          lorem...
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {ViewClose ? (
          <div className={styles.moreB}>
            <button onClick={togMoreOn}>View More</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
