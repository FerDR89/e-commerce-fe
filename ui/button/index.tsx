import styled from "styled-components";

const Button = styled.button`
  border-radius: var(--border-radius);
  min-height: 37px;
  min-width: 148px;
  border: transparent;
  cursor: pointer;
`;

export const ButtonBlue = styled(Button)`
  background-color: var(--blue);
  color: var(--font-Wht);
`;
export const ButtonLightBlue = styled(Button)`
  background-color: var(--ligth-blue);
`;

export const ButtonOrange = styled(Button)`
  background-color: var(--orange);
`;
export const ButtonFuchsia = styled(Button)`
  background-color: var(--fuchsia);
  color: var(--font-Wht);
`;
