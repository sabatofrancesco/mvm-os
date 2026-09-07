import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { productBySlug, products } from "@/data/products";
import styles from "./product.module.css";

export function generateStaticParams(){return products.map((product)=>({slug:product.slug}))}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const product=productBySlug[slug]; if(!product) notFound();
  const projectUrl=`/project?reference=${encodeURIComponent(product.reference)}`;
  return <main className={styles.page}>
    <Header/>
    <section className={styles.hero}>
      <div className={styles.copy}><p className={styles.eyebrow}>{product.category}</p><span className={styles.reference}>{product.reference}</span><h1>{product.name}</h1><p className={styles.intro}>A selected MVM primary packaging reference for beauty brands, available for project evaluation and customisation.</p><div className={styles.actions}><a className={styles.button} href={projectUrl}>Start with this reference</a><a className={styles.back} href="/products">← Back to products</a></div></div>
      <div className={styles.visual}><div className={styles.object}><small>{product.reference}</small><span>MVM</span></div></div>
    </section>
    <section className={styles.details}>
      <div className={styles.heading}><p className={styles.eyebrow}>Product Information</p><h2>Project-ready essentials.</h2><p>Information shown here is limited to commercially useful data already selected for the MVM portfolio. Final technical suitability is confirmed during project validation.</p></div>
      <dl className={styles.specs}><div><dt>Reference</dt><dd>{product.reference}</dd></div><div><dt>Category</dt><dd>{product.category}</dd></div>{product.capacity&&<div><dt>Capacity / Format</dt><dd>{product.capacity}</dd></div>}{product.material&&<div><dt>Material</dt><dd>{product.material}</dd></div>}<div><dt>MOQ reference</dt><dd>{product.moq.toLocaleString("en-US")} pcs</dd></div><div><dt>Lead time reference</dt><dd>{product.leadTime}</dd></div><div><dt>Samples</dt><dd>To be verified according to project</dd></div><div><dt>Decoration</dt><dd>Options evaluated according to pack, artwork and quantity</dd></div></dl>
    </section>
    <section className={styles.validation}><div><p className={styles.eyebrow}>MVM Validation</p><h2>Before production, the project is checked around your application.</h2></div><div className={styles.validationGrid}><article><span>01</span><h3>Pack selection</h3><p>Format, capacity and material requirements are aligned with the commercial brief.</p></article><article><span>02</span><h3>Sample review</h3><p>Sample availability and the appropriate validation route are confirmed case by case.</p></article><article><span>03</span><h3>Decoration</h3><p>Decoration feasibility is defined against artwork, pack geometry and expected volumes.</p></article></div></section>
    <section className={styles.cta}><p className={styles.eyebrow}>Start a Project</p><h2>Interested in {product.reference}?</h2><p>Use this reference as the starting point for your project brief.</p><a className={styles.button} href={projectUrl}>Build Your Brief</a></section>
    <Footer/>
  </main>
}
