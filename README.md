## 💡 Intro

The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

## Rules

### For a space that is populated:

- Each cell with one or no neighbors dies, as if by solitude.
- Each cell with four or more neighbors dies, as if by overpopulation.
- Each cell with two or three neighbors survives.

### For a space that is empty or unpopulated:

- Each cell with three neighbors becomes populated.

## ⚙️ Tech Stack

- React Native
- Expo

## 🔋 Features

👉 **Seed live:** You can generate random “live” cells by clicking the seed button.

👉 **Stop:** You can stop the game once it’s started.

👉 **Play/Pause:** You can run and pause the simulation.

👉 **Next Generation:** You can move step by step through generations.

👉 \*\*Reset: You can reset the board.

👉 **Manual seed:** You can manually seed “live” cells by tapping on the board.

## 🔋 Configuration

👉 **Speed**: You can configure the speed by changing the value in `config.ts`.

👉 **Number of Rows**: You can configure the number of rows by changing the value in `config.ts`.

👉 **Number of Columns**: You can configure the number of rows by changing the value in `config.ts`.

## 📝 To Do:

👉 **Customisations**: The user will be able to configure the speed, number of rows and columns, and the colors of the board.

👉 **Pre-defined templates**: This library includes a selection of pre-defined “live” cell templates for use in the game. Each template represents a classic pattern or structure that you can use to seed the game board.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/nikko-naydenov/game-of-life.git
cd game-of-life
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm start
```
