import styled from 'styled-components';
import {
  gridColumn,
  gridRow,
  alignSelf,
  textAlign,
  justifySelf,
  GridColumnProps,
  GridRowProps,
  AlignSelfProps,
  JustifySelfProps,
  TextAlignProps,
  FontSizeProps,
  fontSize
} from 'styled-system';
import BaseContainer from '../base.styled';

const Div = styled(BaseContainer)<
  GridRowProps & GridColumnProps & AlignSelfProps & JustifySelfProps & TextAlignProps & FontSizeProps
>`
${gridRow}
${gridColumn}
${alignSelf}
${justifySelf}
${textAlign}
${fontSize}
`;

export default Div;
