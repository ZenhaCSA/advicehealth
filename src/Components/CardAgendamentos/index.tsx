import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import fotoMedico from "../../Images/user_icon.svg";

const CardAgendamentos = () => {
  return (
    <>
      <Flex
        padding="10px"
        width="93%"
        backgroundColor="rgb(236, 208, 177)"
        borderRadius="20px"
      >
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
          <i className="bi bi-circle-fill"></i>
        </Div>
        <Div>
          <input
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "22px",
              width: "100%",
            }}
            type="text"
            value="08:00"
          />
          <input
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
            type="text"
            value="Livre"
          />
        </Div>
      </Flex>
    </>
  );
};

export default CardAgendamentos;
