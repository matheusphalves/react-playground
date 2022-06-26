import React from "react";
import LogoImg from '../../assets/logo.svg';
import { Container, Content } from "./styles";

export function Header(){
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="Tetheu money" />
                <button type= "button">Nova transação</button>
            </Content>
        </Container>
    )
}