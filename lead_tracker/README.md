# 🔗 Leads Tracker

A lightweight Chrome extension for efficiently saving and managing your important URLs and leads in one place.

## ✨ Features

- **Quick Save**: Save URLs manually by pasting them into the input field
- **Tab Saver**: Save the current tab's URL with a single click
- **Local Storage**: All leads are automatically saved to your browser's local storage
- **Persistent Data**: Your leads remain saved even after closing and reopening the browser
- **Clean UI**: Simple and intuitive interface for easy access
- **Bulk Delete**: Remove all saved leads at once with a double-click (with confirmation)

## 🚀 Installation

1. **Clone or Download** this repository to your local machine
2. Open **Chrome** and navigate to `chrome://extensions/`
3. Enable **Developer Mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the `lead_tracker` folder
5. The extension will appear in your Chrome toolbar

## 📖 How to Use

### Save a URL Manually
1. Click the Leads Tracker extension icon
2. Enter a URL in the input field
3. Click **SAVE INPUT**
4. The URL will appear in the list below

### Save Current Tab URL
1. Click the Leads Tracker extension icon
2. Click **SAVE TAB**
3. The current tab's URL is automatically added to your leads list

### View Saved Leads
- All saved URLs appear as clickable links in the popup
- Click any link to open it in a new tab

### Delete All Leads
1. **Double-click** the **DELETE ALL** button to clear all saved leads
2. All data will be removed from local storage

## 📁 Project Structure

```
lead_tracker/
├── index.html      # Main popup interface
├── index.js        # Extension logic and event handlers
├── index.css       # Styling
├── manifest.json   # Chrome extension configuration
└── README.md       # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (Vanilla)** - Core functionality
- **Chrome Extensions API** - Tab access and popup management

## ⚙️ How It Works

1. **Data Storage**: Leads are stored in browser's `localStorage` as a JSON array
2. **Event Listeners**: Button clicks trigger different actions (save input, save tab, delete all)
3. **Chrome API Integration**: Uses `chrome.tabs.query()` to access the current tab's URL
4. **Rendering**: The UI updates dynamically when leads are added or removed

## 🎨 Customization

### Change the Color Scheme
Edit the color values in `index.css`:
```css
button {
    background: #414066;  /* Change this to your preferred color */
}
```

### Modify Button Text
Edit the button labels in `index.html`:
```html
<button id="input-btn">SAVE INPUT</button>
```

## 📝 Requirements

- Google Chrome (or Chromium-based browser)
- No additional dependencies

## 🐛 Known Limitations

- Works only with Chrome/Chromium-based browsers
- Leads are stored per browser profile (not synced across devices)
- Maximum data depends on browser's localStorage limit (~5-10MB)
---

**Made with ❤️ for efficient lead management**
