import Chart from "react-google-charts";

const GraficoPizza = ({ vendasCategoria }) => {

    const data = [
        ["Categoria", "Vendas"],
    ];

    vendasCategoria.forEach(venda => {
        data.push([venda.categoria, venda.valor]);
    });
      
    const options = {
        title: "Vendas por categoria",
        pieHole: 0.4,
        is3D: false,
    };


    return (
        <>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    );
}

export default GraficoPizza;