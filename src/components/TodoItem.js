import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo

        return (
            <div style= { this.getStyle() }>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}></input> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    border: 'non',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    float: 'right',
    padding: '5px 9px'
}

export default TodoItem
