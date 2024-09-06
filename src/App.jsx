import { useState, useEffect } from "react"
import TodoInput from "./components/ToDoInput.jsx"
import TodoList from "./components/TodoList.jsx"

function App() {

  const [todos, setTodos] = useState([
  ]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({
      todos:newList
    }))
  }
  function handleAddTodos(newTodo){
    const newTodos = [...todos, newTodo];
    persistData(newTodos)
    setTodos(newTodos);
  } 
  function handleDeleteTodo(index){
    const newTodos = todos.filter((todo, indx)=>{
      return indx !==index
    });
    persistData(newTodos)
    setTodos(newTodos);
  } 
  function handleEditTodo(index){
    const ValueToEdit = todos[index];
    setTodoValue(ValueToEdit);
    handleDeleteTodo(index)
  } 

  useEffect(()=>{
    if(!localStorage){
      return
    }
    
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  },[])
  
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList  handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
    </>
  )
}

export default App
