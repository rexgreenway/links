import { CameraRoll, Terminal } from "@mui/icons-material";

import { Header, Footer, QuickLinks } from "./components";

import styles from "./App.module.css";

const App = () => {
  return (
    <div id="app" className={styles.App}>
      <Header />

      <QuickLinks />

      {/* <section id="description">
        <p>Software engineering, photography, and whatever else I feel like.</p>
      </section> */}

      <section>
        <div>
          <a href="https://rexgreenway.me">
            <Terminal />
            <h2>Software</h2>
          </a>

          <a href="https://rexgreenway.me/#/portfolio">
            <CameraRoll />
            <h2>Photography</h2>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
