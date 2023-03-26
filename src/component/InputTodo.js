import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ text: e.target.value });
  }

  function onReset(e) {
    setTodolist({ text: "" });
  }

  return (
    <div className="inputtodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else {
            alert("할 일을 입력해주세요");
          }
        }}
      ></form>
    </div>
  );
}
