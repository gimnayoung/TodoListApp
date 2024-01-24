import React from "react";
import TodoItem from "../components/TodoItem"

const TodoBoard = ({todoList,deleteItem,toggleComplete}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <div>
      {
        todoList.length > 0 &&
        (todoList.map((item,index) =>
          <TodoItem 
          key={index} 
          item={item}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
          />))
      } 
      {/* 렌더링 되지않아서 key값을 넣었더니 활성화됨 */}
      </div>
    </div>
  );
};

export default TodoBoard;
