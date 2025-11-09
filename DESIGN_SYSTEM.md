# Nexus Design System

## Design Philosophy

Nexus is built on the principles of **delightful simplicity**, **futuristic aesthetics**, and **production-ready quality**. Every design decision prioritizes user experience, visual beauty, and developer happiness.

## Visual Identity

### Brand Name: Nexus
**Tagline**: "Build. Code. Ship. All in One Place"

### Logo
- Icon: Sparkles/Comet (✨)
- Wordmark: "Nexus" in gradient text
- Usage: Always with gradient or solid color on dark backgrounds

## Color System

### Primary Palette

```css
/* Cosmic Blue */
comet-50:  #f0f9ff
comet-400: #38bdf8
comet-500: #0ea5e9
comet-600: #0284c7
comet-900: #0c4a6e

/* Purple Accent */
purple-400: #a78bfa
purple-500: #8b5cf6
purple-600: #7c3aed

/* Neon Highlights */
neon-pink:  #ff00ff
neon-cyan:  #00ffff
neon-purple: #9d4edd
```

### Semantic Colors

```css
/* Success */
green-400: #4ade80
green-500: #22c55e

/* Warning */
yellow-400: #facc15
amber-500: #f59e0b

/* Error */
red-400: #f87171
red-500: #ef4444

/* Neutral */
slate-400: #94a3b8
slate-500: #64748b
slate-800: #1e293b
slate-900: #0f172a
slate-950: #020617
```

### Gradients

1. **Cosmic Gradient**
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```

2. **Comet Gradient**
   ```css
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
   ```

3. **Neon Gradient**
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
   ```

## Typography

### Font Families

```css
/* Primary */
font-sans: 'Inter', system-ui, sans-serif

/* Code */
font-mono: 'JetBrains Mono', monospace

/* Display */
font-display: 'Cal Sans', 'Inter', sans-serif
```

### Type Scale

```css
/* Display */
text-5xl: 3rem (48px) - Hero headings
text-4xl: 2.25rem (36px) - Page titles
text-3xl: 1.875rem (30px) - Section titles

/* Body */
text-xl: 1.25rem (20px) - Large body
text-base: 1rem (16px) - Default body
text-sm: 0.875rem (14px) - Small text
text-xs: 0.75rem (12px) - Captions
```

### Font Weights

```css
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
font-extrabold: 800
```

## Spacing System

### Scale (4px base unit)

```css
space-1: 0.25rem (4px)
space-2: 0.5rem (8px)
space-3: 0.75rem (12px)
space-4: 1rem (16px)
space-6: 1.5rem (24px)
space-8: 2rem (32px)
space-12: 3rem (48px)
space-16: 4rem (64px)
space-20: 5rem (80px)
```

## Components

### Button

**Variants:**
- `primary` - Gradient background, white text
- `secondary` - Glass background, white text
- `ghost` - Transparent, hover background
- `danger` - Red background, white text

**Sizes:**
- `sm` - px-4 py-2 text-sm
- `md` - px-6 py-3 text-base (default)
- `lg` - px-8 py-4 text-lg
- `xl` - px-10 py-5 text-xl

**States:**
- Default: Normal opacity
- Hover: Scale 1.05, increased glow
- Active: Scale 0.95
- Disabled: Reduced opacity, no interaction

### Card

**Style:**
- Glass-morphism background
- Rounded corners (rounded-xl)
- Padding: p-6
- Border: border-white/10

**States:**
- Default: Subtle glass effect
- Hover: Lift (y: -4), scale (1.02), increased glow

### Panel

**Features:**
- Collapsible header
- Resizable content
- Docked/undocked states
- Minimize/maximize controls

**Style:**
- Glass background
- Rounded corners
- Border: border-white/10
- Header: p-4 border-b

### Input

**Style:**
- Glass background
- Rounded corners (rounded-lg)
- Padding: px-4 py-3
- Focus: Ring (ring-2 ring-comet-500)

**States:**
- Default: Normal opacity
- Focus: Scale 1.02, ring visible
- Error: Red ring, error message

## Motion System

### Animation Principles

1. **Purposeful** - Every animation serves a purpose
2. **Natural** - Use spring physics
3. **Fast** - Keep interactions under 300ms
4. **Delightful** - Add personality

### Motion Curves

```css
/* Spring (default) */
transition: type: 'spring', stiffness: 400, damping: 17

/* Ease (smooth) */
transition: ease-in-out, duration: 300ms

/* Bounce (playful) */
transition: type: 'spring', stiffness: 300, damping: 10
```

### Animation Types

**Hover:**
```css
scale: 1.05
glow: Increased shadow
```

**Click:**
```css
scale: 0.95
duration: 100ms
```

**Page Transition:**
```css
opacity: 0 → 1
y: 20 → 0
duration: 300ms
```

**Loading:**
```css
pulse: opacity 0.5 → 1
duration: 2s
infinite: true
```

### Keyframe Animations

**Comet Trail:**
```css
@keyframes comet {
  0%, 100% { transform: translateX(0) translateY(0); opacity: 0.8; }
  50% { transform: translateX(100px) translateY(-50px); opacity: 1; }
}
```

**Pulse Glow:**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4); }
  50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.8); }
}
```

**Float:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## Layout System

### Container

```css
max-w-7xl: 1280px (default)
max-w-6xl: 1152px
max-w-4xl: 896px
max-w-2xl: 672px
```

### Grid

```css
/* 1 column (mobile) */
grid-cols-1

/* 2 columns (tablet) */
grid-cols-2

/* 3 columns (desktop) */
grid-cols-3

/* 4 columns (large) */
grid-cols-4
```

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Effects

### Glass Morphism

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Glow

```css
/* Subtle */
box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);

/* Strong */
box-shadow: 0 0 40px rgba(79, 70, 229, 0.6);
```

### Gradient Text

```css
background: linear-gradient(to right, #38bdf8, #a78bfa, #f472b6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

## Accessibility

### Color Contrast
- Text on background: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Focus Indicators
- Visible outline on all interactive elements
- Ring color: comet-500
- Ring width: 2px

### Keyboard Navigation
- Tab order: Logical flow
- Enter/Space: Activate buttons
- Escape: Close modals
- Arrow keys: Navigate lists

## Usage Guidelines

### Do's
✅ Use consistent spacing
✅ Maintain color hierarchy
✅ Add animations for feedback
✅ Use glass effects sparingly
✅ Keep text readable

### Don'ts
❌ Overuse animations
❌ Use too many colors
❌ Ignore accessibility
❌ Break responsive layout
❌ Clutter interfaces

## Implementation

All design tokens are defined in `tailwind.config.js` and can be used throughout the application using Tailwind CSS classes.

For custom components, refer to the component library in `src/components/`.

---

**Last Updated**: January 2024
**Version**: 1.0.0



