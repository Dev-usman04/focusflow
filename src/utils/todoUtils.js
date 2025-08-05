/**
 * Filter todos by completion status
 * @param {Array} todos - Array of todo objects
 * @param {string} filter - Filter type: 'all', 'active', 'completed'
 * @returns {Array} Filtered todos
 */
export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'all':
    default:
      return todos;
  }
};

/**
 * Sort todos based on their status and properties
 * @param {Array} todos - Array of todo objects
 * @returns {Array} Sorted todos
 */
export const sortTodos = (todos) => {
  if (todos.length === 0) return todos;
  
  // Check if todos are active or completed based on first item
  const isActive = !todos[0].completed;
  
  if (isActive) {
    // For active todos: Priority first, then by creation date (newest first)
    return todos.sort((a, b) => {
      // Priority takes precedence
      if (a.priority && !b.priority) return -1;
      if (!a.priority && b.priority) return 1;
      
      // Then sort by creation date (newest first)
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  } else {
    // For completed todos: Most recently completed first
    return todos.sort((a, b) => {
      return new Date(b.completedAt) - new Date(a.completedAt);
    });
  }
};

/**
 * Get todo statistics
 * @param {Array} todos - Array of todo objects
 * @returns {Object} Statistics object
 */
export const getTodoStats = (todos) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return {
    total,
    active,
    completed,
    completionPercentage
  };
};

/**
 * Validate todo text
 * @param {string} text 
 * @returns {Object} 
 */
export const validateTodoText = (text) => {
  const trimmedText = text.trim();
  
  if (!trimmedText) {
    return {
      isValid: false,
      error: 'Task text cannot be empty'
    };
  }
  
  if (trimmedText.length > 500) {
    return {
      isValid: false,
      error: 'Task text must be less than 500 characters'
    };
  }
  
  return {
    isValid: true,
    text: trimmedText
  };
};

/**
 * Create a new todo object
 * @param {string} text 
 * @returns {Object} 
 */
export const createTodo = (text) => {
  const validation = validateTodoText(text);
  
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  return {
    id: Date.now() + Math.random(), // Ensure uniqueness
    text: validation.text,
    completed: false,
    priority: false,
    createdAt: new Date().toISOString(),
    completedAt: null
  };
};

/**
 * Toggle todo completion status
 * @param {Object} todo 
 * @returns {Object} 
 */
export const toggleTodoCompletion = (todo) => {
  return {
    ...todo,
    completed: !todo.completed,
    completedAt: !todo.completed ? new Date().toISOString() : null
  };
};

/**
 * Toggle todo priority status
 * @param {Object} todo 
 * @returns {Object} 
 */
export const toggleTodoPriority = (todo) => {
  return {
    ...todo,
    priority: !todo.priority
  };
};

/**
 * Search todos by text
 * @param {Array} todos 
 * @param {string} searchTerm 
 * @returns {Array} 
 */
export const searchTodos = (todos, searchTerm) => {
  if (!searchTerm.trim()) return todos;
  
  const term = searchTerm.toLowerCase().trim();
  return todos.filter(todo => 
    todo.text.toLowerCase().includes(term)
  );
};