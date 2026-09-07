"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import styles from "./products.module.css";

const filters = ["All", "Lip Balm", "Lip Gloss", "Lipstick & Stylo", "Compact & Palette", "Jar", "Bottle"] as const;

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
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => active === "All" ? products : products.filter((p) => p.category === active), [active]);

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <p className={styles.eyebrow}>MVM Product Portfolio</p>
        <h1>Primary packaging across beauty categories.</h1>
        <p className={styles.intro}>Explore a curated selection of primary packaging solutions. The portfolio is progressively expanded as technical information is verified for commercial use.</p>
      </section>

      <section className={styles.selected}>
        <div className={styles.selectedHeading}>
          <div><p className={styles.eyebrow}>Selected References</p><h2>Explore the portfolio.</h2></div>
          <p className={styles.count}>{visible.length} references</p>
        </div>
        <div className={styles.filters} aria-label="Filter products by category">
          {filters.map((filter) => <button className={active === filter ? styles.filterActive : styles.filter} key={filter} onClick={() => setActive(filter)}>{filter}</button>)}
        </div>
        <div className={styles.productGrid}>
          {visible.map((product) => (
            <a className={styles.productCard} href={`/products/${product.slug}`} key={product.reference}>
              <div className={styles.productVisual}><span>{product.reference}</span></div>
              <div className={styles.productMeta}><span>{product.category}</span><span>{product.reference}</span></div>
              <h3>{product.name}</h3>
              <div className={styles.productSpecs}>{product.capacity && <span>{product.capacity}</span>}{product.material && <span>{product.material}</span>}</div>
              <span className={styles.explore}>View details →</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Capabilities</p><h2>Beyond the selected references.</h2></div>
        {categories.map(([id, name, description], index) => (
          <article className={styles.category} id={id} key={id}>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{name}</h2><p>{description}</p></div>
            <span className={styles.status}>Portfolio expanding</span>
          </article>
        ))}
      </section>
      <section className={styles.cta}><div className={styles.ctaBox}><div><p className={styles.eyebrow}>Project Enquiry</p><h2>Looking for a specific format, capacity or decoration?</h2></div><a className={styles.button} href="/#contact">Start Your Project</a></div></section>
      <Footer />
    </main>
  );
}
