# KNMI Promotie Website - README

## Over dit project

Dit project is ontwikkeld als onderdeel van een opdracht voor het promoten van de **open-source KNMI weerapp**. De website informeert gebruikers over de voordelen van de app, met als doel om downloads en gebruik te stimuleren. De site is gebouwd met **Next.js** en **React**, en bevat meerdere interactieve en informatieve pagina’s.

## Functionaliteiten

- Dynamische pagina’s met Next.js routing  
- Contactformulier met ondersteuning voor feedback  
- Testimonials en reviews van gebruikers  
- Interactieve visualisaties van de features  
- Nieuws- en updategedeelte  
- FAQ-pagina  
- Integratie van afbeeldingen, video en animaties  
- Hosting via Vercel  

## Vereisten

Zorg ervoor dat je de volgende software op je systeem hebt geïnstalleerd:

- [Node.js](https://nodejs.org/) (aanbevolen versie: LTS)  
- npm

## Installatie

1. **Clone de repository**

   ```sh
   git clone <repository-url>
   cd knmi-opdracht-main
   ```

2. **Installeer de dependencies**

   ```sh
   npm install
   ```

## Project starten

Om de development-server te starten, gebruik:

```sh
npm run dev
```

Het project is dan beschikbaar op:  
[http://localhost:3000](http://localhost:3000)

De site is ook online te bekijken via:  
[https://semester-3-v3.vercel.app](https://knmi-opdracht-two.vercel.app/)

## Structuur van het project

```
/knmi-opdracht-main
│-- app/              # Pagina’s zoals home, contact, FAQ, nieuws, over
│   └── components/   # Herbruikbare React-componenten
│   └── page's        # Pagina's van de site
│   └── CSS & layout  # De stijl van de pagina's
│-- public/           # Afbeeldingen, mockups en media
│-- package.json      # Projectconfiguratie en dependencies
│-- next.config.mjs   # Next.js configuratie
```

## Extra informatie

Deze website is onderdeel van een promotiecampagne voor de KNMI-app en richt zich op gebruikers die afhankelijk zijn van betrouwbare weersinformatie, zoals wandelaars, fietsers, watersporters en reizigers. Het project is geoptimaliseerd voor snelheid, gebruiksvriendelijkheid en visuele aantrekkelijkheid. Echter is dit een opdracht van 2manydots om zo promo website te maken.

Extra mogelijkheden voor uitbreiding zijn onder andere:

- Integratie met real-time weerdata via API
- Gebruik van een (headless) CMS voor contentbeheer
- Meer on-scroll animaties voor dynamische presentaties
- SEO-optimalisatie via tools als Yoast
- Darkmode
- Multi-talen uitbreiding

---

*Gemaakt als leerproject in het kader van een semesteropdracht.*
