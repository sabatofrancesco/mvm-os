export type Product = {
  slug: string;
  reference: string;
  name: string;
  category: string;
  capacity?: string;
  material?: string;
  moq: number;
  leadTime: string;
};

export const products: Product[] = [
  {
    slug: "lb991356-round-pp-lip-balm",
    reference: "LB991356",
    name: "Round PP Lip Balm – Monomaterial",
    category: "Lip Balm",
    capacity: "Cup Ø12.75 mm",
    material: "PP monomaterial",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "lb991354-round-lip-balm",
    reference: "LB991354",
    name: "Round Lip Balm",
    category: "Lip Balm",
    capacity: "Cup Ø12.00 / 12.75 mm",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "ml8835-essential-pet-lip-gloss",
    reference: "ML8835",
    name: "Essential PET Lip Gloss",
    category: "Lip Gloss",
    capacity: "9.7 ml OFC",
    material: "PET; recycled resin options available",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "ml8814-round-mini-lip-gloss",
    reference: "ML8814",
    name: "Round Mini Lip Gloss – Full Transparent",
    category: "Lip Gloss",
    capacity: "2.4 ml OFC",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "ml8824-ultra-slim-lip-gloss",
    reference: "ML8824",
    name: "Round Ultra-Slim Lip Gloss – Full Transparent",
    category: "Lip Gloss",
    capacity: "4.5 ml OFC",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "rj8812-hybrid-pet-jar",
    reference: "RJ8812",
    name: "Hybrid PET Jar – Monomaterial Cap",
    category: "Jar",
    capacity: "9.2 ml OFC",
    material: "PET jar and PET cap",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "bo8805-blowtiful-bottle",
    reference: "BO8805",
    name: "BLOWtiful Bottle",
    category: "Bottle",
    capacity: "38 ml OFC",
    material: "PET",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "rc8818-round-cushion-compact",
    reference: "RC8818",
    name: "Round Cushion Compact – Refillable",
    category: "Compact & Palette",
    capacity: "Pan housing Ø36 mm",
    material: "Plastic",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "ls8804-round-aluminum-lipstick",
    reference: "LS8804",
    name: "Round Aluminum Lipstick – Magnetic Closure",
    category: "Lipstick & Stylo",
    capacity: "Cup Ø12.7 mm",
    material: "Aluminum",
    moq: 5000,
    leadTime: "3 months",
  },
  {
    slug: "ls8827-m1-pet-airtight-lipstick",
    reference: "LS8827-M1",
    name: "Round PET Airtight Lipstick – Monomaterial",
    category: "Lipstick & Stylo",
    capacity: "Cup Ø12.7 mm",
    material: "PET",
    moq: 5000,
    leadTime: "3 months",
  },
];

export const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
