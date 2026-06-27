# Developer Portfolio Website

A premium, interactive, single-page developer portfolio website designed to showcase mobile applications, desktop systems, and Google Workspace add-ons. 

## 🚀 Features

- **Modern Visual Aesthetics:** Implements a dark mode layout with glowing HSL-based highlights, responsive glassmorphic cards, and elegant typography (Outfit & Inter).
- **Responsive Layout:** Automatically adapts to any mobile, tablet, or desktop screen size.
- **Dynamic Category Filtering:** Instantly filters applications ("All", "Mobile", "Workspace Add-ons", "Desktop & Other") using client-side JavaScript.
- **Localized Exceptions Support:** Designed in English, but retains Turkish descriptions for specific local-market tools (`Dava Belgelerim` and `UYAP Çevirici`).
- **Clean Structure:** Kept completely modular with separate HTML, CSS, and JS files.

## 📂 Project Structure

```text
developer_portfolio/
├── index.html        # Main markup
├── css/
│   └── styles.css    # Premium custom theme and visual aesthetics
└── js/
    └── app.js        # Dynamic app database and filtering logic
```

## 🛠️ How to Add a New App

To showcase a new application, open `js/app.js` and add a new object to the `appsData` array:

```javascript
{
    id: "your-app-id",
    title: "Application Title",
    category: "mobile" | "workspace" | "other",
    icon: "fa-solid fa-icon-name", // FontAwesome icon class
    description: "Detailed description of your awesome application.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    primaryLink: "https://link-to-download.com",
    primaryLabel: "Download Button Text",
    secondaryLink: "https://link-to-docs.com", // Optional
    secondaryLabel: "Docs Button Text" // Optional
}
```
The UI grid and category filters will auto-update themselves dynamically!
