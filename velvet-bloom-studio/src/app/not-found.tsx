import Link from "next/link";

export default function NotFound() {
  return (
    <main className="information-page container-wide">
      <p className="eyebrow">A LITTLE DETOUR · 404</p>
      <h1>Let’s find your<br/>way back.</h1>
      <p>We couldn’t find this page. Your next moment of calm is just a little closer to home.</p>
      <Link href="/" className="button button-gold">Return to the studio</Link>
    </main>
  );
}
