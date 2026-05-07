# Deployment Guide

## Quick Start

1. **Install Dependencies**
   \`\`\`bash
   cd ivf-funnel
   npm install
   \`\`\`

2. **Start Development Server**
   \`\`\`bash
   npm start
   \`\`\`
   Visit http://localhost:3000

3. **Build for Production**
   \`\`\`bash
   npm run build
   \`\`\`

## Customization Checklist

### 1. Logo
- [ ] Replace `/public/images/logo.svg` with your actual logo
- [ ] Update logo in `src/components/Hero.jsx` if using different format

### 2. Images
Replace Unsplash placeholder URLs with your own images:
- [ ] Hero section couple image
- [ ] Solution section consultation image
- [ ] Doctor profile images (3)
- [ ] Testimonial couple images (3)
- [ ] Final CTA background image

### 3. Content
- [ ] Update all text content to match your brand voice
- [ ] Modify pricing tiers and amounts
- [ ] Update success statistics
- [ ] Customize FAQ questions and answers
- [ ] Add your actual doctor names and specialties

### 4. Colors (Optional)
If you want to adjust the brand colors:
- Edit `tailwind.config.js`
- Update the `primary` color values

### 5. Contact Information
- [ ] Add phone number
- [ ] Add email address
- [ ] Add physical address
- [ ] Link CTAs to your booking system

### 6. Analytics
- [ ] Add Google Analytics
- [ ] Add Facebook Pixel
- [ ] Set up conversion tracking

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Deploy with one click

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder to your server
3. Configure server to serve index.html

## Performance Optimization

### Before Launch
- [ ] Optimize all images (use WebP format)
- [ ] Add lazy loading for images
- [ ] Minify CSS and JS (done automatically in build)
- [ ] Test mobile performance
- [ ] Run Lighthouse audit

### SEO Checklist
- [ ] Update meta tags in `public/index.html`
- [ ] Add Open Graph tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Search Console

## Testing Checklist

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Test all CTAs
- [ ] Test sticky button
- [ ] Test testimonial slider
- [ ] Test FAQ accordion

### Functionality
- [ ] All buttons work
- [ ] Smooth scrolling
- [ ] Responsive on all screen sizes
- [ ] Forms submit correctly (when added)
- [ ] No console errors

## Integration Points

### Forms
Add form handling to CTAs:
- Fertility assessment form
- Consultation booking
- Contact form

### CRM Integration
Connect to your CRM:
- Salesforce
- HubSpot
- Custom API

### Payment
If accepting payments:
- Stripe integration
- PayPal integration

### Booking System
Link to your scheduling:
- Calendly
- Acuity Scheduling
- Custom booking system

## Support

For issues or questions:
1. Check React documentation
2. Check Tailwind CSS documentation
3. Review component code in `src/components/`

## License

MIT
