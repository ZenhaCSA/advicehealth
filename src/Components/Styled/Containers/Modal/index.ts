import styled from 'styled-components';
import BaseContainer from '../base.styled';

const Div = styled(BaseContainer)`
  width:40%;
  height: 20%;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  position: absolute;
  z-index:1;
  border-radius:10px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
`;

export default Div;
