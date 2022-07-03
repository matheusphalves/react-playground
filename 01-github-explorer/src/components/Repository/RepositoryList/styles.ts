import styled from 'styled-components';

export const Section = styled.section`
    margin: 40px;

    h1 {
        margin-bottom: 16px;

    }

    ul {
        list-style: none;
        li {
            margin-bottom: 20px;

            &:last-child{
                margin: 0;
            }
        }
    }
`