import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import Button from "../Styled/Buttons/Button";
import fotoMedico from "../../Images/user_icon.svg";

const CardMedicos = (props: any) => {
  const nomeMedico = props.medico.nome;
  const id = props.medico.id;
  const area = props.medico.area;

  localStorage.setItem("idmedico", id);

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
            <Div>
              <label
                style={{
                  border: "none",
                  color: "#0b4ca2",
                  backgroundColor: "transparent",
                  fontSize: "22px",
                }}
              >
                {nomeMedico}
              </label>
            </Div>
            <label
              style={{
                border: "none",
                color: "#0b4ca2",
                backgroundColor: "transparent",
                fontSize: "15px",
              }}
            >
              {area}
            </label>
          </Div>
        </Flex>
      </Button>
    </>
  );
};

export default CardMedicos;
