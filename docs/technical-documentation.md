# Technical Documentation

## 1. Overview

The **Portfolio Website** is a responsive web application designed to showcase personal projects, technical skills, and contact information.  
It integrates the **GitHub REST API** to dynamically fetch project data and includes **light/dark mode switching**, **form validation**, and **responsive layouts** using **Bootstrap 5**.

---

## 2. Technologies Used

| Category | Technology | Purpose |
|-----------|-------------|----------|
| Front-End | **HTML5** | Page structure and semantic content |
| Styling | **CSS3**, **Bootstrap 5.3** | Responsive layout, theme styling, and UI components |
| Logic | **JavaScript (ES6)** | DOM manipulation, API calls, event handling |
| API | **GitHub REST API v3** | Fetch starred and topic-tagged repositories dynamically |
| Tools | **VS Code**, **Live Server**, **Browser Developer Tools** | Development and testing environment |

---

### Component Responsibilities
- **index.html** → Defines the layout and content structure (sections: Intro, Projects, Contact).  
- **styles.css** → Handles all UI styling, color palettes, responsive behavior, and theme transitions.  
- **script.js** → Manages user interaction, API requests, dynamic project rendering, validation, and event listeners.

---

## 3. Core Functionalities

### Theme Toggle
- Implemented using a single function `toggleTheme()` in JavaScript.
- Toggles the `.dark-mode` class on the `<body>` element.
- The `.dark-mode` CSS rules dynamically invert colors for dark theme compatibility.

```js
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

## GitHub API Integration
### API Endpoints

- **Starred Repositories:**  
  `https://api.github.com/users/Baders-Account/starred`

- **Topic-based Repositories:**  
  `https://api.github.com/search/repositories?q=user:Baders-Account+topic:{topic}`

---
```

## Form Validation

Form validation is implemented in **Vanilla JavaScript** using **Bootstrap’s validation classes**.

### Features

- Disables the **Submit** button until all fields are valid.  
- Validates **name**, **email**, and **message** fields using regular expressions and length checks.  
- Displays inline feedback using the Bootstrap classes `.is-valid` and `.is-invalid`.

---

## Styling and UI/UX

### Light Theme
- **Background:** `#e6ccb2`  
- **Text:** `#22333B`  
- **Buttons:** Bootstrap **primary/light** scheme

### Dark Theme
- **Background:** `#22333B`  
- **Text:** `#e6ccb2`  
- **Inverted Colors:** Applied to cards, labels, and navbar

### Components Styled
- Navbar with hover transitions  
- Cards with `rounded-4` and `shadow-sm` for smooth appearance  
- Buttons with hover opacity and motion transitions

---

## Responsiveness

The layout uses the **Bootstrap Grid System** for flexible rendering across all screen sizes.

| Screen Size       | Classes Used   | Columns  |
|------------------|---------------|---------|
| Small (≤576px)    | `.col-12`     | 1 column |
| Medium (≥768px)   | `.col-md-6`   | 2 columns |
| Large (≥992px)    | `.col-lg-4`   | 3 columns |

Cards, text, and images automatically adjust spacing and alignment for a consistent user experience.

---

## Workflow Overview

1. **Page Load**  
   - Default fetch displays all starred repositories from GitHub.

2. **User Selection**  
   - Selecting a topic triggers a new API fetch for that specific topic.

3. **Rendering**  
   - JavaScript dynamically generates project cards and inserts them into the grid layout.

4. **Theme Toggle**  
   - User clicks **“Change Theme”** to instantly toggle between light and dark modes.

5. **Contact Form**  
   - User enters data → validation runs → **Submit** button activates once all inputs are valid.




