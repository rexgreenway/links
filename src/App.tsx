import { Header, Footer, Links } from "./components";

import styles from "./App.module.css";

const App = () => {
  return (
    <div id="app" className={styles.App}>
      <Header />

      <Links />

      {/* <section id="description">
        <p>Software engineering, photography, and whatever else I feel like.</p>
      </section> */}

      {/* <Main /> */}

      <Footer />
    </div>
  );
};

export default App;
