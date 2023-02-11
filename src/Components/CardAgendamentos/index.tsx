import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import Button from "../Styled/Buttons/ButtonSelect";

const CardAgendamentos = (props: any) => {
  const time = props.horario.hora;

  const cadastrar = () => {
    const a = null ? "vazio" : localStorage.getItem("selectNomeMedico");
    const b = null ? "vazio" : localStorage.getItem("areaMedicoSelected");
    const c = null ? "vazio" : localStorage.getItem("idmedico");

    console.log(a);
    console.log(b);
    console.log(c);
    
  };

  return (
    <>
      <Flex
        padding="8px"
        width="99%"
        backgroundColor="rgb(236, 208, 177)"
        borderRadius="20px"
        color="rgb(121, 107, 107)"
        mb={{ lg: "1.5%" }}
      >
        <Div textAlign="center" width="10%" color="green">
          <i style={{ fontSize: "2.5rem" }} className="bi bi-circle-fill"></i>
        </Div>
        <Div>
          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "22px",
              width: "100%",
            }}
          >
            {time}
          </label>
          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
          >
            Livre
          </label>
        </Div>
        <Div alignSelf="end" ml={{ lg: "60%" }}>
          <Button
            onClick={() => cadastrar()}
            backgroundColor="transparent"
            color="currentColor"
          >
            {/* delete */}
            <i className="bi bi-trash"></i>
          </Button>
          <Button
            onClick={() => cadastrar()}
            backgroundColor="transparent"
            color="currentColor"
          >
            {/* edit */}
            <i className="bi bi-pen-fill"></i>
          </Button>
          <Button
            onClick={() => cadastrar()}
            backgroundColor="transparent"
            color="currentColor"
          >
            {/* visualizar */}
            <i className="bi bi-eye-fill"></i>
          </Button>
        </Div>
      </Flex>
    </>
  );
};

export default CardAgendamentos;
