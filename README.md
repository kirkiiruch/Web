# GGaMG - Guitar, Guitar, and More Guitar 🎸

Welcome to **GGaMG**, a website dedicated to guitar enthusiasts! Whether you're a beginner looking to learn the basics, a seasoned player exploring advanced techniques, or a music lover interested in the history of rock and roll, this site has something for you. GGaMG provides articles, lessons, and a community space to inspire your musical journey.

---

## 🌟 Overview

GGaMG is a static website built with HTML, CSS, and JavaScript, focusing on guitars and music education. Key features include:
- **Educational Content**: Articles on guitar basics, rock and roll history, and lessons for aspiring guitarists.
- **Interactive Features**: A feedback form for users to share their thoughts.
- **Responsive Navigation**: A dropdown menu for easy access to contact options and different sections.
- **External Links**: Connect with the GGaMG community via Telegram, Instagram, and email.

The website consists of four main pages:
- `index.html`: The homepage introducing GGaMG and its mission.
- `article1.html`: An introduction to guitars, their versatility, and popular models.
- `article2.html`: A detailed history of rock and roll, covering its origins and evolution.
- `article3.html`: Guitar lessons focusing on posture, chords, rhythm, and advanced techniques.

---

## 📂 File Structure

- **index.html**: Homepage of the website.
- **article1.html**: Article about guitars and their versatility.
- **article2.html**: Article on the history of rock and roll.
- **article3.html**: Guitar lessons for beginners and intermediate players.
- **script.js**: JavaScript file for handling the feedback modal functionality.
- **public/**:
  - `pol_1.css`: Main stylesheet for the website.
  - `print.css`: Stylesheet for print media.
- **images/**: Directory containing images used across the website (e.g., guitar images, rock and roll visuals).

---

## 🚀 Setup Instructions

To set up and run the GGaMG website locally, follow these steps:

1. **Prerequisites**:
   - A web browser (e.g., Chrome, Firefox).
   - A local server (e.g., Live Server extension in VS Code, or use Python’s HTTP server).

2. **Clone the Repository**:
   - Download or clone the project files to your local machine.

3. **Serve the Website**:
   - Using Python’s HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Or use a tool like Live Server in VS Code to launch the site.

4. **Access the Site**:
   - Open your browser and navigate to `http://localhost:8000` (or the port you specified).
   - Start exploring from `index.html`.

---

## 🛠️ Usage

### Navigation
- Use the header menu to navigate between pages: "For first!" (Guitar Intro), "History" (Rock and Roll History), and "Lessons" (Guitar Lessons).
- Access contact options via the "Contact" dropdown, including Telegram, Instagram, email, and a feedback form.

### Key Features
- **Feedback Form** (`index.html`):
  - Click "Leave Feedback" in the Contact menu to open a modal where you can submit your name and feedback.
  - The form currently logs submissions to the console (requires backend integration for full functionality).
- **External Links**:
  - Connect with GGaMG via Telegram (`https://t.me/kirkiruch`), Instagram (`https://www.instagram.com/kirkiruch/`), or email.
- **Content Exploration**:
  - Read articles and lessons, view images, and explore guitar-related content across the pages.

### Sample Interaction
1. Visit the homepage (`index.html`) to learn about GGaMG’s mission.
2. Navigate to "Lessons" (`article3.html`) to start learning guitar basics.
3. Leave feedback using the form in the Contact menu.

---

## 🔮 Future Improvements

- **Backend Integration**: Add a backend (e.g., Node.js, Express) to handle feedback form submissions and store user feedback in a database.
- **Improved Accessibility**: Enhance the site with ARIA labels and better keyboard navigation for accessibility.
- **Search Functionality**: Add a search bar to help users find specific articles or lessons.
- **Interactive Lessons**: Include audio or video tutorials for guitar lessons to make learning more engaging.
- **Community Forum**: Build a forum section where users can interact, share tips, and collaborate on music projects.
- **Responsive Design**: Optimize the CSS for better responsiveness on mobile devices.

---

## 📜 License

This project is licensed under the MIT License - feel free to use and modify it as needed.