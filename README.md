# Full-Stack Developer Portfolio

A stunning, modern portfolio website template built with **Vue 3**, **Vite**, and **Bun**. Designed for deployment on **GitHub Pages**.

![Portfolio Preview](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=630&fit=crop)

## ✨ Features

- 🎨 **Dark Theme** with glassmorphism design
- ✨ **Smooth Animations** and micro-interactions
- 📱 **Fully Responsive** - looks great on all devices
- ⚡ **Lightning Fast** - powered by Vite
- 🚀 **Easy Deployment** to GitHub Pages
- 🔧 **Highly Customizable** - easy to modify and extend

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Bun** - Fast all-in-one JavaScript runtime
- **CSS3** - Custom properties, animations, glassmorphism

## 📦 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
bun install

# Start development server
bun run dev
```

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 🚀 Deploy to GitHub Pages

### Option 1: Automatic Deployment (GitHub Actions)

1. Push your code to GitHub
2. Go to **Settings > Pages**
3. Set **Source** to **GitHub Actions**
4. The workflow will automatically build and deploy on every push to `main`

### Option 2: Manual Deployment

```bash
# Build the project
bun run build

# The dist folder contains your production build
# Push the contents to the gh-pages branch
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── public/
│   └── vite.svg          # Favicon
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # Vue components
│   │   ├── Navbar.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── Experience.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── App.vue           # Root component
│   ├── main.js           # App entry point
│   └── style.css         # Global styles
├── index.html            # HTML entry point
├── package.json
└── vite.config.js        # Vite configuration
```

## 🎨 Customization

### Personal Information

Edit the following components to add your information:

1. **`src/components/Hero.vue`** - Name, roles, social links
2. **`src/components/About.vue`** - Bio, skills, stats
3. **`src/components/Projects.vue`** - Your projects
4. **`src/components/Experience.vue`** - Work history
5. **`src/components/Contact.vue`** - Contact info

### Colors & Theme

Modify CSS variables in `src/style.css`:

```css
:root {
  --color-accent-primary: #00d4ff;    /* Primary accent */
  --color-accent-secondary: #8b5cf6;  /* Secondary accent */
  --color-accent-tertiary: #f472b6;   /* Tertiary accent */
  /* ... */
}
```

### GitHub Pages Base Path

Update the `base` in `vite.config.js` to match your repository name:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [Vue.js](https://vuejs.org/)
- Bundled with [Vite](https://vitejs.dev/)
- Powered by [Bun](https://bun.sh/)
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
