import styles from "./ProductCategories.module.css";

const categories = [
  { name: "Lip Balm", note: "Monomaterial, twist-up and custom solutions", href: "/products#lip-balm" },
  { name: "Sticks & Pansticks", note: "Face, skincare and solid formula formats", href: "/products#sticks" },
  { name: "Lip Gloss", note: "Classic, mini and multi-application packs", href: "/products#lip-gloss" },
  { name: "Mascara", note: "Slim, mini, refillable and premium executions", href: "/products#mascara" },
  { name: "Lipstick & Stylo", note: "Standard, slim and specialist mechanisms", href: "/products#lipstick" },
  { name: "Compacts & Palettes", note: "Formats for powder, blush and colour cosmetics", href: "/products#compacts" },
  { name: "Jars & Bottles", note: "Skincare packaging across multiple capacities", href: "/products#jars-bottles" },
  { name: "Custom Development", note: "Sourcing, decoration and project-specific solutions", href: "/products#custom" },
];

export function ProductCategories() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Product Categories</p>
        <h2>One partner across your primary packaging portfolio.</h2>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <a className={styles.card} href={category.href} key={category.name}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{category.name}</h3>
              <p>{category.note}</p>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
