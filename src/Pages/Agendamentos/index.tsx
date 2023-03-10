import Div from "../../Components/Styled/Containers/Div";
import Grid from "../../Components/Styled/Containers/Grid";
import CardMedicos from "../../Components/CardMedicos";
import CardAgendamentos from "../../Components/CardAgendamentos";
import CardVisualizarDados from "../../Components/CardConsulta";
import { useEffect, useState } from "react";
import axios from "axios";

const Agendamentos = () => {
  const setData = (value: any) => {
    localStorage.setItem("dataSelecionada", value);
    console.log(localStorage.getItem("dataSelecionada"));

    // 2023-02-21
  };
  const [medicos, setMedicos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/medicos").then((response) => {
      const medicosChegando = response.data;
      setMedicos(medicosChegando);
    });

    axios.get("http://localhost:5000/horarios").then((response) => {
      const horariosChegando = response.data;
      setHorarios(horariosChegando);
    
    });

    axios.get("http://localhost:5000/agendamentos").then((response) => {
      const agendamentosChegando = response.data;
      setAgendamentos(agendamentosChegando);
    
    });
  }, []);

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
              height={{ lg: "145%" }}
              mt="30px"
            >
              <Div
                mt={{ lg: "2px" }}
                overflow="scroll"
                overflowX="hidden"
                height={{ lg: "100%" }}
                color="#0b4ca2"
              >
                <label
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "15px",
                  }}
                >
                  Escolha a data a consultar
                </label>
                <Div>
                  <input
                    style={{
                      border: "3px solid rgb(236, 208, 177)",
                      color: "#0b4ca2",
                      fontSize: "14px",
                      borderRadius: "8px",
                    }}
                    type="date"
                    onChange={(e) => setData(e.target.value)}
                  />
                </Div>
                <Div>
                  {agendamentos.map((i) => (
                    <CardVisualizarDados consulta={i} />
                  ))}
                </Div>
              </Div>
            </Div>
          </Div>
          <Div
            backgroundColor="rgb(221, 219, 219)"
            borderRadius="10px"
            p={{ lg: "1rem" }}
            height={{ lg: "30%" }}
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
