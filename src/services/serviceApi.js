export function getTodoList() {
    return fetch('http://localhost:5000/data')
      .then(data => data.json())
  }