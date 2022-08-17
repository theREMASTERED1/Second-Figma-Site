import Navbar from "../../components/navbar/navbar";
import AboutPage from "./about/about";
import styles from "./mainPage.module.css";
import Roadmap from "./roadmap/roadmap";

export default function MainPage() {
  return (
    <>
      <div className={styles.aboutPage}>
        <Navbar />
        <AboutPage />
        <Roadmap />
      </div>
    </>
  );
}
