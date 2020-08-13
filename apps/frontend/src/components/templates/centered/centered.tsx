import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CenteredProps {}

const StyledCentered = styled.div`
  color: pink;
`;

export const Centered = (props: CenteredProps) => {
  return (
    <StyledCentered>
      <h1>Welcome to Centered!</h1>
    </StyledCentered>
  );
};

export default Centered;
