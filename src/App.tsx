import { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 100%;
  padding: 24px;
  overflow: auto;
  background-color: #10101d;
  border-radius: 8px;
`;

const Header = styled.h1`
  margin: 0 0 12px 0;
  font-size: 20px;
  line-height: 32px;
  color: #fff;
`;

const TaskAdd = styled.form`
  display: flex;
  height: 40px;
  font-size: 14px;
`;

const TaskInput = styled.input`
  width: 100%;
  margin-right: 12px;
  padding: 0 4px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-right: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  outline: none;
  box-shadow: none;

  &:placeholder {
    color: #fff;
  }
`;

const TaskSubmit = styled.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #fff;
  background: var(--add-button);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
  cursor: pointer;
`;

const TaskList = styled.ul``;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px;
  background-color: #191933;
  border-radius: 4px;
`;

const TaskLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
`;

const TaskCheckbox = styled.input`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-right: 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check' stroke='%23fff'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: 0.2s;
  appearance: none;

  &:hover {
    border-color: var(--checkbox-color);
    box-shadow: 0 0 0 3px var(--checkbox-shadow);
  }

  &:checked {
    background-color: var(--checkbox-color);
    background-size: 10px;
    border: 1px solid var(--checkbox-color);

    + span {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: line-through rgba(255, 255, 255, 0.8);
    }
  }
`;

const DeleteBtn = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  margin-left: auto;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff3d46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  cursor: pointer;
`;

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
      <TaskList>
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
            ></DeleteBtn>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
}

export default App;
