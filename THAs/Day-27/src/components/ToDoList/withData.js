import { connect } from "react-redux";
import { toggleToDo } from "../../actions/todos";
import visibilityFilters from "../../constants/visibilityFilters";

export default connect(
  state => {
    const activeFilter = visibilityFilters.find(
      f => f.filter === state.activeFilter
    );

    return {
      todos: activeFilter.isVisible(state.todos),
      emptyLabel: activeFilter.emptyLabel
    };
  },
  {
    toggleToDo: id => toggleToDo(id)
  }
);
