import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
`;

const Text = styled.p`
  font-size: 16px;
`;

//Large Text
export const LargeT = styled(Text)`
  font-size: 24px;
`;

//Large Text Bold
export const LargeTB = styled(Text)`
  font-size: 24px;
  font-weight: 700;
`;

export const Body = styled(Text)``;

//Body Bold
export const BodyB = styled(Text)`
  font-weight: 700;
`;

export const Tiny = styled(Text)`
  font-size: 12px;
`;
