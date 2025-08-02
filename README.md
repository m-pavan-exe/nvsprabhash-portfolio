# 🚀 AI/ML Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing expertise in Artificial Intelligence and Machine Learning.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🌙 **Dark/Light Mode**: Toggle between themes
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🧩 **Component-Based**: Modular React components with TypeScript
- 🎯 **SEO Optimized**: Meta tags and structured data
- 📧 **Contact Form**: Functional contact form integration
- 📱 **Mobile-First**: Designed with mobile experience in mind

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS Animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- 📦 **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- 📁 **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
- 🐙 **Git** (for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## 🚀 Getting Started

### Method 1: Clone with Git 🐙

1. **Open your terminal/command prompt**

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio-repo.git
   ```

3. **Navigate to the project directory**
   ```bash
   cd your-portfolio-repo
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

### Method 2: Download ZIP 📥

1. **Visit the GitHub repository page**

2. **Click the green "Code" button**

3. **Select "Download ZIP"**

4. **Extract the downloaded ZIP file** to your desired location

5. **Open terminal/command prompt** in the extracted folder

6. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

### Development Mode 🔧

Start the development server with hot-reload:

```bash
npm run dev
```

This will:
- ✅ Start the development server
- 🌐 Open your browser to `http://localhost:8080`
- 🔄 Enable hot-reload for instant updates
- 🛠️ Provide detailed error messages

### Build for Production 🏗️

Create an optimized production build:

```bash
npm run build
```

This will:
- ⚡ Bundle and minify your code
- 🗜️ Optimize assets for production
- 📁 Generate a `dist` folder with production files

### Preview Production Build 👀

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization Guide

### 📝 Content Updates

1. **Personal Information**
   - Edit `src/components/Hero.tsx` for main introduction
   - Update `src/components/About.tsx` for about section
   - Modify `src/components/Contact.tsx` for contact details

2. **Projects**
   - Update `src/components/Projects.tsx`
   - Add project images to `src/assets/`
   - Update project links and descriptions

3. **Experience & Skills**
   - Edit `src/components/Experience.tsx`
   - Update `src/components/Skills.tsx`

### 🖼️ Images

1. **Profile Photo**
   - Replace `public/lovable-uploads/995eb134-0d51-428c-99c0-69d21410f495.png`
   - Update path in `src/components/ProfileImage.tsx`

2. **Project Images**
   - Add images to `src/assets/`
   - Import and use in components

3. **Logos & Icons**
   - Update `src/assets/ai-ml-logo.png`
   - Modify favicon in `public/`

### 🎨 Styling

1. **Colors & Themes**
   - Edit `src/index.css` for CSS variables
   - Modify `tailwind.config.ts` for Tailwind configuration

2. **Components**
   - Customize UI components in `src/components/ui/`
   - Follow shadcn/ui documentation for modifications

## 📁 Project Structure

```
src/
├── 📄 App.tsx                 # Main App component
├── 📄 main.tsx               # Entry point
├── 🎨 index.css              # Global styles
├── 📱 components/
│   ├── 🏠 Hero.tsx           # Hero section
│   ├── 👤 About.tsx          # About section
│   ├── 💼 Experience.tsx     # Experience section
│   ├── 🛠️ Skills.tsx         # Skills section
│   ├── 📂 Projects.tsx       # Projects showcase
│   ├── 📧 Contact.tsx        # Contact form
│   ├── 🧭 Header.tsx         # Navigation header
│   ├── 🔽 Footer.tsx         # Footer component
│   ├── 🖼️ ProfileImage.tsx   # Profile image component
│   └── 🧩 ui/                # Reusable UI components
├── 📄 pages/
│   ├── 🏠 Index.tsx          # Main page
│   └── ❌ NotFound.tsx       # 404 page
├── 🖼️ assets/               # Images and static files
├── 🔧 lib/
│   └── ⚙️ utils.ts           # Utility functions
└── 🪝 hooks/                # Custom React hooks
```

## 🌐 Deployment Options

### Vercel 🔺

1. **Push your code to GitHub**
2. **Visit [vercel.com](https://vercel.com)**
3. **Connect your GitHub repository**
4. **Deploy automatically**

### Netlify 🌐

1. **Build the project**: `npm run build`
2. **Visit [netlify.com](https://netlify.com)**
3. **Drag and drop the `dist` folder**
4. **Or connect GitHub for automatic deployments**

### GitHub Pages 📚

1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Add to package.json**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Deploy**: `npm run build && npm run deploy`

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | 🔧 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🧹 Lint code with ESLint |

## 🤝 Contributing

1. **Fork the repository** 🍴
2. **Create a feature branch** 🌿
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** ✨
4. **Commit your changes** 💾
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch** 🚀
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** 🔄

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version Issues** ⚠️
   - Ensure you're using Node.js 18+ 
   - Use `nvm` to manage Node versions

2. **Port Already in Use** 🔌
   - The dev server uses port 8080 by default
   - Change in `vite.config.ts` if needed

3. **Build Errors** 🚨
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Clear cache: `npm run build -- --force`

4. **Image Loading Issues** 🖼️
   - Ensure images are in the correct directories
   - Check file paths and extensions

### Getting Help 🆘

- 📖 Check the documentation
- 🐛 Open an issue on GitHub
- 💬 Join the community discussions

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for the beautiful component library
- **Vite** for the lightning-fast build tool

---

Made with ❤️ and ☕ by Pavan
