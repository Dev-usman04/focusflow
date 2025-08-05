import React from 'react';
import { Circle, CheckCircle } from 'lucide-react';
import TodoItem from './TodoItem';

const TaskSection = ({ 
  title, 
  type, 
  todos, 
  onToggle, 
  onDelete, 
  onTogglePriority 
}) => {
  const isActive = type === 'active';
  
  const sectionConfig = {
    active: {
      icon: Circle,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      badgeColor: 'bg-blue-500/20 text-blue-300',
      emptyIcon: '📝',
      emptyTitle: 'No active tasks registered',
      emptySubtitle: 'Add a task above to get started!'
    },
    completed: {
      icon: CheckCircle,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/20',
      badgeColor: 'bg-green-500/20 text-green-300',
      emptyIcon: '✅',
      emptyTitle: ' You have No completed tasks yet',
      emptySubtitle: 'Complete some of your tasks to see them here!'
    }
  };

  const config = sectionConfig[type];
  const IconComponent = config.icon;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4 animate-fade-in">
        <div className={`p-2 ${config.bgColor} rounded-lg`}>
          <IconComponent className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className={`${config.badgeColor} px-3 py-1 rounded-full text-sm font-medium`}>
          {todos.length}
        </div>
      </div>
      
      {/* Tasks List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-12 text-gray-400 animate-fade-in">
            <div className="text-6xl mb-4 opacity-50">{config.emptyIcon}</div>
            <div className="text-lg">{config.emptyTitle}</div>
            <div className="text-sm mt-2 opacity-70">{config.emptySubtitle}</div>
          </div>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onToggle={onToggle}
              onDelete={onDelete}
              onTogglePriority={onTogglePriority}
              showPriorityControl={isActive}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskSection;