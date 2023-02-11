import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";

const CardConsultaDeAgendamentos = (props: any) => {
  const medico = localStorage.getItem("selectNomeMedico");
  const area = localStorage.getItem("areaMedicoSelected");
  const paciente = props.consulta.paciente;
  const cpf = props.consulta.cpf;
  const dtnascimento = props.consulta.dtnascimento;
  const endereco = props.consulta.endereco;
  const estadoPagamento = props.consulta.estadoPagamento;

  return (
    <>
      <Flex
        padding="8px"
        width="99%"
        backgroundColor="white"
        borderRadius="20px"
        color="rgb(121, 107, 107)"
        mb={{ lg: "1.5%" }}
        mt="2%"
        height="100%"
      >
        <Div textAlign="center" width="10%" color="green"></Div>
        <Div>
          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
              width: "100%",
            }}
          >
            {medico}
          </label>
          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
          >
            Area: {area}
          </label>
          <Div>
            <label
              style={{
                border: "none",
                color: "rgb(121, 107, 107)",
                backgroundColor: "transparent",
                fontSize: "15px",
              }}
            >
              Paciente: {paciente}
            </label>
          </Div>
          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
          >
            CPF: {cpf}
          </label>
          <Div>
            <label
              style={{
                border: "none",
                color: "rgb(121, 107, 107)",
                backgroundColor: "transparent",
                fontSize: "15px",
              }}
            >
              Data de nascimento: {dtnascimento}
            </label>
          </Div>

          <label
            style={{
              border: "none",
              color: "rgb(121, 107, 107)",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
          >
            Endereco: {endereco}
          </label>
          <Div>
            <label
              style={{
                border: "none",
                color: "rgb(121, 107, 107)",
                backgroundColor: "transparent",
                fontSize: "15px",
              }}
            >
              Estatus de pagamento : {estadoPagamento}
            </label>
          </Div>
        </Div>
      </Flex>
    </>
  );
};

export default CardConsultaDeAgendamentos;
