import styled from 'styled-components';


export const Container = styled.li`
    border: 200px solid black;
    border-radius: 1rem;

    background: #FFF;
    display: flex;
    align-items: center;

    margin-bottom: 20px;

    &:last-child{
        margin: 0;
    }

    p{
            font-size: 14px;
            color: #444;
            margin-top: 8px;
    }

    a{
            display: inline-block;
            margin-top: 16px;
            text-decoration: none;
            color: #8257e6;
    }
`