import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Delete from "material-ui/svg-icons/action/delete";
import { ListItem } from 'material-ui/List'
import Paper from "material-ui/Paper";
import {
  addTaskAction,
  handleChangeAction,
  removeTasksAction
} from "../state/MyTasks";

const styles = {
  margin: "20px",
  padding: "20px"
};

const listOfTasks = (props) => (
  <div>
    <Paper style={styles}>
      <TextField
        onChange={value => props._handleChangeAction(value)}
        placeholder={"Enter new task here"}
        type="text"
        value={props._task}
        fullWidth={true}
      />
      <RaisedButton
        onClick={props._addTaskAction}
        label="Add task"
        primary={true}
        fullWidth={true}
        />
    </Paper>
    <Paper style={styles}>
      {
        props._isTasksAreLoading ?
        'Loading tasks, please wait for a moment'
        :
        props._tasks.map((task, uid) => (
            <ListItem 
            key={uid}
            rightIcon={<Delete onClick={()=> props._removeTasksAction(task.uid)}/>}
            >
            {task.taskName} 
            </ListItem>
        ))
      }
    </Paper>
  </div>
);

const mapStateToProps = state => ({
  _tasks: state.tasks.tasks,
  _isTasksAreLoading: state.tasks.isTasksAreLoading
});

const mapDispatchToProps = dispatch => ({
  _addTasksAction: () => dispatch(addTaskAction()),
  _handleChangeAction: (value) => dispatch(handleChangeAction(value)),
  _removeTasksAction: (uuid) => dispatch(removeTasksAction(uuid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listOfTasks);
