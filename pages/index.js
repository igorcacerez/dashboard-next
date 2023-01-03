import React from 'react';
import { Chart } from "react-google-charts";
import GraficoLinha from '../components/Charts/GraficoLinha';
import GraficoLinhaSocket from '../components/Charts/GraficoLinhaSocket';
import GraficoPizza from '../components/Charts/GraficoPizza';
import submitApi from '../config/submitApi';

const Home = ({ vendasMes, vendasCategoria }) => {

    let data = [
        ["Ano", "Vendas", "Lucro"],
    ];

    vendasMes.forEach(venda => {
        data.push([venda.mes, venda.valor, (venda.valor * 0.2)]);
    });

    return (
        <>
            <div className="row">
                    <div className="col-md-8">
                        <GraficoLinhaSocket vendasMes={data} />
                    </div>

                    <div className="col-md-4">
                        <GraficoPizza vendasCategoria={vendasCategoria} />
                    </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {

    const vendasMes = await submitApi('vendas/vendas-por-mes', 'GET');
    const vendasCategoria = await submitApi('vendas/vendas-por-categoria', 'GET');

    return {
        props: {
            vendasMes,
            vendasCategoria
        }
    }
}


export default Home