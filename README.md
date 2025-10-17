# Holt's Drones Website

A modern, responsive website for Holt's Drones - FAA Certified Aerial Services in Fresno, CA.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: EmailJS integration for lead generation
- **Portfolio Gallery**: Dynamic image gallery with hover effects
- **SEO Optimized**: Structured data and meta tags for better search visibility

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Fonts**: Google Fonts (Poppins)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### EmailJS Setup

To enable contact form functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create email templates for:
   - Contact form submission
   - Client confirmation
3. Update the following in `components/Contact.jsx`:
   - `service_holtsdrones` → Your EmailJS service ID
   - `template_contact` → Your contact template ID
   - `template_confirmation` → Your confirmation template ID
   - `your_public_key_here` → Your EmailJS public key

### Images

Add the following images to the `public/` folder:
- `hero.jpg` - Hero section background image
- `qr.png` - QR code for portfolio access
- `favicon.ico` - Site favicon
- `og.png` - Open Graph image for social sharing

### Portfolio Images

Update `public/portfolio.json` with your actual project images and titles.

## Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Vercel (recommended): Connect your GitHub repository
   - Netlify: Drag and drop the `out` folder
   - Other hosting: Upload the built files

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `navy`: Primary dark color (#001F3F)
- `accent`: Primary accent color (#3B82F6)
- `lightgray`: Background color (#F5F5F5)

### Content
- Update contact information in `app/layout.js`
- Modify services in `components/About.jsx`
- Add your portfolio projects in `public/portfolio.json`

## Contact

For questions about this website template or Holt's Drones services, contact:
- Phone: (559) 213-3403
- Email: [Add your email here]
- Location: Fresno, CA

---

© 2025 Holt's Drones | FAA Certified Aerial Services




