import React from 'react'
import TodoCard from 'src/TodoCard.jsx';

export default function TodoList(props) {
    const {todos} = props;

    return (
        <ul className='main'>
            {todos.map((todo, indx)=>{
                return (
                    <TodoCard {...props} index={indx} key={indx}>
                        <p>
                            {todo}
                        </p>
                    </TodoCard>                 
                )
            })

            }
        </ul>
    )
}
