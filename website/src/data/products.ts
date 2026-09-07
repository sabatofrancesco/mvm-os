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
  { slug:"lb991356-round-pp-lip-balm", reference:"LB991356", name:"Round PP Lip Balm – Monomaterial", category:"Lip Balm", capacity:"Cup Ø12.75 mm", material:"PP monomaterial", moq:5000, leadTime:"3 months" },
  { slug:"lb991354-round-lip-balm", reference:"LB991354", name:"Round Lip Balm", category:"Lip Balm", capacity:"Cup Ø12.00 / 12.75 mm", moq:5000, leadTime:"3 months" },
  { slug:"lb991301-solo-pp-airtight-flat", reference:"LB991301", name:"Solo PP Airtight Lip Balm – Flat", category:"Lip Balm", material:"PP monomaterial; PCR option", moq:5000, leadTime:"3 months" },
  { slug:"lb991301-1-solo-pp-airtight-slanted", reference:"LB991301-1", name:"Solo PP Airtight Lip Balm – Slanted", category:"Lip Balm", material:"PP monomaterial; PCR option", moq:5000, leadTime:"3 months" },
  { slug:"ml8835-essential-pet-lip-gloss", reference:"ML8835", name:"Essential PET Lip Gloss", category:"Lip Gloss", capacity:"9.7 ml OFC", material:"PET; recycled resin options available", moq:5000, leadTime:"3 months" },
  { slug:"ml8814-round-mini-lip-gloss", reference:"ML8814", name:"Round Mini Lip Gloss – Full Transparent", category:"Lip Gloss", capacity:"2.4 ml OFC", moq:5000, leadTime:"3 months" },
  { slug:"ml8824-ultra-slim-lip-gloss", reference:"ML8824", name:"Round Ultra-Slim Lip Gloss – Full Transparent", category:"Lip Gloss", capacity:"4.5 ml OFC", moq:5000, leadTime:"3 months" },
  { slug:"ml8825-square-lip-gloss", reference:"ML8825", name:"Square Lip Gloss – Aluminum Cap", category:"Lip Gloss", capacity:"5.5 ml OFC", material:"Aluminum cap", moq:5000, leadTime:"3 months" },
  { slug:"ml8836-square-lip-gloss", reference:"ML8836", name:"Square Lip Gloss – Full Transparent", category:"Lip Gloss", capacity:"8.9 ml OFC", material:"PETG", moq:5000, leadTime:"3 months" },
  { slug:"rj8812-hybrid-pet-jar", reference:"RJ8812", name:"Hybrid PET Jar – Monomaterial Cap", category:"Jar", capacity:"9.2 ml OFC", material:"PET jar and PET cap", moq:5000, leadTime:"3 months" },
  { slug:"rj8812-m2-hybrid-pet-jar", reference:"RJ8812-M2", name:"Hybrid PET Jar – Aluminum Cap", category:"Jar", capacity:"9.2 ml OFC", material:"PET jar; aluminum cap", moq:5000, leadTime:"3 months" },
  { slug:"rj8807-1-loose-powder-jar", reference:"RJ8807-1", name:"Round Jar – Loose Powder", category:"Jar", capacity:"52.6 ml OFC", material:"PETG", moq:5000, leadTime:"3 months" },
  { slug:"bo8805-blowtiful-bottle", reference:"BO8805", name:"BLOWtiful Bottle", category:"Bottle", capacity:"38 ml OFC", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"bo8806-blowtiful-bottle", reference:"BO8806", name:"BLOWtiful Bottle", category:"Bottle", capacity:"107.7 ml OFC", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"bo8814-pmp-soft-square-bottle", reference:"BO8814-PMP", name:"Soft Square PET Bottle – Monomaterial", category:"Bottle", capacity:"30 ml", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"bo8815-pmp-soft-square-bottle", reference:"BO8815-PMP", name:"Soft Square PET Bottle – Monomaterial", category:"Bottle", capacity:"50 ml", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"rc8818-round-cushion-compact", reference:"RC8818", name:"Round Cushion Compact – Refillable", category:"Compact & Palette", capacity:"Pan housing Ø36 mm", material:"Plastic", moq:5000, leadTime:"3 months" },
  { slug:"rc8819-1-round-pet-compact", reference:"RC8819-1", name:"Round PET Compact – Monomaterial", category:"Compact & Palette", capacity:"Pan housing Ø27.65 × 5.17 mm", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"rc7701-round-pp-compact", reference:"RC7701", name:"Round PP Compact – Monomaterial", category:"Compact & Palette", capacity:"Pan Ø59 mm", material:"PP", moq:5000, leadTime:"3 months" },
  { slug:"ls8804-round-aluminum-lipstick", reference:"LS8804", name:"Round Aluminum Lipstick – Magnetic Closure", category:"Lipstick & Stylo", capacity:"Cup Ø12.7 mm", material:"Aluminum", moq:5000, leadTime:"3 months" },
  { slug:"ls8804-1-refillable-lipstick", reference:"LS8804-1", name:"Round Aluminum Magnetic Lipstick – Refillable", category:"Lipstick & Stylo", capacity:"Cup Ø12.7 mm", material:"Aluminum", moq:5000, leadTime:"3 months" },
  { slug:"ls8804-1m1-refillable-pet-mechanism", reference:"LS8804-1M1", name:"Round Aluminum Magnetic Lipstick – Refillable PET Mechanism", category:"Lipstick & Stylo", capacity:"Cup Ø12.7 mm", material:"Aluminum / PET mechanism", moq:5000, leadTime:"3 months" },
  { slug:"ls8827-m1-pet-airtight-lipstick", reference:"LS8827-M1", name:"Round PET Airtight Lipstick – Monomaterial", category:"Lipstick & Stylo", capacity:"Cup Ø12.7 mm", material:"PET", moq:5000, leadTime:"3 months" },
  { slug:"ls8816-square-mini-lipstick", reference:"LS8816", name:"Square Plastic Mini Lipstick", category:"Lipstick & Stylo", capacity:"Cup Ø8.9–10.1 mm", material:"Plastic", moq:5000, leadTime:"3 months" },
  { slug:"ls8817-airtight-lipstick-pen", reference:"LS8817", name:"Round Plastic Lipstick Pen – Airtight", category:"Lipstick & Stylo", capacity:"Cup Ø8.1 mm", material:"Plastic", moq:5000, leadTime:"3 months" },
];

export const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));
