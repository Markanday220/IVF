# Logo Integration Instructions

## Using Your Actual Logo

The website currently uses a placeholder SVG logo. To use your actual logo from the image you provided:

### Option 1: Extract Logo from Image (Recommended)

1. **Extract the logo portion** from your original image
2. **Save as PNG with transparent background**:
   - Crop just the logo area (the medical/globe icon with checkmarks)
   - Remove the black background
   - Save as `logo.png` with transparency
   - Recommended size: 400x120px (or similar aspect ratio)

3. **Add to project**:
   - Place the file in `public/images/logo.png`
   - Update `src/components/Hero.jsx` line 11:
     ```jsx
     <img src="/images/logo.png" alt="IVF Care" className="h-16 md:h-20" />
     ```

### Option 2: Use Full Image Temporarily

If you want to use the full image temporarily:

1. Save your image as `logo.png` in `public/images/`
2. The current code will work, but you may want to adjust the height classes

### Option 3: Create SVG Version (Best Quality)

For best quality and scalability:

1. Use a tool like Adobe Illustrator or Inkscape
2. Trace your logo to create an SVG version
3. Save as `logo.svg` in `public/images/`
4. The current code already references `logo.svg`

## Brand Colors Extracted from Your Logo

I've already configured these colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    yellow: '#FFD700',  // Gold/Yellow from logo
    green: '#7FD13B',   // Green from globe
    blue: '#87CEEB',    // Light blue from globe
    orange: '#FFA500',  // Orange from medical cross
  },
}
```

These colors are used throughout the site for:
- **Yellow**: Primary CTA buttons, accents, trust badges
- **Green**: Success indicators, secondary buttons, stats
- **Blue**: Soft backgrounds, gradients
- **Orange**: Service icons, highlights

## Where the Logo Appears

Currently, the logo appears in:
- Hero section (top of page)

You may want to add it to:
- Navigation bar (if you add one)
- Footer (if you add one)
- Favicon (`public/favicon.ico`)

## Favicon Setup

To create a favicon from your logo:

1. Resize logo to 32x32px and 16x16px
2. Convert to `.ico` format using a tool like favicon.io
3. Replace `public/favicon.ico`
4. Also create:
   - `logo192.png` (192x192px)
   - `logo512.png` (512x512px)

## Testing

After adding your logo:

1. Clear browser cache
2. Refresh the page
3. Check that logo displays correctly
4. Test on mobile devices
5. Verify logo is crisp and clear at all sizes

## Need Help?

If you need help extracting or creating the logo:
- Use online tools like remove.bg to remove backgrounds
- Use Canva or Figma for basic editing
- Hire a designer on Fiverr for professional logo extraction

## Current Placeholder

The current SVG placeholder mimics your logo's elements:
- Globe/earth (blue and green)
- Medical cross (orange and yellow)
- Checkmarks (red)

This gives you a working site while you prepare your actual logo files.
