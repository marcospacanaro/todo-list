import React, {useState, useEffect} from 'react'
import { getTodoList } from '../services/serviceApi';
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [updateList, setUpdateList] = useState(0)

    useEffect(() => {
        getTodoList()
          .then(data => 
          setTodos(data)
        )
      }, [updateList])

    const updateTodo = () => {
        setUpdateList(updateList + 1)
    }

    const removeTodo = id => { 
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
 
    return (
        <div>
            <h1>Quais os planos para hoje?</h1>
            <TodoForm todos={todos} updateTodo={updateTodo} />
            <Todo 
                todos={todos}
                setTodos={setTodos}
                completeTodo={completeTodo} 
                removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList
