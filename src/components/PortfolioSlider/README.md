# PortfolioSlider Component

A modern, responsive portfolio slider component for showcasing projects with smooth animations and interactive navigation.

## Features

- **Auto-play functionality** with pause on user interaction
- **Multiple navigation methods**: arrow buttons, indicators, and thumbnail navigation
- **Responsive design** that works on all screen sizes
- **Smooth transitions** and hover effects
- **Accessibility support** with proper ARIA labels
- **Dark mode support**

## Usage

```tsx
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';
import { architectureProjects } from './data/architectureProjects';

<PortfolioSlider projects={architectureProjects} />
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `projects` | `Project[]` | Array of project objects to display |

## Project Interface

```tsx
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  location: string;
  status: string;
  area?: string;
  client?: string;
  awards?: string[];
}
```

## Features

### Navigation
- **Arrow buttons**: Previous/Next navigation
- **Slide indicators**: Dots at the bottom for direct navigation
- **Thumbnail navigation**: Horizontal scrollable thumbnails
- **Auto-play**: Automatically advances slides every 5 seconds

### Responsive Design
- **Desktop**: Full navigation with thumbnails
- **Tablet**: Simplified navigation
- **Mobile**: Hidden thumbnails, touch-friendly controls

### Accessibility
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus management

## Styling

The component uses CSS modules with the following main classes:
- `.portfolioSlider` - Main container
- `.mainSlide` - Current slide display
- `.navigationControls` - Arrow navigation
- `.slideIndicators` - Dot indicators
- `.thumbnailNav` - Thumbnail navigation

## Customization

You can customize the appearance by modifying the SCSS variables and classes in `PortfolioSlider.module.scss`.