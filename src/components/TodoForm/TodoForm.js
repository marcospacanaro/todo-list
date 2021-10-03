import React from 'react'
import { postTodoTask, updateTodoTask } from '../../services/serviceApi'
import './TodoForm.css'

function TodoForm(props) {
    const handleChange = (e) => {
        props.setEdit({ id: props.edit.id, value: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (props.edit.id) {
            updateTodoTask(props.edit.id, props.edit.value)
        } else {
            postTodoTask(props.edit.value)
        }

        props.setEdit({
            id: null,
            value: '',
        })
        props.updateTodo()
    }

    const validateInput = (value) => {
        if (!value || /^\s*$/.test(value)) {
            return true
        } else {
            return false
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit.id ? (
                <>
                    <input
                        type="text"
                        placeholder="Editar uma tarefa"
                        value={props.edit.value}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                    />
                    <button
                        className="todo-button edit"
                        disabled={validateInput(props.edit.value)}
                    >
                        Editar
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Adicionar uma tarefa"
                        value={props.edit.value}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                    />
                    <button
                        className="todo-button"
                        disabled={validateInput(props.edit.value)}
                    >
                        Adicionar
                    </button>
                </>
            )}
        </form>
    )
}

export default TodoForm
