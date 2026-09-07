import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import styles from "./products.module.css";

const categories = [
  ["lip-balm", "Lip Balm", "Monomaterial, twist-up and project-specific lip care packaging."],
  ["sticks", "Sticks & Pansticks", "Primary packs for solid skincare, face and colour cosmetic formulas."],
  ["lip-gloss", "Lip Gloss", "Classic, mini, slim and multi-application formats for lip products."],
  ["mascara", "Mascara", "Slim, mini, refillable and premium mascara packaging solutions."],
  ["lipstick", "Lipstick & Stylo", "Standard, slim and specialist mechanisms for lipstick and stylo applications."],
  ["compacts", "Compacts & Palettes", "Formats for powder, blush, eyeshadow and other colour cosmetic applications."],
  ["jars-bottles", "Jars & Bottles", "Skincare packaging across multiple formats, materials and capacities."],
  ["custom", "Custom Development", "Sourcing, decoration and development support for project-specific packaging needs."],
] as const;

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <p className={styles.eyebrow}>MVM Product Portfolio</p>
        <h1>Primary packaging across beauty categories.</h1>
        <p className={styles.intro}>Explore the MVM portfolio by application. Selected references are already available online, while the catalogue continues to expand as technical information is verified.</p>
      </section>

      <section className={styles.selected}>
        <div className={styles.selectedHeading}>
          <p className={styles.eyebrow}>Selected References</p>
          <h2>Products ready to explore.</h2>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <a className={styles.productCard} href={`/products/${product.slug}`} key={product.reference}>
              <div className={styles.productVisual}><span>MVM</span></div>
              <div className={styles.productMeta}>
                <span>{product.category}</span>
                <span>{product.reference}</span>
              </div>
              <h3>{product.name}</h3>
              <div className={styles.productSpecs}>
                {product.capacity && <span>{product.capacity}</span>}
                {product.material && <span>{product.material}</span>}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.categories}>
        {categories.map(([id, name, description], index) => (
          <article className={styles.category} id={id} key={id}>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
            <span className={styles.status}>Portfolio expanding</span>
          </article>
        ))}
      </section>
      <section className={styles.cta}>
        <div className={styles.ctaBox}>
          <h2>Looking for a specific format, capacity or decoration?</h2>
          <a className={styles.button} href="/#contact">Start Your Project</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
