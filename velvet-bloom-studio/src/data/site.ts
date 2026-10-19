export type Service = {
  id: string;
  category: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Add the designer's real portfolio URL when that site is ready.
// An empty value intentionally renders no placeholder or inactive link.
export const projectInfo: { portfolioUrl: string | null } = { portfolioUrl: null };

export const studioSpaces = [
  { id: "welcome", label: "The welcome", title: "A softer arrival.", description: "Warm textures, gentle light and a little room to leave the day behind.", image: "/images/studio-reception.webp", alt: "Imagined reception with a curved stone desk, cream sofa and rose velvet chair" },
  { id: "treatment", label: "The treatment room", title: "Time, entirely yours.", description: "A quiet treatment room, softened by linen, oak and afternoon light.", image: "/images/studio-treatment.webp", alt: "Imagined private treatment room with an ivory spa bed, oak cabinetry and soft linen curtains" },
  { id: "lounge", label: "The quiet corner", title: "Stay a little longer.", description: "A sunlit corner for tea, a slow breath and the simple pleasure of pausing.", image: "/images/studio-lounge.webp", alt: "Imagined relaxation lounge with two rose velvet chairs beside a softly curtained window" },
];

export const services: Service[] = [
  {
    id: "signature-facial",
    category: "SKIN RITUALS",
    title: "The Signature Facial",
    duration: "60 MIN",
    price: "£95",
    description: "An indulgent, restorative facial tailored to your skin's unique needs and natural radiance.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Relaxing facial skincare treatment",
  },
  {
    id: "body-ritual",
    category: "BODY & WELLNESS",
    title: "The Velvet Ritual",
    duration: "90 MIN",
    price: "£145",
    description: "A slow, sensory escape combining gentle bodywork, warm oils, and intentional relaxation.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Folded spa towels, a skincare bottle and pink flowers",
  },
  {
    id: "glow-treatment",
    category: "BEAUTY ESSENTIALS",
    title: "The Golden Glow",
    duration: "45 MIN",
    price: "£75",
    description: "A luminous finishing treatment designed to leave you feeling polished and effortlessly radiant.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Premium beauty and skincare essentials",
  },
];

export const gallery = [
  { image: studioSpaces[0].image, alt: studioSpaces[0].alt, label: "A quieter kind of luxury" },
  { image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85", alt: "Facial skincare and wellness treatment", label: "Care in every detail" },
  { image: studioSpaces[2].image, alt: studioSpaces[2].alt, label: "Room to unwind" },
  { image: studioSpaces[1].image, alt: studioSpaces[1].alt, label: "The beauty of ritual" },
];

export const faqs = [
  {
    question: "Is Velvet Bloom a real beauty studio?",
    answer: "Velvet Bloom Studio is a fictional brand created to showcase a beauty and wellness website design. The studio story, treatments, prices and guest reflections are illustrative.",
  },
  {
    question: "Can I book a real appointment here?",
    answer: "No. The booking form is an interactive demonstration. It checks sample details in your browser, but it does not send messages, save entries or reserve appointments.",
  },
  {
    question: "How can I try the booking demo?",
    answer: "Select a treatment, then use Fill sample details in the form. Choose a future date and select Preview your request to try the experience. Please use sample details only.",
  },
  {
    question: "Are the prices and reviews real?",
    answer: "All GBP prices, treatment durations and guest reflections are fictional examples. The photographs set the visual direction and do not depict a real Velvet Bloom location.",
  },
];
