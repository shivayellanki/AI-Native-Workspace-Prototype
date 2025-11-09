/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nebula Flux Architecture Palette
        nebula: {
          core: '#1a0b2e',
          deep: '#4a148c',
          flux: '#00d9ff',
          quantum: '#0099cc',
          void: '#000000',
          space: '#0a0a0a',
        },
        quantum: {
          flux: '#00d9ff',
          energy: '#4facfe',
          pulse: '#667eea',
          wave: '#764ba2',
        },
        // Emotional State Colors
        emotion: {
          courage: {
            primary: '#ffd700',
            secondary: '#ff8c00',
            accent: '#ff6b35',
          },
          focus: {
            primary: '#4facfe',
            secondary: '#00f2fe',
            accent: '#667eea',
          },
          calm: {
            primary: '#00d9ff',
            secondary: '#00ff88',
            accent: '#4facfe',
          },
          creative: {
            primary: '#ff00ff',
            secondary: '#00ffff',
            accent: '#ff0080',
          },
          surprise: {
            primary: '#ffff00',
            secondary: '#ffffff',
            accent: '#ffd700',
          },
        },
        // Legacy support
        cosmic: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7ff',
          300: '#a4bbff',
          400: '#8195ff',
          500: '#5f6fff',
          600: '#4c52ff',
          700: '#3d3fff',
          800: '#3235e6',
          900: '#2d2fb8',
          950: '#1a1a6b',
        },
        comet: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          pink: '#ff00ff',
          cyan: '#00ffff',
          purple: '#9d4edd',
          blue: '#4cc9f0',
          green: '#00ff88',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.2)',
          premium: 'rgba(255, 255, 255, 0.05)',
          nebula: 'rgba(79, 172, 254, 0.1)',
        },
        star: {
          gold: '#ffd700',
          silver: '#c0c0c0',
          blue: '#87ceeb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        // Legacy animations
        'comet': 'comet 3s ease-in-out infinite',
        'comet-trail': 'comet-trail 2s ease-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-breath': 'pulse-breath 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spark': 'spark 1.5s ease-out infinite',
        'sparkle': 'sparkle 2s ease-out infinite',
        'star-burst': 'star-burst 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'gradient': 'gradient 8s ease infinite',
        'gradient-slow': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'breath': 'breath 4s ease-in-out infinite',
        'parallax-slow': 'parallax-slow 20s linear infinite',
        'parallax-fast': 'parallax-fast 10s linear infinite',
        'refraction': 'refraction 5s ease-in-out infinite',
        // Nebula Flux Animations
        'nebula-bloom': 'nebula-bloom 4s ease-in-out infinite',
        'quantum-morph': 'quantum-morph 2s ease-in-out infinite',
        'energy-ribbon': 'energy-ribbon 3s linear infinite',
        'particle-wake': 'particle-wake 1s ease-out infinite',
        'plasma-glide': 'plasma-glide 2s ease-in-out infinite',
        'gravity-snap': 'gravity-snap 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'orbital-float': 'orbital-float 20s linear infinite',
        'emotional-pulse': 'emotional-pulse 3s ease-in-out infinite',
        'celebration-burst': 'celebration-burst 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'focus-converge': 'focus-converge 0.5s ease-out',
        'nebula-flow': 'nebula-flow 10s linear infinite',
      },
      keyframes: {
        comet: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateX(100px) translateY(-50px)', opacity: '1' },
        },
        'comet-trail': {
          '0%': { transform: 'translateX(-100%) scaleX(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%) scaleX(1)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)' 
          },
        },
        'pulse-breath': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        spark: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(1.5) rotate(180deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)', 
            opacity: '0.8',
            filter: 'brightness(1)',
          },
          '25%': { 
            transform: 'scale(1.2) rotate(90deg)', 
            opacity: '1',
            filter: 'brightness(1.5)',
          },
          '50%': { 
            transform: 'scale(1) rotate(180deg)', 
            opacity: '0.9',
            filter: 'brightness(1.2)',
          },
          '75%': { 
            transform: 'scale(1.1) rotate(270deg)', 
            opacity: '1',
            filter: 'brightness(1.3)',
          },
        },
        'star-burst': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '0.8' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breath: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': { 
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        },
        'parallax-slow': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        'parallax-fast': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-200px)' },
        },
        refraction: {
          '0%, 100%': { 
            filter: 'blur(0px) brightness(1)',
            transform: 'translateZ(0)',
          },
          '50%': { 
            filter: 'blur(1px) brightness(1.1)',
            transform: 'translateZ(10px)',
          },
        },
        // Nebula Flux Keyframes
        'nebula-bloom': {
          '0%, 100%': { 
            transform: 'scale(1) translateZ(0)',
            opacity: '0.8',
            filter: 'blur(0px) brightness(1)',
          },
          '50%': { 
            transform: 'scale(1.1) translateZ(20px)',
            opacity: '1',
            filter: 'blur(2px) brightness(1.2)',
          },
        },
        'quantum-morph': {
          '0%': { 
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '12px',
          },
          '50%': { 
            transform: 'scale(1.05) rotate(5deg)',
            borderRadius: '16px',
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            borderRadius: '12px',
          },
        },
        'energy-ribbon': {
          '0%': { 
            backgroundPosition: '0% 50%',
            opacity: '0.6',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            opacity: '1',
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            opacity: '0.6',
          },
        },
        'particle-wake': {
          '0%': { 
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateX(100px) translateY(-50px) scale(0)',
            opacity: '0',
          },
        },
        'plasma-glide': {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0)',
            filter: 'blur(0px)',
          },
          '50%': { 
            transform: 'translateX(10px) translateY(-5px)',
            filter: 'blur(1px)',
          },
        },
        'gravity-snap': {
          '0%': { 
            transform: 'translateY(-20px) scale(0.9)',
            opacity: '0',
          },
          '60%': { 
            transform: 'translateY(5px) scale(1.05)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        'orbital-float': {
          '0%': { 
            transform: 'rotate(0deg) translateX(50px) rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(50px) rotate(-360deg)',
          },
        },
        'emotional-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1) saturate(1)',
          },
          '50%': { 
            transform: 'scale(1.02)',
            filter: 'brightness(1.1) saturate(1.2)',
          },
        },
        'celebration-burst': {
          '0%': { 
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scale(1.5) rotate(180deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
            opacity: '0.8',
          },
        },
        'focus-converge': {
          '0%': { 
            transform: 'scale(1) translateZ(0)',
            filter: 'blur(0px)',
          },
          '100%': { 
            transform: 'scale(1.1) translateZ(30px)',
            filter: 'blur(1px)',
          },
        },
        'nebula-flow': {
          '0%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            opacity: '1',
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
        },
      },
      backgroundImage: {
        // Nebula Flux Gradients
        'nebula-core': 'linear-gradient(135deg, #1a0b2e 0%, #4a148c 100%)',
        'quantum-flux': 'linear-gradient(135deg, #00d9ff 0%, #0099cc 50%, #4facfe 100%)',
        'energy-ribbon': 'linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.6) 50%, transparent 100%)',
        'nebula-mesh': 'radial-gradient(ellipse at center, rgba(79, 172, 254, 0.2) 0%, transparent 70%), radial-gradient(ellipse at top, rgba(118, 75, 162, 0.15) 0%, transparent 50%)',
        'particle-field': 'radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
        // Emotional State Gradients
        'emotion-courage': 'linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #ff6b35 100%)',
        'emotion-focus': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #667eea 100%)',
        'emotion-calm': 'linear-gradient(135deg, #00d9ff 0%, #00ff88 50%, #4facfe 100%)',
        'emotion-creative': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ff0080 100%)',
        'emotion-surprise': 'linear-gradient(135deg, #ffff00 0%, #ffffff 50%, #ffd700 100%)',
        // Legacy gradients
        'cosmic-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'cosmic-deep': 'linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #581c87 100%)',
        'comet-gradient': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'comet-trail': 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.5) 50%, transparent 100%)',
        'neon-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at top, rgba(56, 189, 248, 0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
        'star-dust': 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        // Nebula Flux Shadows
        'nebula-glow': '0 0 30px rgba(79, 172, 254, 0.6), 0 0 60px rgba(0, 217, 255, 0.4), 0 0 90px rgba(118, 75, 162, 0.2)',
        'quantum-field': '0 0 40px rgba(0, 217, 255, 0.8), 0 0 80px rgba(79, 172, 254, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.2)',
        'energy-ribbon': '0 0 20px rgba(79, 172, 254, 0.5), 0 2px 10px rgba(0, 217, 255, 0.3)',
        'particle-wake': '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.3)',
        'emotional-pulse': '0 0 25px rgba(255, 215, 0, 0.7), 0 0 50px rgba(255, 140, 0, 0.4)',
        // Legacy shadows
        'comet': '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'comet-strong': '0 0 40px rgba(56, 189, 248, 0.8), 0 0 80px rgba(139, 92, 246, 0.5)',
        'star': '0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4)',
        'nebula': '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(56, 189, 248, 0.2)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      transitionTimingFunction: {
        'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}


