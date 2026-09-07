import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./project.module.css";

export default function ProjectPage(){
  return <main className={styles.page}>
    <Header />
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Start a Project</p>
      <h1>Tell us what your next beauty pack needs to do.</h1>
      <p>Share the essential project parameters. MVM can support product selection, sourcing, decoration and development from the first brief.</p>
    </section>
    <section className={styles.content}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Project Brief</p>
        <h2>A better brief means a faster first proposal.</h2>
        <p>For an initial evaluation, include the product type, expected quantity, target timing and any requirements already defined for material, capacity, decoration or sustainability.</p>
        <div className={styles.facts}><div><span>Reference MOQ</span><strong>5,000 pcs</strong></div><div><span>Reference lead time</span><strong>3 months</strong></div><div><span>Samples</span><strong>Project specific</strong></div></div>
      </div>
      <div className={styles.formCard}>
        <h2>Request a project evaluation</h2>
        <p>Send the brief directly to MVM. We will use it to identify the most relevant packaging options.</p>
        <a className={styles.button} href="mailto:amministrazione@mvmpackaging.com?subject=MVM%20Packaging%20-%20New%20Project%20Brief&body=Company%3A%0AContact%20name%3A%0AProduct%20category%3A%0AExpected%20quantity%3A%0ATarget%20launch%20date%3A%0ACapacity%20or%20format%3A%0AMaterial%20requirements%3A%0ADecoration%20requirements%3A%0ASustainability%20requirements%3A%0AReference%20product%20(if%20applicable)%3A%0A%0AAdditional%20project%20information%3A">Prepare Project Brief</a>
        <span className={styles.note}>The button opens a pre-structured email so no project data is stored on the website.</span>
      </div>
    </section>
    <section className={styles.steps}><p className={styles.eyebrow}>How MVM Works</p><h2>From brief to production.</h2><div className={styles.grid}><article><span>01</span><h3>Brief</h3><p>We define application, quantities, timing and technical priorities.</p></article><article><span>02</span><h3>Selection</h3><p>We identify suitable standard or project-specific packaging solutions.</p></article><article><span>03</span><h3>Validation</h3><p>Samples, technical documentation and decoration are reviewed for the project.</p></article><article><span>04</span><h3>Supply</h3><p>Commercial conditions and production timing are aligned before order execution.</p></article></div></section>
    <Footer />
  </main>
}
