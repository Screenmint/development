import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MasterProps {}

const StyledMaster = styled.div`
  color: pink;
`;

export const Master = (props: MasterProps) => {
  return (
    <StyledMaster>
      <h1>Welcome to Master!</h1>
    </StyledMaster>
  );
};

export default Master;
