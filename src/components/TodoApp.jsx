import React, { useState } from 'react';
import Header from './Header';
import StatsBar from './StatsBar';
import TaskInput from './TaskInput';
import TaskSection from './TaskSection';
import AnimatedBackground from './AnimatedBackground';
import { formatDateTime } from '../utils/dateUtils';
import { sortTodos, filterTodos } from '../utils/todoUtils';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // function to Add a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        priority: false,
        createdAt: new Date().toISOString(),
        completedAt: null
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { 
        ...todo, 
        completed: !todo.completed,
        completedAt: !todo.completed ? new Date().toISOString() : null
      } : todo
    ));
  };

  // Toggle priority
  const togglePriority = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, priority: !todo.priority } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // function to Separate and sort todos
  const activeTodos = sortTodos(filterTodos(todos, 'active'));
  const completedTodos = sortTodos(filterTodos(todos, 'completed'));

  const stats = {
    total: todos.length,
    active: activeTodos.length,
    completed: completedTodos.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Header />
        <StatsBar stats={stats} />
        <TaskInput 
          value={inputValue}
          onChange={setInputValue}
          onAdd={addTodo}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TaskSection
            title="Active Tasks"
            type="active"
            todos={activeTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onTogglePriority={togglePriority}
          />
          
          <TaskSection
            title="Completed Tasks"
            type="completed"
            todos={completedTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onTogglePriority={togglePriority}
          />
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="text-center mt-12 text-gray-400 text-sm animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span>Progress Tracking Enabled</span>
            </div>
            <div>
              {stats.completed} of {stats.total} tasks completed
              {stats.completed > 0 && stats.total > 0 && (
                <span className="ml-2 text-green-400">
                  ({Math.round((stats.completed / stats.total) * 100)}%)
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;