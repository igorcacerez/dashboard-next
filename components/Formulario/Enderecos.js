import { useState } from "react";
import CampoForm from "./CampoForm";
import TabelaEnderecos from "./TabelaEnderecos";
import TipoEndereco from "./TipoEndereco";

const EnderecosForm = ({ listEnderecos, setListEnderecos }) => {  
    const [endereco, setEndereco] = useState({
        addressType: '',
        zipCode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: ''
    });

    const handleEndereco = (e) => {
        setEndereco({
            ...endereco,
            [e.target.name]: e.target.value
        });

        if(e.target.name === 'zipCode' && e.target.value.length === 8) {
            fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
                .then(response => response.json())
                .then(data => {
                    setEndereco({
                        ...endereco,
                        zipCode: data.cep,
                        street: data.logradouro,
                        neighborhood: data.bairro,
                        city: data.localidade,
                        state: data.uf
                    });
                });
        }
    }

    
    const handleAddEndereco = () => {
        let newEnderecos = listEnderecos;

        if(endereco.index !== undefined) {
            newEnderecos[endereco.index] = endereco; // Edita o endereço já existente
        } else {
            if(newEnderecos !== undefined && newEnderecos.length > 0) {
                newEnderecos.push(endereco);
            } else {
                newEnderecos = [endereco];
            }
        }

        setListEnderecos(newEnderecos);
        setEndereco({
            zipCode: '',
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
            complement: ''
        });
    };

    return (    
        <>
            <div className="row">
                <div className="col-md-12">
                    <h3>
                        <i className="fa fa-list-alt margin-right-5px"></i>
                        Endereços
                    </h3>
                </div>
            </div>

            <div className="form-endereco">
                <div className="row">
                    {/* <div className="col-md-3">
                        <TipoEndereco 
                            endereco={endereco}
                            setEndereco={setEndereco}
                            />
                    </div> */}

                    <div className="col-md-3">
                        <CampoForm 
                            label="CEP"
                            type="text"
                            name="zipCode"
                            value={endereco?.zipCode}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>
                        
                    <div className="col-md-3">
                        <CampoForm
                            label="Logradouro"
                            type="text"
                            name="street"
                            value={endereco?.street}
                            onChange={(e) => handleEndereco(e)}
                            />
                    </div>

                    <div className="col-md-3">
                        <CampoForm
                            label="Número"
                            type="text"
                            name="number"
                            value={endereco?.number}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>   

                    <div className="col-md-3">
                        <CampoForm
                            label="Bairro"
                            type="text"
                            name="neighborhood"
                            value={endereco?.neighborhood}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>

                    <div className="col-md-3">
                        <CampoForm
                            label="Cidade"
                            type="text"
                            name="city"
                            value={endereco?.city}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>
                    

                    <div className="col-md-3">
                        <CampoForm
                            label="Estado"
                            type="text"
                            name="state"
                            value={endereco?.state}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>

                    <div className="col-md-3">
                        <CampoForm
                            label="Complemento"
                            type="text"
                            name="complement"
                            value={endereco?.complement}
                            onChange={(e) => handleEndereco(e)}
                        />
                    </div>

                    {endereco.index !== undefined && (
                        <input type="hidden" name="index" value={endereco.index} />
                    )}

                    <div className="col-md-3">
                        <button className="btn btn-primary" 
                                onClick={() => handleAddEndereco()}>
                                    {endereco.index === undefined ? 'Adicionar' : 'Editar'}
                        </button>
                    </div>
                </div>
            </div>


            {/* Tabela de Enderecos */}
            <TabelaEnderecos 
                enderecos={listEnderecos}
                setEditEndereco={setEndereco}
                setDeleteEndereco={setListEnderecos}
            />
        </>
    );
 }

 export default EnderecosForm;