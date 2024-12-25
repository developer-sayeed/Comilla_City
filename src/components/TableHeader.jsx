/* eslint-disable react/prop-types */

import AddTaskModal from "./Modal/AddTaskModal";
import { useTaskContext } from "../context/TaskContext";
import {
  EDIT_TASK,
  MODAL_CLOSE,
  MODAL_OPEN,
  REMOVE_ALL_TASK,
  SEARCH_TASK,
} from "../reducer/ActionType";
import { createtoast } from "../utils/Toastify";

const TableHeader = () => {
  const { state, dispatch } = useTaskContext();

  // Deleter All Data
  const RemoveAllTask = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete All data?"
    );

    if (shouldDelete) {
      dispatch({
        type: REMOVE_ALL_TASK,
      });
      createtoast("All Task Delete Success", "success");
    } else {
      createtoast("Your Data Is Safe", "info");
    }
  };

  // Handle Serch
  // const handleSearchChange = (event) => {
  //   event.preventDefault();
  //   dispatch({
  //     type: SEARCH_TASK,
  //     payload: event.target.value,
  //   });
  // };

  //  Handle Modal

  const handleModalShow = () => {
    dispatch({
      type: MODAL_OPEN,
    });
  };
  // Handle Modal CLose
  const handleModalClose = () => {
    dispatch({
      type: MODAL_CLOSE,
    });
    dispatch({
      type: EDIT_TASK,
      payload: {},
    });
  };

  // Onserch Task Value

  const onSearchHandler = (e) => {
    const value = e.target.value;

    if (!value) {
      dispatch({
        type: SEARCH_TASK,
        payload: "",
      });
    }
    dispatch({
      type: SEARCH_TASK,
      payload: value,
    });
  };
  return (
    <>
      {state.modal && <AddTaskModal onClose={handleModalClose} />}
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <form>
            <div className="flex">
              <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none  disabled:bg-gray-500 disabled:cursor-not-allowed"
                  placeholder="Search Task"
                  required=""
                  onChange={(e) => onSearchHandler(e)}
                  disabled={state.data.length === 0}
                />
                <button
                  type="button"
                  className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4 "
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only ">Search</span>
                </button>
              </div>
            </div>
          </form>
          <button
            onClick={handleModalShow}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <button
            onClick={RemoveAllTask}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold disabled:cursor-not-allowed disabled:bg-gray-500"
            disabled={state.data.length === 0}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};
export default TableHeader;
