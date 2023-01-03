import { useState } from "react";
import BarraTitulo from "../../components/BarraTitulo/BarraTitulo";
import CampoForm from "../../components/Formulario/CampoForm";
import EnderecosForm from "../../components/Formulario/Enderecos";
import TabForm from "../../components/TabForm/TabForm";

const CadastroClientes = () => {

    const [credito, setCredito] = useState({
        creditLimit: 0.0,
        creditLimitExceeded: false
    });

    const [endereco, setEndereco] = useState([])

    const [cliente, setCliente] = useState({
        name: "",
        email: "",
        phone: "",
        otherInformations: "",
        situation: "selecione",
        companyType: "selecione",

        // Cliente Fisico 
        cpf: '',

        // Cliente Juridico
        fantasyName: "",
        cnpj: "",
        razaoSocial: "",
        inscricaoEstadual: "",
        contactName: "",
    });

    const handleCliente = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    }


    const zeraForm = () => {
        setCliente({
            name: "",
            email: "",
            phone: "",
            otherInformations: "",
            situation: "selecione",
            companyType: "selecione",
    
            // Cliente Fisico 
            cpf: '',
    
            // Cliente Juridico
            fantasyName: "",
            cnpj: "",
            razaoSocial: "",
            inscricaoEstadual: "",
            contactName: "",
        }); 

        setEndereco([]);

        setCredito({
            creditLimit: 0.0,
            creditLimitExceeded: false
        });
    }

    const handleSubmit = () => {
        let data = {
            ...credito,
            generalInformation : {
                ...cliente
            }, 
            addresses: endereco
        }

        /// ENVIA O DATA

        // .then() {
            zeraForm();
        // }
    }


    return (
        <>
            <BarraTitulo
                titulo="Adicionar Clientes"
                caminho={[
                    { nome: "Home", link: "/" },
                    { nome: "Cadastros", link: "/cadastros" },
                    { nome: "Clientes", link: "/cadastros/clientes" },
                ]}
            />

            <div className="content">
                <TabForm
                    tabs={[
                        {
                            label: "Dados do Cliente",
                            content: (
                                <>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>
                                                <i className="fa fa-list-alt margin-right-5px"></i>
                                                Dados do cliente
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Tipo, Situação, Nome, Email */}
                                    <div className="row">
                                        <div className="col-md-3">
                                            <CampoForm
                                                label="Tipo de Cliente"
                                                type="select"
                                                name="companyType"
                                                value={cliente.companyType}
                                                onChange={(e) => handleCliente(e)}
                                                options={[
                                                    { value: "selecione", label: "Selecione"},
                                                    { value: "PF", label: "Pessoa Física" },
                                                    { value: "PJ", label: "Pessoa Jurídica" },
                                                ]}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <CampoForm
                                                label="Situação"
                                                type="select"
                                                name="situation"
                                                value={cliente.situation}
                                                onChange={(e) => handleCliente(e)}
                                                options={[
                                                    { value: "ATIVO", label: "Ativo" },
                                                    { value: "INATIVO", label: "Inativo" },
                                                ]}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <CampoForm
                                                label="Nome"
                                                type="text"
                                                name="name"
                                                value={cliente.name}
                                                onChange={(e) => handleCliente(e)}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <CampoForm
                                                label="E-mail"
                                                type="email"
                                                name="email"
                                                value={cliente.email}
                                                onChange={(e) => handleCliente(e)}
                                            />
                                        </div>

                                        {
                                            cliente.companyType === "PF" ? (
                                                <>
                                                    <div className="col-md-3">
                                                        <CampoForm
                                                            label="CPF"
                                                            type="text"
                                                            name="cpf"
                                                            value={cliente.cpf}
                                                            onChange={(e) => handleCliente(e)}
                                                        />
                                                    </div>
                                                </>
                                            ) : (
                                                cliente.companyType === "PJ" && (
                                                    <>
                                                        <div className="col-md-3">
                                                            <CampoForm
                                                                label="CNPJ"
                                                                type="text"
                                                                name="cnpj"
                                                                value={cliente.cnpj}
                                                                onChange={(e) => handleCliente(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <CampoForm
                                                                label="Razão Social"
                                                                type="text"
                                                                name="razaoSocial"
                                                                value={cliente.razaoSocial}
                                                                onChange={(e) => handleCliente(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <CampoForm
                                                                label="Nome Fantasia"
                                                                type="text"
                                                                name="fantasyName"
                                                                value={cliente.fantasyName}
                                                                onChange={(e) => handleCliente(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <CampoForm
                                                                label="Inscrição Estadual"
                                                                type="text"
                                                                name="inscricaoEstadual"
                                                                value={cliente.inscricaoEstadual}
                                                                onChange={(e) => handleCliente(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <CampoForm
                                                                label="Nome do Contato"
                                                                type="text"
                                                                name="contactName"
                                                                value={cliente.contactName}
                                                                onChange={(e) => handleCliente(e)}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            )    
                                        }

                                        <div className="col-md-3">
                                            <CampoForm
                                                label="Telefone"
                                                type="text"
                                                name="phone"
                                                value={cliente.phone}
                                                onChange={(e) => handleCliente(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <CampoForm
                                                label="Outras Informações"
                                                type="textarea"
                                                name="otherInformations"
                                                value={cliente.otherInformations}
                                                onChange={(e) => handleCliente(e)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        },
                        {
                            label: "Endereços",
                            content: (
                                <>
                                    <EnderecosForm 
                                        listEnderecos={endereco}
                                        setListEnderecos={setEndereco}
                                    />
                                </>
                            )
                        },
                    ]}
                />
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="float-right">
                            <button className="btn btn-success">
                                <i className="fa fa-save mr-15px"></i>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default CadastroClientes;