# Scientific Profile Website

A professional academic profile website for Oguz Umut SALMAN, featuring research areas, publications, teaching experience, and more.

## 📁 Project Structure

```
.
├── index.html              # Original monolithic HTML file (552 lines)
├── index-new.html          # New modular HTML file (clean, ~100 lines)
├── 3d_square_interactive.html
├── css/
│   └── styles.css         # Custom styles and animations
├── js/
│   ├── content.js         # Centralized content data
│   ├── render.js          # Dynamic content rendering
│   ├── tabs.js            # Tab navigation functionality
│   └── enhancements.js    # UX improvements (back to top, smooth scroll)
├── templates/
│   └── publications.html  # Publications section template
├── assets/
│   └── images/            # All images and PDF documents
│       ├── photo.png
│       ├── high.png
│       ├── cv123020.png
│       ├── kanka.png
│       ├── pillier.png
│       ├── turb-0.png
│       ├── CV_claud_v3.pdf
│       ├── Manuscipt.pdf
│       └── Research_Statement_Salman.pdf
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Use the New Modular Version (Recommended)

Simply open `index-new.html` in your browser. This version:
- ✅ Separates concerns (HTML, CSS, JS)
- ✅ Easier to maintain and update
- ✅ Better organized code structure
- ✅ Centralized content management

### Option 2: Use the Original Version

Open `index.html` for the original single-file version.

## 📝 Making Updates

### Updating Content

All content is centralized in `js/content.js`. To update:

1. **Personal Information**: Edit the `personal` object
2. **Education**: Modify the `education` array
3. **Experience**: Update the `experience` array
4. **Research Areas**: Change the `researchAreas` array
5. **Software**: Edit the `software` array
6. **Documents**: Modify the `documents` array

Example:
```javascript
// In js/content.js
education: [
    {
        degree: "New Degree",
        period: "2020 - 2024",
        institution: "University Name"
    }
]
```

### Adding New Images

1. Place images in `assets/images/`
2. Reference them in `js/content.js` or HTML as `./assets/images/filename.png`

### Customizing Styles

Edit `css/styles.css` to modify:
- Colors and themes
- Animations
- Hover effects
- Responsive breakpoints

### Modifying Layout

The main structure is in `index-new.html`. Each content section is rendered by functions in `js/render.js`.

## 🎨 Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Mobile-First Approach**: Touch-optimized with proper tap targets (44px minimum)
- **Tab Navigation**: Easy switching between different sections
- **Sticky Navigation**: Tabs stay visible while scrolling for easy access
- **Back to Top Button**: Quickly return to the top of the page (appears after scrolling)
- **Smooth Animations**: Fade-in effects and smooth scrolling throughout
- **Touch Feedback**: Visual feedback on touch interactions for mobile users
- **Lazy Loading**: Images load on-demand for faster initial page load
- **Orientation Support**: Adapts to portrait and landscape modes
- **iOS Optimizations**: Safe area support for notched devices
- **Accessible**: Proper ARIA labels and semantic HTML
- **Fast Loading**: Optimized assets and minimal dependencies

## 🔧 Customization

### Changing Colors

The site uses Tailwind CSS classes. To change the accent color from blue to another color:

1. In `index-new.html`, replace `blue-` classes with your preferred color
2. In `css/styles.css`, update custom color values

### Adding New Sections

1. Add content data to `js/content.js`
2. Create a render function in `js/render.js`
3. Add a tab button in `index-new.html`
4. The tab system will automatically handle the rest

## 📦 Dependencies

- **Tailwind CSS**: Loaded via CDN
- **Google Fonts**: Inter font family
- **No build tools required**: Pure HTML, CSS, and vanilla JavaScript

## 🌐 Deployment

### GitHub Pages

1. Rename `index-new.html` to `index.html` (backup the original first)
2. Push to your repository
3. Enable GitHub Pages in repository settings

### Other Platforms

Simply upload all files maintaining the directory structure.

## 📊 Migration from Old to New

If you want to switch from the old `index.html` to the new structure:

```bash
# Backup the original
mv index.html index-old.html

# Use the new version
mv index-new.html index.html
```

## 🐛 Troubleshooting

**Images not loading?**
- Check that paths start with `./assets/images/`
- Verify files are in the correct directory

**Tabs not working?**
- Ensure all three JS files are loaded in order
- Check browser console for errors

**Content not updating?**
- Clear browser cache
- Verify changes in `js/content.js` are saved

## 📄 License

This website template is for academic/professional use.

## ✨ Benefits of New Structure

### Before (index.html)
- 552 lines in one file
- Hard to find and update content
- Mixed concerns (content, style, behavior)
- Difficult to maintain

### After (index-new.html + modules)
- ~100 line main HTML file
- Organized by concern
- Easy content updates in `content.js`
- Professional code organization
- Easier collaboration
- Better version control

---

**Version**: 2.0
**Last Updated**: December 2025
