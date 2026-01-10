# Animated Buttons Implementation

## What Was Done

Successfully replaced the static image buttons in the Robowar section with custom animated geometric buttons featuring:

### Features
- ✅ Geometric clip-path design with octagonal borders
- ✅ Animated corner pieces that light up on hover
- ✅ Left and right arrow animations
- ✅ Color transitions from blue (#2761c3) to green (#27c39f)
- ✅ Glowing effects and smooth animations
- ✅ Fully responsive design

### Files Created

1. **`src/components/AnimatedButton.jsx`** - Reusable button component
2. **`src/components/AnimatedButton.css`** - Complete button styling with animations

### Files Modified

1. **`src/pages/Events/Robowar.jsx`**
   - Added import for AnimatedButton
   - Replaced image buttons with two AnimatedButton components:
     - "R E G I S T E R" button
     - "R U L E  B O O K" button
   - Added onClick handlers for both buttons

2. **`src/pages/Events/Robowar.css`**
   - Updated `.robowar-buttons` for better button alignment

## How to Use the Buttons

### In Robowar.jsx

The buttons are already set up with placeholder handlers. Update the URLs on lines 17 and 22:

```javascript
const handleRegister = () => {
  window.open('YOUR_REGISTRATION_LINK', '_blank'); // ← Replace with actual URL
};

const handleRuleBook = () => {
  window.open('YOUR_RULEBOOK_LINK', '_blank'); // ← Replace with actual URL
};
```

### Using in Other Components

You can use the AnimatedButton anywhere in your app:

```jsx
import AnimatedButton from '../../components/AnimatedButton';

<AnimatedButton 
  text="Y O U R  T E X T" 
  onClick={() => console.log('Clicked!')} 
/>
```

## Customization

### Change Colors

Edit `src/components/AnimatedButton.css`:

```css
.animated-btn-clip {
  --color: #2761c3;  /* Initial border color */
}

/* Hover state colors */
.animated-btn:hover .animated-btn-clip {
  --color: #27c39f;  /* Hover border color */
}
```

### Adjust Size

Modify these values in AnimatedButton.css:

```css
.animated-btn {
  width: 11em;   /* Button width */
  height: 4em;   /* Button height */
  font-size: 13px; /* Text size */
}
```

### Animation Speed

Change animation durations:

```css
.animated-btn:hover .animated-btn-rightArrow {
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  /* ↑ Change 0.6s to speed up/slow down */
}
```

## Button States

1. **Default**: Blue borders, corners, and arrows
2. **Hover**: 
   - Corners light up sequentially (green)
   - Border glows with green light
   - Arrows animate inward
   - Text remains white

## Responsive Behavior

The buttons automatically adjust for different screen sizes:
- Desktop: 13px font, 11em width
- Tablet (≤768px): 11px font, 10em width  
- Mobile (≤480px): 10px font, 9em width

---

**Your buttons are now live and animated!** 🎮✨
