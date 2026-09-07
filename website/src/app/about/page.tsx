import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./about.module.css";

const capabilities=[
  ["01","Portfolio Selection","A curated access point to primary packaging across skincare, lip care and colour cosmetics."],
  ["02","Project Development","Support in defining format, capacity, materials and the packaging configuration required by the brief."],
  ["03","Decoration","Decoration requirements are evaluated together with the pack, positioning and expected production volumes."],
  ["04","Technical Validation","Samples and available technical documentation are checked according to the needs of each project."],
  ["05","Sourcing","A multi-source approach allows MVM to search beyond a single manufacturing technology or catalogue."],
  ["06","Commercial Coordination","One commercial interface from initial selection through quotation, validation and supply."],
] as const;

export default function AboutPage(){return <main className={styles.page}>
  <Header/>
  <section className={styles.hero}><p className={styles.eyebrow}>About MVM</p><h1>A primary packaging partner built around the project.</h1><p>MVM Packaging helps beauty brands identify, develop and source primary packaging without forcing the project into a single catalogue or manufacturing technology.</p></section>
  <section className={styles.statement}><p className={styles.eyebrow}>Our Role</p><div><h2>Selection is only the beginning.</h2><p>Beauty packaging decisions combine aesthetics, formula compatibility, industrial feasibility, timing and economics. MVM is designed to make that process more focused: understand the brief, identify relevant solutions, coordinate validation and support the route to supply.</p></div></section>
  <section className={styles.capabilities} id="capabilities"><div className={styles.heading}><p className={styles.eyebrow}>Capabilities</p><h2>One partner across the packaging journey.</h2></div><div className={styles.grid}>{capabilities.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className={styles.model}><div><p className={styles.eyebrow}>MVM Approach</p><h2>Flexible by design.</h2></div><div className={styles.points}><p><strong>Curated, not generic.</strong> We focus the search around the application and commercial brief rather than presenting an undifferentiated catalogue.</p><p><strong>Project-specific validation.</strong> Technical information, samples and decoration feasibility are confirmed according to the selected reference and project.</p><p><strong>Built for growing beauty brands.</strong> The commercial model is designed to support brands that need professional packaging access with pragmatic quantities and direct project support.</p></div></section>
  <section className={styles.cta}><p className={styles.eyebrow}>Next Project</p><h2>Bring us the brief. We will help define the packaging route.</h2><a href="/project">Start Your Project</a></section>
  <Footer/>
</main>}
