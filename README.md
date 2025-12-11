assignment-4
============

Bader’s Portfolio Website
=========================

### Project Overview

This project is a **personal portfolio website** designed and developed to showcase my projects and contact information in a clean, modern, and responsive layout.It integrates a dynamic **GitHub API** section that fetches starred repositories, includes **dark/light mode**, and features a **validated contact form** built with **Bootstrap 5**.

### Technologies Used

*   **HTML5** — Structure and content
    
*   **CSS3** — Custom styling and responsive layout
    
*   **Bootstrap 5.3** — Framework for responsive design and utilities
    
*   **JavaScript (ES6)** — Dynamic interactions and DOM manipulation
    
*   **GitHub REST API v3** — To fetch starred and topic-based repositories
    

### Features

#### Theme Toggle

*   Implements a **light and dark mode** switch using JavaScript.
    
*   The toggle button dynamically updates colors across all components.
    
*   User preference is saved in **localStorage** to remember the theme.
    

#### Dynamic Projects Section

*   Fetches repositories from GitHub using:
    
    *   https://api.github.com/users/Baders-Account/starred (for starred repos)
        
    *   https://api.github.com/search/repositories?q=user:Baders-Account+topic:{topic} (for filtered projects)
        
*   Displays project cards with titles, descriptions, and GitHub links.
    
*   Includes a **loading spinner** while fetching data.
    
*   Projects can be **filtered** by category and **sorted** by newest, oldest, or alphabetical order.
    

#### Contact Form

*   Built with Bootstrap’s form controls.
    
*   Includes JavaScript validation with inline feedback.
    
*   Submit button remains disabled until all fields are valid.
    
*   Stores visitor name in **localStorage** and shows a personalized greeting for returning users.
    

#### Responsive Design

*   Fully responsive for mobile, tablet, and desktop devices.
    
*   Uses Bootstrap’s grid system (col-md, col-lg) for layout consistency.
    
*   Flexbox ensures filter and sort dropdowns appear inline on larger screens.
    

#### Timer

*   Tracks **time spent on the website**.
    
*   Updates dynamically in the navigation bar.
    

How to Run Locally
==================

To run this portfolio website on your local machine, follow these steps:

1\. Clone or Download the Repository
------------------------------------

You can either clone the repository using Git or download the ZIP file manually.

### Option 1 — Clone with Git

 git clone https://github.com/Baders-Account/assignment-2.git  cd assignment-2   `

### Option 2 — Download ZIP

1.  Go to the **GitHub repository page**.
    
2.  Click the green **Code** button → select **Download ZIP**.
    
3.  Extract the ZIP file to a folder on your computer.
    

2\. Open the Project Folder
---------------------------

Navigate into the project directory:

  cd assignment-2   `

3\. Run the Website
-------------------

### Open Directly in Browser

1.  Double-click the index.html file.
    
2.  It will open in your default browser (Chrome, Edge, or Firefox).

