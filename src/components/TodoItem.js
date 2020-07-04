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

    markComplete = (e) => {

    }

    render() {
        return (
            <div style= { this.getStyle() }>
                <p>
                    <input type='checkbox' onChange={ this.markComplete }></input> {' '}
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
