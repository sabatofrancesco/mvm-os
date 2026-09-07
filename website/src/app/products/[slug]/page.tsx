import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { productBySlug, products } from "@/data/products";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug[slug];

  if (!product) notFound();

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{product.category}</p>
          <span className={styles.reference}>{product.reference}</span>
          <h1>{product.name}</h1>
          <p className={styles.intro}>A selected MVM primary packaging reference for beauty brands, available for project evaluation and customisation.</p>
          <a className={styles.button} href={`mailto:amministrazione@mvmpackaging.com?subject=MVM%20Packaging%20-%20${encodeURIComponent(product.reference)}`}>Request information</a>
        </div>
        <div className={styles.visual}><div className={styles.object}><span>MVM</span></div></div>
      </section>
      <section className={styles.details}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Product Information</p>
          <h2>Project-ready essentials.</h2>
        </div>
        <dl className={styles.specs}>
          <div><dt>Reference</dt><dd>{product.reference}</dd></div>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          {product.capacity && <div><dt>Capacity / Format</dt><dd>{product.capacity}</dd></div>}
          {product.material && <div><dt>Material</dt><dd>{product.material}</dd></div>}
          <div><dt>MOQ reference</dt><dd>{product.moq.toLocaleString("en-US")} pcs</dd></div>
          <div><dt>Lead time reference</dt><dd>{product.leadTime}</dd></div>
          <div><dt>Samples</dt><dd>To be verified according to project</dd></div>
          <div><dt>Decoration</dt><dd>Available options to be defined according to project</dd></div>
        </dl>
      </section>
      <section className={styles.cta}>
        <p className={styles.eyebrow}>Start a Project</p>
        <h2>Need this reference adapted to your brand?</h2>
        <a className={styles.button} href={`mailto:amministrazione@mvmpackaging.com?subject=MVM%20Packaging%20-%20${encodeURIComponent(product.reference)}`}>Talk to MVM</a>
      </section>
      <Footer />
    </main>
  );
}
