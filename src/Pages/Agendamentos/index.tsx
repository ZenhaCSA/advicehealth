import Div from "../../Components/Styled/Containers/Div";
import Flex from "../../Components/Styled/Containers/Flex";
import Grid from "../../Components/Styled/Containers/Grid";
import Button from "../../Components/Styled/Buttons/Button";
import { fontSize, marginLeft } from "styled-system";
import fotoMedico from "../../Images/user_icon.svg";

const Agendamentos = () => {
  return(
  <Flex
    color="body-color"
    ml={{ lg: "50px" }}
    mr={{ lg: "50px" }}
    p={{ lg: "2px 10px 2px 10px" }}
  >
    <Grid position="relative" gridTemplateColumns="30rem 44rem">
      <Div
        backgroundColor="rgb(192, 189, 189)"
        border="2px solid rgb(192, 189, 189)"
        borderRadius="10px"
        p={{ lg: "10px" }}
        maxHeight={{ lg: "10rem" }}
      >
        <Div
          mt={{ lg: "2px" }}
          overflow="scroll"
          overflowX="hidden"
          maxHeight={{ lg: "10rem" }}
        >
          <Button>
            <Flex>
              <img
                decoding="async"
                style={{
                  height: "40px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                alt="fotoMedico"
                src={fotoMedico}
              />
              <Div>
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "22px",
                  }}
                  type="text"
                  value="Jose Geraldo"
                />
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "15px",
                  }}
                  type="text"
                  value="Dentista"
                />
              </Div>
            </Flex>
          </Button>
          <Button>
            <Flex>
              <img
                decoding="async"
                style={{
                  height: "40px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                alt="fotoMedico"
                src={fotoMedico}
              />
              <Div>
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "22px",
                  }}
                  type="text"
                  value="Jose Geraldo"
                />
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "15px",
                  }}
                  type="text"
                  value="Dentista"
                />
              </Div>
            </Flex>
          </Button>
          <Button>
            <Flex>
              <img
                decoding="async"
                style={{
                  height: "40px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                alt="fotoMedico"
                src={fotoMedico}
              />
              <Div>
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "22px",
                  }}
                  type="text"
                  value="Jose Geraldo"
                />
                <input
                  style={{
                    border: "none",
                    color: "#0b4ca2",
                    backgroundColor: "transparent",
                    fontSize: "15px",
                  }}
                  type="text"
                  value="Dentista"
                />
              </Div>
            </Flex>
          </Button>
        </Div>
      </Div>
    </Grid>
  </Flex>);
};

export default Agendamentos;
