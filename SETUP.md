# IVF Funnel - React + Vite + Tailwind Setup

## Project Structure
```
ivf-funnel/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # React components
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template (Vite entry)
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Installation Steps

### 1. Install Dependencies
```bash
cd ivf-funnel
npm install
```

### 2. Install Required Vite Plugin (if not already installed)
```bash
npm install --save-dev @vitejs/plugin-react vite
```

### 3. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder

### 5. Preview Production Build
```bash
npm run preview
```

## Key Configuration Files

### vite.config.js
- Configures Vite with React plugin
- Sets development server port to 3000
- Configures build output directory

### tailwind.config.js
- Configures Tailwind CSS
- Includes custom color palette for Oxxy brand
- Scans all JS/JSX files in src/ and index.html

### index.html
- Root HTML file (in project root, not in public/)
- Includes script tag pointing to `/src/index.js`
- Vite processes this file during build

## Important Notes

1. **Static Assets**: Place images and static files in the `public/` folder
   - Access them with `/filename.png` (e.g., `/oxxy.png`)

2. **Entry Point**: The main entry is `index.html` → `/src/index.js` → `App.js`

3. **Hot Module Replacement**: Vite provides instant HMR during development

4. **Tailwind CSS**: Already configured with custom Oxxy brand colors:
   - `primary-yellow`: #FFC107
   - `primary-green`: #8BC34A
   - `primary-blue`: #4FC3F7
   - `primary-red`: #FF5252
   - `primary-orange`: #FF9800

## Troubleshooting

### If you see "Cannot find module" errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### If Tailwind styles aren't working:
1. Check that `index.css` imports Tailwind directives
2. Verify `tailwind.config.js` content paths include your files
3. Restart the dev server

### If Vite doesn't start:
1. Make sure you're using Node.js version 14.18+ or 16+
2. Check that `vite.config.js` exists
3. Verify `package.json` has correct scripts

## Scripts Explained

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
