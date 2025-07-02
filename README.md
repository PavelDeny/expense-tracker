# 💰 Expense Tracker

A simple expense tracker built with **TypeScript**, **SCSS**, and **LocalStorage**.  
This project is perfect for practicing DOM manipulation, forms, typing in TypeScript, and persistent storage in the browser.

## 🔍 Project Overview

Users can input and track their expenses by providing a name and amount.  
Each expense is saved to the browser's `localStorage` and displayed in a list with the total sum.  
Individual expenses can also be deleted.

## 🛠 Tech Stack

- ⚙️ **TypeScript** — for type-safe logic and working with the DOM  
- 🎨 **SCSS** — for styling with variables, nesting, and cleaner structure  
- 💾 **LocalStorage** — to persist data across sessions  
- ⚡ **Vite** — for fast development and bundling

## ✨ Features

- Add a new expense (name + amount)
- Save data to `localStorage`
- Display a list of expenses
- Calculate and show total expenses
- Delete individual expenses

## 📁 Project Structure

expense-tracker/
├── index.html # Basic HTML layout
├── styles.scss # SCSS styles (compiled to styles.css)
├── main.ts # Main TypeScript logic
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
├── package.json # Project metadata and scripts

bash
Copy
Edit

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

🧱 Build for production
bash
Copy
Edit
npm run build
The output will be in the dist/ folder.

🎯 Learning Goals
Practice basic TypeScript syntax and typing

Work with HTML forms and events

Learn DOM manipulation in TypeScript

Explore SCSS features and styling organization

Use LocalStorage for data persistence

Understand basic project structure with Vite


