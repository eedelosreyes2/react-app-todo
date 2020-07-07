import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditableLabel from 'react-inline-editing'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px ccc dotted',
            display: 'flex',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo
        const labelStyle = completed ? 'labelCmp' : 'label'

        return (
            <div style={ this.getStyle() }>
                <input className='checkboxStyle' type='checkbox' onChange={this.props.markComplete.bind(this, id)}></input> {' '}
                <EditableLabel
                    text={title}
                    labelClassName={labelStyle}
                    inputClassName='inputStyle'
                />
                <button className='delBtn' onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
