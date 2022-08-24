import Button from "../../../components/button/buttons";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={styles.mainContainer} id="About">
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
            <div className={styles.aboutTxt}>
              <div className={styles.aboutHead}>
                <p>About us</p>
                <div className={styles.headLeaf}>
                  <img src="../images/leafAbout.png" />
                </div>
              </div>
              <div className={styles.aboutP}>
                <p>
                  ac cursus ex in viverra gravida diam enim. Cras Donec ex quis
                  lorem. consectetur tincidunt lorem. ac ex sit elementum
                  malesuada nulla, lobortis, eget sapien
                </p>
                <p>
                  sit eget tincidunt vitae eu nisi placerat volutpat Cras ex.
                  Lorem tincidunt dui. tincidunt sit amet, elit quam Praesent
                  non tempor commodo facilisis placerat.
                </p>
              </div>
            </div>
            <div className={styles.aboutImg}>
              <img src="../images/bitTrees.png" />
            </div>
          </div>
        </div>
        <div className={styles.membersContainer}>
          <div className={styles.membersBody}>
            <div className={styles.membersHead}>
              <img src="../images/leafMembersLeft.png" />
              <p>Members</p>
              <img src="../images/leafMembersRight.png" />
            </div>
            <div className={styles.members}>
              <div className={styles.memberBox}>
                <div className={styles.memberPic}>
                  <img src="../images/member1.png" />
                </div>
                <div className={styles.memberName}>Carlos Sanchez</div>
                <div className={styles.memberJob}>CTO</div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberLeaf1}>
                    <img src="../images/memberLeaf1-1.png"></img>
                  </div>
                  <p>“Cras Donec ex quis lorem. consectetur tincidunt lorem”</p>
                  <div className={styles.memberLeaf2}>
                    <img src="../images/memberLeaf1-2.png"></img>
                  </div>
                </div>
                <div className={styles.memberSocial}>
                  <img src="../images/memberGithub.png" />
                  <img src="../images/memberTwitter.png" />
                  <img src="../images/memberInstagram.png" />
                </div>
              </div>

              <div className={styles.memberBox}>
                <div className={styles.memberPic}>
                  <img src="../images/member2.png" />
                </div>
                <div className={styles.memberName}>Angel Lopez</div>
                <div className={styles.memberJob}>CEO/Founder</div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberLeaf2}>
                    <img src="../images/memberLeaf2-1.png"></img>
                  </div>
                  <p>“Cras Donec ex quis lorem. consectetur tincidunt lorem”</p>
                  <div className={styles.memberLeaf1}>
                    <img src="../images/memberLeaf2-2.png"></img>
                  </div>
                </div>
                <div className={styles.memberSocial}>
                  <img src="../images/memberGithub.png" />
                  <img src="../images/memberTwitter.png" />
                  <img src="../images/memberInstagram.png" />
                </div>
              </div>

              <div className={styles.memberBox}>
                <div className={styles.memberPic}>
                  <img src="../images/member3.png" />
                </div>
                <div className={styles.memberName}>Jonathan Ocampo</div>
                <div className={styles.memberJob}>CSO</div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberLeaf1}>
                    <img src="../images/memberLeaf3-1.png"></img>
                  </div>
                  <p>“Cras Donec ex quis lorem. consectetur tincidunt lorem”</p>
                  <div className={styles.memberLeaf2}>
                    <img src="../images/memberLeaf3-2.png"></img>
                  </div>
                </div>
                <div className={styles.memberSocial}>
                  <img src="../images/memberGithub.png" />
                  <img src="../images/memberTwitter.png" />
                  <img src="../images/memberInstagram.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footPlant}>
          <img src="../images/footPlant.png" />
        </div>
        <div className={styles.footContainer}>
          <div className={styles.footer}>
            <div className={styles.footTxt}>
              <div className={styles.footHead}>Get in Touch</div>
              <div className={styles.footSub}>
                ac cursus ex in viverra gravida diam enim. Cras Donec ex quis
                lorem. consectetur tincidunt lorem. ac ex sit elementum
                malesuada nulla, lobortis, eget sapien
              </div>
            </div>
            <div className={styles.button}>
              <Button buttonTxt={"Contact us"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
