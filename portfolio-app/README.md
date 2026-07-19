# Editor Portfolio (Node.js + Express)

Simple one-page portfolio site with a working "Work With Me" form.

## Run pannurathu eppadi

1. Node.js install pannirukanum (nodejs.org la irundhu download pannikonga, illena `node -v` nu terminal la check pannunga).
2. Terminal-la இந்த folder-ku pogunga:
   ```
   cd portfolio-app
   ```
3. Dependencies install pannunga:
   ```
   npm install
   ```
4. Server start pannunga:
   ```
   npm start
   ```
5. Browser-la open pannunga:
   ```
   http://localhost:3000
   ```

## Edit pannanum na inga pannunga

- **Name & details:** `public/index.html` file-la `<header class="hero">` section-la "YOUR NAME", city, phone, email edit pannunga.
- **Projects:** same file-la `#projects` section-la ovvoru `.project-card` inside title & description edit pannunga. Photo/video add pannanuna `.thumb` div-ku pathila `<img src="/images/yourphoto.jpg">` podunga (photo-va `public/images` folder-la podunga).
- **Testimonials:** `#testimonials` section-la client feedback & name edit pannunga.
- **Contact links:** `#contact` section-la Instagram username, WhatsApp number (`91` + 10 digit number, no + or spaces), Gmail edit pannunga.
- **Colours/Fonts:** `public/css/style.css` file top-la `:root` variables (`--black`, `--white`, `--red`, `--font-main`, `--font-secondary`) edit panna, whole site automatic-a update aagum.

## Form submissions eppadi paakurathu

Form submit panna details `data/inquiries.json` file-la automatic-a save aagum. Browser-la இதை open panni check pannalam:
```
http://localhost:3000/api/inquiries
```

## Deploy pannanum na

Idha Render, Railway, illena Vercel (with a small backend adapter) mari free hosting site-la upload panni, unga live portfolio link create pannikalam.
