# Black Daddy - Futuristic Shopify Theme

A modern, futuristic e-commerce theme for Shopify with cutting-edge design, advanced animations, and premium user experience.

## 🚀 Features

### Design & Visual Effects
- **Futuristic Design**: Modern dark theme with neon accents and gradient effects
- **Advanced Animations**: Smooth transitions, hover effects, and micro-interactions
- **Particle Background**: Dynamic floating particles for immersive experience
- **Custom Cursor**: Interactive cursor with glow effects
- **Loading Screen**: Animated loading sequence with brand logo
- **Theme Toggle**: Switch between dark and light modes

### E-commerce Functionality
- **Responsive Product Grid**: Modern card-based product display
- **Advanced Cart System**: Slide-out cart drawer with real-time updates
- **Product Gallery**: Image zoom, thumbnails, and variant selection
- **Search Functionality**: Predictive search with instant results
- **Mobile-First Design**: Optimized for all devices and screen sizes

### Performance & SEO
- **Fast Loading**: Optimized assets and lazy loading
- **SEO Optimized**: Meta tags, structured data, and clean URLs
- **Accessibility**: WCAG compliant with keyboard navigation
- **Cross-Browser Support**: Works on all modern browsers

## 🎨 Color Palette

- **Primary**: `#00ff88` (Neon Green)
- **Secondary**: `#ff0080` (Neon Pink)
- **Accent**: `#0080ff` (Neon Blue)
- **Background**: `#0a0a0a` (Dark)
- **Text**: `#ffffff` (White)

## 📁 Theme Structure

```
shopify-custom-theme/
├── assets/
│   ├── theme.css          # Main stylesheet
│   └── theme.js           # Main JavaScript
├── config/
│   └── settings_schema.json # Theme settings
├── layout/
│   └── theme.liquid       # Main layout template
├── sections/
│   ├── header.liquid      # Navigation header
│   ├── hero.liquid        # Hero section
│   ├── featured-products.liquid # Product grid
│   ├── cart-drawer.liquid # Shopping cart
│   └── footer.liquid      # Site footer
├── templates/
│   └── index.liquid       # Homepage template
└── README.md              # This file
```

## 🛠️ Installation

### Method 1: Shopify CLI (Recommended)

1. Install Shopify CLI:
```bash
npm install -g @shopify/cli @shopify/theme
```

2. Login to your Shopify store:
```bash
shopify auth login
```

3. Create a new theme:
```bash
shopify theme init black-daddy-futuristic
```

4. Copy theme files to the new directory

5. Push to your store:
```bash
shopify theme push
```

### Method 2: Manual Upload

1. Zip the theme directory
2. Go to Shopify Admin → Online Store → Themes
3. Click "Upload theme"
4. Select the zip file
5. Publish the theme

## ⚙️ Configuration

### Theme Settings

Access theme settings in Shopify Admin → Online Store → Themes → Customize:

#### Colors
- Primary Color: `#00ff88`
- Secondary Color: `#ff0080`
- Accent Color: `#0080ff`
- Background Color: `#0a0a0a`
- Text Color: `#ffffff`

#### Header
- Main Menu: Select your navigation menu
- Show Search: Enable/disable search functionality
- Show Theme Toggle: Enable/disable dark/light mode switch
- Sticky Header: Keep header fixed on scroll

#### Animations
- Enable Animations: Toggle all animations
- Enable Particles: Toggle particle background effects
- Enable Custom Cursor: Toggle interactive cursor
- Enable Parallax: Toggle parallax scrolling effects

### Customization

#### Adding Custom CSS
Add custom styles in `assets/theme.css`:

```css
/* Custom styles */
.my-custom-class {
  color: var(--primary-color);
  font-family: var(--font-primary);
}
```

#### Adding Custom JavaScript
Add custom functionality in `assets/theme.js`:

```javascript
// Custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Your custom code here
});
```

## 📱 Responsive Design

The theme is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Sections

### Hero Section
- Animated background with grid and particles
- Gradient text effects
- Call-to-action buttons
- Statistics counter
- Hero image with glow effects

### Featured Products
- Product grid with hover animations
- Quick view and add to cart buttons
- Product variants display
- Sale badges
- Responsive grid layout

### Cart Drawer
- Slide-out cart interface
- Real-time quantity updates
- Product removal
- Cart totals calculation
- Checkout integration

### Footer
- Brand information
- Social media links
- Newsletter signup
- Quick links and customer service
- Legal links

## 🔧 Development

### Local Development

1. Clone the repository
2. Install dependencies (if any)
3. Use Shopify CLI for local development:
```bash
shopify theme dev
```

### File Structure Guidelines

- **Sections**: Reusable content blocks
- **Snippets**: Reusable code fragments
- **Assets**: CSS, JS, and image files
- **Templates**: Page-specific layouts
- **Config**: Theme settings and configuration

## 🚀 Performance Optimization

### CSS Optimization
- CSS custom properties for theming
- Efficient selectors and minimal specificity
- Optimized animations using transform/opacity
- Critical CSS inlined for above-the-fold content

### JavaScript Optimization
- Modular code structure
- Event delegation for performance
- Lazy loading for non-critical features
- Debounced scroll and resize handlers

### Image Optimization
- Lazy loading for all images
- Responsive images with srcset
- WebP format support
- Optimized image sizes

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- Clean URL structure
- Fast loading times
- Mobile-friendly design

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus indicators
- Alt text for images

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This theme is created for the Black Daddy brand. All rights reserved.

## 🆘 Support

For support and customization requests:
- Create an issue in the repository
- Contact the development team
- Check the Shopify documentation

## 🔄 Updates

### Version 1.0.0
- Initial release
- Futuristic design system
- Advanced animations
- E-commerce functionality
- Mobile-responsive design

## 🎨 Customization Tips

### Changing Colors
Update CSS custom properties in `assets/theme.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### Adding New Sections
1. Create a new `.liquid` file in `sections/`
2. Add section schema for customization
3. Include the section in templates
4. Add corresponding styles

### Modifying Animations
Update animation keyframes in `assets/theme.css`:

```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

## 🚀 Deployment

### Production Deployment
1. Test thoroughly on development store
2. Optimize images and assets
3. Minify CSS and JavaScript
4. Upload to production store
5. Test all functionality

### Backup Strategy
- Keep version control of all changes
- Regular backups of theme files
- Document all customizations
- Test changes in staging environment

---

**Black Daddy Futuristic Theme** - Experience the future of e-commerce design. 