import { useEffect, useState } from 'react';
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
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';

const reorder = <T,>(list: Array<T>, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, sortTodos, fetchTodos } = useTodos();

  console.log('🚀 ~ file: App.tsx ~ todos:', todos);

  const [input, setInput] = useState('');

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.index === source.index) return;

    const _todos = reorder(todos, source.index, destination.index);

    sortTodos(_todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                  {(provided, snapshot) => (
                    <TaskItem
                      v-for="task in tasks"
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default App;
