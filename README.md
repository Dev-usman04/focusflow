# FocusFlow - Task Management Application

FocusFlow is a modern, responsive task management application built with React and styled with Tailwind CSS. It provides an intuitive and visually appealing interface for managing daily tasks with advanced features and smooth animations.

## Features

- **Task Management**
  - Create, complete, and delete tasks
  - Priority marking system
  - Separate sections for active and completed tasks
  - Real-time task statistics tracking

- **User Interface**
  - Modern, minimalist design
  - Animated background with floating orbs
  - Smooth transitions and animations
  - Responsive layout for all devices
  - Glass-morphism effect for components

- **Task Organization**
  - Priority-based task sorting
  - Timestamp tracking for creation and completion
  - Progress tracking with completion percentage
  - Task filtering system

- **Accessibility**
  - Reduced motion support
  - High contrast mode compatibility
  - Keyboard navigation
  - Screen reader friendly

## Technical Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Animations**: Custom CSS animations
- **State Management**: React Hooks
- **Code Quality**: ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Run the development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Key Components

- `TodoApp`: Main application container
- `TaskInput`: New task creation interface
- `TaskSection`: Manages task lists and empty states
- `TodoItem`: Individual task component with actions
- `StatsBar`: Displays task statistics
- `AnimatedBackground`: Creates dynamic visual effects

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx
│   ├── Header.jsx
│   ├── StatsBar.jsx
│   ├── TaskInput.jsx
│   ├── TaskSection.jsx
│   ├── TodoApp.jsx
│   └── TodoItem.jsx
├── utils/
│   ├── dateUtils.js
│   └── todoUtils.js
└── styles/
    └── animations.css
```

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]