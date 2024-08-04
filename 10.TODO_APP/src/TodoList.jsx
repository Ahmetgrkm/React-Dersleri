import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUptadeTodo }) {
    return (
        <div style={{ width: '100%', margin: '50px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUptadeTodo={onUptadeTodo} />
                ))
            }



        </div>
    )
}

export default TodoList