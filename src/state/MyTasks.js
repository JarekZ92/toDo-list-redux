const ADD_TASK = "tasks/ADD_TASK";
const SET_TASK = "tasks/SET_TASK";
const REMOVE_TASK = "tasks/REMOVE_TASK";

export const addTaskAction = value => ({ type: ADD_TASK, value })
export const setTasksAction = data => ({ type: SET_TASK, data })
export const removeTasksAction = () => ({ type: REMOVE_TASK })


const initialState ={
    tasks: [],
    text: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
        return {
            ...state,
            tasks: state.tasks.concat({
                taskName: state.text,
                uuid: Date.now()
            })
        }
        case SET_TASK:
        return {
            ...state,
            tasks: action.data
    }
        case REMOVE_TASK:
        return {
        ...state,
        tasks: action.data
    }
    default:
    return state
    }
}