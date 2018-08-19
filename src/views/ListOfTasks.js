import React from "react"
import { connect } from "react-redux"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import Task from "./Task"
import { ListItem } from "material-ui/List"
import {addTaskAction, handleChangeAction} from '../state/tasks'


const listOfTasks = (props) => (
  <div>
    <div>
      <TextField 
      onChange={(value) => props._handleChangeAction(value)}
      placeholder={'Enter new task here'}
      type='text'
      value = {props._task}
      fullWidth={true}
      />
      <RaisedButton 
            onClick={props._addTaskAction} 
            label="Add task" 
            primary={true}
            fullWidth={true} />
    </div>
  </div>
)
