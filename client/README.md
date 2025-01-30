# Flies Drive

Flies Drive is a file management application built with React, TypeScript, and Vite. It provides a user-friendly interface for managing files, including features like dark mode, charts for storage usage, and more.

## Features

- **Dark Mode Toggle**: Easily switch between light and dark modes.
- **File Management**: Manage files with different categories like Images, Videos, Audios, and Documents.
- **Charts**: Visualize storage usage with area charts.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/flies-drive.git
cd flies-drive
npm install
```

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server and you can view the application at `http://localhost:3000`.

## Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the production build of the application.

## ESLint Configuration

The project uses ESLint for code linting. The configuration is set up to work with TypeScript and React.

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## License

This project is licensed under the MIT License.
