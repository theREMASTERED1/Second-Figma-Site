import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import styles from "./token.module.css";

export default function Token() {
  return (
    <>
      <Navbar />
      <div className={styles.tokenContain}>
        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <img src="../images/coin.png" />

            <div className={styles.aboutHead}>
              About
              <br />
              Doycoin Token
              <br />
              <p className={styles.pageTxt}>
                ac cursus ex in viverra gravida diam enim. Cras Donec ex quis
                lorem. consectetur tincidunt lorem. ac ex sit elementum
                malesuada nulla, lobortis, eget sapien
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buy}>
          <div className={styles.leafHead}>
            <img src="../images/leafMembersLeft.png" />
            <p>Where to buy</p>
            <img src="../images/leafMembersRight.png" />
          </div>
          <p className={styles.buySub}>
            You can buy our token on the following deFi dapps. Please use the
            correct address and verify these sites.
          </p>
          <div className={styles.buyLinks}>
            <div className={styles.topLogo}>
              <Link href={"/"}>
                <img src="../images/pancakeLogo.png" className={styles.links} />
              </Link>
              <Link href={"/"}>
                <img src="../images/uniLogo.png" className={styles.links} />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <img src="../images/sushiLogo.png" className={styles.links} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.tokenomics}>
          <div className={styles.leafHead}>
            <img src="../images/leafMembersLeft.png" />
            <p>Tokenomics</p>
            <img src="../images/leafMembersRight.png" />
          </div>
          <div className={styles.tokenGraph}>
            <div className={styles.stats}>
              <div className={styles.percent}>
                5%<span className={styles.dotGrey}></span>
              </div>
              <div className={styles.label}>Rewards</div>
              <div className={styles.percent}>
                5%<span className={styles.dotLight}></span>
              </div>
              <div className={styles.label}>Burn</div>
              <div className={styles.percent}>
                10%<span className={styles.dotGreen}></span>
              </div>
              <div className={styles.label}>Developers</div>
              <div className={styles.percent}>
                20%<span className={styles.dotDark}></span>
              </div>
              <div className={styles.label}>Community royalties</div>
              <div className={styles.percent}>
                60%<span className={styles.dotGreen}></span>
              </div>
              <div className={styles.label}>Liquidity pool</div>
            </div>
            <div className={styles.graph}>
              <img src="../images/graph.png" />
            </div>
          </div>
        </div>

        <div className={styles.adress}>
          <div className={styles.adressTxt}>
            <div className={styles.leafHead}>
              <img src="../images/leafMembersLeft.png" />
              <p>Token adress</p>
              <img src="../images/leafMembersRight.png" />
            </div>
            <div className={styles.adressSub}>
              Only this address is official, please verify it before making any
              transaction or purchase.
            </div>
          </div>
          <div className={styles.adressCode}>
            0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375
          </div>
        </div>
      </div>
    </>
  );
}
