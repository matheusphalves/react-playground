import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionsTable(){


    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Programador</td>
                        <td>R$ 5.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>26/06/2022</td>
                    </tr>

                    <tr>
                        <td>Programador</td>
                        <td className = "deposit">- R$ 5.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>26/06/2022</td>
                    </tr>


                    <tr>
                        <td>Programador</td>
                        <td className = "withdraw">R$ 5.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>26/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}