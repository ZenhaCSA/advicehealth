import Div from "../Styled/Containers/Div";

const CardModal = (props: any) => {
  
  return (
    <>
      <Div className="modal" id="janelaModal">
        <Div className="modal-dialog">
          <Div className="modal-content">
            <Div className="modal-header">
              <h3 className="modal-title">{props.medicoHorario}</h3>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-close"
              ></button>
            </Div>
            <Div className="modal-body">
              <Div>Medico ={props.medicoNome}</Div>
              <Div>Area = {props.medicoArea}</Div>
              <Div>Area = {props.medicoId}</Div>
              <Div>Horario = {props.medicoHorario}</Div>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                fechar
              </button>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default CardModal;
