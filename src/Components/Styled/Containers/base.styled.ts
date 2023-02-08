import styled from 'styled-components';
import {
  space,
  color,
  layout,
  gridRow,
  gridColumn,
  alignSelf,
  justifySelf,
  alignItems,
  border,
  position,
  background,
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  GridRowProps,
  GridColumnProps,
  AlignSelfProps,
  JustifySelfProps,
  AlignItemsProps,
  textAlign,
  TextAlignProps,
  fontSize,
  FontSizeProps,
  justifyContent,
  JustifyContentProps
} from 'styled-system';

interface Props {
  cursor?: string;
  float?: string;
  hover?: string;
}

const BaseContainer = styled.div<
  ColorProps &
    TextAlignProps &
    LayoutProps &
    SpaceProps &
    BorderProps &
    PositionProps &
    BackgroundProps &
    GridRowProps &
    GridColumnProps &
    AlignSelfProps &
    JustifySelfProps &
    AlignItemsProps &
    FontSizeProps &
    JustifyContentProps &
    Props
>`
${space}
${color}
${layout}
${gridRow}
${gridColumn}
${alignSelf}
${alignItems}
${justifySelf}
${border}
${position}
${background}
${textAlign}
${fontSize}
${justifyContent}
cursor: ${({ cursor }: Props) => cursor ?? 'default'};
float: ${({ float }: Props) => float ?? 'none'};
`;

export default BaseContainer;
