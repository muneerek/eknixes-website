# Eknixes website

Responsive software company website built with HTML, CSS, and vanilla JavaScript, with a custom AI-generated hero image.

## Files

- `index.html` — page content and layout
- `styles.css` — responsive styling and Google Fonts
- `app.js` — mobile navigation, service selection, and project brief download
- `assets/hero.webp` — optimized hero artwork
- `assets/favicon.svg` — favicon

## Run locally

Clone this repository and open `index.html` in a browser. No installation or build is required.

Alternatively, with Python installed, run from the repository directory:

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Contact form

The form validates visitor input and downloads a project brief as a text file. It does not send email or store enquiries on a server. Connect an email or backend service before using it to receive enquiries.

## Hosting

Upload the contents of this repository to a static website host. The entry point is `index.html` at the repository root. Google Fonts requires an internet connection; fallback fonts are provided.

The existing Sites website is https://eknixes.mmrsend.chatgpt.site. Updating this GitHub repository does not automatically update that deployment; no deployment automation is configured here.

## Editing

Edit text and service offerings in `index.html`, styles in `styles.css`, and behaviour in `app.js`. Keep asset paths relative so the website works at a domain root or subdirectory.
