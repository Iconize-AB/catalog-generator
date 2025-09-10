# CT FOOD Catalog Generator

A modern web-based catalog generator for CT FOOD with polaroid-style product cards and splash price tags. This tool allows you to create professional product catalogs with customizable layouts, backgrounds, and branding.

## Features

- 🎨 **Polaroid-style Product Cards** - Beautiful vintage-inspired product layouts
- 💧 **Splash Price Tags** - Eye-catching organic price tag designs
- 🌍 **Multi-language Support** - English, Chinese, and Swedish
- 🖼️ **Image Management** - Automatic image compression and optimization
- 📊 **Excel Integration** - Import product data from Excel files
- 🎯 **Customizable Design** - Background overlays, logos, and branding
- 💾 **Local Storage** - Settings persist between sessions
- 🖨️ **Print Ready** - Optimized for printing and PDF export

## Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd catalog-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build on port 3000
- `npm start` - Alias for `npm run dev`

## Project Structure

```
catalog-generator/
├── src/
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   ├── app.js              # Main application logic
│   │   └── render.js           # Rendering functions
│   └── assets/                 # Static assets
├── index.html                  # Main HTML file
├── package.json               # Project configuration
├── vite.config.js            # Vite build configuration
└── README.md                 # This file
```

## Usage

### 1. Upload Product Data
- Download the Excel template using the "Download Template" button
- Fill in your product information (SKU, name, price, etc.)
- Upload the Excel file

### 2. Upload Product Images
- Name your image files to match the SKU (e.g., `1120.jpg` for SKU `1120`)
- Upload all product images at once
- Images are automatically compressed for optimal performance

### 3. Customize Appearance
- **Background**: Upload a custom background image
- **Logo**: Add your company logo
- **Overlay**: Adjust background color and opacity
- **Origin Flags**: Upload country flags for product origins

### 4. Configure Content
- Set promotion dates and titles
- Customize footer text with rich text editor
- Switch between Promotion and New Arrivals modes

### 5. Generate Catalog
- Preview your catalog in real-time
- Use zoom controls to adjust view
- Print or save as PDF when ready

## Sample Data

The application comes with sample CT FOOD products:
- Lee Kum Kee Double Deluxe Soy Sauce (SKU: 1120)
- Kungsörnen Skimmed Milk Powder (SKU: 1122)
- Gold Kili Ginseng Chrysanthemum Drink (SKU: 1126)
- Chaokoh Coconut Milk (SKU: 1134)

## Technical Details

### Dependencies
- **Vite** - Fast build tool and dev server
- **XLSX.js** - Excel file parsing
- **browser-image-compression** - Image optimization
- **Tailwind CSS** - Utility-first CSS framework

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Performance
- Automatic image compression (max 1MB, 800px)
- Lazy loading for large catalogs
- Optimized for print media

## Customization

### Adding New Languages
1. Edit `src/js/app.js`
2. Add new language object to `translations`
3. Add option to language selector in `index.html`

### Modifying Styles
- Edit `src/css/styles.css` for global styles
- Use Tailwind classes in HTML for component styling

### Adding Features
- Extend `src/js/app.js` for new functionality
- Add new rendering functions to `src/js/render.js`

## Troubleshooting

### Common Issues

**Images not loading:**
- Check file names match SKU exactly
- Ensure images are under 2MB
- Try refreshing the page

**Excel parsing errors:**
- Use the provided template format
- Check for empty rows or invalid data
- Ensure SKU column is not empty

**Print issues:**
- Use Chrome or Edge for best print results
- Check print preview before printing
- Ensure background images are loaded

### Development Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support or questions:
- Email: info@ctfood.se
- Website: www.ctfood.se

---

**CT FOOD** - The Orient at Close Range
