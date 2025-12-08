# 🧮 Modern Calculator App

A sleek, responsive calculator web application built with HTML, CSS, and JavaScript. Perfect for performing quick calculations with a beautiful dark theme and intuitive interface.

## ✨ Features

- **📱 Fully Responsive** - Works perfectly on mobile, tablet, and desktop devices
- **🎨 Modern Dark UI** - Beautiful dark theme with smooth animations
- **⚡ Smooth Interactions** - Hover effects, active states, and transitions
- **🔢 Full Calculator Functionality** - Addition, subtraction, multiplication, division, modulo, and decimal support
- **⌨️ Keyboard Support** - Use your keyboard for calculations (numbers, operators, Enter, Backspace, Escape)
- **📜 History Section** - Keep track of your calculations
- **🚀 Fast & Lightweight** - No dependencies, pure vanilla JavaScript

## 🎯 Live Demo

Open `index.html` in your web browser to see the calculator in action.

## 📁 Project Structure

```
calculator-app/
├── index.html              # HTML structure
├── style.css               # Responsive styles
├── script.js               # JavaScript functionality
├── README.md               # Project documentation (this file)
├── CSS_LEARNING_GUIDE.md   # Comprehensive CSS guide for beginners
└── README_GUIDE.md         # How to write effective READMEs
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### How to Use

1. **Download or Clone** the project files
2. **Open** `index.html` in your web browser
3. **Start calculating!** Use buttons or your keyboard

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `+`, `-`, `*`, `/` | Operations |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all (AC) |

## 💻 How It Works

### HTML Structure
The calculator uses semantic HTML with a clean structure:
- **Input Section**: Display for current input and previous operations
- **Operations Grid**: 20 buttons organized in a 4-column grid
- **History Section**: Space for tracking calculations

### CSS Organization
The stylesheet is organized with a mobile-first approach:
1. **Defaults & Reset** - Base styles
2. **Layout** - Container and structure
3. **Components** - Button styles and effects
4. **Responsive Design** - 6 breakpoints for all devices

### JavaScript Logic
Pure vanilla JavaScript handles all functionality:
- Button event listeners
- Calculator operations (no unsafe `eval()`)
- Keyboard support
- Error handling for division by zero and invalid operations

## 📱 Responsive Design

The calculator adapts beautifully to all screen sizes:

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 480px | Full-width, stacked |
| Small Mobile | 480px - 599px | Compact layout |
| Large Mobile | 600px - 767px | Adjusted spacing |
| Tablet | 768px - 1023px | Side-by-side sections |
| Desktop | 1024px+ | Optimized layout |

Test responsiveness by opening DevTools (F12) and toggling device mode (Ctrl+Shift+M).

## 🎨 Customization

### Change Colors
Edit the color values in `style.css`:
```css
body {
  background-color: #222121; /* Change background */
}

button {
  background: rgba(66, 65, 65, 0.5); /* Change button color */
}

.equal-btn {
  background-color: rgb(0, 170, 255); /* Change equals button */
}

.operator {
  color: teal; /* Change operator text color */
}
```

### Adjust Button Size
Modify padding and height in responsive breakpoints:
```css
button {
  height: 68px;        /* Button height */
  padding: 10px 20px;  /* Internal spacing */
  font-size: 20px;     /* Text size */
}
```

### Change Font
Update the font-family in the `*` selector:
```css
* {
  font-family: "Your Font Name", sans-serif;
}
```

## 🐛 Troubleshooting

### Calculator not responding?
- Make sure JavaScript is enabled in your browser
- Open browser console (F12) to check for errors
- Try refreshing the page

### Display looks incorrect on mobile?
- Make sure viewport meta tag is in HTML head:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Clear browser cache and reload
- Test in different mobile browser

### Buttons overflow the screen?
- This shouldn't happen with responsive CSS
- If it does, clear browser zoom (Ctrl+0)
- Check that CSS file is properly linked

## 📚 Learning Resources

- **CSS Learning Guide**: Open `CSS_LEARNING_GUIDE.md` for comprehensive CSS tutorials
- **README Guide**: Check `README_GUIDE.md` to learn how to write effective documentation
- **MDN Web Docs**: https://developer.mozilla.org/
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## 🔧 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE | 11 | ⚠️ Limited |

## 📝 Future Enhancements

Potential features to add:
- [ ] Calculation history display
- [ ] Dark/Light theme toggle
- [ ] Scientific calculator mode
- [ ] Copy result to clipboard
- [ ] Keyboard number pad support
- [ ] Save calculations to localStorage
- [ ] Undo/Redo functionality

## 📄 License

This project is open source and available for educational use. Feel free to modify and share!

## 👨‍💻 Author

Created as a practice project for learning HTML, CSS, and JavaScript.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## ❓ FAQs

**Q: Can I use this calculator offline?**
A: Yes! Once the page loads, the calculator works completely offline. No internet connection needed.

**Q: How do I save my calculations?**
A: Currently, calculations are shown in the History section but don't persist. Future version will use localStorage.

**Q: Can I use this on my phone?**
A: Absolutely! The calculator is fully responsive and optimized for all devices including phones.

**Q: Is the calculator accessible?**
A: The calculator is keyboard accessible and uses semantic HTML for better accessibility.

## 📞 Support

If you encounter any issues:
1. Check the Troubleshooting section
2. Review the CSS and JavaScript Learning Guides
3. Check browser console for error messages (F12)

---

**Happy Calculating! 🎉**

Last Updated: December 8, 2025
