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

const TODOS = {
  title: 'to do list',
  tasks: [{ name: 'Start a new pen' }, { name: 'Read a book' }, { name: 'Meeting with team' }],
};

function App() {
  const [todos, setTodos] = useState(TODOS);
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
              setTodos({
                ...todos,
                tasks: [...todos.tasks, { name: input }],
              });
              setInput('');
            }
          }}
        />
      </TaskAdd>
      <ul>
        {todos.tasks.map((todo, index) => (
          <TaskItem v-for="task in tasks" key={index}>
            <TaskLabel>
              <TaskCheckbox type="checkbox" />
              <span>{todo.name}</span>
            </TaskLabel>
            <DeleteBtn
              title="Delete Task"
              onClick={() =>
                setTodos({
                  ...todos,
                  tasks: todos.tasks.filter((_, id) => index !== id),
                })
              }
            />
          </TaskItem>
        ))}
      </ul>
    </Container>
  );
}

export default App;
