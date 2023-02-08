import Div from "../../Components/Styled/Containers/Div";
import Flex from "../../Components/Styled/Containers/Flex";
import Grid from "../../Components/Styled/Containers/Grid";
import Button from "../../Components/Styled/Buttons/Button";
import { fontSize, marginLeft } from "styled-system";
import fotoMedico from "../../Images/user_icon.svg";

const Home = () => {
  return (
    <Flex
      color="body-color"
      ml={{ lg: "50px" }}
      mr={{ lg: "50px" }}
      p={{ lg: "2px 10px 2px 10px" }}
    >
      Home
    </Flex>
  );
};

export default Home;
