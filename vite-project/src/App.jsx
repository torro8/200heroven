import React, { useEffect, useState } from "react";

export default function App() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        let newElements = [];

        json.forEach((todo) =>
          newElements.push(
            <div className="api-div" key={todo.id}>
              {todo.id}. {todo.title}
            </div>
          )
        );

        setElements(newElements);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return <div id="todos-list">{elements}</div>;
}
