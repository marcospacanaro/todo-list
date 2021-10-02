import React, {useState} from 'react';
import { postTodoTask, updateTodoTask } from '../services/serviceApi';

function TodoForm(props) {
    
    const [input, setInput] = useState(props.edit.value);
    
    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (props.edit.id) {
            updateTodoTask(props.edit.id, input)
        } else {
            postTodoTask(input)
        }

        setInput('')
        props.setEdit({
            id: null,
            value: ''
        });
        props.updateTodo();
    };

    const validateInput = (value) => {
        if(!value || /^\s*$/.test(value)) {
            return true;
       } else {
           return false;
       }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

        {props.edit.id ? (
            <>
            <input type="text" 
             placeholder="Editar uma tarefa" 
             value={input} 
             name="text" 
             className="todo-input edit"
             onChange={handleChange}
            />
             <button className="todo-button edit" disabled={validateInput(input)}>Editar</button>
             </>
             ) :
             
            (
                <>
                <input type="text" 
             placeholder="Adicionar uma tarefa" 
             value={input} 
             name="text" 
             className="todo-input"
             onChange={handleChange}
            />
             <button className="todo-button" disabled={validateInput(input)}>Adicionar</button>
             </>
            )
             
             }
        </form>
    )
}

export default TodoForm
