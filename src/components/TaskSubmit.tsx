import styled from 'styled-components';

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

export default TaskSubmit;
