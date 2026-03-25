// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  DOMUS VIRTUAL â€” project data
//  Voeg hier een nieuw blok toe om een nieuw project te maken.
//  Daarna is project.html?id=jouw-id automatisch klaar.
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const projects = [

  // â”€â”€ PROJECT 1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "hert",

    // â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    title:     "Hert",
    titleEm:   "Turnhout",           // het schuine gedeelte in de h1
    category:  "Restaurant Â· Michelin â˜… Â· Turnhout",
    heroImage: "Media/hert/hero.jpg",

    // pills rechtsonder in de hero (eerste pill = scroll-knop)
    metaPills: [
      { label: "â†“ 360Â° virtuele tour", scrollTo: "tour-section" },
      { label: "Michelin 1 ster" },
      { label: "2023" }
    ],

    // â”€â”€ TOUR SECTIE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    tourUrl:         "https://captur3d.io/view/domus/hert",
    tourTitle:       "Ontdek de",
    tourTitleEm:     "virtuele tour",
    tourDescription: "Verken het restaurant van binnen â€” kijk rond, ontdek elke hoek en beleef de sfeer voor je reserveert.",
    websiteUrl:      "https://hert.be/reserveren/",
    websiteLabel:    "Naar website Hert",

    // â”€â”€ INFO SECTIE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    infoTitle:  "Verfijnde gastronomie",
    infoTitleEm: "op het hoogste niveau",
    description: [
      "Hert, bekroond met zijn eerste Michelinster in 2023 onder leiding van Alex Verhoeven, belichaamt verfijnde gastronomie op het hoogste niveau. Terwijl je geniet van meesterlijk gecomponeerde gerechten, zorgen de panoramische uitzichten over de stad voor een adembenemend decor.",
      "Een exclusieve ervaring waar smaak, luxe en uitzicht naadloos samenkomen â€” nu ook virtueel te ontdekken via een meeslepende 360Â° tour. Bezoekers kunnen de sfeer van het restaurant beleven nog voor ze een reservering maken."
    ],
    ctaUrl: "https://captur3d.io/view/domus/hert",

    aside: [
      { label: "Naam",           value: "Hert | Turnhout" },
      { label: "Type",           value: "Restaurant" },
      { label: "Locatie",        value: "Turnovatoren 18<br>2300 Turnhout" },
      { label: "Onderscheiding", value: "Michelin â˜… 2023" },
      { label: "Chef",           value: "Alex Verhoeven" },
      { label: "Formaat tour",   value: "360Â° interactief" }
    ],

    // â”€â”€ GALERIJ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // wide: true â†’ img/video neemt 2 kolommen in
    gallery: [
      { type: "image", src: "Media/hert/hert 1.jpg",    alt: "Hert - keuken",    wide: true },
      { type: "image", src: "Media/hert/hert 2.jpg",    alt: "Hert - gerecht" },
      { type: "image", src: "Media/hert/hert 3.jpg",    alt: "Hert - detail" },
      { type: "video", src: "Media/hert/hert 13.mp4",                             wide: true },
      { type: "image", src: "Media/hert/hert 4.jpg",    alt: "Hert - sfeer" },
      { type: "image", src: "Media/hert/hert 5.jpg",    alt: "Hert - restaurant" },
      { type: "image", src: "Media/hert/hert 6.jpg",    alt: "Hert - chef" },
      { type: "image", src: "Media/hert/Hert 7.jpg",    alt: "Hert - interieur" },
      { type: "image", src: "Media/hert/hert 9.jpg",    alt: "Hert - koken",     wide: true },
      { type: "image", src: "Media/hert/Hert 8.jpg",    alt: "Hert - bord" },
      { type: "image", src: "Media/hert/hert 10.jpg",   alt: "Hert - bereiding" },
      { type: "image", src: "Media/hert/hert 11.jpg",   alt: "Hert - team" },
      { type: "image", src: "Media/hert/hert 12.jpg",   alt: "Hert - ambiance" }
    ],

    // â”€â”€ VOLGENDE PROJECT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    nextProject: {
      title:       "Shauni Broothaers Studio",
      titleEm:     "Shauni Broothaers Studio",
      url:         "project.html?id=studio-sb",
      buttonLabel: "Bekijk Studio SB â†’"
    }
  },


  // â”€â”€ PROJECT 2 â€” TEMPLATE (kopieer dit blok voor elk nieuw project) â”€â”€
  /*
  {
    id: "studio-sb",

    title:     "Shauni Broothaers",
    titleEm:   "Studio",
    category:  "Interieur Â· Gent",
    heroImage: "Media/studio sb/studio sb 1.jpg",

    metaPills: [
      { label: "â†“ 360Â° virtuele tour", scrollTo: "tour-section" },
      { label: "Studio" },
      { label: "2024" }
    ],

    tourUrl:         "https://captur3d.io/view/domus/studio-sb",
    tourTitle:       "Verken de",
    tourTitleEm:     "studio",
    tourDescription: "Ontdek elke hoek van de studio in een meeslepende 360Â° ervaring.",
    websiteUrl:      "https://shaunibroothaers.be",
    websiteLabel:    "Naar website Studio SB",

    infoTitle:   "Creatieve ruimte",
    infoTitleEm: "met karakter",
    description: [
      "Eerste paragraaf over het project...",
      "Tweede paragraaf..."
    ],
    ctaUrl: "https://captur3d.io/view/domus/studio-sb",

    aside: [
      { label: "Naam",         value: "Studio SB" },
      { label: "Type",         value: "Fotostudio" },
      { label: "Locatie",      value: "Gent" },
      { label: "Formaat tour", value: "360Â° interactief" }
    ],

    gallery: [
      { type: "image", src: "Media/studio sb/studio sb 1.jpg", alt: "Studio - overzicht", wide: true },
      { type: "image", src: "Media/studio sb/studio sb 2.jpg", alt: "Studio - detail" },
    ],

    nextProject: {
      title:       "Volgend Project",
      titleEm:     "Naam",
      url:         "project.html?id=volgend-project",
      buttonLabel: "Bekijk volgend project â†’"
    }
  },
  */

];

