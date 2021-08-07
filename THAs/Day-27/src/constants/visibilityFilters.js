const visibilityFilters = [
  {
    filter: "SHOW_ALL",
    label: "All",
    isVisible: todos => todos,
    emptyLabel: "Yay! You have nothing to do!"
  },
  {
    filter: "SHOW_COMPLETED",
    label: "Completed",
    isVisible: todos => todos.filter(todo => todo.completed),
    emptyLabel: "Well done! You've completed all tasks!"
  },
  {
    filter: "SHOW_ACTIVE",
    label: "Active",
    isVisible: todos => todos.filter(todo => !todo.completed),
    emptyLabel: "Nice! No active ToDos!"
  }
];

export default visibilityFilters;
