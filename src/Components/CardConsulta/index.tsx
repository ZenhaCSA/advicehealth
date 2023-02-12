import Div from "../Styled/Containers/Div";
import Flex from "../Styled/Containers/Flex";

const CardVisualizarDados = (props: any) => {
  const medico = localStorage.getItem("selectNomeMedico");
  const area = localStorage.getItem("areaMedicoSelected");

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
            Medico : {medico}
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
        </Div>
      </Flex>
    </>
  );
};

export default CardVisualizarDados;
