# Stillinge Strands Vandværk

Angular-projekt til https://stillinge-strands-vandv.dk.

## Lokal udvikling

Brug Node 18.20.8. Låsefilen har Angular 15.2.6 og Angular CLI 15.2.5.
Brug projektets lokale CLI gennem npm-scripts. Kør kun `npm ci`, når afhængigheder mangler eller skal synkroniseres.

Kontrollér først eksisterende serverprocesser og port 4121. Start én server:

```sh
npm start -- --open --port 4121
```

Vandanalyser findes på http://localhost:4121/vandanalyser.
Ctrl+C afslutter serveren; Ctrl+Z suspenderer den.

## Vandanalyser

HTML: `src/app/vandanalyser/card-vandvaerk.component.html`,
`card-ledningsnet.component.html` og `card-boring.component.html`.
PDF'er: `src/assets/pdf/Vandranalyser/Vandv`, `Ledn` og `Boring`.
Bevar stavningen `Vandranalyser` og alle historiske analyser.
Kontrollér dato, kategori og DGU i dokumentet. Indsæt nyeste analyse først i relevant tabset.
PDF-ikon og embed skal pege på samme fil med korrekt store/små bogstaver.
Bevar eksisterende formatering for at undgå unødigt store ændringer.

## Byg og udgiv

Kontrollér Git-status, remote og branch, og bevar lokale brugerændringer.
Kildekode ligger på `main`; GitHub Pages-indhold ligger separat på `gh-pages`.

```sh
npm run build
```

Kontrollér siden og PDF-visningerne lokalt, gennemgå diff, og commit og push kun relevante filer til `origin main`.
Et push til `main` udgiver ikke hjemmesiden.
Udgiv den friske, kontrollerede build fra `dist/ssv-280225`:

```sh
npx angular-cli-ghpages --dir=dist/ssv-280225 --cname=stillinge-strands-vandv.dk
```

Det korrekte domæne er `stillinge-strands-vandv.dk`.
Projektrodens CNAME kopieres ikke automatisk af assets-konfigurationen; behold derfor `--cname` i udgivelseskommandoen.
Udgiv kun ved nødvendige ændringer. Kontrollér bagefter https://stillinge-strands-vandv.dk/vandanalyser og de nye PDF-links offentligt.

## Manuel styring af driftsmeddelelser

Samme styring bruges på hjemmesiden og i administrationsappen `ssv-drift`:

- **Aktuelle:** `vises` er `true` (»Vises på web« er slået til).
- **Tidligere:** `vises` er `false` (»Vises på web« er slået fra).

Publicerings- og aftagningsdatoerne flytter ikke meddelelser automatisk mellem
fanerne. En meddelelse tages manuelt af Aktuelle ved at slå »Vises på web« fra
og gemme i administrationen. Det gælder også meddelelser med passeret slutdato.
Listerne sorteres efter publiceringsdato, nyeste først, og følger ændringer fra
Firestore, så en åben side også opdateres. Visningen ændrer eller sletter ikke
dokumenter i databasen.
