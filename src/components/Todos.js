import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    markComplete = () => {
        console.log('Hello')
    }

	render() {
		return this.props.todos.map((todoItem) => (
            <TodoItem key={todoItem.id} todo={todoItem} 
            markComplete={this.props.markComplete} editTodo={this.props.editTodo} delTodo={this.props.delTodo}/>
        ));
	}
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos
