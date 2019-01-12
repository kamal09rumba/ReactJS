import React from "react"

// fat arrow function/lambda function(one way to define the function)
const TodoItem = (props) => {
        const id = props.todos.completed ? 'completed-tasks' : ''
        return (
            <ul>
                <li id={id}>
                    <input type="checkbox" className="checkbox"
                    checked={props.todos.completed}
                    onChange={() => props.handleCheck(props.todos.id)}
                    />
                    <label>{props.todos.item}</label>
                </li>
            </ul>
            )
    }

export default TodoItem
