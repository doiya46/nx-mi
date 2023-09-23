import styled from '@emotion/styled';
import { MiButton } from 'components';

/* eslint-disable-next-line */
export interface BarProps {}

const StyledBar = styled.div`
  color: pink;
`;

export function Bar(props: BarProps) {
  return (
    <StyledBar>
      <MiButton />
    </StyledBar>
  );
}
