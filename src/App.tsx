import { Header, Footer } from "./components";

import styles from "./App.module.css";

const App = () => {
  return (
    <div id="app" className={styles.Layout}>
      <Header />

      {/* <LinksV1 /> */}

      <Footer />
    </div>
  );
};

export default App;
