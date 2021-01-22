import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid;
`

export const Bank = styled.div`
    font-size: 40px; 
    margin-bottom: 20px;
`

export const NameClient = styled.div`
    font-size: 20px; 
    margin-bottom: 15px;
`

export const Saldo = styled.div`
    font-size: 15px; 
    border: 1px solid #273c75; 
    border-radius: 10px;
    padding: 10px;
`
export const Links = styled.div`
    margin: 5px;
    padding: 5px;
    width: 200px;
    border: 0.5px solid black;
    border-radius: 10px;
    font-size: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #273c75;

    span {
        color: #f5f6fa;
        font-weight: bold;
    }

`