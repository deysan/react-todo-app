import styled from 'styled-components';

const TaskInput = styled.input`
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  padding: 0 0.5rem;
  font-size: 1rem;
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

export default TaskInput;
