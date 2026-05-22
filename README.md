# AST Crane Slovakia — web

Moderný web pre AST Crane Slovakia. Postavený na **Astro 6 + Tailwind v4**.

**Live URL (po nasadení):** https://ast.digobraz.sk
**Repo:** https://github.com/digobraz/ast-web

---

## Pre šéfa — ako si web pustiť na svojom počítači

Web je statický (predgenerované HTML), takže ho môžeš úplne pokojne editovať lokálne,
pozerať v prehliadači a keď bude hotové, **stačí pushnúť** a deploy ide sám na `ast.digobraz.sk`.

### 1. Nainštaluj si nástroje (raz)

Potrebuješ:
- **Node.js** (verzia 22 alebo novšia) → https://nodejs.org (LTS verzia)
- **Git** → https://git-scm.com
- (odporúčam) **VS Code** → https://code.visualstudio.com
- (odporúčam) **Claude Code** → https://docs.claude.com/claude-code — bude ti vedieť pomôcť s čímkoľvek priamo z terminálu

### 2. Klonuj repo

V termináli (Terminal.app na Macu / PowerShell na Windowse):

```bash
cd ~/Desktop                  # alebo kdekoľvek si chceš dať priečinok
git clone https://github.com/digobraz/ast-web.git
cd ast-web
npm install                   # nainštaluje balíčky (~1 min, raz)
```

### 3. Spusti dev server

```bash
npm run dev
```

Otvoríš v prehliadači: **http://localhost:4321**

Web sa **automaticky aktualizuje** vždy keď zmeníš nejaký súbor a uložíš.

### 4. Kde sa edituje obsah

Texty a dáta sú vyseparované do priečinka `src/data/` — môžeš ich meniť bez zasahovania do dizajnu:

| Súbor | Čo obsahuje |
| --- | --- |
| `src/data/contacts.ts` | Žeriavové parky, telefóny, e-maily, Facebook |
| `src/data/cranes.ts` | Zoznam strojov (názov, nosnosť, popis) + štatistiky (28 žeriavov, 16 žeriavnikov…) |
| `src/data/content.ts` | Hero text, zoznam služieb, hodnoty firmy, texty „o nás" |

Príklad: ak chceš pridať nový stroj, otvor `src/data/cranes.ts` a pridaj nový záznam
do poľa `cranes`. Stroj sa **automaticky** objaví na stránke `/zeriavy` aj na úvode.

Jednotlivé stránky (rozloženie sekcií) sú v `src/pages/`:
- `index.astro` — Úvod
- `zeriavy.astro` — Prenájom autožeriavov
- `mechanizacia.astro` — Plošiny, ťahače, búracie stroje
- `dopyt.astro` — Kontaktný formulár
- `referencie.astro` — Galéria prác (placeholder, čaká na fotky)
- `o-nas.astro` — O firme
- `kontakt.astro` — Kontakty parkov

### 5. Ako ti pomôže Claude Code

V termináli v priečinku projektu napíš `claude` a popíš čo chceš, napr.:

- „Pridaj novú stránku **/sluzby** so štyrmi kartami"
- „Zmeň primárnu farbu z modrej na tmavomodrú"
- „Pridaj sekciu s referenciami od konkrétnych klientov"
- „Vytvor blogový systém kde môžem pridávať články z Markdown súborov"
- „Spoj sa s Google Drive a načítaj fotky z priečinka `AST_zakazky/`"

Claude Code vie sám editovať súbory, spustiť testy a vysvetliť čo robí.

### 6. Keď budeš spokojný — push do mainu

```bash
git add .
git commit -m "Upravil som texty / pridal stroj X"
git push
```

GitHub Actions automaticky webový build skompilujú a nasadia na **https://ast.digobraz.sk**
(zvyčajne do 2 minút).

---

## Plánované rozšírenia (po základnom nasadení)

- **CMS / dashboard:** žeriavnik nahrá fotku z mobilu → Google Drive → web dashboard → SEO článok jedným klikom + auto-post na sociálne siete
- **Galéria projektov / referencií**
- **Lead capture:** dopyt formulár cez Formspree alebo Resend (backend)
- **Integrácia s nástenkou** (interný admin tool) — odkaz na zákazky, fotky z práce

---

## Tech detaily (pre Claude / vývojárov)

- Astro 6.3.3 (static SSG, output: static)
- Tailwind CSS v4 (Vite plugin, `@theme` v `src/styles/global.css`)
- TypeScript strict
- Node 22.12+
- Deploy: GitHub Actions → GitHub Pages → ast.digobraz.sk (CNAME)
- Brand color: `#164193` (deep blue, zhodný s pôvodným astcrane.sk theme)

### Príkazy

| Príkaz | Akcia |
| --- | --- |
| `npm install` | Inštalácia balíčkov |
| `npm run dev` | Dev server na `localhost:4321` |
| `npm run build` | Produkčný build do `./dist/` |
| `npm run preview` | Náhľad buildu pred deployom |

### Štruktúra

```
ast-web/
├── public/                     # statické assets (favicon, CNAME)
│   └── CNAME                   # ast.digobraz.sk
├── src/
│   ├── components/             # Header, Footer
│   ├── data/                   # editovateľné dáta (contacts, cranes, content)
│   ├── layouts/Layout.astro    # spoločný layout (head, header, footer)
│   ├── pages/                  # stránky = routes
│   └── styles/global.css       # Tailwind + brand farby
├── .github/workflows/deploy.yml  # CI/CD na GH Pages
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

**Otázky?** Píš Matejovi (stachoman) alebo sa pýtaj Claude Code priamo v termináli.
