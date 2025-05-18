# KNMI Promotion Website - README

## About this project

This project was developed as part of an assignment to promote the **open-source KNMI weather app**. The website informs users about the benefits of the app with the goal of increasing downloads and usage. The site is built using **Next.js** and **React**, and contains multiple interactive and informative pages.

## Features

* Dynamic pages using Next.js routing
* Contact form with feedback support
* Testimonials and user reviews
* Interactive visualizations of app features
* News and updates section
* FAQ page
* Integration of images, video, and animations
* Hosting via Vercel

## Requirements

Make sure you have the following software installed on your system:

* [Node.js](https://nodejs.org/) (recommended version: LTS)
* npm

## Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd knmi-opdracht-main
   ```

2. **Install the dependencies**

   ```sh
   npm install
   ```

## Running the Project

To start the development server, run:

```sh
npm run dev
```

The project will be available at:
[http://localhost:3000](http://localhost:3000)

The site is also live at:
[https://knmiapp-opdracht.vercel.app/](https://knmiapp-opdracht.vercel.app/)

## Project Structure

```
/knmi-opdracht-main
│-- app/              # Pages like home, contact, FAQ, news, about
│   └── components/   # Reusable React components
│   └── page's        # Website pages
│   └── CSS & layout  # Page styling
│-- public/           # Images, mockups, and media
│-- package.json      # Project configuration and dependencies
│-- next.config.mjs   # Next.js configuration
```

## Additional Information

This website is part of a promotional campaign for the KNMI app and targets users who rely on accurate weather information, such as hikers, cyclists, water sports enthusiasts, and travelers. The project is optimized for performance, user-friendliness, and visual appeal. It was created as an assignment from 2manydots to design a promotional website.

Potential future expansions include:

* Integration with real-time weather data via an API
* Use of a (headless) CMS for content management
* More scroll-based animations for dynamic presentation
* SEO optimization using tools like Yoast
* Dark mode
* Multi-language support

---

*Created as a learning project within the context of a semester assignment.*

