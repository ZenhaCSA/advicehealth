import styled from 'styled-components';
import {
  gridColumn,
  gridRow,
  alignSelf,
  justifySelf,
  GridColumnProps,
  GridRowProps,
  AlignSelfProps,
  JustifySelfProps,
} from 'styled-system';
import BaseContainer from '../base.styled';

const Div = styled(BaseContainer)<
  GridRowProps & GridColumnProps & AlignSelfProps & JustifySelfProps
>`
${gridRow}
${gridColumn}
${alignSelf}
${justifySelf}
`;

export default Div;
