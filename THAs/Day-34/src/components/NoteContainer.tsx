import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddNote, DeleteNote } from "../actions";
import { reducerType } from "../reducers";
import "../style.css";
const NoteContainer = () => {
  const [input, setInput] = useState<string>("");

  const notes: string[] = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="input_first">
        <input
          className="px-2 input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="btn"
          onClick={() => {
            if (input !== "") {
              dispatch(AddNote(input));
              setInput("");
            }
          }}
        >
          Add
        </button>
      </div>
      <ul className="label">
        {notes.length === 0 ? (
          <h2>Add Notes Here</h2>
        ) : (
          notes.map((note: string, index: number) => (
            <li key={index}>
              <h3>
                {note}{" "}
                <button
                  className="btn1"
                  onClick={() => {
                    dispatch(DeleteNote(index));
                  }}
                >
                  Delete
                </button>{" "}
              </h3>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NoteContainer;
