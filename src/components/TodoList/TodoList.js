import React, { useState, useEffect } from 'react'
import { getTodoList } from '../../services/serviceApi'
import Todo from '../Todo/Todo'
import TodoForm from '../TodoForm/TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [updateList, setUpdateList] = useState(0)
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    useEffect(() => {
        getTodoList().then((data) => setTodos(data))
    }, [updateList])

    const updateTodo = () => {
        setUpdateList(updateList + 1)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Quais os planos para hoje?</h1>
            <TodoForm
                todos={todos}
                updateTodo={updateTodo}
                edit={edit}
                setEdit={setEdit}
            />
            <Todo
                todos={todos}
                setTodos={setTodos}
                setEdit={setEdit}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
