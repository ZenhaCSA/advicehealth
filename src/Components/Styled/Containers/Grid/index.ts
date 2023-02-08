import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';
import BaseContainer from '../base.styled';

const Grid = styled(BaseContainer)<GridProps>`
${grid}
display: grid;
`;

export default Grid;
