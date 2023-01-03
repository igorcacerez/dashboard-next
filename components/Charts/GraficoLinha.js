import Chart from "react-google-charts";


const GraficoLinha = ({ vendasMes }) => {

    const data = [
        ["Ano", "Vendas", "Lucro"],
    ];
      

    vendasMes.forEach(venda => {
        data.push([venda.mes, venda.valor, (venda.valor * 0.2)]);
    });
      
    const options = {
        chart: {
          title: "Vendas por mês",
          subtitle: "Vendas mensais",
        },
    };


    return (
        <>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
                />
        </>
    );
}

export default GraficoLinha;