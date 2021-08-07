import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../../actions/todos";
import { PrimaryButton } from "../core/Buttons";
import { Input } from "../core/FormControls";
import { FormInline, InlineFormGroup } from "../core/FormInline";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <FormInline
      className="mb-16"
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = "";
      }}
    >
      <InlineFormGroup>
        <Input ref={node => (input = node)} />
      </InlineFormGroup>
      <PrimaryButton className="ml-8" type="submit">
        Add ToDo
      </PrimaryButton>
    </FormInline>
  );
};

export default connect()(AddTodo);
