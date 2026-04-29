import './App.css'
import {useEffect, useState} from "react";
import TodoCard from "./components/TodoCard.jsx";

function App() {
const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(null)
const [error, setError] = useState(null)

    useEffect((todos) => (
    .fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> response.json)
        .then((data)=> setTodo((data)))
        .catch((error)=> console.log(error.message))
  ))

    if(loading) return <p>Loading...</p>
  return <div>
      {todos.map((todo) => {
          <TodoCard key = {todo.id}/>
      })}
  </div>
}

export default App
