import React, {useState, useEffect} from 'react'
import { getTodoList } from '../services/serviceApi';
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodoList()
          .then(data => 
          setTodos(data)
        )
      }, [])

   
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
       }

       setTodos(prev => prev.map(item => (item.id == todoId ? newValue : item)))
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
            <TodoForm />
            <Todo todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
