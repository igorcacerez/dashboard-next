import { useState } from "react";
import Modal from "../Modal/Modal";

const TipoEndereco = ({endereco, setEndereco}) => {
    const [tipoEndereco, setTipoEndereco] = useState([]);
    const [modalTipo, setModalTipo] = useState(false);
    const [tipoSalva, setTipoSalva] = useState("");

    const handleModalTipo = () => {
        setModalTipo(!modalTipo);
    }

    const handleAddTipo = () => {
        let newTipoEndereco = tipoEndereco;
        newTipoEndereco.push(tipoSalva);
        setTipoEndereco(newTipoEndereco);
        setTipoSalva("");
        handleModalTipo();
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="type">Tipo de Endereço</label>
                <div className="select-btn">
                    <div className="itemSelecionado">
                        <span>{endereco.addressType === "" ? "Selecione um Tipo" : endereco.addressType}</span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="itens">
                        <ul>
                            {tipoEndereco.map((tipo, index) => (
                                <li key={index} onClick={() => setEndereco({...endereco, addressType: tipo})}>{tipo}</li>
                            ))}
                            <li className="btn-add" onClick={() => handleModalTipo()}>
                                <i className="fa fa-plus"></i>
                                Adicionar
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal show={modalTipo} onHide={() => handleModalTipo()}>
                <div className="conteudo">
                    <h3>Adicioar Tipo</h3>

                    <div className="form-group">
                        <label htmlFor="type">Tipo de Endereço</label>
                        <input type="text" value={tipoSalva} onChange={(e) => setTipoSalva(e.target.value)}  className="form-control" />
                    </div>
                </div>

                <div className="btns">
                    <button className="btn btn-secondary" onClick={() => handleModalTipo()}>Cancelar</button>
                    <button className="btn btn-primary" onClick={() => handleAddTipo()} >Salvar</button>
                </div>
            </Modal>
        </>
    );
}

export default TipoEndereco;