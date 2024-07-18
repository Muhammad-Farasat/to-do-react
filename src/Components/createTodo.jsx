import React, { useState, useEffect } from 'react';
import AddTodo from "./AddTodo";
import Button from './Button';
import swal from 'sweetalert';

function CreateTodo() {
  const [todo, setTodo] = useState({ title: '', done: false });
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    let todos = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    setTodoArr(todos);
  }, []);

  const onChange = (event) => {
    let { value } = event.target;
    setTodo({ title: value, done: false });
  }

  const createTodo1 = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "add") {
      if (todo.title !== "") {
        let todos = [...todoArr];
        todos.unshift(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodoArr(todos);
        setTodo({ title: "", done: false });
      } else {
        swal("Please write your TODO!");
      }
    }
  }

  const completeTodo = (i) => {
    let todos = [...todoArr];
    todos[i].done = !todos[i].done; // Toggle the 'done' state of the clicked todo item
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodoArr(todos);
  }

  const deleteTodo = (i) => {
    let todos = [...todoArr];
    todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodoArr(todos);
  }

//   const [deferredPrompt, setDeferredPrompt] = useState(null);

//   useEffect(() => {
//     window.addEventListener('beforeinstallprompt', (e) => {
//       // Prevent the mini-infobar from appearing on mobile
//       e.preventDefault();
//       // Stash the event so it can be triggered later.
//       setDeferredPrompt(e);
//       // Update UI to notify the user they can add to home screen
//       // Show your custom install button
//     });
//   }, []);

//   const handleInstallClick = () => {
//     if (deferredPrompt) {
//       // Show the install prompt
//       deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the A2HS prompt');
//         } else {
//           console.log('User dismissed the A2HS prompt');
//         }
//         setDeferredPrompt(null);
//       });
//     }
//   };

 
  return (
    <>
      <div className='container flex flex-col items-center relative top-24 max-sm:overflow-x-hidden'>
        <h2 className='text-4xl font-bold '>To-Do List</h2>
        <p>Be Productive, Be Successful</p>
        <div className='max-sm:w-80 max-sm:mt-8'>
          <input
            type="text"
            placeholder='write here..'
            onChange={onChange}
            value={todo.title}
            onKeyPress={createTodo1}
            className='w-[28rem] bg-[#444444] p-2 pl-4 py-3 rounded-md mt-6 outline-none text-xl max-sm:text-[16px] max-sm:w-60 max-sm:py-2.5'
          />
          <Button bgColor="#00EDB5" width="6rem" name="add" click={createTodo1}>Add</Button>
        </div>
        <AddTodo completeTodo={completeTodo} todoArr={todoArr} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default CreateTodo;
