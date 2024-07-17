import React from "react";
import Button from "./Button";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function AddTodo(props) {
  const { completeTodo } = props;
  const { deleteTodo } = props
  let todoArr = props.todoArr.length > 0 ? props.todoArr : JSON.parse(localStorage.getItem("todos"));

  


  return (
    <>
      <div className="">
        <p className="mt-6 text-2xl">List:</p>
        <ul>
          {todoArr && todoArr.length > 0
            ? todoArr.map((el, i) => (
                <li
                  key={i}
                  className="w-[34rem] px-8 py-1 mt-2 rounded-md bg-[#444444] flex items-center justify-between"
                >
                  <span className={el.done ? 'line-through' : ''}>{el.title}</span>
                  <div className="flex items-center gap-2">
                    <button className="text-xl" onClick={() => completeTodo(i)}>
                      {el.done ? <FaCheckCircle className="text-[#00EDB5]" /> : <FaRegCircle />}
                    </button>
                    <Button>
                      <MdDelete className="text-2xl" onClick={() => deleteTodo(i)} />
                    </Button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default AddTodo;
