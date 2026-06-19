## Problem

Deine Seite läuft live auf **creative-project-new.com** (via Netlify), aber im Code zeigen alle SEO-Tags noch auf die alte Lovable-URL `artful-structure-42.lovable.app`. Konkret:

- `<link rel="canonical">` und `og:url` in `index.html` und in jeder Route (`src/components/Seo.tsx`) sagen Google: „Die echte Adresse dieser Seite ist artful-structure-42.lovable.app".
- `public/sitemap.xml` listet 40+ URLs alle mit `artful-structure-42.lovable.app`.
- `public/robots.txt` verweist auf die Lovable-Sitemap.
- JSON-LD `Organization`/`WebSite` URL = Lovable-Domain.

Folge: Google indexiert deine Netlify-Seite gar nicht richtig (siehe „0 indexierte Seiten" im Screenshot) und zeigt im Cache noch alte Titel wie „Lovable / Artful Structure". Das ist nicht durch die SEO-Optimierung „kaputt gegangen" — die Tags wurden damals einfach mit der Lovable-URL gesetzt, weil deine Custom Domain dem Projekt nicht bekannt ist.

## Was ich ändern werde

Alle Vorkommen von `https://artful-structure-42.lovable.app` durch `https://creative-project-new.com` ersetzen:

1. **`index.html`** — `og:url`, JSON-LD `url` (Organization + WebSite)
2. **`src/components/Seo.tsx`** — die `SITE`-Konstante, von der alle Per-Route `canonical` / `og:url` abgeleitet sind
3. **`public/sitemap.xml`** — alle `<loc>` URLs auf die neue Domain
4. **`public/robots.txt`** — `Sitemap:` Direktive auf neue Domain
5. **`public/llms.txt`** — falls dort URLs stehen, ebenfalls aktualisieren

## Was du danach in der Google Search Console tun musst

1. Search Console → links **„Sitemaps"** → neue Sitemap einreichen: `https://creative-project-new.com/sitemap.xml`
2. Oben in der URL-Leiste die Startseite eingeben → **„Indexierung beantragen"**. Das gleiche für 2–3 wichtige Unterseiten (z. B. `/exhibition`, `/artists`).
3. Google braucht typischerweise ein paar Tage bis Wochen, bis die alten „Lovable"-Snippets durch die neuen Titel ersetzt werden.

## Was ich NICHT anfasse

- Keine inhaltlichen oder Design-Änderungen
- Keine Änderungen an Bildern, Favicon oder Manifest (das Logo ist schon korrekt aus dem letzten Schritt)
- Die SEO-Titles/Descriptions („Creative Project NEW — …") bleiben wie sie sind — nur die Domain in den URLs wird ausgetauscht
