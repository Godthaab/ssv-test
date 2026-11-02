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
Udgiv den friske, kontrollerede build fra `dist/ssv`:

```sh
npx angular-cli-ghpages --dir=dist/ssv --cname=stillinge-strands-vandv.dk
```

Det korrekte domæne er `stillinge-strands-vandv.dk`.
Projektrodens CNAME kopieres ikke automatisk af assets-konfigurationen; behold derfor `--cname` i udgivelseskommandoen.
Udgiv kun ved nødvendige ændringer. Kontrollér bagefter https://stillinge-strands-vandv.dk/vandanalyser og de nye PDF-links offentligt.

## Faste og tidsstyrede driftsmeddelelser

Samme regler bruges på hjemmesiden og i administrationsappen `ssv-drift`:

- `visAltid: true`: posten bliver under Aktuelle uanset datoerne.
- `visAltid: false`: posten er aktuel, når `publiceres <= nu < aftages`.
  Kommende poster vises først ved publicering; udløbne poster ligger under
  Tidligere. Manglende/ugyldige datointervaller vises aldrig som aktuelle.
- Et gammelt `vises`-felt ignoreres, når `visAltid` er valgt eksplicit.
- Urørte gamle dokumenter uden `visAltid` bevarer deres hidtidige placering:
  `vises: true` er Aktuelle, og `vises: false` er Tidligere. Efter redigering i
  administrationen bruges det nye valg og datoerne. Hvis begge felter mangler,
  bruges datoerne.

»Vises på web« er fjernet fra formularerne. Ved oprettelse og gemning beregnes
`vises` som et kompatibilitetsfelt til ældre udgivne versioner. Den nye kode
beregner selv status ud fra `visAltid` og datoerne. Faste poster kan have
`aftages: null`.

Databasen deles med den LIVE hjemmeside. Indtil den offentlige kode opdateres,
viser den postens status ved seneste gemning. Fremtidige start-/sluttidspunkter
håndteres først automatisk på den offentlige side, når den nye kode er udgivet.
Tiden alene udløser ingen databaseændringer; kompatibilitetsfeltet skrives kun
ved en almindelig oprettelse eller gemning.

Alle aktuelle poster deler samme publiceringsdatoorden, nyeste først. Faste
poster fastgøres ikke øverst. Der vises kun fanerne Aktuelle og Tidligere.
Hjemmesiden følger Firestore-ændringer og kontrollerer tiden hvert sekund, så
en åben side også tager poster af ved sluttidspunktet. Der foretages ingen
automatisk migration, sletning eller ændring af dokumenter i databasen.

Begge apps skal udgives med ændringen, før den forenklede styring fungerer
på den offentlige hjemmeside.
