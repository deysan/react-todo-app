import { useState } from 'react';

import {
  Container,
  DeleteBtn,
  Header,
  TaskAdd,
  TaskCheckbox,
  TaskInput,
  TaskItem,
  TaskLabel,
  TaskSubmit,
} from './components';
import { useTodos } from './store';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  console.log('🚀 ~ file: App.tsx:18 ~ App ~ todos:', todos);

  const [input, setInput] = useState('');

  return (
    <Container>
      <Header>React Todo App</Header>
      <TaskAdd onSubmit={e => e.preventDefault()}>
        <TaskInput
          type="text"
          autoComplete="off"
          placeholder="Add New Task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <TaskSubmit
          type="submit"
          title="Add Task"
          onClick={() => {
            if (input) {
              addTodo(input);
              setInput('');
            }
          }}
        />
      </TaskAdd>
      <ul>
        {todos.map((todo, index) => (
          <TaskItem v-for="task in tasks" key={index}>
            <TaskLabel>
              <TaskCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.title}</span>
            </TaskLabel>
            <DeleteBtn title="Delete Task" onClick={() => deleteTodo(todo.id)} />
          </TaskItem>
        ))}
      </ul>
    </Container>
  );
}

export default App;
