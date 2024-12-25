import { useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import {
  ADD_TASK,
  EDIT_FINAL_TASK,
  MODAL_CLOSE,
} from "../../reducer/ActionType";
import { createtoast } from "../../utils/Toastify";

/* eslint-disable react/prop-types */
const AddTaskModal = ({ onClose }) => {
  const { state, dispatch } = useTaskContext();

  const [Validation, setValidation] = useState({});

  const [input, setInput] = useState(state.editTask || {});

  // Form Validation
  const formValidation = () => {
    let errors = {};

    if (!input.title) {
      errors.title = "Please enter a title";
    }
    if (!input.description) {
      errors.description = "Please Write Task description";
    }
    if (!input.priority) {
      errors.priority = "Please Select priority Level";
    }
    setValidation(errors);
    return Object.keys(errors).length === 0;
  };

  // Add New Task
  const handleNewTask = (e) => {
    e.preventDefault();
    if (formValidation()) {
      dispatch({
        type: ADD_TASK,
        payload: { ...input, id: crypto.randomUUID() },
      });
      dispatch({
        type: MODAL_CLOSE,
      });
      createtoast("Add New Task", "success");
    } else {
      createtoast("All Filed Are Required", "warn");
    }
  };

  // Handle Input Change

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setInput({ ...input, [e.target.name]: value });
  };

  // Update Task Data
  const updateTaskData = (e) => {
    e.preventDefault();
    if (formValidation()) {
      dispatch({
        type: EDIT_FINAL_TASK,
        payload: input,
        id: state.editTask.id,
      });
      dispatch({
        type: MODAL_CLOSE,
      });
      createtoast("Update Data Success", "success");
    } else {
      createtoast("All Filed Are Required", "warn");
    }
  };

  return (
    <>
      {/* Add Task Form */}
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto no-scrollbar">
          <form
            onSubmit={state.editTask.id ? updateTaskData : handleNewTask}
            className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
          >
            <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
              {state.editTask.id ? "Update Task" : "Add New Task"}
            </h2>
            {/* inputs */}
            <div className="space-y-9 text-white lg:space-y-10">
              {/* title */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="title">Title</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="title"
                  id="title"
                  value={input.title}
                  onChange={handleChange}
                />
                {Validation.title && (
                  <p className="text-red-700">{Validation.title}</p>
                )}
              </div>
              {/* description */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                  type="text"
                  name="description"
                  id="description"
                  value={input.description}
                  onChange={handleChange}
                />
                {Validation.description && (
                  <p className="text-red-700">{Validation.description}</p>
                )}
              </div>
              {/* input group */}
              <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                {/* tags */}
                <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="tags">Tags</label>
                  <input
                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                    type="text"
                    name="tags"
                    id="tags"
                    value={input.tags}
                    onChange={handleChange}
                  />
                </div>
                {/* priority */}
                <div className="space-y-2 lg:space-y-3">
                  <label htmlFor="priority">Priority</label>
                  <select
                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                    name="priority"
                    id="priority"
                    value={input.priority}
                    onChange={handleChange}
                  >
                    <option selected>Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  {Validation.priority && (
                    <p className="text-red-700">{Validation.priority}</p>
                  )}
                </div>
              </div>
            </div>
            {/* inputs ends */}
            <div className="mt-16 flex lg:mt-20 justify-between">
              <button
                onClick={onClose}
                className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
              >
                Close
              </button>
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {state.editTask.id ? "Update" : "Create new Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Add Task Form Ends */}
    </>
  );
};
export default AddTaskModal;
