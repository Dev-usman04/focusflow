import React from 'react';
import { Check, Star, Trash2, Calendar, CheckCircle } from 'lucide-react';
import { formatDateTime } from '../utils/dateUtils';

const TodoItem = ({ 
  todo, 
  index, 
  onToggle, 
  onDelete, 
  onTogglePriority, 
  showPriorityControl = true 
}) => {
  return (
    <div
      className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:bg-white/15 animate-slide-in ${
        todo.completed ? 'opacity-90' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="flex items-start gap-4">
        {/* Completion Toggle */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-400 hover:border-green-400 hover:bg-green-400/20'
          }`}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <Check className="w-4 h-4 animate-bounce-in" />}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          {/* Task Text */}
          <div className={`text-white text-lg mb-2 transition-all duration-300 break-words ${
            todo.completed ? 'line-through opacity-60' : ''
          }`}>
            {todo.text}
          </div>
          
          {/* Timestamps */}
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2 text-blue-300/80">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span>Created: {formatDateTime(todo.createdAt)}</span>
            </div>
            
            {todo.completed && todo.completedAt && (
              <div className="flex items-center gap-2 text-green-300/80">
                <CheckCircle className="w-3 h-3 flex-shrink-0" />
                <span>Completed: {formatDateTime(todo.completedAt)}</span>
              </div>
            )}
          </div>

          {/* Priority Badge */}
          {todo.priority && (
            <div className="mt-2 flex items-center gap-2 text-yellow-400 text-sm animate-pulse">
              <Star className="w-3 h-3 fill-current" />
              High Priority
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Priority Toggle (only for active tasks) */}
          {showPriorityControl && !todo.completed && (
            <button
              onClick={() => onTogglePriority(todo.id)}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                todo.priority
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
              }`}
              aria-label={todo.priority ? 'Remove priority' : 'Mark as priority'}
            >
              <Star className={`w-4 h-4 ${todo.priority ? 'fill-current' : ''}`} />
            </button>
          )}

          {/* Delete Button */}
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-400/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Delete task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;