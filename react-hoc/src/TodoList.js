import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {

    const renderTodos = data.slice(0,10).map(todo => {
        return (
            <div key={todo.id}>
                <p style={{textAlign: "left"}}>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    });

    return (
        <div>
            <div>{ renderTodos }</div>
        </div>
    )
}

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;