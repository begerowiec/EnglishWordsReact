# Word Game - A React Application for Learning English Words

This is a React application designed to help users learn English vocabulary through interactive quizzes. Users can select categories and difficulty levels to tailor their learning experience. The app also supports Progressive Web App (PWA) features, allowing it to be installed on devices and used offline.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [PWA Features](#pwa-features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Category Selection**: Choose from various word categories to focus on specific vocabulary areas.
- **Level Selection**: Three difficulty levels to challenge users:
  - **Level 1**: Translate Polish words to English using multiple-choice options.
  - **Level 2**: Translate English words to Polish using multiple-choice options.
  - **Level 3**: Translate Polish words to English by typing the answer.
- **Interactive Gameplay**: Immediate feedback on answers with visual cues.
- **Score Tracking**: Keep track of your progress throughout the game.
- **Navigation**: A responsive navbar with "Back" and "Home" buttons for easy navigation.
- **Progressive Web App (PWA)**: Install the app on your device and use it offline.

---

## Demo

Access the live version of the app:

[Live Demo](http://begerowiec.github.io/EnglishWordsReact/)

---

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/begerowiec/EnglishWordsReact.git
   cd YourRepositoryName
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Available Scripts

In the project directory, you can run:

- **`npm start`**

  Runs the app in development mode. The page will reload if you make edits.

- **`npm test`**

  Launches the test runner in interactive watch mode.

- **`npm run build`**

  Builds the app for production to the `build` folder.

- **`npm run deploy`**

  Deploys the app to GitHub Pages.

---

## Deployment

### GitHub Pages

To deploy the app to GitHub Pages:

1. **Set the `homepage` in `package.json`**

   ```json
   "homepage": "https://YourGitHubUsername.github.io/YourRepositoryName"
   ```

2. **Install `gh-pages`**

   ```bash
   npm install gh-pages --save-dev
   ```

3. **Add deployment scripts to `package.json`**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     // other scripts...
   }
   ```

4. **Deploy the app**

   ```bash
   npm run deploy
   ```

---

## PWA Features

This application is a Progressive Web App (PWA), which means:

- **Offline Support**: The app can function without an internet connection.
- **Installable**: Users can install the app on their devices.
- **Service Worker**: Assets are cached for improved performance.

### Testing PWA Locally

1. **Build the app**

   ```bash
   npm run build
   ```

2. **Serve the app locally**

   Install the `serve` package if you haven't:

   ```bash
   npm install -g serve
   ```

   Then run:

   ```bash
   serve -s build
   ```

3. **Access the app**

   Open [http://localhost:5000](http://localhost:5000) in your browser.

4. **Test offline functionality**

   - Open DevTools in your browser.
   - Go to the "Application" tab.
   - Under "Service Workers," check if the service worker is active.
   - Simulate offline mode and verify that the app still works.

---

## Usage

1. **Select a Category**

   On the home page, choose a category that you want to focus on.

2. **Choose a Difficulty Level**

   Select the level of difficulty:

   - **Level 1**: Polish to English (Multiple Choice)
   - **Level 2**: English to Polish (Multiple Choice)
   - **Level 3**: Polish to English (Type Answer)

3. **Start the Game**

   Begin the quiz and answer the questions presented.

4. **Receive Feedback**

   - **Correct Answer**: A green screen with "Correct Answer" will appear for 1.5 seconds.
   - **Incorrect Answer**: A red screen showing the correct answer and a "Next Question" button.

5. **Navigation**

   Use the navbar to go back or return to the home page at any time.

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**

2. **Create a new branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add your feature'
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **React**: A JavaScript library for building user interfaces.
- **Create React App**: For bootstrapping the project.
- **Bootstrap**: For styling and responsive design.
- **React Router**: For handling navigation.
- **React Transition Group**: For animations.

---

If you have any questions or need further assistance, feel free to open an issue or contact the maintainer.

**Happy Learning!**