import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";
import Button from "../Styled/Buttons/ButtonSelect";
import { useEffect, useState } from "react";
import CardModal from "../ModaTeste";

const CardAgendamentos = (props: any) => {
  const time = props.horario.hora;

  const cadastrar = () => {
    // const a = null ? "vazio" : localStorage.getItem("selectNomeMedico");
    // const b = null ? "vazio" : localStorage.getItem("areaMedicoSelected");
    // const c = null ? "vazio" : localStorage.getItem("idmedico");
  };

  const [medicoNome, setMedicoNome] = useState("");
  const [editActivated, SeteditActivated] = useState(false);
  const medicoArea = localStorage.getItem("areaMedicoSelected");
  const medicoId = localStorage.getItem("idmedico");
  const medicoHorario = localStorage.getItem("selectHorario");

  const visualizar = () => {
    localStorage.setItem("selectHorario", time);
    const insert = localStorage.getItem("selectNomeMedico");
    const selectNomeMedico = insert == null ? "oi" : insert;
    setMedicoNome(selectNomeMedico);
    SeteditActivated(true);
  };

  useEffect(() => {
    console.log("oi");
  }, [editActivated]);

  return (
    <Flex>
      <CardModal
        medicoNome={medicoNome}
        medicoArea={medicoArea}
        medicoId={medicoId}
        medicoHorario={medicoHorario}
      />
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
            onClick={() => visualizar()}
            data-bs-toggle="modal"
            data-bs-target="#janelaModal"
            backgroundColor="transparent"
            color="currentColor"
          >
            {/* visualizar */}
            <i className="bi bi-eye-fill"></i>
          </Button>
        </Div>
      </Flex>
    </Flex>
  );
};

export default CardAgendamentos;
