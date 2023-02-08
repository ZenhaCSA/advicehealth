import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import BaseContainer from '../base.styled';

const Flex = styled(BaseContainer)<FlexboxProps>`
${flexbox}
display: flex;
`;

export default Flex;
