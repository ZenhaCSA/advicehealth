import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import Button from "../Styled/Buttons/Button";
import fotoMedico from "../../Images/user_icon.svg";

const CardMedicos = () => {
  return (
    <>
      <Button>
        <Flex>
          <Div>
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
          </Div>
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
    </>
  );
};

export default CardMedicos;
