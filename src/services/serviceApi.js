export function getTodoList() {
    return fetch('http://localhost:5000/data')
      .then(data => data.json())
  }

  export function postTodoList(value) {
    return fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value })
    })
      .then(data => data.json())
   }

