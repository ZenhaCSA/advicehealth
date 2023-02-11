import styled from 'styled-components';
import {
  color,
  fontSize,
  layout,
  border,
  space,
  FontSizeProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
} from 'styled-system';

interface Props {
  cursor?: string;
  onCLick?: string;
}

const BaseButton = styled.button<
  ColorProps & FontSizeProps & LayoutProps & SpaceProps & BorderProps & Props
>`
${layout}
${border}
${space}
${color}
${fontSize}
cursor: ${(props: Props) => props.cursor ?? 'default'}
onCLick: ${(props: Props) => props.cursor ?? 'default'}

`;

export default BaseButton;
