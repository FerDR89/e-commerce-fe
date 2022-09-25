import styled from "styled-components";

const Button = styled.button`
  border-radius: var(--border-radius);
  min-height: 37px;
  min-width: 148px;
  font-weight: 700;
  border: transparent;
  cursor: pointer;
`;

export const ButtonBlue = styled(Button)`
  background-color: var(--blue);
  color: var(--Wht);
`;
export const ButtonLightBlue = styled(Button)`
  background-color: var(--ligth-blue);
  width: 328px;
  height: 63px;
`;

export const ButtonOrange = styled(Button)`
  background-color: var(--orange);
`;
export const ButtonFuchsia = styled(Button)`
  background-color: var(--fuchsia);
  color: var(--Wht);
  width: 172px;
  height: 37px;
`;
