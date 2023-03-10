import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import Button from "../Styled/Buttons/Button";
import fotoMedico from "../../Images/user_icon.svg";

const CardMedicos = (props : any) => {
  const nomeMedico = props.medico.nome;
  const id = props.medico.id;
  const area = props.medico.area;

  const selectMedico = () => {
    localStorage.setItem("selectNomeMedico", nomeMedico);
    localStorage.setItem("areaMedicoSelected", area);
    localStorage.setItem("idmedico", id);
  };

  return (
    <>
      <Button onClick={() => selectMedico()}>
        <Flex cursor="pointer">
          <Div>
            <img
              decoding="async"
              style={{
                height: "40px",
                marginLeft: "10px",
                marginRight: "10px",
                cursor:"pointer"
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
                  cursor:"pointer"
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
                cursor:"pointer"
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
