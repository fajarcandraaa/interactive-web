# Pages Directory Structure

This directory contains all the page components organized by functionality with advanced animations and smooth scrolling.

## Structure

```
src/pages/
├── Header/           # Header component
│   ├── Header.jsx
│   └── index.js
├── Home/             # Home/Intro section
│   ├── Home.jsx
│   └── index.js
├── Workflow/         # Workflow section
│   ├── Workflow.jsx
│   └── index.js
├── Services/         # Services section
│   ├── Services.jsx
│   └── index.js
├── Products/         # Products section
│   ├── Products.jsx
│   └── index.js
├── Partners/         # Partners section
│   ├── Partners.jsx
│   └── index.js
├── Contact/          # Contact form section
│   ├── Contact.jsx
│   └── index.js
├── About/            # About section
│   ├── About.jsx
│   └── index.js
└── Index.jsx         # Main page that imports all sections
```

## 🎨 Animation Features

### Framer Motion Integration
All components now use **Framer Motion** for smooth, performant animations:

- **Fade-up animations** for all content elements
- **Stagger effects** for multiple items (cards, services, etc.)
- **Hover interactions** with smooth transitions
- **Viewport-based triggers** for scroll animations
- **Performance optimized** with `viewport={{ once: true }}`

### Animation Types by Component

#### Home
- **Container**: Fade-up with 0.2s delay
- **Title**: Fade-up with 0.4s delay  
- **Description**: Fade-up with 0.6s delay
- **Duration**: 0.8s for container, 0.6s for text elements

#### Workflow
- **Title**: Fade-up animation
- **Steps**: Staggered fade-up with 0.2s delay between each
- **Icons**: Hover effects (scale + rotate)
- **Cards**: Hover lift effect (-5px)

#### Services
- **Title**: Fade-up animation
- **Service Cards**: Staggered fade-up with 0.2s delay
- **Icons**: Hover effects (scale + rotate)
- **Cards**: Hover lift effect

#### Products
- **Title**: Fade-up animation
- **Product Cards**: Staggered fade-up with 0.2s delay
- **Cards**: Hover lift effect

#### Partners
- **Title**: Fade-up animation
- **Partner Logos**: Staggered fade-up with 0.15s delay
- **Logos**: Hover effects (lift + scale)

#### Contact
- **Title**: Fade-up animation
- **Form Elements**: Staggered fade-up with 0.1s delay
- **Input Fields**: Sequential appearance
- **Buttons**: Smooth transitions

#### About
- **Container**: Fade-up with 0.2s delay
- **Logo**: Scale animation with 0.4s delay
- **Address**: Fade-up with 0.6s delay
- **Logo Hover**: Scale effect

## 🚀 Smooth Scrolling & Navigation

### Snap Scroll
- **CSS Snap Scroll**: Each section snaps to viewport
- **Smooth Behavior**: Native smooth scrolling enabled
- **Full Height**: Each section takes full viewport height (`min-h-screen`)

### Section Navigation
- **Fixed Position**: Left-side navigation panel
- **Active Tracking**: Automatically highlights current section
- **Smooth Scrolling**: Click to navigate to any section
- **Visual Feedback**: Active section indicator
- **Responsive**: Hidden on mobile devices

### Scroll to Top
- **Floating Button**: Appears after scrolling 300px
- **Smooth Animation**: Fade-in/out with scale effects
- **Hover Effects**: Interactive feedback
- **Fixed Position**: Bottom-right corner

## 🔧 Technical Implementation

### CSS Snap Scroll
```css
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

### Animation Variants
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,    // Delay between children
      delayChildren: 0.1,      // Initial delay
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,                     // Start from below
    scale: 0.95                // Slightly smaller
  },
  visible: { 
    opacity: 1, 
    y: 0,                      // Final position
    scale: 1,                  // Normal size
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
```

### Viewport Triggers
```javascript
viewport={{ 
  once: true,        // Animation runs only once
  margin: "-100px"   // Triggers 100px before element is visible
}}
```

## 📱 Responsive Design

- **Mobile**: Snap scroll works on all devices
- **Desktop**: Section navigation visible on large screens
- **Touch**: Smooth scrolling optimized for touch devices
- **Performance**: Animations are hardware-accelerated

## 🎯 Benefits

1. **Enhanced UX**: Smooth, engaging animations
2. **Better Navigation**: Easy section jumping
3. **Professional Feel**: Modern, polished interactions
4. **Performance**: Optimized animations with Framer Motion
5. **Accessibility**: Smooth scrolling improves navigation
6. **Mobile Friendly**: Touch-optimized scrolling

## 🚀 Adding New Sections

To add a new animated section:

1. Create component with Framer Motion animations
2. Add `min-h-screen` class for full height
3. Include `data-reveal` attribute for compatibility
4. Add to SectionNavigation component
5. Update this README with animation details

## 📦 Dependencies

- **framer-motion**: Animation library
- **lucide-react**: Icon library for navigation
- **react**: Core React library
- **tailwindcss**: Styling framework
