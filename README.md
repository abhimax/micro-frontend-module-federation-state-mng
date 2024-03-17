# Micro Frontend State Sharing Methods Demo

This repository showcases a sample project demonstrating three distinct approaches to sharing state across micro frontends. It's designed to serve as an educational resource for developers interested in exploring different strategies for state management in a micro frontend architecture. Each example is contained within its own folder, allowing for easy comparison and experimentation.

## Concepts Demonstrated

1. **Simple Approach using Prop Drilling**: Located in the `simple` folder, this example demonstrates the basic technique of prop drilling to share state among micro frontends.
2. **Sharing State via Context API**: Found in the `use-context` folder, this method leverages React's Context API to provide a more streamlined way to pass state around.
3. **Shared Common Store using Redux Toolkit**: The `redux` folder contains an example that uses Redux Toolkit to manage a common store for state sharing among micro frontends.

## Project Structure

- `simple`: Contains two micro frontends, `host` and `nav`, demonstrating state sharing through prop drilling.
- `use-context`: Also features two micro frontends, `host` and `nav`, but utilizes the Context API for state management.
- `redux`: Includes three micro frontends, `host`, `nav`, and `store`, showcasing a common store approach using Redux Toolkit.

All micro frontend projects were scaffolded using `create-mf-app` and employ CSS Modules for styling.

## Getting Started

To get the app running or to build it, you'll need to have npm installed on your machine. Follow the steps below for both running and building the app. Do do that you need to check locate ech of micro fronted apps like host, nav etc..

### Installation

First, clone the repository and navigate to the project's root directory. Then, install the dependencies:

```bash
npm install
```
### Running the App
```bash
npm run start
```
This command will launch the application. Depending on the example you wish to run, navigate to the respective folder (simple, use-context, redux) to see the implementation in action.