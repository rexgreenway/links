import { Header, Footer, QuickLinks, Links } from "./components";

import styles from "./App.module.css";

const App = () => {
  return (
    <div id="app" className={styles.App}>
      <Header />

      <section id="description">
        <p>Software engineering, photography, and whatever else I feel like.</p>
      </section>

      <QuickLinks />

      <Links />

      <Footer />
    </div>
  );
};

export default App;
