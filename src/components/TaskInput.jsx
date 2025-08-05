import React from 'react';
import { Plus } from 'lucide-react';

const TaskInput = ({ value, onChange, onAdd }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAdd();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="flex-1 bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-white/25"
          autoFocus
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;