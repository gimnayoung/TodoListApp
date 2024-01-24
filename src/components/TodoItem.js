import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({item,deleteItem,toggleComplete}) => {
  console.log(item._id)
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item${item.isComplete ? "item-complete":""}`}>
          <div className="todo-content">{item.task}</div>
          <div>
            <button 
            onClick={()=>{
              deleteItem(item._id)
            }}
            className="button-delete">삭제</button>
            <button className="button-delete"
            onClick={()=>{toggleComplete(item._id)}}>
              {item.isComplete ? '안끝남' : '끝남'}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
