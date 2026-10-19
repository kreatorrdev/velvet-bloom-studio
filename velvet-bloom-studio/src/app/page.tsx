import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import SiteMotion from "../components/SiteMotion";
import StudioTour from "../components/StudioTour";
import BookingForm from "../components/BookingForm";
import { BookingProvider, TreatmentLink } from "../components/BookingContext";
import { ArrowIcon, ArrowUpRightIcon, SparkleIcon } from "../components/Icons";
import { faqs, projectInfo, services } from "../data/site";

const copyrightYear = new Date().getFullYear();

export default function Home() {
  return (
    <BookingProvider><SiteMotion>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true" data-parallax="35">
            <Image src="/images/studio-reception.webp" alt="" fill priority sizes="100vw" />
          </div>
          <div className="hero-shade" />
          <div className="hero-content container-wide">
            <div className="hero-copy">
              <div className="eyebrow-with-line"><span className="eyebrow">AN EXPERIENCE BEYOND BEAUTY</span></div>
              <h1 id="hero-title">Where beauty <em>becomes</em> a ritual<span className="hero-dot">.</span></h1>
              <p className="hero-description">An intimate sanctuary for the art of slowing down. Thoughtful treatments, exquisite details, and time that belongs entirely to you.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#services">Explore our rituals <ArrowUpRightIcon size={17}/></a>
                <a className="text-link" href="#studio">Discover the studio <ArrowIcon size={16}/></a>
              </div>
              <p className="hero-demo-note">Fictional beauty studio · Interactive portfolio demo</p>
            </div>
          </div>
          <a className="hero-space-note" href="#studio"><span>THE WELCOME · AN IMAGINED SPACE</span><span>A little room to <em>exhale.</em> <ArrowUpRightIcon size={18}/></span></a>
          <a className="hero-scroll" href="#intro" aria-label="Scroll to discover">SCROLL TO DISCOVER <span className="scroll-line"/></a>
        </section>

        <section id="intro" className="intro-strip" aria-label="Our philosophy">
          <div className="intro-strip-inner container-wide">
            <span className="mini-sparkle"><SparkleIcon size={24}/></span>
            <p>Not simply a treatment.<br /><em>A moment to return to yourself.</em></p>
            <span className="intro-strip-aside">MINDFUL BEAUTY <span>—</span> TIMELESS CARE</span>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-heading">
          <div className="container-wide">
            <div className="section-heading section-heading-split" data-reveal>
              <div><p className="eyebrow gold-line">THE VELVET COLLECTION</p><h2 id="services-heading">Beautifully curated.<br/><em>Just for you.</em></h2></div>
              <p className="section-intro">Each ritual is an invitation to pause — designed with intention, delivered with care, and entirely devoted to your well-being.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.id} data-reveal>
                  <TreatmentLink serviceId={service.id} className="service-photo" aria-label={`Preview booking for ${service.title}`}>
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 750px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized />
                    <span className="service-image-index">0{index + 1}</span>
                    <span className="service-photo-arrow"><ArrowUpRightIcon size={22}/></span>
                  </TreatmentLink>
                  <div className="service-info">
                    <div className="service-meta"><span>{service.category}</span><span>{service.duration}</span></div>
                    <div className="service-title-row"><h3>{service.title}</h3><span className="service-price">{service.price}</span></div>
                    <p>{service.description}</p>
                    <TreatmentLink serviceId={service.id} className="service-read-link">Preview this ritual <ArrowIcon size={16}/></TreatmentLink>
                  </div>
                </article>
              ))}
            </div>
            <p className="demo-note">Portfolio concept: treatments, descriptions and prices are illustrative.</p>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="about-layout container-wide">
            <div className="about-media" data-reveal>
              <div className="about-photo" data-parallax="22"><Image src="/images/studio-lounge.webp" alt="Imagined studio lounge with rose velvet chairs and warm afternoon light" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
              <div className="about-photo-outline" aria-hidden="true" />
              <div className="about-stamp" aria-hidden="true"><SparkleIcon size={30}/><span>THE BEAUTY<br/>OF BEING</span></div>
            </div>
            <div className="about-copy" data-reveal>
              <p className="eyebrow gold-line">OUR PHILOSOPHY</p>
              <h2 id="about-heading">A softer pace.<br/><em>A deeper glow.</em></h2>
              <p className="about-lead">We believe beauty feels different when you make space for it.</p>
              <p>Velvet Bloom is an imagined retreat from the everyday — a place where understated luxury meets thoughtful, personal care. Here, every detail is designed to help you feel present, restored, and beautifully yourself.</p>
              <div className="about-values"><div><span>01</span><p>Intentional care</p></div><div><span>02</span><p>Timeless rituals</p></div><div><span>03</span><p>Quiet luxury</p></div></div>
              <a className="text-link text-link-dark" href="#gallery">Explore our world <ArrowIcon size={16}/></a>
            </div>
          </div>
        </section>

        <StudioTour />

        <section className="statement-section" aria-label="Our promise">
          <div className="statement-ornament" aria-hidden="true">✳</div>
          <p className="eyebrow">OUR PROMISE</p>
          <p className="statement-quote" data-reveal>Because the most beautiful thing<br/>you can be is <em>at ease.</em></p>
          <span className="statement-rule"/>
        </section>

        <section className="section gallery-section" id="gallery" aria-labelledby="gallery-heading">
          <div className="container-wide">
            <div className="section-heading gallery-heading" data-reveal><div><p className="eyebrow gold-line">AN INSIDE LOOK</p><h2 id="gallery-heading">Spaces to <em>exhale.</em></h2></div><p>Beauty is in the atmosphere, the details, and the moments between.</p></div>
            <Gallery />
            <p className="gallery-caption">AI-CREATED INTERIORS & ILLUSTRATIVE TREATMENT PHOTOGRAPHY · PORTFOLIO DEMONSTRATION</p>
          </div>
        </section>

        <section className="testimonials-section" aria-labelledby="testimonials-heading">
          <div className="container-wide testimonials-layout">
            <div><p className="eyebrow gold-line">WORDS THAT INSPIRE</p><h2 id="testimonials-heading">The feeling <em>stays.</em></h2><p className="review-disclaimer">The following reviews are fictional examples created for this portfolio demonstration.</p></div>
            <div className="review-grid">
              <figure><span aria-hidden="true" className="review-mark">“</span><blockquote>A little pause that made the whole week feel softer. Every detail felt considered.</blockquote><figcaption>— Example review · fictional</figcaption></figure>
              <figure><span aria-hidden="true" className="review-mark">“</span><blockquote>Unhurried, beautiful, and wonderfully calming. Exactly the atmosphere I was looking for.</blockquote><figcaption>— Example review · fictional</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="ritual-section" aria-labelledby="ritual-heading">
          <div className="container-wide ritual-layout">
            <div><p className="eyebrow gold-line">THE EXPERIENCE</p><h2 id="ritual-heading">Your moment.<br/><em>Your ritual.</em></h2><p className="ritual-intro">A little intention goes a long way. This is what the Velvet Bloom experience is designed to feel like.</p></div>
            <div className="ritual-steps">
              {[{ n: "01", title: "Choose your experience", text: "Explore the sample treatments and find the ritual that speaks to you." },{n:"02",title:"Try the booking journey", text:"Use sample details and a future date to explore the interactive form."},{n:"03",title:"Picture the possibilities",text:"Enjoy a glimpse of an imagined studio. No appointment is created."}].map((step) => <div className="ritual-step" key={step.n}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><SparkleIcon size={18}/></div>)}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="container-wide faq-layout"><div><p className="eyebrow gold-line">GOOD TO KNOW</p><h2 id="faq-heading">A few thoughtful<br/><em>answers.</em></h2><p>A few notes about this portfolio concept.</p></div><div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question}><summary><span className="faq-number">0{index+1}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container-wide contact-layout">
            <div className="contact-copy"><p className="eyebrow gold-line">EXPLORE THE BOOKING DEMO</p><h2 id="contact-heading">Make time for<br/><em>yourself.</em></h2><p>Experience how a thoughtful booking journey could feel. Choose a ritual and try the form with sample details.</p><div className="studio-details"><h3>An imagined sanctuary.</h3><p>Velvet Bloom is a fictional studio created as a design and development portfolio project. This demo does not offer appointments or represent a physical salon.</p></div><div className="contact-decoration" aria-hidden="true"><span className="contact-decoration-star">✳</span><span>THE ART OF POSSIBILITY</span></div></div>
            <BookingForm />
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container-wide">
        <div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#home" aria-label="Velvet Bloom Studio home"><span className="wordmark-primary">Velvet Bloom</span><span className="wordmark-secondary">B E A U T Y&nbsp;&nbsp; S T U D I O</span></a><p>Beauty, in its most intentional form.</p></div><div className="footer-nav"><span>EXPLORE</span><a href="#services">Treatments</a><a href="#about">Our story</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a></div><div className="footer-nav"><span>THE DEMO</span><a href="#contact">Try the booking demo</a><Link href="/privacy">About this project</Link><p>A fictional brand. A considered experience.</p></div></div>
        <div className="footer-bottom"><span>© {copyrightYear} VELVET BLOOM STUDIO</span><span>FICTIONAL BEAUTY STUDIO · PORTFOLIO CONCEPT</span>{projectInfo.portfolioUrl && <a href={projectInfo.portfolioUrl}>DESIGNER PORTFOLIO ↗</a>}<Link href="/privacy">DEMO & PRIVACY</Link><a href="#home">BACK TO TOP ↑</a></div>
      </div></footer>
    </SiteMotion></BookingProvider>
  );
}
