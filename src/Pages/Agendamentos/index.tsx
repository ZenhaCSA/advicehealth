import Div from "../../Components/Styled/Containers/Div";
import Grid from "../../Components/Styled/Containers/Grid";
import CardMedicos from "../../Components/CardMedicos";
import CardAgendamentos from "../../Components/CardAgendamentos";

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
            maxHeight={{ lg: "10rem" }}
          >
            <Div
              mt={{ lg: "2px" }}
              overflow="scroll"
              overflowX="hidden"
              maxHeight={{ lg: "10rem" }}
            >
              <CardMedicos />
            </Div>
            <Div
              backgroundColor="rgb(221, 219, 219)"
              borderRadius="10px"
              p={{ lg: "10px" }}
              height={{ lg: "19.1rem" }}
              mt="30px"
            >
              <Div
                mt={{ lg: "2px" }}
                overflow="scroll"
                overflowX="hidden"
                maxHeight={{ lg: "10rem" }}
              ></Div>
            </Div>
          </Div>
          <Div
            backgroundColor="rgb(221, 219, 219)"
            borderRadius="10px"
            p={{ lg: "10px" }}
            height={{ lg: "32rem" }}
            ml="30px"
          >
            <Div
              mt={{ lg: "2px" }}
              overflow="scroll"
              overflowX="hidden"
              maxHeight={{ lg: "10rem" }}
            >
              <CardAgendamentos />
            </Div>
          </Div>
        </Grid>
      </Div>
    </>
  );
};

export default Agendamentos;
