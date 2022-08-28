import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;

//Large Text
export const LargeT = styled(Text)`
  font-size: 24px;
  margin: 0;
`;

//Large Text Bold
export const LargeTB = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const Body = styled(Text)`
  margin: 0;
`;

//Body Bold
export const BodyB = styled(Text)`
  font-weight: 700;
  margin: 0;
`;

export const Tiny = styled(Text)`
  font-size: 12px;
  margin: 0;
`;
