import React from 'react';
import TodoApp from './components/TodoApp';
import './styles/animations.css';


function App() {
  return (
    <div className="App">
      
      <style jsx global>{`
        /* Custom Animations for TodoZen App */
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slide-in {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes bounce-in {
          0% { 
            transform: scale(0); 
          }
          50% { 
            transform: scale(1.2); 
          }
          100% { 
            transform: scale(1); 
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Responsive animations - reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <TodoApp />
    </div>
  );
}

export default App;