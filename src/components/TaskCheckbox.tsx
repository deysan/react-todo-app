import styled from 'styled-components';

const TaskCheckbox = styled.input`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin: 0.5rem;
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

export default TaskCheckbox;
