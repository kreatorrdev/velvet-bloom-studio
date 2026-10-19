import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About this demo & privacy | Velvet Bloom Studio",
  description: "About the fictional Velvet Bloom Studio portfolio project, its sample booking form and the use of imagery.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="information-page container-wide">
      <Link href="/">← Back to the studio</Link>
      <p className="eyebrow information-eyebrow">PORTFOLIO CONCEPT</p>
      <h1>An imagined studio.<br/>A considered design.</h1>
      <p>Velvet Bloom Studio is a fictional beauty and wellness brand created as a web design and development portfolio project. It does not represent a real salon or offer appointments.</p>
      <h2>Illustrative content</h2>
      <p>The studio story, treatments, GBP prices, durations and guest reflections are fictional examples. The interior views are AI-created design concepts, not photographs of a real salon. Treatment photography is illustrative.</p>
      <h2>The booking demo</h2>
      <p>The form checks sample details in your browser. The Fill sample details button lets you explore the experience without entering personal information. No form entries are sent or stored by this application, and no booking is created. Clear demo resets the form.</p>
      <p>This portfolio version has no connected form service, database, payment system or appointment calendar.</p>
      <h2>Images and hosting</h2>
      <p>AI-created interior images, Cormorant Garamond and Inter fonts are served with the site. Some treatment photographs load from <a href="https://unsplash.com">Unsplash</a>, which receives the network information needed to deliver them. This application does not add analytics or marketing cookies. The hosting provider may process technical request logs.</p>
      <h2>Motion preferences</h2>
      <p>Pause motion stops decorative movement and scroll effects. The site also follows your device’s reduced-motion setting. The studio views change only when you choose a space or use the previous and next controls.</p>
      <h2>Explore the concept</h2>
      <p>This project showcases a responsive layout, a keyboard-accessible gallery, sample pricing and an interactive booking journey.</p>
      <Link href="/#contact" className="text-link">Try the booking demo →</Link>
    </main>
  );
}
