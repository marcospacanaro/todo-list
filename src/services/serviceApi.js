export function getTodoList() {
    return fetch('http://localhost:5000/data')
      .then(data => data.json())
  }

  export function postTodoTask(value) {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ value })
    }

    return fetch('http://localhost:5000/data', requestOptions)
      .then(data => data.json())
   }

   export function updateTodoTask(id, value) {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
  };
    fetch(`http://localhost:5000/data/${id}`, requestOptions)
    .then(data => data.json())

  }

  export function deleteTodoTask(id) {

    const requestOptions = {
      method: 'DELETE'
  };
    fetch(`http://localhost:5000/data/${id}`, requestOptions)
  }

