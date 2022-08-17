import styles from "./roadmap.module.css";

export default function Roadmap() {
  return (
    <>
      <div className={styles.roadContainer}>
        <div className={styles.roadBox}>
          <div className={styles.mainHead}>
            <img src="../images/leafMembersLeft.png" />
            <p>Roadmap</p>
            <img src="../images/leafMembersRight.png" />
          </div>
          <div className={styles.map}>
            <div className={styles.row}>
              <div className={styles.leftBox1}>
                <div className={styles.imgbox}>
                  <img src="../images/tree1.png" />
                </div>
                <div className={styles.boxTxt}>
                  <div className={styles.subHead}>Stage 1</div>
                  • Pancakeswap Launch
                  <br />
                  • Launch of Socials
                  <br />
                  • Launch of Dapp v 1.0
                  <br />
                  • Organic Growth
                  <br />
                  • Swing Trading
                  <br />
                </div>
              </div>
              <div className={styles.rightBox2}></div>
            </div>

            <div className={styles.row}>
              <div className={styles.leftBox2}>
                <img className={styles.elipse} src="../images/elipse1.png" />
              </div>
              <div className={styles.rightBox1}>
                <div className={styles.boxTxt}>
                  <div className={styles.subHead}>Stage 2</div>
                  <div className={styles.rightList}>
                    • Twitter marketing
                    <br />
                    • +500 holders
                    <br />
                    • Discord Server
                    <br />
                    • Sponsorship Crypto Events
                    <br />
                    • Interactive Campaign
                    <br />
                  </div>
                </div>
                <div className={styles.imgbox}>
                  <img src="../images/tree2.png" />
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.leftBox1}>
                <div className={styles.imgbox}>
                  <img src="../images/tree3.png" />
                </div>
                <div className={styles.boxTxt}>
                  <div className={styles.subHead}>Stage 3</div>
                  • Mobile App
                  <br />
                  • +1000 holders
                  <br />
                  • Listing on exchanges
                  <br />
                  • NFT Platform
                  <br />
                  •Official merch
                  <br />
                </div>
              </div>
              <div className={styles.rightBox2}>
                <img className={styles.elipse} src="../images/elipse2.png" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.leftBox2}>
                <img className={styles.elipse} src="../images/elipse3.png" />
              </div>
              <div className={styles.rightBox1}>
                <div className={styles.boxTxt}>
                  <div className={styles.subHead}>Stage 4</div>
                  <div className={styles.rightList}>
                    • Rebranding
                    <br />
                    • +5000 holders
                    <br />
                    • Launch of Dapp v 2.0
                    <br />
                    • Massive marketing
                    <br />
                    • Diversity Funding
                    <br />
                  </div>
                </div>
                <div className={styles.imgbox}>
                  <img src="../images/tree4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.coffeeBox}>
          <div className={styles.mainHead}>
            <img src="../images/leafMembersLeft.png" />
            <p>Give us a coffee</p>
            <img src="../images/leafMembersRight.png" />
          </div>
          <div className={styles.exsplain}>
            If youd like to donate to the Devs, send ETH, SHIB, USDT here. Thank
            you for your support!
          </div>
          <div className={styles.code}>
            0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
          </div>
        </div>
      </div>
    </>
  );
}
