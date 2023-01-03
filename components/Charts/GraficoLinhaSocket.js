import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import io from 'socket.io-client';


const GraficoLinhaSocket = ({ vendasMes }) => {

    const [vendas, setVendas] = useState(vendasMes);
    const socket = io('http://localhost:8888', { transports : ['websocket'] });

    // const data = [
    //     ["Ano", "Vendas", "Lucro"],
    // ];

    // vendasMes.forEach(venda => {
    //     data.push([venda.mes, venda.valor, (venda.valor * 0.2)]);
    // });

    useEffect(() => {
        socket.on('grafico_linha', dados => {
            let data = [
                ["Ano", "Vendas", "Lucro"],
            ];
        
            dados.forEach(v => {
                data.push([v.mes, v.valor, (v.valor * 0.2)]);
            });

            setVendas(data);
          });
    }, []);
      
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
                data={vendas}
                options={options}
                />
        </>
    );
}

export default GraficoLinhaSocket;