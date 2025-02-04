import Header from "../ui/Header";
import Footer from "../ui/Footer";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>Page not found</div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
