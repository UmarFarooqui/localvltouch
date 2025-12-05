# Meridian Landing Page

AI-powered touchscreen platform landing page. Local first, privacy focused.

## Quick Start

### Local Development

1. Clone/download this folder
2. Open `index.html` in your browser
3. Edit files and refresh to see changes

### Deploy to GitHub Pages

```bash
# 1. Create a new GitHub repository

# 2. Push your code
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to Settings → Pages → Deploy from branch → main → / (root)

# 4. Your site is live at:
# https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Setting Up Contact Form

The contact form needs to be connected to receive emails. Here's how:

### Option 1: Formspree (Recommended - Free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like: `xyzabcde`)
4. In `index.html`, find this line:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
   ```
6. That's it! Form submissions will go to your email.

### Option 2: Netlify Forms

If deploying to Netlify instead of GitHub Pages:

1. Add `netlify` and `data-netlify="true"` to the form:
   ```html
   <form class="contact-form" id="contact-form" netlify data-netlify="true">
   ```
2. Remove the `action` attribute
3. Deploy to Netlify
4. View submissions in Netlify dashboard

### Option 3: Custom Backend

Modify `script.js` to send data to your own API endpoint.

## File Structure

```
landing-page-v2/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Change Company Name

Search and replace "Meridian" in `index.html`.

### Update Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #00d4aa;      /* Main accent (teal) */
    --color-accent: #818cf8;       /* Secondary (purple) */
    --color-bg: #08080c;           /* Background */
}
```

### Add Your Logo

1. Create an `assets/` folder
2. Add your logo image
3. Replace the logo in HTML:
   ```html
   <a href="#" class="logo">
       <img src="assets/your-logo.svg" alt="Company Name" height="32">
   </a>
   ```

### Add Product Images

Replace the CSS-rendered device mockups with real images:

```html
<div class="component-visual">
    <img src="assets/touchscreen.png" alt="AI Touchscreen">
</div>
```

## Sections Overview

| Section | Purpose |
|---------|---------|
| **Hero** | Main value proposition with system diagram |
| **Problem** | Pain points the product solves |
| **Platform** | Product details (touchscreen + VLM box) |
| **Differentiators** | Key selling points |
| **Applications** | Use cases and target markets |
| **About** | Company info (placeholder) |
| **FAQ** | Common questions (placeholder) |
| **Contact** | Lead capture form |

## Adding FAQ Content

When ready to add FAQ items:

```html
<div class="faq-grid">
    <div class="faq-item">
        <button class="faq-question">
            Your question here?
            <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
            <p>Your answer here.</p>
        </div>
    </div>
    <!-- Add more faq-items -->
</div>
```

Add this CSS for FAQ styling (copy from v1 styles.css if needed).

## Performance Notes

- No external JavaScript dependencies
- Minimal CSS (single file)
- Optimized animations
- Works without JavaScript (basic functionality)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

## Questions?

Contact form submissions will arrive in your inbox once Formspree is configured.
