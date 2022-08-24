import Button from "../button/buttons";
import styles from "./carousel.module.css";
// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

export default function CarouselHandler(Prev, Next) {
 

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.prevButton}>
          <img src="../images/carouselButtonLeft.png" />
        </div> */}
        <div className={styles.slidesMain}>
          <div className={styles.slides}>
            <div className={styles.slide1}>
              <div className={styles.head}>
                <div className={styles.headTxt}>What is your procces?</div>
                <div className={styles.headImg}>
                  <img src="../images/carouselTree1.png" />
                </div>
              </div>
              <div className={styles.details}>
                Learn more about our proccess to keep planting trees every
                month.
              </div>
              <div className={styles.slideButton}>
                <Button buttonTxt={"Read More"} />
              </div>
            </div>

            <div className={styles.slide1}>
              <div className={styles.head}>
                <div className={styles.headTxt}>What is your procces?</div>
                <div className={styles.headImg}>
                  <img src="../images/carouselTree2.png" />
                </div>
              </div>
              <div className={styles.details}>
                Learn more about our proccess to keep planting trees every
                month.
              </div>
              <div className={styles.slideButton}>
                <Button buttonTxt={"Read More"} />
              </div>
            </div>

            <div className={styles.slide1}>
              <div className={styles.head}>
                <div className={styles.headTxt}>What is your procces?</div>
                <div className={styles.headImg}>
                  <img src="../images/carouselTree3.png" />
                </div>
              </div>
              <div className={styles.details}>
                Learn more about our proccess to keep planting trees every
                month.
              </div>
              <div className={styles.slideButton}>
                <Button buttonTxt={"Read More"} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.nextButton}>
          <img src="../images/carouselButtonRight.png" />
        </div> */}
      </div>
    </>
  );
}
