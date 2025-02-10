import React, { useEffect, useState } from 'react';
import service from './service.js';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const todos = await service.getTasks();
    setTodos(todos);
  }

  async function createTodo(e) {
    e.preventDefault();
    await service.addTask(newTodo);
    setNewTodo("");//clear input
    await getTodos();//refresh tasks list (in order to see the new one)
  }

  async function updateCompleted(todo, isComplete) {
    await service.setCompleted(todo.id, isComplete, todo.name);
    await getTodos();//refresh tasks list (in order to see the updated one)
  }

  async function deleteTodo(id) {
    await service.deleteTask(id);
    await getTodos();//refresh tasks list
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>My todos</h1>
        <form onSubmit={createTodo}>
          <input className="new-todo" placeholder="Well, my tasks for today" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </form>
      </header>
      <section className="main" style={{ display: "block" }}>
        <ul className="todo-list">
          {todos.map(todo => {
            return (
              <li className={todo.isComplete ? "completed" : ""} key={todo.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked={todo.isComplete} onChange={(e) => updateCompleted(todo, e.target.checked)} />
                  <label>{todo.name}</label>
                  <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section >
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import service from './service.js';
// import Login from './Login'; 
// import SignUp from './SignUp'; 
// import Home from './Home';  // הוספת הקומפוננטה Home
// import axiosInstance from './axiosInstance'; // הנחתנו שיש לך את האינטרצפטור כאן

// function App() {
//     const [newTodo, setNewTodo] = useState("");
//     const [todos, setTodos] = useState([]);

//     async function getTodos() {
//         const todos = await service.getTasks();
//         setTodos(todos);
//     }

//     async function createTodo(e) {
//         e.preventDefault();
//         await service.addTask(newTodo);
//         setNewTodo(""); 
//         await getTodos(); 
//     }

//     async function updateCompleted(todo, isComplete) {
//         await service.setCompleted(todo.id, isComplete, todo.name);
//         await getTodos(); 
//     }

//     async function deleteTodo(id) {
//         await service.deleteTask(id);
//         await getTodos(); 
//     }

//     useEffect(() => {
//         getTodos();
//     }, []);

//     const isAuthenticated = () => {
//         return !!localStorage.getItem('token'); 
//     };

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/" element={<Home />} />  // דף הבית
//                 <Route path="/tasks" element={isAuthenticated() ? (
//                     <section className="todoapp">
//                         <header className="header">
//                             <h1>My todos</h1>
//                             <form onSubmit={createTodo}>
//                                 <input
//                                     className="new-todo"
//                                     placeholder="What are your tasks for today?"
//                                     value={newTodo}
//                                     onChange={(e) => setNewTodo(e.target.value)}
//                                 />
//                             </form>
//                         </header>
//                         <section className="main" style={{ display: "block" }}>
//                             <ul className="todo-list">
//                                 {todos.map(todo => (
//                                     <li className={todo.isComplete ? "completed" : ""} key={todo.id}>
//                                         <div className="view">
//                                             <input
//                                                 className="toggle"
//                                                 type="checkbox"
//                                                 defaultChecked={todo.isComplete}
//                                                 onChange={(e) => updateCompleted(todo, e.target.checked)}
//                                             />
//                                             <label>{todo.name}</label>
//                                             <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </section>
//                     </section>
//                 ) : (
//                     <Navigate to="/login" />
//                 )} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;