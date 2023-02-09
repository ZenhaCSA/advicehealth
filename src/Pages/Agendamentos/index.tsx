import Div from "../../Components/Styled/Containers/Div";
import Grid from "../../Components/Styled/Containers/Grid";
import CardMedicos from "../../Components/CardMedicos";
import CardAgendamentos from "../../Components/CardAgendamentos";
import horarios from "../../Components/Objects/horarios.json";
import medicos from "../../Components/Objects/medicos.json";

const Agendamentos = () => {

  return (
    <>
      <Div
        color="body-color"
        ml={{ lg: "50px" }}
        mr={{ lg: "50px" }}
        mt={{ lg: "30px" }}
        p={{ lg: "0px 10px 2px 10px" }}
      >
        <Grid position="relative" gridTemplateColumns="40% 58%">
          <Div
            backgroundColor="rgb(221, 219, 219)"
            borderRadius="10px"
            p={{ lg: "10px" }}
            height={{ lg: "12.4%" }}
          >
            <Div
              mt={{ lg: "2px" }}
              overflow="scroll"
              overflowX="hidden"
              height={{ lg: "100%" }}
              backgroundColor="rgb(221, 219, 219)"
            >
              {medicos.map((i) => (
                <CardMedicos medico={i} />
              ))}
            </Div>
            <Div
              backgroundColor="rgb(221, 219, 219)"
              borderRadius="10px"
              p={{ lg: "10px" }}
              height={{ lg: "100%" }}
              mt="30px"
            >
              <Div
                mt={{ lg: "2px" }}
                overflow="scroll"
                overflowX="hidden"
                height={{ lg: "100%" }}
              >
                <Div>Visao</Div>
              </Div>
            </Div>
          </Div>
          <Div
            backgroundColor="rgb(221, 219, 219)"
            borderRadius="10px"
            p={{ lg: "1rem" }}
            height={{ lg: "25%" }}
            ml="30px"
          >
            <Div
              mt={{ lg: "2px" }}
              pl={{ lg: "2.5%" }}
              overflow="scroll"
              overflowX="hidden"
              height={{ lg: "100%" }}
            >
              {horarios.map((i) => (
                <CardAgendamentos horario={i} />
              ))}
            </Div>
          </Div>
        </Grid>
      </Div>
    </>
  );
};

export default Agendamentos;
