import styled from 'styled-components';

const TaskItem = styled.div<{ isDragging?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: ${props => (props.isDragging ? 'var(--checkbox-shadow)' : '#191933')};
  border-radius: 4px;
`;

export default TaskItem;
