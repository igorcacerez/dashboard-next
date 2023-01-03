import Swal from "sweetalert2";

const TabelaEnderecos = ({ enderecos, setEditEndereco, setDeleteEndereco }) => {

    const handleDeleteAddress = (index) => {

        Swal.fire({
            title: 'Deseja excluir este endereço?',
            text: "Você não poderá reverter esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, excluir'
          }).then((result) => {
            if (result.isConfirmed) {
                const newEnderecos = enderecos.filter((endereco, i) => i !== index);
                setDeleteEndereco(newEnderecos);
            }
          })
    }

    return (
        <div className="tabela-enderecos">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">CEP</th>
                        <th scope="col">Logradouro</th>
                        <th scope="col">Número</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Complemento</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enderecos?.map((endereco, index) => {
                            return (
                                <tr key={index}>
                                    <td>{endereco.zipCode}</td>
                                    <td>{endereco.street}</td>
                                    <td>{endereco.number}</td>
                                    <td>{endereco.neighborhood}</td>
                                    <td>{endereco.city}</td>
                                    <td>{endereco.state}</td>
                                    <td>{endereco.complement}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => setEditEndereco({ ...endereco, index})}
                                        >
                                            Editar
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteAddress(index)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TabelaEnderecos;