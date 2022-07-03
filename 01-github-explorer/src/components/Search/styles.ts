import styled from 'styled-components';


export const Container = styled.header`
    background: var(--red);
    padding: 2rem 1rem;
    max-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentForm = styled.div`
    width: 100rem;
    height: 100rem;

    display: grid;
    grid-template-columns: 1fr 0.1fr;
    gap: 0.5rem;
    align-items: center;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-dark);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 4rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }
`