import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import withData from "./withData";
import EmptyList from "./EmptyList";
import ToDo from "../ToDo";

const ToDoList = ({ className, todos, toggleToDo, emptyLabel }) => (
  <ul className={className}>
    {todos.length === 0 ? (
      <EmptyList label={emptyLabel} />
    ) : (
      todos.map(todo => (
        <ToDo key={todo.id} {...todo} onClick={() => toggleToDo(todo.id)} />
      ))
    )}
  </ul>
);

ToDoList.propTypes = {
  className: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleToDo: PropTypes.func.isRequired,
  emptyLabel: PropTypes.string
};

export default styled(withData(ToDoList))`
  list-style: none;
  text-align: left;
`;
