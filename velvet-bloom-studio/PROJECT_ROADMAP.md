# Velvet Bloom Studio — portfolio plan

Ažurirano: 18. oktobar 2026.

## Potvrđena namena

**Javni portfolio demo izmišljenog beauty salona.** Stvarne rezervacije, kontakt podaci salona, poslovna adresa, radno vreme, baza i mail servis nisu potrebni za ovu namenu. Nije potrebno izmišljati te podatke.

Budući link ka dizajnerskom portfoliju ostaje odložen prema zahtevu korisnice. U kodu je pripremljeno jedno mesto za njega; interfejs nema prazan ili neaktivan link.

Git koren: `C:\Users\Administrator\Documents\projekti\velvet-bloom-studio`.
Aplikacija: unutrašnji `velvet-bloom-studio/`, gde je `package.json`.
Rezervna kopija pre integracije: `work/backup-before-integration-20261018/` (ignorisana u Git-u).

## Tehnologije

| Oblast | Rešenje |
| --- | --- |
| Framework | Next.js 16.4.2 App Router, React 19.3.0 |
| Jezik | TypeScript 5, strict |
| Stilovi | Tailwind CSS v4 + custom CSS; Dark Luxury, engleski UI |
| Fontovi | Lokalni Cormorant Garamond i Inter, WOFF2, next/font/local, OFL licence |
| Fotografije | next/image + spoljašnji Unsplash URL-ovi |
| Interakcije | React state/context, native dialog, details/summary |
| Formular | Isključivo lokalni demo: sample fill, validacija, preview i reset |
| SEO | Metadata, canonical prema domenu, PNG OG 1200 × 630, SVG ikona, noindex |
| Provere | ESLint, TypeScript, Next build, generisani HTML, Chrome browser |
| Objava | Pripremljeni GitHub Actions i Vercel config, Node.js 24 za udaljene provere |

## Status implementacije

| Zadatak | Status |
| --- | --- |
| Pregled stvarnih fajlova, rezervna kopija i integracija ZIP-a | ZAVRŠENO |
| Hero, lokalni fontovi i responsive navbar | ZAVRŠENO |
| Services/pricing, about, proces, gallery, FAQ i footer | ZAVRŠENO |
| Jasna demo oznaka u hero sekciji, formi, FAQ-u i footer-u | ZAVRŠENO |
| Ilustrativne cene i izmišljeni utisci jasno označeni | ZAVRŠENO |
| Uklonjen tekst koji obećava stvarnu lokaciju i podatke budućeg salona | ZAVRŠENO |
| Povezan izbor tretmana sa kartice u formular | ZAVRŠENO |
| Fill sample details sa example.com adresom i sutrašnjim datumom | ZAVRŠENO |
| Clear demo briše sva polja, izbor, saglasnost i poruku | ZAVRŠENO |
| Uklonjen živi endpoint, fetch, sending/success/error režimi iz forme | ZAVRŠENO — env promenljiva ne može uključiti slanje |
| Informacije o projektu i privatnosti na /privacy | ZAVRŠENO ZA DEMO |
| Prilagođena 404 stranica i metadata | ZAVRŠENO |
| Skip link, labeli, alt tekst, reduced motion, fokus i dostupna galerija | OSNOVNE PROVERE PROŠLE |
| Budući portfolio URL u projectInfo.portfolioUrl | PRIPREMLJENO; null; link je skriven |
| Git ignore, CI workflow, .env.example i vercel.json | PRIPREMLJENO |
| README i ovaj plan usklađeni sa portfolio namenom | ZAVRŠENO |

## Završne provere

- `npm.cmd run lint`: PROŠLO, bez grešaka i upozorenja.
- `npm.cmd run typecheck`: PROŠLO.
- `npm.cmd run build`: PROŠLO; statične stranice i Open Graph PNG.
- Generisani HTML: jedan H1, 22 jedinstvena ID-a, 31 ispravan interni anchor link, 10 slika sa alt atributom, noindex, demo oznaka i /privacy.
- Open Graph: PNG 1200 × 630.
- Browser: izbor The Velvet Ritual postavlja body-ritual; popunjavanje primerom zadržava izabrani tretman; preview saopštava da ništa nije poslato, sačuvano ili rezervisano; Clear demo prazni sva polja i status.
- Responsive: 320, 375, 768 i 1440 px bez horizontalnog prelivanja u novoj portfolio verziji.
- Budući portfolio link nije prisutan dok je URL null.
- Ranije provereni gallery Tab/Shift+Tab, strelice, Escape, povratak fokusa, mobilni meni, FAQ, privacy i 404 ostaju implementirani.

Lokalne provere su pokrenute sa instaliranim Node.js 26.5.0. GitHub CI na Node.js 24 je PROŠAO: lint, TypeScript i produkcioni build. Provera: https://github.com/kreatorrdev/velvet-bloom-studio/actions/runs/39153440841 . Nije izvršen potpuni audit sa čitačem ekrana ili na svim fizičkim uređajima. Pravi italic font i dodatna optimizacija fotografija mogu biti naknadne dorade.

## Povezivanje naloga — poslednje potvrđeno stanje

| Stavka | Status |
| --- | --- |
| GitHub dodatak / nalog | POVEZANO; potvrđen kreatorrdev |
| GitHub repozitorijum za projekat | KREIRAN I POPUNJEN — privatni https://github.com/kreatorrdev/velvet-bloom-studio |
| Lokalni Git remote | POVEZAN — origin pokazuje na privatni GitHub repozitorijum |
| Lokalna i udaljena istorija | SINHRONIZOVANO — main prati origin/main; izvorni fajlovi su na GitHub-u |
| Vercel dodatak | Nije instaliran / povezivanje nije potvrđeno |
| Vercel projekat i javni URL | Nisu kreirani; potrebna je Vercel prijava/povezivanje, zatim objava |

GitHub konektor radi i izvorni fajlovi su poslati preko njega. Lokalna istorija je usklađena sa tačnim GitHub objektima bez prepisivanja radnih fajlova. Za budući ručni push/fetch iz VS Code terminala treba obnoviti lokalnu GitHub prijavu; ovo ne utiče na povezani konektor. Vercel u otvorenom pregledaču traži prijavu, a njegov dodatak još nije povezan. Status treba ponovo proveriti nakon korisničkog povezivanja.

## Preostalo — redosled objave

| Redosled | Zadatak | Status i uslov završetka |
| --- | --- | --- |
| 1 | Završiti Vercel povezivanje | ČEKA KORISNIČKO POVEZIVANJE; potvrditi pristup nalogu |
| 2 | Povezati GitHub repozitorijum | ZAVRŠENO; privatni kreatorrdev/velvet-bloom-studio, 44 izvorna fajla, bez tajni i rezervnih kopija |
| 3 | Sačuvati verziju i proveriti je na GitHub-u | ZAVRŠENO; izvorni kod sačuvan i Site checks prošao na Node.js 24 |
| 4 | Vercel preview | ČEKA POVEZIVANJE; za spoljašnji repo Root Directory je velvet-bloom-studio; npm ci i npm run build |
| 5 | Proveriti objavljeni URL | ZA POSLE DEPLOY-A; slike, menu, gallery, FAQ, demo fill/preview/reset, privacy i 404 |
| 6 | Podeliti javni demo URL | ZA POSLE PROVERE; dovoljan je Vercel poddomen, sopstveni domen je opcioni |
| Kasnije | Napraviti lični portfolio i dodati njegov link | NAMERNO ODLOŽENO; ne blokira demo objavu |

Za ovaj portfolio demo **ne čekamo** podatke stvarnog salona, stvarne recenzije ili booking servis. Pravo zakazivanje zahteva novu, zasebnu odluku i implementaciju.

## Pokretanje

Ako server već radi, samo otvoriti `http://localhost:3000` ili `http://127.0.0.1:3000`.
Za naredno pokretanje iz normalnog VS Code terminala:

```powershell
cd "C:\Users\Administrator\Documents\projekti\velvet-bloom-studio\velvet-bloom-studio"
npm.cmd run dev -- --port 3000
```

Terminal ostaje otvoren. Iz spoljašnjeg foldera može se pokrenuti i START-LOCALHOST.cmd.

## Gde se šta menja

- `velvet-bloom-studio/src/data/site.ts`: tretmani, cene, FAQ, slike i projectInfo.portfolioUrl.
- `velvet-bloom-studio/src/app/page.tsx`: sekcije i tekstovi.
- `velvet-bloom-studio/src/app/globals.css`: izgled i responsive ponašanje.
- `velvet-bloom-studio/src/components/BookingForm.tsx`: isključivo lokalni demo formular.
- `velvet-bloom-studio/.env.example`: samo opcioni javni SITE_URL, bez booking endpointa.
- `velvet-bloom-studio/README.md`: pokretanje, tehnologije i Vercel podešavanja.
- `.github/workflows/ci.yml`: udaljene provere nakon povezivanja repozitorijuma.

Identična kopija plana sačuvana je i u korenu aplikacije, uz njen package.json.

