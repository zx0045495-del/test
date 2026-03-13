# NexTech Solutions - Company Website

A modern, high-tech company website for NexTech Solutions with sleek design, smooth animations, and responsive layout.

## 🌐 Live Demo

Your site is now live at:
[**https://zx0045495-del.github.io/test/**](https://zx0045495-del.github.io/test/)

> ⚠️ Note: GitHub Pages may take 1-2 minutes to build and deploy initially.

## 🚀 Features

- **Modern Design**: Dark theme with neon accents and futuristic aesthetics
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: CSS animations, hover effects, and transitions
- **Interactive Elements**: JavaScript for form validation and interactive features
- **Performance Optimized**: Fast loading and optimized assets

## 📁 Project Structure

```
tech-company-website/
├── index.html          # Main homepage
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # Interactive features and form handling
├── README.md          # This file
└── .git/              # Git repository
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Interactive features and form handling
- **Font Awesome**: Icons for services and social media
- **Google Fonts**: Inter and Orbitron fonts for typography
- **Unsplash**: High-quality placeholder images

## 📱 Sections

1. **Hero Section**: Animated background with call-to-action
2. **About Section**: Company mission, vision, and values
3. **Services Section**: Showcase of tech offerings with icons
4. **Team Section**: Leadership profiles with social links
5. **Contact Section**: Contact form and information
6. **Footer**: Links and social media

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub named `tech-company-website`
2. **Upload all files** from this directory to the repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be published at `https://[username].github.io/tech-company-website/`

### Method 2: Using Git Command Line

```bash
# Initialize git (already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: NexTech Solutions website"

# Add remote repository
git remote add origin https://github.com/[username]/tech-company-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages as in Method 1.

## 🛠️ Customization

### Change Company Name
Edit the following in `index.html`:
- `<title>` tag in head
- Logo text in navbar
- Hero section title

### Change Colors
Edit the CSS variables in `css/style.css`:
- Primary color: `#00d9ff` (neon blue)
- Background: `#0a0e17` (dark blue)
- Text colors in the CSS file

### Update Content
- **About Section**: Edit mission, vision, values text
- **Services Section**: Update services and descriptions
- **Team Section**: Replace images and bios
- **Contact Section**: Update address, phone, email

### Replace Images
Replace Unsplash image URLs in `index.html` with your own images:
```html
<img src="https://images.unsplash.com/..." alt="Team Member">
```

## 📞 Contact Form Setup

The contact form currently simulates submission. To make it functional:

1. **Backend Integration**: Connect to a service like Formspree, Netlify Forms, or your own backend
2. **Update JavaScript**: Modify the `contactForm` event listener in `js/script.js`
3. **Add validation**: Additional validation can be added as needed

## 🌐 Custom Domain

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to the root with your domain
2. Update DNS settings at your domain registrar
3. Configure in GitHub Pages settings

## 📄 License

This project is available for personal and commercial use. Images are from Unsplash (free to use).

## 🤝 Support

If you need help with customization or deployment, feel free to reach out!