const categories = [
  { name: "Lip Balm", note: "Monomaterial, twist-up and custom solutions" },
  { name: "Sticks & Pansticks", note: "Face, skincare and solid formula formats" },
  { name: "Lip Gloss", note: "Classic, mini and multi-application packs" },
  { name: "Mascara", note: "Slim, mini, refillable and premium executions" },
  { name: "Lipstick & Stylo", note: "Standard, slim and specialist mechanisms" },
  { name: "Compacts & Palettes", note: "Formats for powder, blush and colour cosmetics" },
  { name: "Jars & Bottles", note: "Skincare packaging across multiple capacities" },
  { name: "Custom Development", note: "Sourcing, decoration and project-specific solutions" },
];

export function ProductCategories() {
  return (
    <section className="section section-light categories" id="products">
      <div className="section-heading">
        <p className="eyebrow">Product Categories</p>
        <h2>One partner across your primary packaging portfolio.</h2>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <a className="category-card" href="#contact" key={category.name}>
            <span className="category-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{category.name}</h3>
              <p>{category.note}</p>
            </div>
            <span className="category-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
