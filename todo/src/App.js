import React from "react"
import TodoItem from "./components/TodoItem"
import todolist from "./todoDatas"


// fat arrow function/lambda function(one way to define the function)
// const App = () => {
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todolist
        }
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleCheck(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render(){
        const TodoComponent = this.state.todos.map(list=>
                                                    <TodoItem key={list.id}
                                                        todos={list}
                                                        handleCheck={this.handleCheck}
                                                    />
                                                    )
        const styles = {
                        fontSize:"30px",
                        textAlign:"center"
                    }
        return(
                <div className="checkboxContainer">
                    <h3 style={styles}> Todo List</h3>
                    {TodoComponent}
                </div>
            )
        }
    }


export default App
