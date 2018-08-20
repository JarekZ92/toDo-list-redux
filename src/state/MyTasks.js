const ADD_TASK = "tasks/ADD_TASK";
const SET_TASK = "tasks/SET_TASK";
const REMOVE_TASK = "tasks/REMOVE_TASK";
const HANDLE_CHANGE = "tasks/HANDLE_CHANGE";
const TASKS_STARTED_LOADING = "tasks/TASKS_STARTED_LOADING";
const TASKS_STOPPED_LOADING = "tasks/TASKS_STOPPED_LOADING";

export const addTaskAction = value => ({ type: ADD_TASK, value });
export const setTasksAction = data => ({ type: SET_TASK, data });
export const removeTasksAction = (uuid) => ({ type: REMOVE_TASK, uuid });
export const handleChangeAction = (event) => ({
  type: HANDLE_CHANGE,
  text: event.target.value
});
export const tasksStartedLoadingAction = () => ({
  type: TASKS_STARTED_LOADING
});
export const tasksStoppedLoadingAction = () => ({
  type: TASKS_STOPPED_LOADING
});

const initialState = {
  tasks: [],
  text: '',
  isTasksAreLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat({
          taskName: state.text,
          uuid: Date.now(),
        })
      };
    case SET_TASK:
      return {
        ...state,
        tasks: action.data
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.uuid !== action.uuid
        })
      };
    case TASKS_STARTED_LOADING:
      return {
        ...state,
        isTasksAreLoading: true
      };
    case TASKS_STOPPED_LOADING:
      return {
        ...state,
        isTasksAreLoading: false
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
