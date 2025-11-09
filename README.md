# Nexus — AI-Native Workspace Prototype

A premium, production-ready interactive prototype for an AI-native development workspace. Built with cutting-edge UI/UX design, futuristic comet-style aesthetics, and delightful animations.

## ✨ Features

### Public Pages
- **Landing Page** - Hero section with feature highlights and CTAs
- **About Page** - Company story and values
- **Product Tour** - Interactive feature showcase
- **Blog** - List and detail pages
- **Pricing** - Three-tier pricing plans
- **Authentication** - Login and signup flows

### User Experience
- **Onboarding Flow** - Multi-step persona selection, goals, and workspace setup
- **Dashboard** - Project overview, activity feed, stats, and quick actions
- **Workspace** - Multi-pane modular editor with AI panel, terminal, and preview
- **Collaboration** - Real-time cursors, comments, branching, and timeline
- **Settings** - Profile, billing, workspace, team, plugins, and notifications

### Design System
- **Component Library** - Reusable, animated components
- **Design Tokens** - Consistent colors, typography, spacing
- **Motion Guidelines** - Smooth animations and micro-interactions
- **Responsive Design** - Mobile-first, adaptive layouts
- **Dark Mode** - Beautiful dark theme with cosmic gradients

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will open at `http://localhost:3000`

## 🎨 Design System

### Color Palette

**Cosmic Colors**
- Primary: Comet Blue (`comet-400` to `comet-600`)
- Secondary: Purple (`purple-400` to `purple-600`)
- Accent: Neon Pink/Cyan for highlights

**Gradients**
- Cosmic: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Comet: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- Neon: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`

### Typography
- **Sans**: Inter (primary font)
- **Mono**: JetBrains Mono (code)
- **Display**: Cal Sans (headings)

### Animations
- **Comet Trail**: Smooth particle animations
- **Hover Effects**: Scale and glow on interactive elements
- **Page Transitions**: Fade and slide animations
- **Micro-interactions**: Button presses, form inputs, etc.

## 📐 Information Architecture

### Navigation Structure

```
/
├── /about
├── /tour
├── /blog
│   └── /blog/:id
├── /pricing
├── /login
├── /signup
├── /onboarding
├── /dashboard
├── /workspace/:id
├── /workspace/:id/collaborate
└── /settings
```

### User Flows

1. **New User Journey**
   - Landing → Signup → Onboarding → Dashboard → Workspace

2. **Returning User**
   - Login → Dashboard → Workspace

3. **Collaboration**
   - Workspace → Collaboration View → Live Cursors/Comments

## 🧩 Components

### Core Components
- `Button` - Animated buttons with variants
- `Card` - Glass-morphism cards
- `Panel` - Collapsible panels for workspace
- `Input` - Styled form inputs
- `Navbar` - Responsive navigation
- `CommandPalette` - ⌘K command palette
- `ParticleBackground` - Animated particle system

### Page Components
- All pages are located in `src/pages/`
- Each page is self-contained with its own state

## 🎯 Key Differentiators

### vs. Cursor
- **Better Simplicity**: Cleaner, more intuitive interface
- **More Helpful AI**: Integrated AI panel with contextual assistance
- **Better Onboarding**: Guided setup process

### vs. Replit
- **More Beautiful**: Premium design with animations
- **Better Collaboration**: Real-time cursors and comments
- **More Flexible**: Modular panel system

### vs. Firebase
- **Better UX**: More intuitive dashboard and settings
- **More Delightful**: Animations and micro-interactions
- **Better Onboarding**: Step-by-step setup

### vs. Loveable
- **More Powerful**: Full development workspace
- **Better Collaboration**: Real-time features
- **More Flexible**: Customizable workspace layout

## 🛠️ Tech Stack

- **React 18** - UI framework
- **React Router** - Routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## ♿ Accessibility

- Semantic HTML
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- Color contrast compliance

## 🎭 Animation Guidelines

### Motion Principles
1. **Purposeful** - Every animation serves a purpose
2. **Smooth** - Use spring physics for natural motion
3. **Fast** - Keep animations under 300ms for interactions
4. **Delightful** - Add personality without distraction

### Animation Types
- **Hover**: Scale (1.05) + glow
- **Click**: Scale (0.95) for feedback
- **Page**: Fade + slide (300ms)
- **Loading**: Pulse + shimmer
- **Success**: Spark + scale

## 📚 User Stories

### As a Developer
- I want to create projects quickly
- I want AI assistance while coding
- I want to collaborate with my team
- I want to deploy easily

### As a Designer
- I want to see live previews
- I want to iterate quickly
- I want to share designs

### As a Team Lead
- I want to manage team members
- I want to track activity
- I want to control access

## 🔮 Future Enhancements

- [ ] Real backend integration
- [ ] WebSocket for real-time collaboration
- [ ] Code execution environment
- [ ] Plugin system
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] AI model fine-tuning

## 📄 License

MIT License - feel free to use this prototype for your projects!

## 🙏 Credits

Inspired by:
- Cursor (AI-powered editor)
- Replit (online IDE)
- Firebase (developer platform)
- Loveable (AI app builder)
- Trae (design system)

---

Built with ❤️ using React, Framer Motion, and Tailwind CSS

