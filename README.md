# NLW Agents - React Web Application

This project is a React-based web application developed during the Rocketseat event **NLW Agents**. The application
allows users to create rooms, ask questions, and record audio messages, leveraging modern web technologies and best
practices.

## Project Overview

- **Create and join rooms** for interactive Q&A sessions.
- **Ask questions** and receive answers powered by AI.
- **Record and upload audio** messages directly from the browser.
- Built with a focus on usability, performance, and modern UI.

## Packages Used

- **react** / **react-dom**: Core libraries for building user interfaces.
- **react-router-dom**: Routing and navigation between pages.
- **@tanstack/react-query**: Data fetching and state management.
- **lucide-react**: Icon library for modern UI icons.
- **@hookform/resolvers**, **react-hook-form**: Form management and validation.
- **zod**: Schema validation for forms and data.
- **@radix-ui/react-label**, **@radix-ui/react-slot**: Accessible UI primitives.
- **tailwindcss**, **@tailwindcss/vite**, **tailwind-merge**: Utility-first CSS framework and helpers.
- **class-variance-authority**, **clsx**: Conditional class name utilities.
- **dayjs**: Date and time manipulation.
- **vite**: Fast development server and build tool.
- **typescript**: Type safety and developer tooling.

## Scripts

| Script    | Description                         |
|-----------|-------------------------------------|
| `dev`     | Start the development server (Vite) |
| `build`   | Build the project for production    |
| `preview` | Preview the production build        |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NicolasLOrtiz/NLW-Agents-React.git
   cd NLW-Agents-React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

- **Development mode:**
  ```bash
  npm run dev
  ```
  The app will be available at `http://localhost:5173` (or as indicated in the terminal).

- **Production build:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

## Usage

1. **Create a room** on the homepage.
2. **Share the room link** with others to join.
3. **Ask questions** via text or record audio messages.
4. **Interact with AI-powered answers** in real time.

## About NLW Agents

This project was developed as part of the **NLW Agents** event by [Rocketseat](https://rocketseat.com.br/), focusing on
building modern, interactive web applications with React and TypeScript.

---

Feel free to contribute or adapt this project for your own learning and development!
